// Règles v3 : bulles lisibles (minuscules, gros texte, couleur par personnage, queue vers la tête),
// couverture « hook », dernière planche d'action (commenter / envoyer / enregistrer).
const E = require('./ep.js');
const { C, G } = E;
const I = '#14121F';
const typo = (t) => t.replace(/'/g, '’');

// Couleur de bulle par personnage : q = Quentin, b = Brutus, e = Einstein.
const BG = { q: '#FFFFFF', b: '#ECE5FF', e: '#E2F2FF' };

// Bulle ancrée par son bord bas (yb). `to` = point visé (tête de celui qui parle).
function bulle({ x, yb, w, text, to, who = 'q', size = 44, rot = 0 }) {
  const bg = BG[who] || '#fff';
  let tail = '';
  if (to) {
    const cx = x + w / 2, cy = yb - 36, [tx, ty] = to;
    const dx = tx - cx, dy = ty - cy, L = Math.hypot(dx, dy) || 1, nx = -dy / L, ny = dx / L, b = 24;
    tail = `<svg class="abs" style="left:0;top:0;z-index:3" width="1080" height="1350" viewBox="0 0 1080 1350" overflow="visible"><path d="M ${(cx + nx * b).toFixed(1)} ${(cy + ny * b).toFixed(1)} L ${tx} ${ty} L ${(cx - nx * b).toFixed(1)} ${(cy - ny * b).toFixed(1)} Z" fill="${bg}" stroke="${I}" stroke-width="7" stroke-linejoin="round"/></svg>`;
  }
  return tail + `<div class="abs bl" style="left:${x}px;bottom:${1350 - yb}px;width:${w}px;z-index:4;background:${bg};border:7px solid ${I};border-radius:42px;box-shadow:8px 8px 0 ${I};padding:18px 26px 16px;font-family:Comic;font-weight:700;font-size:${size}px;line-height:1.1;text-align:center;color:${I};transform:rotate(${rot}deg)">${typo(text)}</div>`;
}

// Points visés : le haut de la tête de chaque personnage, selon sa position.
const tq = ({ x = 0, y = 0, s = 0.82 } = {}, dx = 0, dy = 0) => [Math.round(x + 200 * s + dx), Math.round(y + 6 * s + dy)];
const tb = ({ x = 0, y = 0, s = 0.74 } = {}, dx = 0, dy = 0) => [Math.round(x + 180 * s + dx), Math.round(y + 30 * s + dy)];

// Narration (cartouche jaune) : à lire en premier, toujours en haut.
const narr = (t, { x = 44, y = 130, w = 760, size = 34, bg = C.soleil, color = I, rot = -1.2 } = {}) =>
  `<div class="abs" style="left:${x}px;top:${y}px;width:${w}px;z-index:4;background:${bg};color:${color};border:6px solid ${I};border-radius:14px;box-shadow:7px 7px 0 ${I};padding:12px 22px 10px;font-family:Poppins;font-weight:700;font-size:${size}px;line-height:1.15;transform:rotate(${rot}deg)">${typo(t)}</div>`;

// Grande phrase « hook » de couverture : blanche, contour noir épais, très lisible sur n'importe quel fond.
const hook = (t, { y = 120, size = 96, w = 1000, x = 40, align = 'left' } = {}) =>
  `<div class="abs" style="left:${x}px;top:${y}px;width:${w}px;z-index:4;font-family:Poppins;font-weight:700;font-size:${size}px;line-height:.98;letter-spacing:-2px;text-align:${align};color:#fff;-webkit-text-stroke:${Math.round(size / 9)}px ${I};paint-order:stroke fill;text-shadow:${Math.round(size / 14)}px ${Math.round(size / 14)}px 0 ${I}">${typo(t)}</div>`;

// Flèche dessinée à la main avec une étiquette (pointe un détail de l'image).
const fleche = (label, { x, y, tx, ty, size = 54, color = '#fff' }) => `
  <div class="abs" style="left:${x}px;top:${y}px;z-index:4;font-family:Poppins;font-weight:700;font-size:${size}px;color:${color};-webkit-text-stroke:${Math.round(size / 8)}px ${I};paint-order:stroke fill;transform:rotate(-6deg)">${typo(label)}</div>
  <svg class="abs" style="left:0;top:0;z-index:4" width="1080" height="1350" overflow="visible"><path d="M ${x + 40} ${y + size + 14} Q ${(x + tx) / 2 + 60} ${(y + ty) / 2 + 40} ${tx} ${ty}" fill="none" stroke="${I}" stroke-width="16" stroke-linecap="round"/><path d="M ${x + 40} ${y + size + 14} Q ${(x + tx) / 2 + 60} ${(y + ty) / 2 + 40} ${tx} ${ty}" fill="none" stroke="${color}" stroke-width="8" stroke-linecap="round"/><circle cx="${tx}" cy="${ty}" r="12" fill="${color}" stroke="${I}" stroke-width="5"/></svg>`;

// Icônes de la planche d'action.
const ICO = {
  com: `<path d="M -28 -22 h 56 a 12 12 0 0 1 12 12 v 26 a 12 12 0 0 1 -12 12 h -24 l -20 16 v -16 h -12 a 12 12 0 0 1 -12 -12 v -26 a 12 12 0 0 1 12 -12 Z" fill="#fff" stroke="${I}" stroke-width="5" stroke-linejoin="round"/>`,
  env: `<path d="M -30 4 L 34 -26 L 16 32 L 4 10 Z" fill="#fff" stroke="${I}" stroke-width="5" stroke-linejoin="round"/><path d="M 34 -26 L 4 10" stroke="${I}" stroke-width="4"/>`,
  enr: `<path d="M -20 -28 h 40 v 58 l -20 -15 l -20 15 Z" fill="#fff" stroke="${I}" stroke-width="5" stroke-linejoin="round"/>`,
};
function actions({ y = 470, mot, pourquoi, envoie, enregistre, pourquoiSize = 25 }) {
  const ico = (i, bg, s) => `<svg width="${s}" height="${s}" viewBox="-50 -50 100 100" style="flex:none"><circle r="45" fill="${bg}" stroke="${I}" stroke-width="6"/>${ICO[i]}</svg>`;
  const row = (i, bg, html) => `<div style="display:flex;align-items:center;gap:20px;padding:10px 18px">${ico(i, bg, 74)}<div style="font-family:Poppins;font-weight:700;font-size:31px;line-height:1.12;color:${I}">${typo(html)}</div></div>`;
  return `<div class="abs" style="left:40px;right:40px;top:${y}px;z-index:4;background:#fff;border:7px solid ${I};border-radius:30px;box-shadow:10px 10px 0 ${I};padding:16px;display:flex;flex-direction:column;gap:4px">
    <div style="display:flex;align-items:center;gap:22px;padding:18px 22px;background:${C.soleil};border:6px solid ${I};border-radius:22px">${ico('com', C.flamme, 96)}
      <div style="font-family:Poppins;font-weight:700;font-size:44px;line-height:1.05;color:${I}">Commente <span style="color:#fff;-webkit-text-stroke:7px ${I};paint-order:stroke fill">${mot}</span>
      <div style="font-family:Inter;font-weight:600;font-size:${pourquoiSize}px;line-height:1.2;color:#3A3550;margin-top:6px">${typo(pourquoi)}</div></div></div>
    ${row('env', '#7FD4FF', `Envoie-le à ${envoie}`)}
    ${row('enr', '#9BD1A8', `Enregistre-le ${enregistre}`)}
  </div>`;
}

// Fabrique d'épisode : n/total, CTA, contenu ; ajoute la couleur des mots en gras dans les bulles.
const ep3 = (series, total) => (n, cta, content, o = {}) => E.slide({ n, total, series, cta, content: `<style>.bl b{color:${C.flamme}}</style>` + content + G.band, ...o });

module.exports = { ...E, bulle, tq, tb, narr, hook, fleche, actions, ep3 };
