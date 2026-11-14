// Le sage et le singe — Épictète. On ose : séparer le fait de ce qu'on se raconte.
const { C, useStyle, quentin, chimp, saleve, ground, guichet, bubble, caption, slide, sources } = require("../src/kit.js");
useStyle("roman");
const T = 8, nb = "&nbsp;";
const Q = { x: -50, y: 600, w: 600 }, K = { x: 590, y: 780, w: 440 };
const big = (t, size = 70, top = 250, w = 960) => `<div class="title" style="left:48px;top:${top}px;width:${w}px;font-size:${size}px">${t}</div>`;
const tag = (t, bg = C.flamme, color = "#fff") => caption({ x: 48, y: 150, size: 34, bg, color, rot: -2, text: t });
const fl = (t) => `<span style="color:${C.flamme}">${t}</span>`;
const fin = (question, items, y = 596) => `
      ${saleve({ sky: ["#FFF6EA", "#FFD98A"] })}
      ${big("Viens prendre l’air avec moi.", 80, 150, 900)}
      <div class="title" style="left:48px;top:334px;width:900px;font-size:52px;color:${C.flamme}">On crée ce qui t’anime.</div>
      ${caption({ x: 48, y: 440, w: 500, size: 30, bg: C.soleil, rot: -1.5, text: question })}
      ${quentin({ ...Q, eyes: { px: 5, py: 0, laugh: true }, brows: [-7, 7], browY: -6, mouth: "smile", arms: "wave" })}
      ${ground()}
      ${chimp({ ...K, eyes: { px: -8, py: 2 }, brows: [-6, 6], mouth: "smile", arms: "hips" })}
      ${sources({ x: 560, y, w: 480, items })}`;

const series = 'Le sage et le singe';
const REF = 'Épictète, Manuel, V (trad. Thurot).';

module.exports = {
  slug: '06-epictete',
  slides: [
    slide({ n: 1, total: T, series, cta: 'En direct →', content: `
      ${saleve()}
      ${big(`Elle a répondu «${nb}ok.${nb}» ${fl('Avec un point.')}`, 92, 150)}
      ${bubble({ x: 600, y: 600, w: 430, size: 42, tail: { at: 0.66, dir: 1 }, text: `Flash spécial. On interrompt tout.` })}
      ${quentin({ ...Q, eyes: { px: 0, py: 8 }, brows: [-12, 12], browY: -8, mouth: 'small', arms: 'phone' })}
      ${ground()}
      ${chimp({ ...K, eyes: { px: -8, py: 0 }, brows: [-14, 14], browY: -8, mouth: 'open', arms: 'finger' })}
      ${guichet('INFO EN CONTINU', 34)}` }),

    slide({ n: 2, total: T, series, cta: 'Ça s’aggrave →', content: `
      ${saleve()}
      ${bubble({ x: 420, y: 180, w: 610, size: 44, tail: { at: 0.74, dir: 1 }, text: `Nos experts sont formels${nb}: <b>elle te déteste</b>. Depuis 2019.` })}
      ${bubble({ x: 40, y: 450, w: 440, size: 44, tail: { at: 0.32, dir: -1 }, text: `On s'est connus en 2022.` })}
      ${quentin({ ...Q, eyes: { px: 8, py: 0, lid: 0.2 }, brows: [-10, 4], mouth: 'flat' })}
      ${ground()}
      ${chimp({ ...K, eyes: { px: -8, py: 0, lid: 0.25 }, brows: [10, -10], mouth: 'flat', arms: 'point' })}
      ${guichet('INFO EN CONTINU', 34)}` }),

    slide({ n: 3, total: T, series, cta: 'Édition spéciale →', content: `
      ${saleve({ sky: ['#CFCBE6', '#EADFD8'], sun: false, mist: 0.9, dim: 0.12 })}
      ${bubble({ x: 420, y: 170, w: 610, size: 44, tail: { at: 0.74, dir: 1 }, text: `Dernière minute${nb}: carrière finie. On déménage. <b>On change de nom.</b>` })}
      ${bubble({ x: 40, y: 470, w: 400, size: 46, tail: { at: 0.32, dir: -1 }, text: `Pour un «${nb}ok${nb}»${nb}?` })}
      ${quentin({ ...Q, eyes: { px: 4, py: 6 }, brows: [-16, 16], browY: -6, mouth: 'wobble', arms: 'shrug' })}
      ${ground()}
      ${chimp({ ...K, eyes: { px: -4, py: 0, pr: 3 }, brows: [-16, 16], browY: -8, mouth: 'scream', arms: 'head', sweat: true })}
      ${guichet('ÉDITION SPÉCIALE', 34)}` }),

    slide({ n: 4, total: T, series, cta: 'Traduction →', source: REF, content: `
      ${saleve({ sky: ['#FFF6EA', '#FFD98A'] })}
      <div class="title" style="left:48px;top:150px;width:990px;font-size:60px;line-height:1.08;letter-spacing:-1px">«${nb}Ce qui trouble les hommes, ce ne sont pas les choses, ce sont les ${fl('jugements')} qu’ils portent sur les choses.${nb}»</div>
      ${caption({ x: 48, y: 500, size: 30, bg: C.creme, rot: 0, text: `Épictète, ancien esclave, vers l'an 125` })}
      ${quentin({ ...Q, eyes: { px: 4, py: -8 }, brows: [-8, 8], browY: -8, mouth: 'default', arms: 'think' })}
      ${ground()}
      ${chimp({ ...K, eyes: { px: -6, py: -8 }, brows: [-10, 6], browY: -4, mouth: 'small', arms: 'rub' })}
      ${guichet('INFO EN CONTINU', 34)}` }),

    slide({ n: 5, total: T, series, cta: 'Le geste →', content: `
      ${saleve()}
      ${tag('En clair', C.soleil, C.nuit)}
      ${big(`Le fait${nb}: deux lettres et un point. Tout le reste, c’est ${fl('le commentaire.')}`, 66)}
      ${bubble({ x: 600, y: 600, w: 430, size: 42, tail: { at: 0.66, dir: 1 }, text: `Un commentaire de qualité.` })}
      ${quentin({ ...Q, eyes: { px: 8, py: 0, laugh: true }, brows: [-6, 6], browY: -6, mouth: 'smile', arms: 'point' })}
      ${ground()}
      ${chimp({ ...K, eyes: { px: -8, py: 2, lid: 0.3 }, brows: [6, -6], mouth: 'flat', arms: 'hips' })}
      ${guichet('INFO EN CONTINU', 34)}` }),

    slide({ n: 6, total: T, series, cta: 'La morale →', content: `
      ${saleve({ sky: ['#FFF6EA', '#FFD98A'] })}
      ${tag('Le geste', C.soleil, C.nuit)}
      ${big(`Écris le fait en une ligne. Puis demande-toi${nb}: qui a écrit ${fl('la suite')}${nb}?`, 66)}
      ${bubble({ x: 640, y: 610, w: 380, size: 44, tail: { at: 0.62, dir: 1 }, text: `…C'est moi.` })}
      ${quentin({ ...Q, eyes: { px: 8, py: 0 }, brows: [-6, 6], browY: -6, mouth: 'default', arms: 'pencil' })}
      ${ground()}
      ${chimp({ ...K, eyes: { px: -8, py: 6 }, brows: [-12, 12], browY: -6, mouth: 'small', arms: 'rub' })}
      ${guichet('RECTIFICATIF', 34)}` }),

    slide({ n: 7, total: T, series, cta: 'Et toi ? →', content: `
      ${saleve()}
      ${tag('Morale de l’histoire')}
      ${big(`Le fait tient en une ligne. Le drame, c’est le singe qui ${fl('fait les sous-titres.')}`, 66)}
      ${quentin({ ...Q, eyes: { px: 5, py: 0, laugh: true }, brows: [-7, 7], browY: -6, mouth: 'smile' })}
      ${ground()}
      ${chimp({ ...K, eyes: { closed: true }, brows: [-4, 4], mouth: 'smile', arms: 'calm' })}
      ${guichet('FIN DU DIRECT', 34)}` }),

    slide({ n: 8, total: T, series, cta: 'Envoie-le à un ami ↗', content: fin(`Ton dernier «${nb}flash spécial${nb}» pour rien${nb}? Raconte.`, ['Épictète, <i>Manuel</i>, chapitre V (traduction Thurot, 1914). Texte rédigé par son élève Arrien.']) }),
  ],
};
