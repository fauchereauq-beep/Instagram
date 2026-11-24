// Série « Pièces à conviction » : le Chimpanzé ressort la vraie vie de Quentin comme preuve qu'il ne faut rien tenter.
// Chaque épisode est une liste de planches typées : hook, doc, talk, low, turn, insight, morale, fin.
const { C, useStyle, quentin, chimp, saleve, ground, guichet, bubble, caption, slide } = require('./kit.js');

const nb = '&nbsp;';
const Q = { x: -50, y: 600, w: 600 }, K = { x: 590, y: 780, w: 440 };
const fl = (t) => `<span style="color:${C.flamme}">${t}</span>`;
const big = (t, size = 70, top = 250, w = 960) => `<div class="title" style="left:48px;top:${top}px;width:${w}px;font-size:${size}px">${t}</div>`;
const tag = (t, bg = C.flamme, color = '#fff') => caption({ x: 48, y: 150, size: 34, bg, color, rot: -2, text: t });
const GRIS = { sky: ['#CFCBE6', '#EADFD8'], sun: false, mist: 0.9, dim: 0.12 };
const OR = { sky: ['#FFF6EA', '#FFD98A'], mist: 0.9 };

function scene(sky, sign, q, k, extra = '') {
  return `${saleve(sky)}${extra}${quentin({ ...Q, ...q })}${ground()}${chimp({ ...K, ...k })}${sign ? guichet(sign, sign.length > 18 ? 29 : 34) : ''}`;
}
const cTop = (t) => bubble({ x: 420, y: 180, w: 610, size: 43, tail: { at: 0.74, dir: 1 }, text: t });
const qLow = (t) => bubble({ x: 40, y: 470, w: 480, size: 43, tail: { at: 0.32, dir: -1 }, text: t });
const qTop = (t) => bubble({ x: 40, y: 190, w: 560, size: 43, tail: { at: 0.3, dir: -1 }, text: t });
const cLow = (t, y = 580) => bubble({ x: 540, y, w: 490, size: 42, tail: { at: 0.68, dir: 1 }, text: t });

const make = {
  hook: (s, e) => scene(s.sky || {}, e.sign, { eyes: { px: 8, py: 0 }, brows: [-10, 10], browY: -8, mouth: 'default', arms: s.arms || 'shrug' },
    { eyes: { px: -8, py: 2, lid: 0.35 }, brows: [8, -8], mouth: 'smirk', arms: 'finger' }, big(s.text, s.size || 76, 150) + cLow(s.c, 610)),
  // Un document posé sur fond sombre : la « pièce » de l'épisode.
  doc: (s) => `
    <div class="abs" style="left:-100px;top:200px;width:1000px;height:1000px;border-radius:50%;background:radial-gradient(circle, rgba(255,194,51,.2), transparent 62%)"></div>
    <div class="abs" style="left:56px;top:150px;width:880px;background:${C.creme};border:6px solid ${C.nuit};box-shadow:14px 14px 0 rgba(0,0,0,.35);transform:rotate(-2deg);padding:30px 38px 34px;font-family:Poppins;font-weight:700;color:${C.nuit}">
      <div style="font-size:52px;line-height:1.05;border-bottom:6px solid ${C.flamme};padding-bottom:12px;margin-bottom:16px">${s.title}</div>
      ${s.lines.map((l) => `<div style="font-size:${s.lineSize || 46}px;line-height:1.3">${l}</div>`).join('')}
    </div>
    ${bubble({ x: 540, y: 800, w: 500, size: 40, tail: { at: 0.66, dir: 1 }, text: s.c })}
    ${chimp({ x: 730, y: 950, w: 310, eyes: { px: -8, py: -4 }, brows: [8, -8], mouth: 'smirk', arms: 'finger' })}`,
  talk: (s, e) => scene(s.sky || {}, e.sign, { eyes: { px: 8, py: 0, lid: 0.2 }, brows: [-10, 4], mouth: s.qm || 'flat', arms: s.arms || 'think' },
    { eyes: { px: -8, py: 0 }, brows: [-6, 6], mouth: s.cm || 'smirk', arms: s.ca || 'shrug' }, s.first === 'q' ? qTop(s.q) + cLow(s.c) : cTop(s.c) + qLow(s.q)),
  low: (s, e) => scene(GRIS, s.sign || e.sign, { eyes: { px: 0, py: 8, lid: 0.3 }, brows: [-18, 18], browY: -4, mouth: 'wobble' },
    { eyes: { px: -4, py: 0, pr: 3 }, brows: [16, -16], browY: -2, mouth: 'scream', arms: 'up' }, cTop(s.c) + qLow(s.q)),
  turn: (s, e) => scene(OR, s.sign || '…PAUSE', { eyes: { closed: true }, brows: [-4, 4], browY: -4, mouth: 'default', arms: 'heart' },
    { eyes: { px: -8, py: 0 }, brows: [-8, 8], browY: -4, mouth: 'small', arms: 'calm' },
    big(s.text, 64, 150, 720) + caption({ x: 48, y: s.capY || 330, w: 600, size: 31, bg: C.creme, rot: 0, text: s.cap })),
  insight: (s, e) => scene({}, e.sign, { eyes: { px: 8, py: 0, laugh: true }, brows: [-6, 6], browY: -6, mouth: 'smile', arms: 'point' },
    { eyes: { px: -8, py: 2 }, brows: [-12, 12], browY: -6, mouth: 'wobble', arms: 'rub' }, tag(s.tag || 'Ce que j’ai compris', C.soleil, C.nuit) + big(s.text, s.size || 62) + cLow(s.c, 610)),
  morale: (s, e) => scene(OR, s.sign || 'AFFAIRE CLASSÉE', { eyes: { px: 5, py: 0, laugh: true }, brows: [-7, 7], browY: -6, mouth: 'smile', arms: 'fist' },
    { eyes: { px: -8, py: 4 }, brows: [-10, 10], browY: -4, mouth: 'small', arms: 'rub' }, tag('Morale de l’histoire') + big(s.text, s.size || 68) + cLow(s.c, 600)),
  fin: (s) => scene(OR, '', { y: 730, eyes: { px: 5, py: 0, laugh: true }, brows: [-7, 7], browY: -6, mouth: 'smile', arms: 'wave' },
    { eyes: { px: -8, py: 2 }, brows: [-6, 6], mouth: 'smile', arms: 'hips' },
    big('Viens prendre l’air avec moi.', 80, 150, 900) + `<div class="title" style="left:48px;top:334px;width:900px;font-size:52px;color:${C.flamme}">On crée ce qui t’anime.</div>` +
    caption({ x: 48, y: 440, w: 540, size: 30, bg: C.soleil, rot: -1.5, text: s.question }) + caption({ x: 48, y: 600, w: 480, size: 27, bg: C.nuit, color: C.creme, rot: 1, text: s.teaser })),
};

function vrai(e) {
  useStyle('roman');
  const total = e.slides.length;
  return {
    slug: e.slug,
    slides: e.slides.map((s, i) => slide({
      n: i + 1, total, series: e.series, cta: s.cta || (i === total - 1 ? 'Envoie-le à un ami ↗' : 'La suite →'),
      bg: s.type === 'doc' ? (e.bg || C.nuit) : undefined, content: make[s.type](s, e),
    })),
  };
}

module.exports = { vrai, nb, fl };
