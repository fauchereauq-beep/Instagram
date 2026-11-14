// Planche de référence : les deux personnages, le décor, la palette. Sert de modèle à tous les épisodes.
const { C, quentin, chimp, saleve, ground, bubble, slide } = require('../src/kit.js');
const nb = '&nbsp;';

// Repères : sol à y = 1196. Quentin w=600 -> tête entre y+12 et y+380. Chimpanzé w=440 -> pieds à y+369.
const Q = { x: -50, y: 590, w: 600 };
const K = { x: 590, y: 780, w: 440 };

const palette = [C.creme, C.sable, C.soleil, C.flamme, C.jungle, C.grisNuit, C.nuit]
  .map((c) => `<span style="display:inline-block;width:56px;height:56px;border-radius:50%;background:${c};border:5px solid ${C.nuit};margin-right:10px"></span>`).join('');

module.exports = {
  slug: '00-univers',
  slides: [
    slide({
      cta: 'Crée ce qui t’anime !',
      content: `
        ${saleve()}
        <div class="title" style="left:50px;top:150px;font-size:96px">Mon chimpanzé<br>et <span style="color:${C.flamme}">moi</span></div>
        <div class="abs" style="left:54px;top:372px">${palette}</div>
        ${bubble({ x: 470, y: 474, w: 560, size: 44, tail: { at: 0.7, dir: 1 }, text: `Et si on rentrait${nb}? On sait jamais.` })}
        ${quentin({ ...Q, eyes: { px: 8, py: 0 }, brows: [-6, 6], browY: -2, mouth: 'grin', arms: 'fist' })}
        ${ground()}
        ${chimp({ ...K, eyes: { px: -8, py: 2 }, brows: [-14, 14], browY: -6, mouth: 'wobble', arms: 'rub', sweat: true })}`,
    }),
  ],
};
