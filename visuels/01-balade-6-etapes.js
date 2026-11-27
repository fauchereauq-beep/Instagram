// Visuel unique n°1 — La balade déclic en 6 étapes (post 1080 × 1350 + story 1080 × 1920).
// Contenu : uniquement le déroulé réel de la balade (BRIEF.md du site). Pas de prix, pas de faux avis.
const { C, G, logo } = require('../src/v3.js');
const I = G.I, st = G.st;
const typo = (t) => t.replace(/'/g, '’');

const ETAPES = [
  ['On trouve ton vrai blocage', 'Le principal. Pas les douze autres.', 'loupe'],
  ['Ton corps a la parole', 'Où ça serre ? Où ça freine ?', 'coeur'],
  ['Impro sur le sentier', '« Je suis l’âme », « je suis le chimpanzé ».', 'masques'],
  ['Un temps de magnétisme', 'Ma pratique, en lien avec la nature.', 'feuille'],
  ['Le point sur ton système nerveux', 'Brutus en alerte, ou enfin au calme ?', 'onde'],
  ['Ton défi final', 'Pour passer à l’action sur ton projet.', 'sommet'],
];

// Icônes dessinées (repère -50..50).
const ICO = {
  loupe: `<path d="M 12 12 L 34 34" stroke="${I}" stroke-width="16" stroke-linecap="round"/><path d="M 12 12 L 34 34" stroke="${C.flamme}" stroke-width="7" stroke-linecap="round"/><circle cx="-8" cy="-8" r="26" fill="#BFE3FF" ${st(6)}/><path d="M -20 -16 q 6 -10 16 -10" fill="none" stroke="#fff" stroke-width="6" stroke-linecap="round"/>`,
  coeur: `<path d="M 0 -14 C -10 -36, -44 -30, -38 -4 C -34 14, -12 26, 0 38 C 12 26, 34 14, 38 -4 C 44 -30, 10 -36, 0 -14 Z" fill="#E5322D" ${st(6)}/><path d="M -30 2 h 14 l 7 -14 l 10 26 l 7 -12 h 22" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>`,
  masques: `<g transform="rotate(-12) translate(-12 0)"><ellipse rx="24" ry="30" fill="#fff" ${st(5)}/><circle cx="-9" cy="-8" r="4" fill="${I}"/><circle cx="9" cy="-8" r="4" fill="${I}"/><path d="M -11 8 Q 0 20 11 8" fill="none" ${st(4)}/></g>
    <g transform="rotate(14) translate(16 6)"><ellipse rx="24" ry="30" fill="#ECE5FF" ${st(5)}/><circle cx="-9" cy="-8" r="4" fill="${I}"/><circle cx="9" cy="-8" r="4" fill="${I}"/><path d="M -11 16 Q 0 4 11 16" fill="none" ${st(4)}/></g>`,
  feuille: `<path d="M -30 32 C -40 -10, -6 -38, 34 -36 C 36 4, 8 36, -30 32 Z" fill="${C.jungle}" ${st(6)}/><path d="M -30 32 C -10 10, 8 -8, 26 -26" fill="none" stroke="#8CC2A6" stroke-width="5" stroke-linecap="round"/>
    <g transform="translate(22 14) scale(1.3)"><path d="M 0 -12 L 3 -3 L 12 0 L 3 3 L 0 12 L -3 3 L -12 0 L -3 -3 Z" fill="${C.soleil}" ${st(3)}/></g>`,
  onde: `<path d="M -42 0 l 7 -24 l 8 44 l 8 -38 l 7 18" fill="none" stroke="${I}" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"/><path d="M -42 0 l 7 -24 l 8 44 l 8 -38 l 7 18" fill="none" stroke="#E5322D" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M -12 0 q 9 -12 18 0 t 18 0 t 16 0" fill="none" stroke="${I}" stroke-width="14" stroke-linecap="round"/><path d="M -12 0 q 9 -12 18 0 t 18 0 t 16 0" fill="none" stroke="#3DBE8B" stroke-width="7" stroke-linecap="round"/>`,
  sommet: `<path d="M -44 34 L -6 -22 L 10 0 L 20 -10 L 46 34 Z" fill="${C.jungleClair}" ${st(6)}/><path d="M -6 -22 L -18 -4 L -10 -8 L -4 0 L 2 -12 Z" fill="#fff" ${st(3)}/><path d="M -6 -22 V -46" ${st(5)}/><path d="M -6 -46 L 18 -40 L -6 -32 Z" fill="${C.flamme}" ${st(4)}/>`,
};
const icone = (k, s) => `<svg width="${s}" height="${s}" viewBox="-50 -50 100 100" style="flex:none;overflow:visible">${ICO[k]}</svg>`;

// Sentier sinueux qui relie les numéros (même dessin que le chemin du Salève : sable, contour encre).
function sentier(pts, H) {
  let d = `M ${pts[0][0]} ${pts[0][1]}`;
  for (let i = 1; i < pts.length; i++) {
    const [x0, y0] = pts[i - 1], [x1, y1] = pts[i], my = (y0 + y1) / 2, k = i % 2 ? 46 : -46;
    d += ` C ${x0 + k} ${my}, ${x1 + k} ${my}, ${x1} ${y1}`;
  }
  return `<svg class="abs" style="left:0;top:0;z-index:2" width="1080" height="${H}" viewBox="0 0 1080 ${H}">
    <path d="${d}" fill="none" stroke="${I}" stroke-width="44" stroke-linecap="round"/>
    <path d="${d}" fill="none" stroke="${C.sable}" stroke-width="30" stroke-linecap="round"/>
    <path d="${d}" fill="none" stroke="#C9A36A" stroke-width="5" stroke-dasharray="12 18" stroke-linecap="round"/></svg>`;
}

function etapes({ top, h, gap, title = 38, sub = 26, ico = 84 }) {
  const cx = 84, pts = ETAPES.map((_, i) => [cx, top + i * (h + gap) + h / 2]);
  const cartes = ETAPES.map(([t, s, k], i) => {
    const y = top + i * (h + gap), fin = i === ETAPES.length - 1;
    return `<div class="abs" style="left:148px;top:${y}px;width:892px;height:${h}px;z-index:3;display:flex;align-items:center;gap:18px;background:${fin ? C.soleil : '#fff'};border:6px solid ${I};border-radius:24px;box-shadow:8px 8px 0 ${I};padding:0 22px 0 28px">
      <div style="flex:1;min-width:0"><div style="font-family:Poppins;font-weight:700;font-size:${title}px;line-height:1.05;letter-spacing:-.5px;color:${I}">${typo(t)}</div>
      <div style="font-family:Inter;font-weight:600;font-size:${sub}px;line-height:1.2;color:#3A3550;margin-top:6px">${typo(s)}</div></div>${icone(k, ico)}</div>`;
  }).join('');
  const numeros = pts.map(([x, y], i) => `<div class="abs" style="left:${x - 42}px;top:${y - 42}px;width:84px;height:84px;z-index:4;border-radius:50%;background:${i === 5 ? C.flamme : C.soleil};color:${i === 5 ? '#fff' : I};border:6px solid ${I};box-shadow:5px 5px 0 ${I};display:flex;align-items:center;justify-content:center;font-family:Poppins;font-weight:700;font-size:44px">${i + 1}</div>`).join('');
  return { html: cartes + numeros, pts };
}

const etiquette = (y) => `<div class="abs" style="left:40px;top:${y}px;z-index:5;display:flex;align-items:center;gap:12px;background:${C.creme};border:6px solid ${I};border-radius:999px;padding:6px 26px 6px 10px;font-family:Poppins;font-weight:700;font-size:28px;box-shadow:5px 5px 0 ${I}">${logo(58)}<span>La balade déclic</span></div>`;
const fond = (H) => `<div class="abs" style="inset:0;background:${C.creme}"></div><div class="abs" style="inset:0;background-image:radial-gradient(rgba(20,18,31,.1) 2.6px,transparent 3.2px);background-size:18px 18px"></div>`;
const titre = (y, s1, s2, w = 640, w2 = 520) => `<div class="abs" style="left:48px;top:${y}px;width:${w}px;z-index:4">
  <div style="font-family:Poppins;font-weight:700;font-size:${s1}px;line-height:.98;letter-spacing:-2px;color:${I}">1&nbsp;h&nbsp;30 sur le Salève.</div>
  <div style="font-family:Poppins;font-weight:700;font-size:${s2}px;line-height:1.08;letter-spacing:-1px;color:${C.flamme};margin-top:14px;width:${w2}px">${typo('Pour remettre ton projet en marche.')}</div></div>`;
const duo = (x, y, s) => G.svgPage(`${G.quentin({ x, y, s, arms: { l: 'down', r: 'wave' }, mouth: 'grin', eyes: { px: -4 } })}
  ${G.brutus({ x: x + 175 * s / 0.4, y: y + 128 * s / 0.4, s: s * 0.82, arms: 'hip', casque: true, mouth: 'flat', brows: 'angry', eyes: { lid: 0.35, px: -6 } })}`);

function post() {
  const H = 1350, e = etapes({ top: 438, h: 112, gap: 18 });
  return `<div class="page" style="height:${H}px">${fond(H)}${etiquette(40)}${titre(150, 72, 44)}
    <div class="abs" style="left:0;top:0;z-index:3">${duo(700, 92, 0.42)}</div>
    ${sentier(e.pts, H)}${e.html}
    <div class="abs" style="left:0;right:0;top:1250px;bottom:0;background:${C.nuit}"></div>
    <div class="foot" style="bottom:34px"><span>@quentinfauchereau</span><span class="swipe" style="font-size:30px">Envoie-moi BALADE en message</span></div></div>`;
}

// Story : zones hautes (≈ 220 px) et basses (≈ 260 px) laissées libres pour l'interface d'Instagram.
function story() {
  const H = 1920, e = etapes({ top: 650, h: 128, gap: 22, title: 40, sub: 28, ico: 92 });
  return `<div class="page" style="height:${H}px">${fond(H)}${etiquette(230)}${titre(340, 80, 48, 640, 560)}
    <div class="abs" style="left:0;top:0;z-index:3">${duo(690, 270, 0.46)}</div>
    ${sentier(e.pts, H)}${e.html}
    <div class="abs" style="left:48px;right:48px;top:1574px;z-index:4;background:${C.flamme};border:6px solid ${I};border-radius:26px;box-shadow:8px 8px 0 ${I};padding:18px 26px;text-align:center;font-family:Poppins;font-weight:700;font-size:40px;line-height:1.1;color:#fff;transform:rotate(-1deg)">Réponds BALADE à cette story ↓</div></div>`;
}

module.exports = { slug: '01-balade-6-etapes', formats: { post: { w: 1080, h: 1350, html: post() }, story: { w: 1080, h: 1920, html: story() } } };
