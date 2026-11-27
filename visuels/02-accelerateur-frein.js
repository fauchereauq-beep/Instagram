// Visuel unique n°2 — Le corps, mode d'emploi : l'accélérateur et le frein (post + story).
// Style « schéma + vraie photo ». Faits : système nerveux autonome, sympathique / parasympathique
// (Manuels MSD, cours universitaires ; voir carrousels/SOURCES.md).
const path = require('path');
const { C, G, logo } = require('../src/v3.js');
const I = G.I;
const typo = (t) => t.replace(/'/g, '’');
const PHOTO = 'file://' + path.join(__dirname, '..', 'photos', 'moi.jpg');

// Pédales dessinées : accélérateur (haute et fine), frein (large).
const pedale = (type, s = 1) => {
  const acc = type === 'acc', col = acc ? C.flamme : C.jungle;
  const plaque = acc
    ? `<rect x="-34" y="-70" width="68" height="140" rx="16" fill="${col}" stroke="${I}" stroke-width="7"/>${[-44, -22, 0, 22, 44].map((y) => `<path d="M -20 ${y} h 40" stroke="${I}" stroke-width="5" stroke-linecap="round" opacity=".45"/>`).join('')}`
    : `<rect x="-60" y="-46" width="120" height="92" rx="18" fill="${col}" stroke="${I}" stroke-width="7"/>${[-38, -19, 0, 19, 38].map((x) => `<path d="M ${x} -28 v 56" stroke="${I}" stroke-width="5" stroke-linecap="round" opacity=".45"/>`).join('')}`;
  return `<svg width="${150 * s}" height="${170 * s}" viewBox="-75 -85 150 170" style="flex:none;overflow:visible"><path d="M 0 ${acc ? -70 : -46} L 0 -84" stroke="${I}" stroke-width="16" stroke-linecap="round"/><path d="M 0 ${acc ? -70 : -46} L 0 -84" stroke="#9C98AE" stroke-width="8" stroke-linecap="round"/>${plaque}</svg>`;
};

const PUCE = {
  up: `<path d="M 0 11 V -11 M -9 -2 L 0 -11 L 9 -2" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>`,
  down: `<path d="M 0 -11 V 11 M -9 2 L 0 11 L 9 2" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>`,
  zap: `<path d="M 3 -14 L -8 2 H 0 L -3 14 L 8 -2 H 0 Z" fill="#fff" stroke="#fff" stroke-width="2" stroke-linejoin="round"/>`,
  check: `<path d="M -9 0 L -3 7 L 10 -8" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>`,
};
const puce = (k, col, d) => `<svg width="${d}" height="${d}" viewBox="-20 -20 40 40" style="flex:none;transform:translateY(4px)"><circle r="17" fill="${col}" stroke="${I}" stroke-width="3"/>${PUCE[k]}</svg>`;

function colonne({ type, x, y, w, h, nom, sys, mode, points, big = 1 }) {
  const acc = type === 'acc', col = acc ? C.flamme : C.jungle;
  const li = points.map(([k, t]) => `<div style="display:flex;gap:14px;align-items:flex-start;font-family:Poppins;font-weight:700;font-size:${31 * big}px;line-height:1.15;color:${I}">${puce(k, col, 38 * big)}<span>${typo(t)}</span></div>`).join('');
  return `<div class="abs" style="left:${x}px;top:${y}px;width:${w}px;height:${h}px;z-index:3;background:#fff;border:7px solid ${I};border-radius:28px;box-shadow:9px 9px 0 ${I};padding:${22 * big}px ${24 * big}px;display:flex;flex-direction:column;gap:${16 * big}px">
    <div style="display:flex;align-items:center;gap:10px">${pedale(type, 0.7 * big)}
      <div><div style="font-family:Poppins;font-weight:700;font-size:${(acc ? 34 : 46) * big}px;line-height:1;letter-spacing:-1px;color:${col}">${nom}</div>
      <div style="font-family:Inter;font-weight:600;font-size:${22 * big}px;color:#3A3550;margin-top:6px">${sys}</div></div></div>
    <div style="align-self:flex-start;background:${col};color:#fff;border:5px solid ${I};border-radius:999px;padding:6px 18px;font-family:Poppins;font-weight:700;font-size:${26 * big}px">${typo(mode)}</div>
    <div style="display:flex;flex-direction:column;gap:${12 * big}px">${li}</div></div>`;
}

const ACC = { type: 'acc', nom: 'ACCÉLÉRATEUR', sys: 'Système sympathique', mode: 'Mode urgence', points: [['up', 'Le cœur s’emballe'], ['up', 'La tension monte'], ['zap', 'Prêt à combattre ou à fuir']] };
const FRE = { type: 'fre', nom: 'FREIN', sys: 'Système parasympathique', mode: 'Mode repos', points: [['down', 'Le cœur ralentit'], ['down', 'La tension baisse'], ['check', 'Le corps récupère et digère']] };

const fond = `<div class="abs" style="inset:0;background:${C.creme}"></div><div class="abs" style="inset:0;background-image:radial-gradient(rgba(20,18,31,.1) 2.6px,transparent 3.2px);background-size:18px 18px"></div>`;
const etiquette = (y) => `<div class="abs" style="left:40px;top:${y}px;z-index:5;display:flex;align-items:center;gap:12px;background:${C.creme};border:6px solid ${I};border-radius:999px;padding:6px 26px 6px 10px;font-family:Poppins;font-weight:700;font-size:28px;box-shadow:5px 5px 0 ${I}">${logo(58)}<span>Le corps, mode d’emploi</span></div>`;
const titre = (y, s) => `<div class="abs" style="left:48px;top:${y}px;width:990px;z-index:4;font-family:Poppins;font-weight:700;font-size:${s}px;line-height:1;letter-spacing:-2px;color:${I}">Ton corps a un accélérateur.<br><span style="color:${C.jungle}">Et un frein.</span></div>`;
const photo = (x, y, d) => `<div class="abs" style="left:${x}px;top:${y}px;width:${d}px;height:${d}px;z-index:5;border-radius:50%;border:8px solid ${I};box-shadow:8px 8px 0 ${I};background:url('${PHOTO}') 48% 30% / 150% no-repeat"></div>`;
const parole = (x, y, w, s, sig) => `<div class="abs" style="left:${x}px;top:${y}px;width:${w}px;z-index:4;background:${C.soleil};border:7px solid ${I};border-radius:28px;box-shadow:9px 9px 0 ${I};padding:22px 28px 18px">
  <div style="font-family:Poppins;font-weight:700;font-size:${s}px;line-height:1.15;color:${I}">${typo('Quand ton projet te fait peur, ton corps écrase l\'accélérateur.')}</div>
  <div style="font-family:Inter;font-weight:600;font-size:${Math.round(s * 0.8)}px;line-height:1.25;color:#3A3550;margin-top:10px">${typo('Ce n\'est pas un défaut, c\'est une alarme. Le frein, ça se travaille.')}</div>
  <div style="font-family:Hand;font-size:${sig}px;color:${C.flammeTexte};margin-top:4px;text-align:right">— Quentin</div></div>`;
const source = (y) => `<div class="abs" style="left:48px;top:${y}px;z-index:4;font-family:Inter;font-weight:600;font-size:20px;white-space:nowrap;color:#5B5675">Source : Manuels MSD, « Présentation du système nerveux autonome ».</div>`;

function post() {
  const H = 1350;
  return `<div class="page" style="height:${H}px">${fond}${etiquette(40)}${titre(145, 66)}
    ${colonne({ ...ACC, x: 40, y: 330, w: 486, h: 470 })}${colonne({ ...FRE, x: 554, y: 330, w: 486, h: 470 })}
    ${photo(40, 868, 250)}${parole(320, 852, 720, 34, 40)}
    ${source(1190)}
    <div class="abs" style="left:0;right:0;top:1250px;bottom:0;background:${C.nuit}"></div>
    <div class="foot" style="bottom:34px"><span>@quentinfauchereau</span><span class="swipe" style="font-size:30px">Enregistre-le pour le jour J</span></div></div>`;
}

// Story : zones hautes (≈ 220 px) et basses (≈ 260 px) libres ; un emplacement pour le sticker sondage.
function story() {
  const H = 1920;
  return `<div class="page" style="height:${H}px">${fond}${etiquette(230)}${titre(330, 70)}
    ${colonne({ ...ACC, x: 40, y: 520, w: 486, h: 480 })}${colonne({ ...FRE, x: 554, y: 520, w: 486, h: 480 })}
    ${photo(40, 1066, 250)}${parole(320, 1050, 720, 34, 40)}
    <div class="abs" style="left:48px;right:48px;top:1392px;z-index:4;text-align:center;font-family:Poppins;font-weight:700;font-size:44px;line-height:1.1;color:${I}">Et toi, en ce moment ? ↓</div></div>`;
}

module.exports = { slug: '02-accelerateur-frein', formats: { post: { w: 1080, h: 1350, html: post() }, story: { w: 1080, h: 1920, html: story() } } };
