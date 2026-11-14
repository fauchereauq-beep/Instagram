// Sitcom — « La cellule de crise ». On ose : se montrer. (Effet projecteur.)
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

const series = 'Mon chimpanzé et moi';
const REF = 'Gilovich, Medvec & Savitsky, J. of Personality and Social Psychology, 2000.';

module.exports = {
  slug: '05-cellule-de-crise',
  slides: [
    slide({ n: 1, total: T, series, cta: 'Ordre du jour →', content: `
      ${saleve()}
      ${big(`J’ai voulu poster une vidéo. Mon chimpanzé a ouvert une ${fl('cellule de crise.')}`, 72, 150)}
      ${quentin({ ...Q, eyes: { px: 8, py: 0 }, brows: [-10, 10], browY: -8, mouth: 'small', arms: 'phone' })}
      ${ground()}
      ${chimp({ ...K, eyes: { px: -8, py: 0, lid: 0.25 }, brows: [10, -10], mouth: 'flat', arms: 'finger' })}
      ${guichet('CELLULE DE CRISE', 34)}` }),

    slide({ n: 2, total: T, series, cta: 'Il a compté →', content: `
      ${saleve()}
      ${bubble({ x: 430, y: 180, w: 600, size: 44, tail: { at: 0.74, dir: 1 }, text: `Point 1${nb}: les <b>4${nb}000 personnes</b> qui vont te juger.` })}
      ${bubble({ x: 40, y: 440, w: 440, size: 46, tail: { at: 0.32, dir: -1 }, text: `J'ai 378 abonnés.` })}
      ${quentin({ ...Q, eyes: { px: 8, py: 0, lid: 0.2 }, brows: [-10, 4], mouth: 'flat', arms: 'shrug' })}
      ${ground()}
      ${chimp({ ...K, eyes: { px: -8, py: 0 }, brows: [8, -8], mouth: 'small', arms: 'point' })}
      ${guichet('CELLULE DE CRISE', 34)}` }),

    slide({ n: 3, total: T, series, cta: 'Pire →', content: `
      ${saleve()}
      ${bubble({ x: 430, y: 180, w: 600, size: 44, tail: { at: 0.74, dir: 1 }, text: `Justement. Ils vont tous la montrer <b>à leur mère</b>.` })}
      ${bubble({ x: 40, y: 440, w: 470, size: 44, tail: { at: 0.32, dir: -1 }, text: `Dont douze sont ma famille.` })}
      ${quentin({ ...Q, eyes: { px: 6, py: 6 }, brows: [-14, 14], browY: -6, mouth: 'wobble', arms: 'think' })}
      ${ground()}
      ${chimp({ ...K, eyes: { px: -8, py: 0 }, brows: [-6, 6], mouth: 'smirk', arms: 'shrug' })}
      ${guichet('CELLULE DE CRISE', 34)}` }),

    slide({ n: 4, total: T, series, cta: 'Stop →', content: `
      ${saleve({ sky: ['#CFCBE6', '#EADFD8'], sun: false, mist: 0.9, dim: 0.12 })}
      ${bubble({ x: 400, y: 170, w: 630, size: 42, tail: { at: 0.76, dir: 1 }, text: `Scénario 12${nb}: ta maîtresse de CM2 commente «${nb}<b>je le savais</b>${nb}».` })}
      ${bubble({ x: 40, y: 450, w: 460, size: 44, tail: { at: 0.32, dir: -1 }, text: `Elle a 94 ans. Et pas Internet.` })}
      ${quentin({ ...Q, eyes: { px: 0, py: 8, lid: 0.3 }, brows: [-18, 18], browY: -4, mouth: 'wobble' })}
      ${ground()}
      ${chimp({ ...K, eyes: { px: -4, py: 0, pr: 3 }, brows: [-16, 16], browY: -8, mouth: 'scream', arms: 'head', sweat: true })}
      ${guichet('ALERTE MAXIMALE', 34)}` }),

    slide({ n: 5, total: T, series, cta: 'Ce que disent les psys →', content: `
      ${saleve({ sky: ['#FFF6EA', '#FFD98A'], mist: 0.9 })}
      ${big('Alors j’ai posé le téléphone.', 66, 150, 700)}
      ${caption({ x: 48, y: 330, w: 560, size: 31, bg: C.creme, rot: 0, text: `Une main sur le ventre. Trois respirations lentes. Le lac n'a pas bougé.` })}
      ${quentin({ ...Q, eyes: { closed: true }, brows: [-4, 4], browY: -4, mouth: 'default', arms: 'heart' })}
      ${ground()}
      ${chimp({ ...K, eyes: { px: -8, py: 0 }, brows: [-8, 8], browY: -4, mouth: 'small', arms: 'calm' })}
      ${guichet('…PAUSE', 34)}` }),

    slide({ n: 6, total: T, series, cta: 'La morale →', source: REF, content: `
      ${saleve()}
      ${tag('L’effet projecteur')}
      ${big(`On croit que tout le monde nous regarde. Mesuré${nb}: ${fl('deux fois moins')} que prévu.`, 62)}
      ${bubble({ x: 600, y: 600, w: 430, size: 42, tail: { at: 0.66, dir: 1 }, text: `Donc 2${nb}000. Ça reste énorme.` })}
      ${quentin({ ...Q, eyes: { px: 8, py: 0, laugh: true }, brows: [-6, 6], browY: -6, mouth: 'smile', arms: 'point' })}
      ${ground()}
      ${chimp({ ...K, eyes: { px: -8, py: 2 }, brows: [-12, 12], browY: -6, mouth: 'wobble', arms: 'rub' })}
      ${guichet('CELLULE DE CRISE', 34)}` }),

    slide({ n: 7, total: T, series, cta: 'Et toi ? →', content: `
      ${saleve()}
      ${tag('Morale de l’histoire')}
      ${big(`Les gens ne te regardent pas. Ils se demandent si ${fl('tu les regardes.')}`, 68)}
      ${quentin({ ...Q, eyes: { px: 5, py: 0, laugh: true }, brows: [-7, 7], browY: -6, mouth: 'smile', arms: 'fist' })}
      ${ground()}
      ${chimp({ ...K, eyes: { closed: true }, brows: [-4, 4], mouth: 'smile', arms: 'calm' })}
      ${guichet('FERMÉ (ENFIN)', 34)}` }),

    slide({ n: 8, total: T, series, cta: 'Envoie-le à un ami ↗', content: fin(`Ton scénario catastrophe préféré${nb}? Raconte en commentaire.`, ['Gilovich, Medvec & Savitsky, «&nbsp;The spotlight effect in social judgment&nbsp;», <i>J. of Personality and Social Psychology</i>, 78(2), 2000.']) }),
  ],
};
