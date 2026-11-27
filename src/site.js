// Boîte à outils « style du site » (quentinfauchereau.com) pour les visuels uniques.
// Crème, Poppins / Inter, surlignage soleil, cartes arrondies, ombre douce, étoile flamme du logo.
const path = require('path');
const K = {
  creme: '#FFF6EA', sable: '#F6E3C8', nuit: '#1E1B3A', grisNuit: '#5B5675',
  flamme: '#FF5A1F', flammeTexte: '#C2410C', soleil: '#FFC233', jungle: '#1F7A5C',
};
const FONTS = 'file://' + path.join(__dirname, '..', 'fonts');
const photoUrl = (f) => 'file://' + path.join(__dirname, '..', 'photos', f);
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
.carte{background:#fff;border-radius:44px;box-shadow:0 34px 60px -34px rgba(30,27,58,.35)}
.t{font-family:Poppins;font-weight:700;letter-spacing:-.02em}
`;

const etoile = (x, y, r, col = K.flamme) => `<path transform="translate(${x} ${y}) scale(${r / 12})" d="M 0 -12 L 3.2 -3.2 L 12 0 L 3.2 3.2 L 0 12 L -3.2 3.2 L -12 0 L -3.2 -3.2 Z" fill="${col}"/>`;
const logo = (s = 44, ink = K.nuit) => `<svg width="${s}" height="${s}" viewBox="0 0 64 64" style="flex:none"><circle cx="29" cy="35" r="26" fill="${K.soleil}"/><circle cx="29" cy="35" r="12" fill="none" stroke="${K.nuit}" stroke-width="6"/><path d="M35 41 L44 50" stroke="${K.nuit}" stroke-width="6" stroke-linecap="round"/>${etoile(51, 13.5, 11.5)}</svg>`;
const pill = (t, { x = 64, y = 60, size = 30 } = {}) => `<div class="abs pill" style="left:${x}px;top:${y}px;font-size:${size}px;padding:12px 28px">${typo(t)}</div>`;

// Photo ronde sur un disque soleil décalé + étoile, comme sur l'accueil du site.
const photoRonde = (x, y, d, { fichier = 'quentin-portrait.jpg', pos = '50% 16%', zoom = '235%' } = {}) =>
  `<svg class="abs" style="left:${x - 30}px;top:${y - 30}px" width="${d + 74}" height="${d + 64}"><circle cx="${d / 2 + 52}" cy="${d / 2 + 22}" r="${d / 2 + 6}" fill="${K.soleil}"/>${etoile(d + 48, 26, d / 7)}</svg>
  <div class="abs" style="left:${x}px;top:${y}px;width:${d}px;height:${d}px;border-radius:50%;background:url('${photoUrl(fichier)}') ${pos} / ${zoom} no-repeat;box-shadow:0 24px 40px -24px rgba(30,27,58,.45)"></div>`;

const signature = (y, { sombre = false } = {}) => `<div class="abs" style="left:64px;right:64px;top:${y}px;display:flex;align-items:center;justify-content:space-between;font-family:Inter;font-weight:600;font-size:24px;color:${sombre ? 'rgba(255,246,234,.75)' : K.grisNuit}">
  <span style="display:flex;align-items:center;gap:12px">${logo(44)}@quentinfauchereau</span>
  <span class="t" style="letter-spacing:0;color:${sombre ? K.creme : K.nuit}">Crée ce qui t’anime&nbsp;!</span></div>`;

const bouton = (t, { sombre = false, size = 30 } = {}) => `<span style="display:inline-block;background:${sombre ? K.soleil : K.nuit};color:${sombre ? K.nuit : K.creme};font-family:Poppins;font-weight:700;font-size:${size}px;border-radius:999px;padding:14px 30px">${typo(t)}</span>`;

const page = (H, inner, { bg = K.creme } = {}) => `<style>${CSS}</style><div class="page" style="height:${H}px;background:${bg}">${inner}</div>`;

module.exports = { K, CSS, typo, etoile, logo, pill, photoRonde, signature, bouton, page };
