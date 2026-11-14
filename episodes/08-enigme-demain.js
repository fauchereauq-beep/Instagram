// L'énigme du Salève — Demain. On ose : commencer aujourd'hui.
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

const series = 'L’énigme du Salève';
const REF = 'Sirois & Pychyl, Social and Personality Psychology Compass, 2013.';

module.exports = {
  slug: '08-enigme-demain',
  slides: [
    slide({ n: 1, total: T, series, cta: 'Un indice →', content: `
      ${saleve({ sky: ['#D9D4EA', '#F6E6D2'], mist: 0.95 })}
      ${tag('Énigme', C.soleil, C.nuit)}
      ${big(`Je suis toujours en route et je n’arrive jamais. Tu m’as confié tous tes projets. ${fl('Qui suis-je' + nb + '?')}`, 64, 256, 980)}
      ${quentin({ ...Q, eyes: { px: 8, py: 0, lid: 0.2 }, brows: [-10, 4], mouth: 'smirk', arms: 'point' })}
      ${ground()}
      ${chimp({ ...K, eyes: { px: -6, py: -6 }, brows: [-10, 6], browY: -4, mouth: 'small', arms: 'rub' })}` }),

    slide({ n: 2, total: T, series, cta: 'Indice 2 →', content: `
      ${saleve()}
      ${bubble({ x: 600, y: 190, w: 420, size: 48, tail: { at: 0.7, dir: 1 }, text: `Le bus 8${nb}!` })}
      ${bubble({ x: 40, y: 366, w: 540, size: 44, tail: { at: 0.32, dir: -1 }, text: `Non. Indice${nb}: je suis <b>très bien élevé</b>. Je ne dis jamais non.` })}
      ${quentin({ ...Q, eyes: { px: 8, py: 0, laugh: true }, brows: [-6, 6], browY: -6, mouth: 'smile' })}
      ${ground()}
      ${chimp({ ...K, eyes: { px: -8, py: -2 }, brows: [-8, 8], browY: -6, mouth: 'grin', arms: 'finger' })}` }),

    slide({ n: 3, total: T, series, cta: 'Dernier indice →', content: `
      ${saleve()}
      ${bubble({ x: 560, y: 180, w: 460, size: 46, tail: { at: 0.7, dir: 1 }, text: `Ma motivation${nb}?` })}
      ${bubble({ x: 40, y: 366, w: 540, size: 44, tail: { at: 0.32, dir: -1 }, text: `Tu me donnes rendez-vous <b>chaque soir</b>. Je ne viens jamais.` })}
      ${caption({ x: 560, y: 620, w: 470, size: 28, bg: C.soleil, rot: 1.5, text: `Ta réponse en commentaire, avant la suite${nb}!` })}
      ${quentin({ ...Q, eyes: { px: 8, py: 0 }, brows: [-6, 6], browY: -4, mouth: 'default', arms: 'think' })}
      ${ground()}
      ${chimp({ ...K, eyes: { px: -8, py: -4 }, brows: [-12, 12], browY: -6, mouth: 'open', arms: 'shrug' })}` }),

    slide({ n: 4, total: T, series, cta: 'La réponse →', content: `
      ${saleve({ sky: ['#D9D4EA', '#F1E3D6'], sun: false, mist: 0.9, dim: 0.08 })}
      ${bubble({ x: 440, y: 180, w: 590, size: 44, tail: { at: 0.74, dir: 1 }, text: `Attends, je la connais. Je te la donne… <b>demain</b>.` })}
      ${bubble({ x: 40, y: 470, w: 380, size: 48, tail: { at: 0.32, dir: -1 }, text: `Voilà.` })}
      ${quentin({ ...Q, eyes: { px: 8, py: 0, laugh: true }, brows: [-6, 6], browY: -6, mouth: 'grin' })}
      ${ground()}
      ${chimp({ ...K, eyes: { px: -8, py: 0, lid: 0.3 }, brows: [6, -6], mouth: 'smirk', arms: 'finger' })}` }),

    slide({ n: 5, total: T, series, cta: 'Pourquoi ? →', content: `
      ${saleve()}
      ${tag('La réponse')}
      ${big('Demain.', 150, 240)}
      ${bubble({ x: 560, y: 590, w: 470, size: 42, tail: { at: 0.66, dir: 1 }, text: `…Je l'avais dit sans faire exprès.` })}
      ${quentin({ ...Q, eyes: { px: 6, py: 0 }, brows: [-6, 6], browY: -6, mouth: 'default' })}
      ${ground()}
      ${chimp({ ...K, eyes: { px: -4, py: 0, pr: 3 }, brows: [-16, 16], browY: -8, mouth: 'open', arms: 'head' })}` }),

    slide({ n: 6, total: T, series, cta: 'Le geste →', source: REF, content: `
      ${saleve()}
      ${tag('Ce que disent les psys')}
      ${big(`On ne remet pas par flemme. On remet pour ne pas ${fl('ressentir')} un truc désagréable maintenant.`, 60)}
      ${quentin({ ...Q, eyes: { px: 6, py: 0 }, brows: [-6, 6], browY: -6, mouth: 'default', arms: 'think' })}
      ${ground()}
      ${chimp({ ...K, eyes: { px: -8, py: 4 }, brows: [-14, 14], browY: -6, mouth: 'wobble', arms: 'rub' })}` }),

    slide({ n: 7, total: T, series, cta: 'Et toi ? →', content: `
      ${saleve({ sky: ['#FFF6EA', '#FFD98A'] })}
      ${tag('Morale de l’histoire')}
      ${big(`Demain n’a jamais rien fait pour toi. Aujourd’hui, si${nb}: ${fl('deux minutes.')}`, 68)}
      ${bubble({ x: 600, y: 610, w: 430, size: 42, tail: { at: 0.66, dir: 1 }, text: `Deux minutes désagréables, alors.` })}
      ${quentin({ ...Q, eyes: { px: 5, py: 0, laugh: true }, brows: [-7, 7], browY: -6, mouth: 'smile', arms: 'fist' })}
      ${ground()}
      ${chimp({ ...K, eyes: { px: -8, py: 2 }, brows: [-10, 10], browY: -4, mouth: 'small', arms: 'hips' })}` }),

    slide({ n: 8, total: T, series, cta: 'Envoie l’énigme à un ami ↗', content: fin(`Tu avais trouvé avant la planche 5${nb}? Sois honnête.`, ['Sirois & Pychyl, «&nbsp;Procrastination and the priority of short-term mood regulation&nbsp;», <i>Social and Personality Psychology Compass</i>, 7(2), 2013.'], 570) }),
  ],
};
