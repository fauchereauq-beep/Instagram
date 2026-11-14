// Série « Dossier impossible » : Quentin veut quelque chose, le Chimpanzé classe le dossier « impossible »,
// puis une histoire vraie rouvre le dossier. Planches 3 à 6 en flashback, hors du Salève.
const { C, useStyle, quentin, chimp, saleve, ground, guichet, bubble, caption, slide, sources } = require('./kit.js');

const nb = '&nbsp;';
const Q = { x: -50, y: 600, w: 600 }, K = { x: 590, y: 780, w: 440 };
const fl = (t) => `<span style="color:${C.flamme}">${t}</span>`;
const so = (t) => `<span style="color:${C.soleil}">${t}</span>`;
const big = (t, size = 70, top = 250, w = 960) => `<div class="title" style="left:48px;top:${top}px;width:${w}px;font-size:${size}px">${t}</div>`;
const P = `stroke="${C.nuit}" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"`;

// Accessoires des flashbacks (viewBox 200 x 200).
const PROPS = {
  clap: `<rect x="24" y="78" width="152" height="96" rx="8" fill="${C.creme}" ${P}/><g transform="rotate(-12 24 78)"><rect x="24" y="48" width="152" height="30" rx="5" fill="${C.nuit}" ${P}/><path d="M44 48 l-12 30 M78 48 l-12 30 M112 48 l-12 30 M146 48 l-12 30" stroke="${C.creme}" stroke-width="10"/></g><path d="M40 110 h120 M40 134 h80" stroke="${C.grisNuit}" stroke-width="6" stroke-linecap="round"/>`,
  robe: `<path d="M84 24 L72 60 L84 86 L40 178 Q100 196 160 178 L116 86 L128 60 L116 24 L100 44 Z" fill="${C.creme}" ${P}/><path d="M84 86 h32" ${P} fill="none"/><path d="M70 150 q30 14 60 0" stroke="${C.sable}" stroke-width="5" fill="none"/>`,
  palais: `<g fill="${C.sable}" ${P}><rect x="20" y="150" width="160" height="30" rx="10"/><rect x="34" y="120" width="60" height="32" rx="12"/><rect x="100" y="116" width="70" height="36" rx="12"/><rect x="52" y="88" width="50" height="34" rx="12"/><rect x="106" y="80" width="46" height="38" rx="12"/><rect x="70" y="50" width="40" height="40" rx="12"/><path d="M78 50 L90 20 L102 50 Z"/></g><circle cx="150" cy="40" r="14" fill="${C.soleil}" ${P}/>`,
  lettres: `<g ${P}><rect x="30" y="110" width="140" height="70" rx="6" fill="${C.sable}" transform="rotate(-6 100 145)"/><rect x="30" y="80" width="140" height="70" rx="6" fill="${C.creme}" transform="rotate(5 100 115)"/><rect x="30" y="46" width="140" height="74" rx="6" fill="#fff"/><path d="M30 46 L100 92 L170 46" fill="none"/></g><g transform="rotate(-10 104 94)"><rect x="68" y="76" width="74" height="34" rx="5" fill="none" stroke="${C.flamme}" stroke-width="5"/><text x="105" y="102" text-anchor="middle" font-family="Poppins" font-weight="700" font-size="26" fill="${C.flamme}">NON</text></g>`,
  chevalet: `<path d="M56 30 L30 186 M144 30 L170 186 M100 30 L100 190" stroke="#8A5A2B" stroke-width="9" stroke-linecap="round"/><rect x="36" y="44" width="128" height="96" fill="#fff" ${P}/><path d="M36 116 Q70 88 100 110 T164 100 V140 H36 Z" fill="${C.jungleClair}" ${P}/><circle cx="134" cy="70" r="13" fill="${C.soleil}" ${P}/><path d="M60 110 l8 -18 l8 18 Z" fill="${C.jungle}" ${P}/>`,
};

// Planche de flashback : fond uni sombre, grande date, texte court, accessoire, le Chimpanzé commente dans un coin.
function flash(d, n, total, { year, text, quip, cta, source = '', eyes = { px: -8, py: -4 }, mouth = 'small', arms = 'rub', brows = [-10, 10] }) {
  return slide({ n, total, series: d.series, cta, source, bg: d.bg, content: `
    <div class="abs" style="left:-140px;top:560px;width:900px;height:900px;border-radius:50%;background:radial-gradient(circle, rgba(255,194,51,.22), transparent 62%)"></div>
    <div class="abs" style="left:48px;top:140px;font-family:Poppins;font-weight:700;font-size:150px;line-height:1;color:${C.soleil};letter-spacing:-4px">${year}</div>
    <div class="abs" style="left:48px;top:310px;width:980px;font-family:Poppins;font-weight:700;font-size:62px;line-height:1.08;color:${C.creme};letter-spacing:-1px">${text}</div>
    <svg class="abs" style="left:30px;top:690px;transform:rotate(-5deg)" width="500" height="500" viewBox="0 0 200 200">${PROPS[d.prop]}</svg>
    ${quip ? bubble({ x: 540, y: 716, w: 500, size: 40, tail: { at: 0.66, dir: 1 }, text: quip }) : ''}
    ${chimp({ x: 730, y: 920, w: 310, eyes, brows, browY: -6, mouth, arms })}` });
}

// d : données de l'épisode (voir episodes/1x-dossier-*.js).
function dossier(d) {
  useStyle('roman');
  const T = 8;
  const sign = guichet('BUREAU DES IMPOSSIBLES', 29);
  return {
    slug: d.slug,
    slides: [
      slide({ n: 1, total: T, series: d.series, cta: 'Ses arguments →', content: `
        ${saleve(d.sky1 || {})}
        ${big(d.wish, d.wishSize || 76, 150)}
        ${bubble({ x: 560, y: 600, w: 470, size: 42, tail: { at: 0.66, dir: 1 }, text: d.verdict })}
        ${quentin({ ...Q, eyes: { px: 8, py: 0 }, brows: [-10, 10], browY: -8, mouth: 'default', arms: 'fist' })}
        ${ground()}
        ${chimp({ ...K, eyes: { px: -8, py: 2, lid: 0.35 }, brows: [8, -8], mouth: 'flat', arms: 'finger' })}
        ${sign}` }),

      slide({ n: 2, total: T, series: d.series, cta: 'Sauf que →', content: `
        ${saleve(d.sky2 || { sky: ['#D9D4EA', '#F1E3D6'], sun: false, mist: 0.9, dim: 0.08 })}
        ${bubble({ x: 420, y: 180, w: 610, size: 43, tail: { at: 0.74, dir: 1 }, text: d.argument })}
        ${bubble({ x: 40, y: 460, w: 470, size: 44, tail: { at: 0.32, dir: -1 }, text: d.reply })}
        ${quentin({ ...Q, eyes: { px: 8, py: 0, lid: 0.2 }, brows: [-10, 4], mouth: 'smirk', arms: 'think' })}
        ${ground()}
        ${chimp({ ...K, eyes: { px: -8, py: 0 }, brows: [-6, 6], mouth: 'smirk', arms: 'shrug' })}
        ${sign}` }),

      flash(d, 3, T, d.f1),
      flash(d, 4, T, d.f2),
      flash(d, 5, T, d.f3),

      slide({ n: 6, total: T, series: d.series, cta: 'La morale →', source: d.ref, bg: d.bg, content: `
        <div class="abs" style="left:90px;top:120px;width:900px;height:900px;border-radius:50%;background:radial-gradient(circle, rgba(255,194,51,.3), transparent 62%)"></div>
        ${caption({ x: 48, y: 150, size: 32, bg: C.soleil, rot: -2, text: `C'était` })}
        <div class="abs" style="left:48px;top:240px;width:990px;font-family:Poppins;font-weight:700;font-size:${d.nameSize || 104}px;line-height:.98;color:${C.creme};letter-spacing:-3px">${d.name}</div>
        <div class="abs" style="left:48px;top:${d.afterTop || 480}px;width:960px;font-family:Poppins;font-weight:700;font-size:46px;line-height:1.12;color:${C.soleil}">${d.after}</div>
        <svg class="abs" style="left:40px;top:760px;transform:rotate(-5deg)" width="430" height="430" viewBox="0 0 200 200">${PROPS[d.prop]}</svg>
        ${bubble({ x: 540, y: 716, w: 500, size: 40, tail: { at: 0.66, dir: 1 }, text: d.reaction })}
        ${chimp({ x: 730, y: 920, w: 310, eyes: { px: -4, py: 0, pr: 3 }, brows: [-16, 16], browY: -8, mouth: 'open', arms: 'head' })}` }),

      slide({ n: 7, total: T, series: d.series, cta: 'Et toi ? →', content: `
        ${saleve({ sky: ['#FFF6EA', '#FFD98A'] })}
        ${caption({ x: 48, y: 150, size: 34, bg: C.flamme, color: '#fff', rot: -2, text: `Morale de l'histoire` })}
        ${big(d.morale, d.moraleSize || 66)}
        ${bubble({ x: 580, y: 570, w: 450, size: 40, tail: { at: 0.66, dir: 1 }, text: d.last })}
        ${quentin({ ...Q, eyes: { px: 5, py: 0, laugh: true }, brows: [-7, 7], browY: -6, mouth: 'smile', arms: 'fist' })}
        ${ground()}
        ${chimp({ ...K, eyes: { px: -8, py: 4 }, brows: [-10, 10], browY: -4, mouth: 'small', arms: 'rub' })}
        ${guichet('DOSSIER ROUVERT', 34)}` }),

      slide({ n: 8, total: T, series: d.series, cta: 'Envoie-le à un ami ↗', content: `
        ${saleve({ sky: ['#FFF6EA', '#FFD98A'] })}
        ${big('Viens prendre l’air avec moi.', 80, 150, 900)}
        <div class="title" style="left:48px;top:334px;width:900px;font-size:52px;color:${C.flamme}">On crée ce qui t’anime.</div>
        ${caption({ x: 48, y: 440, w: 520, size: 30, bg: C.soleil, rot: -1.5, text: d.question })}
        ${caption({ x: 48, y: 560, w: 470, size: 27, bg: C.nuit, color: C.creme, rot: 1, text: d.teaser })}
        ${quentin({ ...Q, y: 690, eyes: { px: 5, py: 0, laugh: true }, brows: [-7, 7], browY: -6, mouth: 'smile', arms: 'wave' })}
        ${ground()}
        ${chimp({ ...K, eyes: { px: -8, py: 2 }, brows: [-6, 6], mouth: 'smile', arms: 'hips' })}
        ${sources({ x: 580, y: 590, w: 460, items: d.sources })}` }),
    ],
  };
}

module.exports = { dossier, nb, fl, so };
