// Rubrique « La boîte à outils » — La visualisation. On ose : regarder l'obstacle en face.
const { C, useStyle, quentin, chimp, saleve, ground, bubble, caption, slide, sources } = require('../src/kit.js');
useStyle('roman');

const T = 8, nb = '&nbsp;', series = 'La boîte à outils';
const Q = { x: -50, y: 600, w: 600 }, K = { x: 590, y: 780, w: 440 };
const ligne = (n, t) => `<div style="display:flex;gap:16px;align-items:center;margin-bottom:14px"><span style="flex:none;width:58px;height:58px;border-radius:50%;background:${C.soleil};border:5px solid ${C.nuit};display:flex;align-items:center;justify-content:center;font-size:30px">${n}</span><span>${t}</span></div>`;

module.exports = {
  slug: '03-visualisation',
  slides: [
    slide({ n: 1, total: T, series, cta: 'La preuve →', source: 'Kappes & Oettingen, Journal of Experimental Social Psychology, 2011.', content: `
      ${saleve()}
      <div class="title" style="left:48px;top:150px;width:960px;font-size:78px">Visualiser ta réussite te donne <span style="color:${C.flamme}">moins</span> d’énergie pour y aller.</div>
      ${bubble({ x: 590, y: 600, w: 440, size: 42, tail: { at: 0.66, dir: 1 }, text: `Moi, je me vois déjà riche.` })}
      ${quentin({ ...Q, eyes: { px: 8, py: 0 }, brows: [-10, 10], browY: -8, mouth: 'small', arms: 'think' })}
      ${ground()}
      ${chimp({ ...K, eyes: { closed: true }, brows: [-6, 6], mouth: 'grin', arms: 'calm' })}` }),

    slide({ n: 2, total: T, series, cta: 'Aïe →', content: `
      ${saleve({ sky: ['#FFF6EA', '#FFD98A'] })}
      ${bubble({ x: 430, y: 180, w: 600, size: 44, tail: { at: 0.74, dir: 1 }, text: `Je visualise mon livre. Les dédicaces. <b>La foule.</b>` })}
      ${bubble({ x: 40, y: 400, w: 400, size: 44, tail: { at: 0.4, dir: -1 }, text: `T'as écrit combien de pages${nb}?` })}
      ${quentin({ ...Q, eyes: { px: 8, py: 0, lid: 0.2 }, brows: [-10, 4], mouth: 'smirk' })}
      ${ground()}
      ${chimp({ ...K, eyes: { closed: true }, brows: [-8, 8], browY: -4, mouth: 'grin', arms: 'up' })}` }),

    slide({ n: 3, total: T, series, cta: 'Alors on arrête ? →', source: 'Kappes & Oettingen (2011) : quatre expériences, énergie mesurée après la rêverie.', content: `
      ${saleve()}
      ${bubble({ x: 470, y: 180, w: 560, size: 44, tail: { at: 0.74, dir: 1 }, text: `Zéro. Mais dans ma tête, c'est un <b>best-seller</b>.` })}
      ${caption({ x: 40, y: 440, w: 500, size: 32, bg: C.soleil, rot: -1.5, text: `Rêver l'arrivée détend le corps, comme si c'était fait.` })}
      ${quentin({ ...Q, eyes: { px: 8, py: 2 }, brows: [-12, 12], browY: -6, mouth: 'flat', arms: 'shrug' })}
      ${ground()}
      ${chimp({ ...K, eyes: { px: -8, py: 2, lid: 0.4 }, brows: [0, 0], mouth: 'smile', arms: 'calm' })}` }),

    slide({ n: 4, total: T, series, cta: 'La méthode →', source: 'Gabriele Oettingen, Rethinking Positive Thinking, 2014.', content: `
      ${saleve()}
      ${caption({ x: 48, y: 150, size: 32, bg: C.flamme, color: '#fff', rot: -2, text: `Le retournement` })}
      <div class="title" style="left:48px;top:250px;width:940px;font-size:76px">On garde le rêve. On ajoute <span style="color:${C.flamme}">l’obstacle.</span></div>
      ${bubble({ x: 600, y: 590, w: 430, size: 42, tail: { at: 0.66, dir: 1 }, text: `J'aimais mieux la foule.` })}
      ${quentin({ ...Q, eyes: { px: 8, py: 0 }, brows: [-6, 6], browY: -6, mouth: 'default', arms: 'point' })}
      ${ground()}
      ${chimp({ ...K, eyes: { px: -8, py: 2 }, brows: [-14, 14], browY: -6, mouth: 'wobble', arms: 'rub' })}` }),

    slide({ n: 5, total: T, series, cta: 'Un exemple →', source: 'Méthode WOOP (contraste mental), Oettingen, 2014.', content: `
      ${saleve({ sky: ['#FFF6EA', '#FFD98A'] })}
      <div class="abs" style="left:48px;top:150px;width:800px;font-family:Poppins;font-weight:700;font-size:40px;line-height:1.1;color:${C.nuit}">
        ${ligne(1, 'Ton souhait.')}${ligne(2, 'Le meilleur résultat.')}${ligne(3, `L’obstacle <span style="color:${C.flamme}">en toi</span>.`)}${ligne(4, 'Si l’obstacle arrive, alors je…')}
      </div>
      ${quentin({ ...Q, eyes: { px: 6, py: -6 }, brows: [-6, 6], browY: -6, mouth: 'default', arms: 'think' })}
      ${ground()}
      ${chimp({ ...K, eyes: { px: -8, py: -6 }, brows: [-8, 8], browY: -4, mouth: 'small', arms: 'hips' })}` }),

    slide({ n: 6, total: T, series, cta: 'La morale →', source: 'Plans « si… alors » : Gollwitzer, American Psychologist, 1999.', content: `
      ${saleve()}
      ${bubble({ x: 40, y: 180, w: 580, size: 44, tail: { at: 0.3, dir: -1 }, text: `<b>Si</b> j'ai envie de scroller, <b>alors</b> j'écris une phrase.` })}
      ${bubble({ x: 640, y: 600, w: 380, size: 44, tail: { at: 0.62, dir: 1 }, text: `Une seule${nb}?` })}
      ${quentin({ ...Q, eyes: { px: 8, py: 0, laugh: true }, brows: [-6, 6], browY: -6, mouth: 'smile', arms: 'pencil' })}
      ${ground()}
      ${chimp({ ...K, eyes: { px: -8, py: 0 }, brows: [-10, 10], browY: -6, mouth: 'small', arms: 'finger' })}` }),

    slide({ n: 7, total: T, series, cta: 'Et toi ? →', content: `
      ${saleve()}
      ${caption({ x: 48, y: 150, size: 34, bg: C.flamme, color: '#fff', rot: -2, text: `Morale de l'histoire` })}
      <div class="title" style="left:48px;top:250px;width:960px;font-size:62px">Ne visualise pas l’arrivée. Visualise le caillou sur le chemin, et ton pied qui <span style="color:${C.flamme}">l’enjambe.</span></div>
      ${quentin({ ...Q, eyes: { px: 5, py: 0, laugh: true }, brows: [-7, 7], browY: -6, mouth: 'smile' })}
      ${ground()}
      ${chimp({ ...K, eyes: { px: -8, py: 6 }, brows: [-6, 6], mouth: 'smile', arms: 'calm' })}` }),

    slide({ n: 8, total: T, series, cta: 'Enregistre-le ↗', content: `
      ${saleve({ sky: ['#FFF6EA', '#FFD98A'] })}
      <div class="title" style="left:48px;top:150px;width:900px;font-size:80px">Viens prendre l’air avec moi.</div>
      <div class="title" style="left:48px;top:334px;width:900px;font-size:52px;color:${C.flamme}">On crée ce qui t’anime.</div>
      ${caption({ x: 48, y: 440, w: 500, size: 30, bg: C.soleil, rot: -1.5, text: `Ton «${nb}si… alors${nb}»${nb}? Écris-le en commentaire.` })}
      ${quentin({ ...Q, eyes: { px: 5, py: 0, laugh: true }, brows: [-7, 7], browY: -6, mouth: 'smile', arms: 'wave' })}
      ${ground()}
      ${chimp({ ...K, eyes: { px: -8, py: 2 }, brows: [-6, 6], mouth: 'smile', arms: 'hips' })}
      ${sources({ x: 560, y: 596, w: 480, items: ['Kappes & Oettingen, <i>J. Exp. Social Psychology</i>, 47(4), 2011.', 'Oettingen, <i>Rethinking Positive Thinking</i>, 2014.', 'Gollwitzer, <i>American Psychologist</i>, 54(7), 1999.'] })}` }),
  ],
};
