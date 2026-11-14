// Rubrique « L'énigme du Salève » — La peur. On ose : s'approcher de ce qu'on évite.
const { C, useStyle, quentin, chimp, saleve, ground, bubble, caption, slide, sources } = require('../src/kit.js');
useStyle('roman');

const T = 8, nb = '&nbsp;', series = 'L’énigme du Salève';
const Q = { x: -50, y: 600, w: 600 }, K = { x: 590, y: 780, w: 440 };
const REF = 'Craske et al., Behaviour Research and Therapy, 2014.';

module.exports = {
  slug: '04-enigme-peur',
  slides: [
    slide({ n: 1, total: T, series, cta: 'Un indice →', content: `
      ${saleve({ sky: ['#D9D4EA', '#F6E6D2'], mist: 0.95 })}
      ${caption({ x: 48, y: 150, size: 40, bg: C.soleil, rot: -2, text: `Énigme` })}
      <div class="title" style="left:48px;top:256px;width:980px;font-size:66px">Plus tu me fuis, plus je grandis. Plus tu m’approches, plus je rétrécis. <span style="color:${C.flamme}">Qui suis-je${nb}?</span></div>
      ${quentin({ ...Q, eyes: { px: 8, py: 0, lid: 0.2 }, brows: [-10, 4], mouth: 'smirk', arms: 'point' })}
      ${ground()}
      ${chimp({ ...K, eyes: { px: -6, py: -6 }, brows: [-10, 6], browY: -4, mouth: 'small', arms: 'rub' })}` }),

    slide({ n: 2, total: T, series, cta: 'Indice 2 →', content: `
      ${saleve()}
      ${bubble({ x: 560, y: 190, w: 460, size: 48, tail: { at: 0.7, dir: 1 }, text: `Ma to-do list${nb}!` })}
      ${bubble({ x: 40, y: 366, w: 520, size: 44, tail: { at: 0.32, dir: -1 }, text: `Presque. Indice${nb}: je vis <b>dans ton ventre</b>.` })}
      ${quentin({ ...Q, eyes: { px: 8, py: 0, laugh: true }, brows: [-6, 6], browY: -6, mouth: 'smile' })}
      ${ground()}
      ${chimp({ ...K, eyes: { px: -8, py: -2 }, brows: [-8, 8], browY: -6, mouth: 'grin', arms: 'finger' })}` }),

    slide({ n: 3, total: T, series, cta: 'Dernier indice →', content: `
      ${saleve()}
      ${bubble({ x: 600, y: 180, w: 420, size: 48, tail: { at: 0.7, dir: 1 }, text: `Une pizza${nb}?` })}
      ${bubble({ x: 40, y: 380, w: 540, size: 44, tail: { at: 0.32, dir: -1 }, text: `Je disparais quand tu <b>fais le truc</b>.` })}
      ${caption({ x: 560, y: 610, w: 470, size: 28, bg: C.soleil, rot: 1.5, text: `Ta réponse en commentaire, avant la suite${nb}!` })}
      ${quentin({ ...Q, eyes: { px: 8, py: 0 }, brows: [-6, 6], browY: -4, mouth: 'default', arms: 'think' })}
      ${ground()}
      ${chimp({ ...K, eyes: { px: -8, py: -4 }, brows: [-12, 12], browY: -6, mouth: 'open', arms: 'shrug' })}` }),

    slide({ n: 4, total: T, series, cta: 'La réponse →', content: `
      ${saleve({ sky: ['#D9D4EA', '#F1E3D6'], sun: false, mist: 0.9, dim: 0.08 })}
      ${bubble({ x: 470, y: 190, w: 560, size: 76, shout: true, rot: 2, tail: { at: 0.72, dir: 1 }, text: `Attends… c'est MOI${nb}?!` })}
      ${bubble({ x: 40, y: 470, w: 380, size: 46, tail: { at: 0.32, dir: -1 }, text: `Pas loin.` })}
      ${quentin({ ...Q, eyes: { px: 8, py: 0, laugh: true }, brows: [-6, 6], browY: -6, mouth: 'smile' })}
      ${ground()}
      ${chimp({ ...K, eyes: { px: -4, py: 0, pr: 3 }, brows: [-16, 16], browY: -8, mouth: 'scream', arms: 'head', sweat: true })}` }),

    slide({ n: 5, total: T, series, cta: 'Et donc ? →', source: REF, content: `
      ${saleve()}
      ${caption({ x: 48, y: 150, size: 32, bg: C.flamme, color: '#fff', rot: -2, text: `La réponse` })}
      <div class="title" style="left:48px;top:240px;font-size:150px">La peur.</div>
      ${caption({ x: 48, y: 420, w: 640, size: 31, bg: C.creme, rot: 0, text: `Chaque fois que tu l'évites, ton cerveau retient${nb}: «${nb}c'était bien dangereux.${nb}»` })}
      ${quentin({ ...Q, eyes: { px: 6, py: 0 }, brows: [-6, 6], browY: -6, mouth: 'default' })}
      ${ground()}
      ${chimp({ ...K, eyes: { px: -8, py: 4 }, brows: [-14, 14], browY: -6, mouth: 'wobble', arms: 'rub' })}` }),

    slide({ n: 6, total: T, series, cta: 'La morale →', content: `
      ${saleve({ sky: ['#FFF6EA', '#FFD98A'] })}
      ${caption({ x: 48, y: 150, size: 32, bg: C.soleil, rot: -2, text: `Le geste` })}
      <div class="title" style="left:48px;top:250px;width:900px;font-size:66px">Approche d’un pas.<br>Reste trente secondes.<br>Regarde-la rétrécir.</div>
      ${bubble({ x: 600, y: 600, w: 430, size: 42, tail: { at: 0.66, dir: 1 }, text: `Trente secondes. Chrono.` })}
      ${quentin({ ...Q, eyes: { closed: true }, brows: [-4, 4], browY: -4, mouth: 'default', arms: 'heart' })}
      ${ground()}
      ${chimp({ ...K, eyes: { px: -8, py: 0 }, brows: [-10, 10], browY: -4, mouth: 'small', arms: 'finger' })}` }),

    slide({ n: 7, total: T, series, cta: 'Et toi ? →', content: `
      ${saleve()}
      ${caption({ x: 48, y: 150, size: 34, bg: C.flamme, color: '#fff', rot: -2, text: `Morale de l'histoire` })}
      <div class="title" style="left:48px;top:250px;width:960px;font-size:66px">La peur ne se mesure pas de loin. De près, elle fait rarement <span style="color:${C.flamme}">ta taille.</span></div>
      ${quentin({ ...Q, eyes: { px: 5, py: 0, laugh: true }, brows: [-7, 7], browY: -6, mouth: 'smile' })}
      ${ground()}
      ${chimp({ ...K, eyes: { closed: true }, brows: [-4, 4], mouth: 'smile', arms: 'calm' })}` }),

    slide({ n: 8, total: T, series, cta: 'Envoie l’énigme à un ami ↗', content: `
      ${saleve({ sky: ['#FFF6EA', '#FFD98A'] })}
      <div class="title" style="left:48px;top:150px;width:900px;font-size:80px">Viens prendre l’air avec moi.</div>
      <div class="title" style="left:48px;top:334px;width:900px;font-size:52px;color:${C.flamme}">On crée ce qui t’anime.</div>
      ${caption({ x: 48, y: 440, w: 500, size: 30, bg: C.soleil, rot: -1.5, text: `Tu avais trouvé${nb}? Dis-le en commentaire.` })}
      ${quentin({ ...Q, eyes: { px: 5, py: 0, laugh: true }, brows: [-7, 7], browY: -6, mouth: 'smile', arms: 'wave' })}
      ${ground()}
      ${chimp({ ...K, eyes: { px: -8, py: 2 }, brows: [-6, 6], mouth: 'smile', arms: 'hips' })}
      ${sources({ x: 560, y: 560, w: 480, items: ['Craske, Treanor, Conway, Zbozinek & Vervliet, «&nbsp;Maximizing exposure therapy&nbsp;», <i>Behaviour Research and Therapy</i>, 58, 2014.'] })}` }),
  ],
};
