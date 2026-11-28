// Série « Pièces à conviction » en style gros nez : le Chimpanzé ressort la vraie vie de Quentin.
// Planches typées : hook, doc, talk, low, turn, insight, morale, fin (mêmes données que la v1, voir archives/src/vrai-v1.js).
const { C, G, S, guichet, big, tag, bulle, tq, tb, narr, hook, ep3 } = require('./v3.js');
const fin3 = require('./fin3.js');

const nb = '&nbsp;';
const fl = (t) => `<span style="color:${C.flamme}">${t}</span>`;
const I = G.I;
const Q = { x: 40, y: 500 }, B = { x: 670, y: 720 };
const BM = { small: 'flat', default: 'smirk' };
const BA = { rub: 'down', hips: 'hip', shrug: 'up', finger: 'point', calm: 'down', point: 'point', up: 'up', head: 'head' };
const QA = { think: 'chin', fist: 'raise', shrug: 'hip', point: 'point', heart: 'chest' };
const qm = (m) => (m === 'default' ? 'grin' : m);

function scene(bg, q, b, over, e, sign) {
  const panneau = sign === '' ? '' : (sign || e.sign);
  return `${bg}${S(G.quentin({ ...Q, ...q }) + G.brutus({ ...B, ...b }))}${panneau ? guichet(panneau, panneau.length > 18 ? 29 : 34) : G.avantPlan()}${over}`;
}
const bB = (t, yb = 640, x = 560, w = 470) => bulle({ x, yb, w, who: 'b', to: tb(B), text: t });
const bQ = (t, yb = 470, x = 40, w = 470) => bulle({ x, yb, w, to: tq(Q), text: t });

const make = {
  hook: (s, e) => scene(G.bgRays(C.soleil, '#FFD45E', 700, 1000), { arms: { l: 'hip', r: QA[s.arms] || 'chin' }, brows: 'sad', mouth: 'smirk', eyes: { px: 10 } },
    { arms: 'point', mouth: 'smirk', eyes: { px: -8, lid: 0.3 }, brows: 'sly' }, hook(s.text, { y: 130, size: s.size ? Math.min(s.size, 84) : 80 }) + bB(s.c, 660), e),
  doc: (s, e) => `${G.bgDark(e.bg || C.nuit)}
    <div class="abs" style="left:50px;top:140px;width:900px;background:${C.creme};border:7px solid ${I};box-shadow:14px 14px 0 rgba(0,0,0,.4);transform:rotate(-2deg);padding:30px 38px 34px;font-family:Poppins;font-weight:700;color:${I}">
      <div style="font-size:54px;line-height:1.05;border-bottom:7px solid ${C.flamme};padding-bottom:12px;margin-bottom:16px">${s.title}</div>
      ${s.lines.map((l) => `<div style="font-size:${s.lineSize || 46}px;line-height:1.28">${l}</div>`).join('')}</div>
    ${S(G.brutus({ x: 760, y: 930, s: 0.5, arms: 'point', mouth: 'smirk', eyes: { px: -10, py: -12 }, brows: 'sly' }))}
    ${bulle({ x: 360, yb: 1180, w: 420, who: 'b', size: 40, to: tb({ x: 760, y: 930, s: 0.5 }), text: s.c })}`,
  talk: (s, e) => scene(G.saleve2(), { arms: QA[s.arms] || 'chin', mouth: qm(s.qm || 'flat'), eyes: { px: 8, lid: 0.2 }, brows: 'flat' },
    { arms: BA[s.ca] || 'up', mouth: BM[s.cm] || s.cm || 'smirk', eyes: { px: -8 }, brows: 'sly' },
    s.first === 'q' ? bQ(s.q, 440, 40, 600) + bB(s.c, 650, 560, 470) : bB(s.c, 330, 380, 650) + bQ(s.q, 470), e),
  low: (s, e) => scene(G.saleve2({ mood: 'gris' }), { arms: 'down', mouth: 'wobble', eyes: { px: 0, py: 8, lid: 0.3 }, brows: 'sad', sweat: true },
    { arms: 'up', mouth: 'scream', eyes: { mode: 'wide' }, brows: 'angry' }, bB(s.c, 330, 380, 650) + bQ(s.q, 470), e, s.sign),
  turn: (s, e) => scene(G.saleve2({ mood: 'or' }), { arms: { l: 'down', r: 'chest' }, mouth: 'smile', eyes: { mode: 'closed' }, brows: 'normal' },
    { arms: 'down', mouth: 'smile', eyes: { mode: 'closed' } }, big(s.text, 62, 140, { w: 760 }) + narr(s.cap, { y: s.capY ? s.capY + 20 : 360, w: 940, size: 38, bg: C.creme, rot: 0 }), e, s.sign || '…PAUSE'),
  insight: (s, e) => scene(G.saleve2(), { arms: { l: 'hip', r: 'point' }, mouth: 'grin', eyes: { px: 8 } },
    { arms: 'down', mouth: 'wobble', eyes: { px: -8, py: 4 }, brows: 'sad' }, tag(s.tag || 'Ce que j’ai compris', { bg: C.soleil, color: I }) + big(s.text, Math.min(s.size || 60, 64), 230) + bB(s.c, 660), e),
  morale: (s, e) => scene(G.saleve2({ mood: 'or' }), { arms: { l: 'hip', r: 'point' }, mouth: 'grin', eyes: { px: 6 } },
    { arms: 'hip', mouth: 'smirk', eyes: { px: -8, lid: 0.25 }, brows: 'sly' }, tag('Morale de l’histoire') + big(s.text, Math.min(s.size || 66, 72), 230) + bB(s.c, 660), e, s.sign || 'AFFAIRE CLASSÉE'),
  fin: (s, e) => `${G.saleve2({ mood: 'or' })}${S(G.quentin({ x: 30, y: 760, s: 0.5, arms: { l: 'down', r: 'wave' }, mouth: 'grin', eyes: { px: 6 } }) + G.brutus({ x: 820, y: 900, s: 0.5, arms: 'hip', mouth: 'smirk', eyes: { px: -8 } }))}${G.avantPlan()}
    ${fin3({ question: s.question, teaser: s.teaser, envoie: e.envoie, enregistre: e.enregistre })}`,
};

function vrai(e) {
  const total = e.slides.length;
  const s = ep3(e.series, total);
  return {
    slug: e.slug,
    slides: e.slides.map((sl, i) => s(i + 1, sl.cta || (i === total - 1 ? 'Partage-le ↗' : 'La suite →'), make[sl.type](sl, e), sl.source ? { source: sl.source } : {})),
  };
}

module.exports = { vrai, nb, fl };
