// La boîte à outils — Nommer l'émotion. On ose : dire ce qu'on ressent.
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

const series = 'La boîte à outils';
const REF = 'Lieberman et al., Psychological Science, 2007.';

module.exports = {
  slug: '07-nommer-l-emotion',
  slides: [
    slide({ n: 1, total: T, series, cta: 'Le stock →', content: `
      ${saleve()}
      ${big(`«${nb}Ça va${nb}?${nb}»<br>«${nb}Ouais, ça va.${nb}»<br>${fl('(Ça n’allait pas.)')}`, 84, 150)}
      ${quentin({ ...Q, eyes: { px: 8, py: 4 }, brows: [-12, 12], browY: -6, mouth: 'default' })}
      ${ground()}
      ${chimp({ ...K, eyes: { px: -8, py: 0, lid: 0.25 }, brows: [8, -8], mouth: 'flat', arms: 'hips' })}
      ${guichet('ÉMOTIONS', 38)}` }),

    slide({ n: 2, total: T, series, cta: 'Autre chose ? →', content: `
      ${saleve()}
      ${bubble({ x: 40, y: 190, w: 520, size: 44, tail: { at: 0.3, dir: -1 }, text: `Bonjour. Je ressens un truc. Vous avez quoi${nb}?` })}
      ${bubble({ x: 520, y: 520, w: 510, size: 44, tail: { at: 0.7, dir: 1 }, text: `«${nb}Ça va${nb}» ou «${nb}<b>bof</b>${nb}». C'est tout le stock.` })}
      ${quentin({ ...Q, eyes: { px: 8, py: 0 }, brows: [-10, 10], browY: -6, mouth: 'small', arms: 'shrug' })}
      ${ground()}
      ${chimp({ ...K, eyes: { px: -8, py: 2, lid: 0.35 }, brows: [6, -6], mouth: 'flat', arms: 'shrug' })}
      ${guichet('ÉMOTIONS', 38)}` }),

    slide({ n: 3, total: T, series, cta: 'Ça déborde →', content: `
      ${saleve({ sky: ['#CFCBE6', '#EADFD8'], sun: false, mist: 0.9, dim: 0.12 })}
      ${bubble({ x: 40, y: 180, w: 540, size: 44, tail: { at: 0.3, dir: -1 }, text: `J'ai mangé trois tartines. Scrollé une heure. <b>Rangé le garage.</b>` })}
      ${bubble({ x: 600, y: 590, w: 430, size: 42, tail: { at: 0.66, dir: 1 }, text: `Donc «${nb}bof${nb}». Suivant${nb}!` })}
      ${quentin({ ...Q, eyes: { px: 0, py: 8, lid: 0.3 }, brows: [-18, 18], browY: -4, mouth: 'wobble', arms: 'think' })}
      ${ground()}
      ${chimp({ ...K, eyes: { px: -8, py: 0 }, brows: [-6, 6], mouth: 'smirk', arms: 'point' })}
      ${guichet('ÉMOTIONS', 38)}` }),

    slide({ n: 4, total: T, series, cta: 'La découverte →', content: `
      ${saleve({ sky: ['#FFF6EA', '#FFD98A'], mist: 0.9 })}
      ${big('Alors je me suis assis.', 70, 150, 700)}
      ${caption({ x: 48, y: 340, w: 580, size: 31, bg: C.creme, rot: 0, text: `Où est-ce que ça serre${nb}? La gorge. Quel mot va avec${nb}? «${nb}J'ai peur de décevoir.${nb}»` })}
      ${quentin({ ...Q, eyes: { closed: true }, brows: [-6, 6], browY: -4, mouth: 'small', arms: 'heart' })}
      ${ground()}
      ${chimp({ ...K, eyes: { px: -8, py: 0 }, brows: [-10, 10], browY: -6, mouth: 'small', arms: 'calm' })}
      ${guichet('…INVENTAIRE', 34)}` }),

    slide({ n: 5, total: T, series, cta: 'Mode d’emploi →', source: REF, content: `
      ${saleve()}
      ${tag('Ce que montrent les scanners')}
      ${big(`Mettre un mot précis sur une émotion ${fl('calme l’alarme')} dans le cerveau.`, 66)}
      ${bubble({ x: 640, y: 610, w: 380, size: 42, tail: { at: 0.62, dir: 1 }, text: `Un mot. C'est tout${nb}?` })}
      ${quentin({ ...Q, eyes: { px: 8, py: 0, laugh: true }, brows: [-6, 6], browY: -6, mouth: 'smile', arms: 'point' })}
      ${ground()}
      ${chimp({ ...K, eyes: { px: -8, py: -2 }, brows: [-12, 12], browY: -8, mouth: 'open', arms: 'rub' })}
      ${guichet('ÉMOTIONS', 38)}` }),

    slide({ n: 6, total: T, series, cta: 'La morale →', content: `
      ${saleve({ sky: ['#FFF6EA', '#FFD98A'] })}
      ${tag('Le geste', C.soleil, C.nuit)}
      ${big(`Dis-le à voix haute${nb}: «${nb}Là, je ressens…${nb}» et cherche ${fl('le mot exact.')}`, 66)}
      ${bubble({ x: 560, y: 600, w: 470, size: 42, tail: { at: 0.66, dir: 1 }, text: `Là, je ressens… du soulagement.` })}
      ${quentin({ ...Q, eyes: { px: 8, py: 0, laugh: true }, brows: [-6, 6], browY: -6, mouth: 'smile' })}
      ${ground()}
      ${chimp({ ...K, eyes: { closed: true }, brows: [-4, 4], mouth: 'smile', arms: 'calm' })}
      ${guichet('NOUVEL ARRIVAGE', 34)}` }),

    slide({ n: 7, total: T, series, cta: 'Et toi ? →', content: `
      ${saleve()}
      ${tag('Morale de l’histoire')}
      ${big(`Ce que tu nommes te lâche un peu. Ce que tu tais ${fl('te tient.')}`, 70)}
      ${quentin({ ...Q, eyes: { px: 5, py: 0, laugh: true }, brows: [-7, 7], browY: -6, mouth: 'smile', arms: 'fist' })}
      ${ground()}
      ${chimp({ ...K, eyes: { px: -8, py: 2 }, brows: [-6, 6], mouth: 'smile', arms: 'hips' })}
      ${guichet('347 EN STOCK', 36)}` }),

    slide({ n: 8, total: T, series, cta: 'Enregistre-le ↗', content: fin(`Là, tout de suite, tu ressens quoi${nb}? Un seul mot.`, ['Lieberman et al., «&nbsp;Putting feelings into words&nbsp;», <i>Psychological Science</i>, 18(5), 2007.']) }),
  ],
};
