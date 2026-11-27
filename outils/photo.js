// Visuel « photo + phrase » dans la charte du site, à partir de N'IMPORTE QUELLE image
// (ChatGPT, photo de Quentin, Pexels…). Sort un post 1080 × 1350 et une story 1080 × 1920.
//
// Usage :
//   node outils/photo.js <image> "<phrase>" [options]
// Options :
//   --accent "mots"   partie de la phrase écrite en jaune (soleil)
//   --tag "texte"     petite étiquette jaune en haut (facultatif)
//   --slug nom        dossier de sortie dans visuels/ (par défaut : nom de l'image)
//   --haut            texte en haut de l'image (par défaut : en bas)
//   --cadrage "50% 30%"  point de l'image à garder au centre (par défaut : centre)
// Exemple :
//   node outils/photo.js photos/sentier.jpg "Dans un an, tu seras au même endroit, ou un an plus loin." --accent "un an plus loin." --slug 07-un-an
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');
const { execFileSync } = require('child_process');
const { K, CSS, typo, pill, signature } = require('../src/site.js');

function lireOptions(argv) {
  const [image, phrase, ...reste] = argv;
  const o = { image, phrase, accent: '', tag: '', slug: '', haut: false, cadrage: '50% 50%' };
  for (let i = 0; i < reste.length; i++) {
    const k = reste[i];
    if (k === '--haut') o.haut = true;
    else if (k.startsWith('--')) o[k.slice(2)] = reste[++i] || '';
  }
  if (!o.image || !o.phrase) { console.error('Usage : node outils/photo.js <image | lien Pexels> "<phrase>" [--accent "..."] [--tag "..."] [--slug nom] [--haut]'); process.exit(1); }
  return o;
}

// Lien Pexels (https://www.pexels.com/fr-fr/photo/...-123456/) → photo téléchargée dans photos/pexels-123456.jpg.
// Pas besoin de clé : seule l'adresse images.pexels.com est utilisée. Licence Pexels : usage commercial libre.
async function telechargerPexels(o) {
  const m = o.image.match(/pexels\.com\/.*?(\d{4,})\/?(?:\?.*)?$/);
  if (!m) return;
  const id = m[1], dest = path.join(__dirname, '..', 'photos', `pexels-${id}.jpg`);
  if (!fs.existsSync(dest)) {
    // curl respecte le proxy et les certificats de l'environnement (le fetch de Node, non).
    try {
      execFileSync('curl', ['-sfL', '-m', '60', '-o', dest, `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=2200`]);
    } catch (e) { console.error(`Pexels : photo ${id} introuvable ou réseau bloqué`); process.exit(1); }
    console.log(`photos/pexels-${id}.jpg (téléchargée depuis Pexels)`);
  }
  o.image = dest;
  o.slug = o.slug || `pexels-${id}`;
}

function html(o, H) {
  const url = 'file://' + path.resolve(o.image);
  // Les deux derniers mots restent ensemble (pas de mot seul sur la dernière ligne).
  const colle = (t) => t.replace(/ (\S+)$/, ' $1');
  const finAccent = o.accent && o.phrase.endsWith(o.accent);
  let texte = typo(colle(o.phrase));
  if (o.accent) { const a = typo(finAccent ? colle(o.accent) : o.accent); texte = texte.replace(a, `<span style="color:${K.soleil}">${a}</span>`); }
  const taille = o.phrase.length > 70 ? 70 : o.phrase.length > 45 ? 80 : 92;
  const story = H > 1350;
  const degrade = o.haut
    ? `linear-gradient(180deg, rgba(30,27,58,.88) 0%, rgba(30,27,58,.55) 38%, rgba(30,27,58,0) 62%, rgba(30,27,58,0) 80%, rgba(30,27,58,.7) 100%)`
    : `linear-gradient(0deg, rgba(30,27,58,.92) 0%, rgba(30,27,58,.6) 34%, rgba(30,27,58,0) 62%)`;
  const zoneTexte = o.haut
    ? `top:${story ? 320 : 150}px`
    : `bottom:${story ? 420 : 150}px`;
  return `<style>${CSS}</style><div class="page" style="height:${H}px;background:${K.nuit}">
    <div class="abs" style="inset:0;background:url('${url}') ${o.cadrage} / cover no-repeat"></div>
    <div class="abs" style="inset:0;background:${degrade}"></div>
    ${o.tag ? pill(o.tag, { y: story ? 236 : 60 }) : ''}
    <div class="abs t" style="left:64px;right:64px;${zoneTexte};font-size:${taille}px;line-height:1.08;letter-spacing:-.025em;color:${K.creme};text-shadow:0 4px 30px rgba(30,27,58,.35)">${texte}</div>
    ${story ? '' : signature(1290, { sombre: true })}</div>`;
}

(async () => {
  const o = lireOptions(process.argv.slice(2));
  await telechargerPexels(o);
  if (!fs.existsSync(o.image)) { console.error(`Image introuvable : ${o.image}`); process.exit(1); }
  o.slug = o.slug || path.basename(o.image).replace(/\.[^.]+$/, '');
  const out = path.join(__dirname, '..', 'visuels', o.slug);
  fs.mkdirSync(out, { recursive: true });
  const browser = await chromium.launch();
  for (const [nom, H] of [['post', 1350], ['story', 1920]]) {
    const page = await browser.newPage({ viewport: { width: 1080, height: H }, deviceScaleFactor: 1 });
    // Fichier temporaire : une page file:// peut lire l'image et les polices locales.
    const tmp = path.join(out, `.${nom}.html`);
    fs.writeFileSync(tmp, `<!doctype html><meta charset="utf-8"><body style="margin:0">${html(o, H)}</body>`);
    await page.goto('file://' + tmp);
    await page.evaluate(() => document.fonts.ready);
    await page.screenshot({ path: path.join(out, `${nom}.png`) });
    fs.unlinkSync(tmp);
    console.log(`visuels/${o.slug}/${nom}.png`);
  }
  await browser.close();
})();
