// Visuel unique n°3 — « Ton système nerveux a trois vitesses » (post + story).
// Style du site quentinfauchereau.com : crème, Poppins / Inter, surlignage soleil, cartes arrondies, ombre douce.
// Textes repris du site (section « Comprendre en 30 secondes »). Présenté comme une image, pas un diagnostic.
const path = require('path');
const K = {
  creme: '#FFF6EA', sable: '#F6E3C8', nuit: '#1E1B3A', grisNuit: '#5B5675',
  flamme: '#FF5A1F', flammeTexte: '#C2410C', soleil: '#FFC233', jungle: '#1F7A5C',
};
const PHOTO = 'file://' + path.join(__dirname, '..', 'photos', 'quentin-portrait.jpg');
const FONTS = 'file://' + path.join(__dirname, '..', 'fonts');
const typo = (t) => t.replace(/'/g, '’');

const CSS = `
@font-face{font-family:Poppins;font-weight:700;src:url('${FONTS}/poppins-700.woff2')}
@font-face{font-family:Inter;font-weight:400;src:url('${FONTS}/inter-400.woff2')}
@font-face{font-family:Inter;font-weight:600;src:url('${FONTS}/inter-600.woff2')}
*{box-sizing:border-box;margin:0;padding:0}
.page{position:relative;width:1080px;overflow:hidden;background:${K.creme};color:${K.nuit};font-family:Inter}
.abs{position:absolute}
.pill{display:inline-block;background:${K.soleil};color:${K.nuit};font-family:Poppins;font-weight:700;border-radius:999px}
.surligne{background:linear-gradient(transparent 58%, ${K.soleil} 58%, ${K.soleil} 92%, transparent 92%);padding:0 .08em}
.carte{background:#fff;border-radius:44px;box-shadow:0 34px 60px -34px rgba(30,27,58,.35);display:flex;align-items:center;gap:34px}
`;

// Étoile « flamme » du logo.
const etoile = (x, y, r, col = K.flamme) => `<path transform="translate(${x} ${y}) scale(${r / 12})" d="M 0 -12 L 3.2 -3.2 L 12 0 L 3.2 3.2 L 0 12 L -3.2 3.2 L -12 0 L -3.2 -3.2 Z" fill="${col}"/>`;

// Compteur de vitesse : l'aiguille dit l'état (angle en degrés, 180 = tout à gauche, 0 = tout à droite).
function compteur(angle, fond, etincelle = false) {
  const a = angle * Math.PI / 180, nx = (34 * Math.cos(a)).toFixed(1), ny = (-34 * Math.sin(a)).toFixed(1);
  const ticks = [180, 135, 90, 45, 0].map((d) => { const r = d * Math.PI / 180; return `<path d="M ${(44 * Math.cos(r)).toFixed(1)} ${(-44 * Math.sin(r)).toFixed(1)} L ${(52 * Math.cos(r)).toFixed(1)} ${(-52 * Math.sin(r)).toFixed(1)}" stroke="${K.nuit}" stroke-width="5" stroke-linecap="round"/>`; }).join('');
  return `<svg width="128" height="128" viewBox="-64 -64 128 128" style="flex:none"><circle r="64" fill="${fond}"/>
    <g transform="translate(0 14)"><path d="M -52 0 A 52 52 0 0 1 52 0" fill="none" stroke="${K.nuit}" stroke-width="6" stroke-linecap="round"/>${ticks}
    <path d="M 0 0 L ${nx} ${ny}" stroke="${K.flamme}" stroke-width="8" stroke-linecap="round"/><circle r="9" fill="${K.nuit}"/></g>
    ${etincelle ? etoile(40, -38, 15) : ''}</svg>`;
}

const ETATS = [
  { nom: 'En surchauffe', pied: 'Le pied sur l\'accélérateur.', texte: 'La tête déborde. Dix idées, aucune ne démarre.', angle: 18, fond: K.soleil },
  { nom: 'En veille', pied: 'Le pied sur le frein.', texte: 'Plus d\'élan, le corps vide, le brouillard.', angle: 162, fond: K.soleil },
  { nom: 'Prêt à décoller', pied: 'Le moteur tourne rond.', texte: 'Calme et énergie en même temps.', angle: 90, fond: '#fff', fin: true },
];

function cartes(top, h, gap, s = 1) {
  return ETATS.map((e, i) => `<div class="abs carte" style="left:56px;right:56px;top:${top + i * (h + gap)}px;height:${h}px;padding:0 40px 0 30px;${e.fin ? `background:${K.soleil};` : ''}">
    ${compteur(e.angle, e.fond, e.fin)}
    <div><div style="font-family:Poppins;font-weight:700;font-size:${46 * s}px;line-height:1.05;letter-spacing:-.02em">${e.nom}</div>
    <div style="font-family:Poppins;font-weight:700;font-size:${31 * s}px;line-height:1.2;color:${e.fin ? K.nuit : K.flammeTexte};margin-top:6px">${typo(e.pied)}</div>
    <div style="font-family:Inter;font-weight:400;font-size:${29 * s}px;line-height:1.3;color:${e.fin ? K.nuit : K.grisNuit};margin-top:6px">${typo(e.texte)}</div></div></div>`).join('');
}

const titre = (y, s) => `<div class="abs" style="left:64px;top:${y}px;width:960px;font-family:Poppins;font-weight:700;font-size:${s}px;line-height:1.04;letter-spacing:-.025em">Ton système nerveux a <span class="surligne">trois&nbsp;vitesses.</span></div>`;
const sous = (y) => `<div class="abs" style="left:64px;top:${y}px;width:920px;font-family:Inter;font-weight:400;font-size:33px;line-height:1.4;color:${K.grisNuit}">${typo('C\'est le pilote automatique de ton corps. Il choisit pour toi : foncer, freiner, ou avancer tranquille.')}</div>`;
const photo = (x, y, d) => `<svg class="abs" style="left:${x - 30}px;top:${y - 30}px" width="${d + 70}" height="${d + 60}"><circle cx="${d / 2 + 52}" cy="${d / 2 + 22}" r="${d / 2 + 6}" fill="${K.soleil}"/>${etoile(d + 46, 26, 22)}</svg>
  <div class="abs" style="left:${x}px;top:${y}px;width:${d}px;height:${d}px;border-radius:50%;background:url('${PHOTO}') 50% 16% / 235% no-repeat;box-shadow:0 24px 40px -24px rgba(30,27,58,.45)"></div>`;
const signature = (y) => `<div class="abs" style="left:64px;right:64px;top:${y}px;display:flex;align-items:center;justify-content:space-between;font-family:Inter;font-weight:600;font-size:24px;color:${K.grisNuit}">
  <span style="display:flex;align-items:center;gap:12px"><svg width="44" height="44" viewBox="0 0 64 64"><circle cx="29" cy="35" r="26" fill="${K.soleil}"/><circle cx="29" cy="35" r="12" fill="none" stroke="${K.nuit}" stroke-width="6"/><path d="M35 41 L44 50" stroke="${K.nuit}" stroke-width="6" stroke-linecap="round"/>${etoile(51, 13.5, 11.5)}</svg>@quentinfauchereau</span>
  <span style="font-family:Poppins;font-weight:700;color:${K.nuit}">Crée ce qui t’anime&nbsp;!</span></div>`;

function post() {
  const H = 1350;
  return `<style>${CSS}</style><div class="page" style="height:${H}px">
    <div class="abs pill" style="left:64px;top:60px;font-size:30px;padding:12px 28px">Comprendre en 30 secondes</div>
    ${titre(146, 86)}${sous(340)}
    ${cartes(476, 168, 22)}
    ${photo(76, 1098, 150)}
    <div class="abs" style="left:300px;top:1092px;font-family:Poppins;font-weight:700;font-size:40px;letter-spacing:-.02em">Et toi, tu roules à quelle vitesse&nbsp;?</div>
    <div class="abs" style="left:300px;top:1158px;display:flex;align-items:center;gap:18px">
      <span style="background:${K.nuit};color:${K.creme};font-family:Poppins;font-weight:700;font-size:30px;border-radius:999px;padding:14px 30px">Fais le test : 2 minutes →</span>
      <span style="font-family:Inter;font-weight:600;font-size:24px;color:${K.grisNuit}">lien en bio</span></div>
    <div class="abs" style="left:300px;top:1236px;font-family:Inter;font-weight:400;font-size:21px;color:${K.grisNuit}">Une image pour comprendre, pas un diagnostic.</div>
    ${signature(1290)}</div>`;
}

// Story : zones hautes (≈ 220 px) et basses (≈ 260 px) libres ; place pour le sticker « lien ».
function story() {
  const H = 1920;
  return `<style>${CSS}</style><div class="page" style="height:${H}px">
    <div class="abs pill" style="left:64px;top:236px;font-size:30px;padding:12px 28px">Comprendre en 30 secondes</div>
    ${titre(322, 90)}${sous(530)}
    ${cartes(686, 180, 26)}
    ${photo(76, 1356, 150)}
    <div class="abs" style="left:300px;top:1352px;width:720px;font-family:Poppins;font-weight:700;font-size:44px;line-height:1.1;letter-spacing:-.02em">Et toi, tu roules à quelle vitesse&nbsp;?</div>
    <div class="abs" style="left:300px;top:1428px;font-family:Inter;font-weight:600;font-size:28px;color:${K.grisNuit}">Fais le test en 2 minutes ↓</div>
    <div class="abs" style="left:64px;top:1612px;font-family:Inter;font-weight:400;font-size:21px;color:${K.grisNuit}">Une image pour comprendre, pas un diagnostic.</div></div>`;
}

module.exports = { slug: '03-trois-vitesses', formats: { post: { w: 1080, h: 1350, html: post() }, story: { w: 1080, h: 1920, html: story() } } };
