// Visuel unique n°4 — FORMAT FRISE : la Balade Déclic minute par minute (remplace le visuel 1, ancien déroulé).
// Textes repris du site (section « On marche, on rit, on joue. »).
const { K, typo, pill, signature, bouton, page } = require('../src/site.js');

const TEMPS = [
  { label: 'Temps 1 · Le soin · 40 min', etapes: [
    ['0′', 'Pourquoi tu es là', 'Tu parles, j’écoute, je ressens.'],
    ['10′', 'Ton système nerveux en 2 min', 'Surchauffe, veille, ou prêt à décoller ?'],
    ['15′', 'Le blocage du jour', 'Où ça coince dans ton corps.'],
    ['25′', 'Soin et nature', 'Magnétisme et exercices dehors.'],
  ] },
  { label: 'Temps 2 · On relance · 20 min', etapes: [
    ['40′', 'Le jeu du miroir', 'Je joue tes doutes, tu me réponds.'],
    ['52′', 'Ta carte défi', 'Un pas à faire, une fuite à fermer.'],
    ['60′', 'L’arrivée', 'Une semaine après, on fait le point.'],
  ] },
];

function frise(top, { pas = 80, label = 58 } = {}) {
  let y = top, html = '', premier = null, dernier = null;
  for (const t of TEMPS) {
    html += `<div class="abs" style="left:96px;top:${y}px;z-index:3;background:${K.nuit};color:${K.creme};font-family:Poppins;font-weight:700;font-size:24px;border-radius:999px;padding:8px 20px">${typo(t.label)}</div>`;
    y += label;
    for (const [m, titre, texte] of t.etapes) {
      const fin = m === '60′';
      const cy = y + 26;
      if (premier === null) premier = cy;
      dernier = cy;
      html += `<div class="abs" style="left:96px;top:${y}px;width:104px;height:52px;border-radius:999px;background:${fin ? K.flamme : K.soleil};color:${fin ? '#fff' : K.nuit};z-index:2;display:flex;align-items:center;justify-content:center;font-family:Poppins;font-weight:700;font-size:28px">${m}</div>
        <div class="abs" style="left:228px;top:${y - 2}px;width:780px"><div class="t" style="font-size:33px;line-height:1.1">${typo(titre)}</div>
        <div style="font-family:Inter;font-size:25px;line-height:1.3;color:${K.grisNuit};margin-top:2px">${typo(texte)}</div></div>`;
      y += pas;
    }
    y += 10;
  }
  const ligne = `<div class="abs" style="left:146px;top:${premier}px;height:${dernier - premier}px;border-left:4px dotted ${K.soleil};z-index:1"></div>`;
  return { html: ligne + html, bas: y };
}

function post() {
  const f = frise(366);
  return page(1350, `${pill('Balade Déclic · 1 h de marche à plat')}
    <div class="abs t" style="left:64px;top:146px;width:960px;font-size:78px;line-height:1.04;letter-spacing:-.025em">Une heure pour faire ton <span class="surligne">premier&nbsp;pas.</span></div>
    <div class="abs carte" style="left:48px;right:48px;top:340px;height:${f.bas - 340 + 4}px"></div>
    <div class="abs" style="left:0;top:0;width:1080px;height:1350px">${f.html}</div>
    <div class="abs" style="left:64px;top:${f.bas + 28}px;width:952px;font-family:Inter;font-size:25px;line-height:1.35;color:${K.grisNuit}"><b class="t" style="color:${K.nuit};letter-spacing:0">Garantie premier pas :</b> si tu repars sans élan ni prochain pas clair, la séance suivante est offerte.</div>
    <div class="abs" style="left:64px;top:${f.bas + 104}px;display:flex;align-items:center;gap:20px">${bouton('Réserve ta balade →')}<span style="font-family:Inter;font-weight:600;font-size:24px;color:${K.grisNuit}">lien en bio · Genève ou Salève</span></div>
    ${signature(1290)}`);
}

module.exports = { slug: '04-balade-minute', formats: { post: { w: 1080, h: 1350, html: post() } } };
