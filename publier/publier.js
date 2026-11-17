// Agent de publication Instagram : publie le carrousel prévu aujourd'hui dans calendrier.json.
//
//   node publier/publier.js preparer            convertit en JPEG les carrousels du calendrier (à committer et pousser ensuite)
//   node publier/publier.js                      simulation : affiche ce qui serait publié aujourd'hui, sans rien envoyer
//   node publier/publier.js --date 2026-11-19    simulation pour une autre date
//   node publier/publier.js --publier            publie pour de vrai (carrousels « valide: true » uniquement)
//
// Configuration (voir publier/README.md) :
//   IG_USER_ID        identifiant du compte Instagram professionnel (non secret)
//   IG_ACCESS_TOKEN   jeton d'accès, seulement s'il n'est pas injecté par le proxy de la session
//   IG_API_VERSION    version de l'API, par défaut v24.0
//
// Méthode (API Instagram avec connexion Instagram, hôte graph.instagram.com) :
//   1. un conteneur par image (is_carousel_item=true), 2. un conteneur parent media_type=CAROUSEL avec children
//   (identifiants séparés par des virgules) et la légende, 3. media_publish avec creation_id.
//   Les images doivent être accessibles publiquement : elles sont servies depuis le dépôt GitHub (public).

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const ROOT = path.join(__dirname, '..');
const CAL = path.join(__dirname, 'calendrier.json');
const JOURNAL = path.join(__dirname, 'journal.json');
const REPO = 'fauchereauq-beep/Instagram';

const args = process.argv.slice(2);
const cmd = args[0] && !args[0].startsWith('--') ? args[0] : 'publier';
const vraiment = args.includes('--publier');
const dateArg = args.includes('--date') ? args[args.indexOf('--date') + 1] : null;

const cal = JSON.parse(fs.readFileSync(CAL, 'utf8'));
const today = dateArg || new Intl.DateTimeFormat('en-CA', { timeZone: cal.fuseau, year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date());

const planches = (slug) => fs.readdirSync(path.join(ROOT, 'carrousels', slug)).filter((f) => /^planche-\d+\.png$/.test(f)).sort();
const jpgDir = (slug) => path.join(__dirname, 'jpg', slug);
const urlImage = (slug, f) => `https://raw.githubusercontent.com/${REPO}/${cal.branche_images}/publier/jpg/${slug}/${f.replace('.png', '.jpg')}`;

function legende(slug) {
  const file = path.join(ROOT, 'carrousels', slug, 'legende.md');
  if (!fs.existsSync(file)) throw new Error(`Légende manquante : ${file}`);
  const txt = fs.readFileSync(file, 'utf8').split('\n').filter((l) => !l.startsWith('# ')).join('\n').trim();
  if (txt.length > 2200) throw new Error(`Légende trop longue (${txt.length} caractères, maximum 2 200) : ${slug}`);
  return txt;
}

function preparer() {
  for (const p of cal.publications) {
    const dir = jpgDir(p.carrousel);
    fs.mkdirSync(dir, { recursive: true });
    for (const f of planches(p.carrousel)) {
      execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-i', path.join(ROOT, 'carrousels', p.carrousel, f), '-q:v', '2', path.join(dir, f.replace('.png', '.jpg'))]);
    }
    console.log(`JPEG prêts : ${path.relative(ROOT, dir)} (${planches(p.carrousel).length} planches)`);
  }
  console.log('Étape suivante : committer et pousser publier/jpg pour que les images soient en ligne.');
}

// Appel à l'API via curl (curl passe par le proxy de la session, qui peut injecter le jeton).
function api(method, endpoint, params = {}) {
  const base = `https://graph.instagram.com/${process.env.IG_API_VERSION || 'v24.0'}`;
  const q = new URLSearchParams(params);
  if (process.env.IG_ACCESS_TOKEN) q.set('access_token', process.env.IG_ACCESS_TOKEN);
  const url = `${base}/${endpoint}${method === 'GET' ? `?${q}` : ''}`;
  const curlArgs = ['-sS', '-X', method, url];
  if (method === 'POST') curlArgs.push('--data', q.toString());
  const out = execFileSync('curl', curlArgs, { encoding: 'utf8' });
  let json;
  try { json = JSON.parse(out); } catch { throw new Error(`Réponse illisible de l'API : ${out.slice(0, 300)}`); }
  if (json.error) throw new Error(`Erreur API (${endpoint}) : ${json.error.message} [code ${json.error.code}]`);
  return json;
}

function attendrePret(id) {
  for (let i = 0; i < 20; i++) {
    const { status_code: s } = api('GET', id, { fields: 'status_code' });
    if (s === 'FINISHED') return;
    if (s === 'ERROR' || s === 'EXPIRED') throw new Error(`Conteneur ${id} en état ${s}`);
    execFileSync('sleep', ['5']);
  }
  throw new Error(`Conteneur ${id} toujours pas prêt après 100 s`);
}

function publier() {
  const prevues = cal.publications.filter((p) => p.date === today);
  if (!prevues.length) return console.log(`Rien de prévu le ${today}.`);
  const user = process.env.IG_USER_ID;
  for (const p of prevues) {
    const imgs = planches(p.carrousel);
    console.log(`\n${today} ${p.heure} · ${p.carrousel} · ${imgs.length} planches · ${p.valide ? 'validé' : 'NON VALIDÉ'} · ${p.statut}`);
    if (p.statut === 'publié') { console.log('Déjà publié, on passe.'); continue; }
    if (imgs.length < 2 || imgs.length > 10) throw new Error(`Un carrousel compte de 2 à 10 images (ici ${imgs.length}).`);
    imgs.forEach((f) => { if (!fs.existsSync(path.join(jpgDir(p.carrousel), f.replace('.png', '.jpg')))) throw new Error(`JPEG manquant, lancer « preparer » : ${f}`); });
    const cap = legende(p.carrousel);
    console.log(`Légende : ${cap.length} caractères. Première image : ${urlImage(p.carrousel, imgs[0])}`);
    if (!vraiment || !p.valide) { console.log(vraiment ? 'Non validé dans calendrier.json : rien n’est publié.' : 'Simulation : rien n’est envoyé (ajouter --publier).'); continue; }
    if (!user) throw new Error('IG_USER_ID manquant (voir publier/README.md).');
    const enfants = imgs.map((f) => api('POST', `${user}/media`, { image_url: urlImage(p.carrousel, f), is_carousel_item: 'true' }).id);
    enfants.forEach(attendrePret);
    const parent = api('POST', `${user}/media`, { media_type: 'CAROUSEL', children: enfants.join(','), caption: cap }).id;
    attendrePret(parent);
    const media = api('POST', `${user}/media_publish`, { creation_id: parent }).id;
    p.statut = 'publié';
    fs.writeFileSync(CAL, JSON.stringify(cal, null, 2) + '\n');
    const journal = fs.existsSync(JOURNAL) ? JSON.parse(fs.readFileSync(JOURNAL, 'utf8')) : [];
    journal.push({ date: new Date().toISOString(), carrousel: p.carrousel, media_id: media });
    fs.writeFileSync(JOURNAL, JSON.stringify(journal, null, 2) + '\n');
    console.log(`Publié : ${p.carrousel} (média ${media}).`);
  }
}

try {
  cmd === 'preparer' ? preparer() : publier();
} catch (e) {
  console.error(`ÉCHEC : ${e.message}`);
  process.exit(1);
}
