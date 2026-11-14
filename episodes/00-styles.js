// Planches de comparaison : la même scène dans les quatre styles de dessin.
const { C, STYLES, useStyle, quentin, chimp, saleve, ground, bubble, caption, slide } = require('../src/kit.js');
const nb = '&nbsp;';

const NOTES = {
  cartoon: 'Trait épais, gros yeux, très expressif',
  claire: 'Trait fin, aplats, yeux en points',
  roman: 'Yeux réalistes, ombres, bulles carrées',
  carnet: 'Trait tremblé, papier, écriture à la main',
};

function scene(key, i) {
  const st = useStyle(key);
  return slide({
    n: i + 1, total: 4, cta: 'Crée ce qui t’anime !',
    content: `
      ${saleve()}
      ${caption({ x: 44, y: 150, size: 46, bg: C.soleil, rot: -1.5, text: `Style ${i + 1} · ${st.name}` })}
      ${caption({ x: 44, y: 254, size: 28, bg: C.creme, rot: 0, text: NOTES[key] })}
      ${bubble({ x: 40, y: 366, w: 500, size: 44, tail: { at: 0.32, dir: -1 }, text: `Alors, tu me reconnais${nb}?` })}
      ${bubble({ x: 500, y: 540, w: 540, size: 42, tail: { at: 0.7, dir: 1 }, text: `Moi oui. C'est ça qui m'inquiète.` })}
      ${quentin({ x: -50, y: 600, w: 600, eyes: { px: 5, py: 0, laugh: true }, brows: [-7, 7], browY: -6, mouth: 'smile', arms: 'wave' })}
      ${ground()}
      ${chimp({ x: 590, y: 780, w: 440, eyes: { px: -8, py: 2 }, brows: [-14, 14], browY: -6, mouth: 'wobble', arms: 'rub', sweat: true })}`,
  });
}

module.exports = { slug: '00-styles', slides: Object.keys(STYLES).map(scene) };
