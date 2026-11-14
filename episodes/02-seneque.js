// Rubrique « Le sage et le singe » — Sénèque. On ose : commencer ce qui paraît trop dur.
// Accroche et relances construites sur le modèle de Hooked (Nir Eyal) : déclencheur, action facile, récompense variable, investissement.
const { C, useStyle, quentin, chimp, saleve, ground, bubble, caption, slide, sources } = require('../src/kit.js');
useStyle('roman');

const T = 8, nb = '&nbsp;', series = 'Le sage et le singe';
const Q = { x: -50, y: 600, w: 600 }, K = { x: 590, y: 780, w: 440 };
const REF = 'Sénèque, Lettres à Lucilius, lettre 104, § 26.';

module.exports = {
  slug: '02-seneque',
  slides: [
    slide({ n: 1, total: T, series, cta: 'Sa réponse →', content: `
      ${saleve()}
      <div class="title" style="left:48px;top:150px;width:900px;font-size:92px">«${nb}C’est trop dur pour moi.${nb}»</div>
      ${caption({ x: 48, y: 400, w: 600, size: 34, bg: C.soleil, rot: -1.5, text: `Un Romain a répondu à cette phrase il y a 2${nb}000${nb}ans.` })}
      ${bubble({ x: 600, y: 600, w: 430, size: 42, tail: { at: 0.66, dir: 1 }, text: `Il avait pas mes problèmes.` })}
      ${quentin({ ...Q, eyes: { px: 8, py: 0 }, brows: [-8, 8], browY: -6, mouth: 'default', arms: 'point' })}
      ${ground()}
      ${chimp({ ...K, eyes: { px: -8, py: 2, lid: 0.3 }, brows: [8, -8], mouth: 'flat', arms: 'hips' })}` }),

    slide({ n: 2, total: T, series, cta: 'Le singe traduit →', source: REF, content: `
      ${saleve({ sky: ['#FFF6EA', '#FFD98A'] })}
      <div class="title" style="left:48px;top:150px;width:990px;font-size:58px;line-height:1.08;letter-spacing:-1px">«${nb}Ce n’est pas parce que les choses sont difficiles que nous n’osons pas. C’est parce que nous n’osons pas qu’elles sont <span style="color:${C.flamme}">difficiles</span>.${nb}»</div>
      ${caption({ x: 48, y: 530, size: 30, bg: C.creme, rot: 0, text: `Sénèque, vers l'an 64` })}
      ${quentin({ ...Q, eyes: { px: 4, py: -8 }, brows: [-8, 8], browY: -8, mouth: 'default', arms: 'think' })}
      ${ground()}
      ${chimp({ ...K, eyes: { px: -6, py: -8 }, brows: [-10, 6], browY: -4, mouth: 'small', arms: 'rub' })}` }),

    slide({ n: 3, total: T, series, cta: 'Presque →', content: `
      ${saleve()}
      ${bubble({ x: 440, y: 180, w: 590, size: 44, tail: { at: 0.74, dir: 1 }, text: `Donc si j'ose rien, y a <b>rien de difficile</b>. Génial.` })}
      ${bubble({ x: 40, y: 440, w: 430, size: 46, tail: { at: 0.32, dir: -1 }, text: `C'est l'inverse.` })}
      ${quentin({ ...Q, eyes: { px: 8, py: 0, lid: 0.25 }, brows: [0, 0], mouth: 'flat' })}
      ${ground()}
      ${chimp({ ...K, eyes: { px: -8, py: -2 }, brows: [-6, 6], browY: -6, mouth: 'grin', arms: 'up' })}` }),

    slide({ n: 4, total: T, series, cta: 'Et pourtant →', content: `
      ${saleve({ sky: ['#D9D4EA', '#F1E3D6'], sun: false, mist: 0.9, dim: 0.08 })}
      ${bubble({ x: 430, y: 180, w: 600, size: 44, tail: { at: 0.74, dir: 1 }, text: `Écrire le premier mail${nb}: <b>l'Everest</b>. Sans oxygène. De nuit.` })}
      ${bubble({ x: 40, y: 450, w: 440, size: 46, tail: { at: 0.32, dir: -1 }, text: `T'as jamais essayé.` })}
      ${quentin({ ...Q, eyes: { px: 8, py: 2 }, brows: [-10, 10], browY: -4, mouth: 'smirk', arms: 'shrug' })}
      ${ground()}
      ${chimp({ ...K, eyes: { px: -4, py: 0, pr: 3 }, brows: [-16, 16], browY: -8, mouth: 'scream', arms: 'head', sweat: true })}` }),

    slide({ n: 5, total: T, series, cta: 'Le geste →', content: `
      ${saleve()}
      ${caption({ x: 48, y: 150, size: 32, bg: C.flamme, color: '#fff', rot: -2, text: `Ce que dit Sénèque` })}
      <div class="title" style="left:48px;top:250px;width:940px;font-size:70px">La montagne grossit<br>tant que tu la regardes<br><span style="color:${C.flamme}">d’en bas.</span></div>
      ${quentin({ ...Q, eyes: { px: 6, py: -8 }, brows: [-6, 6], browY: -6, mouth: 'default' })}
      ${ground()}
      ${chimp({ ...K, eyes: { px: -8, py: -6 }, brows: [-10, 10], browY: -6, mouth: 'small', arms: 'rub' })}` }),

    slide({ n: 6, total: T, series, cta: 'La morale →', content: `
      ${saleve({ sky: ['#FFF6EA', '#FFD98A'] })}
      ${caption({ x: 48, y: 150, size: 32, bg: C.soleil, rot: -2, text: `Le geste` })}
      <div class="title" style="left:48px;top:250px;width:900px;font-size:70px">Fais les deux premières minutes. Pas le projet.</div>
      ${bubble({ x: 560, y: 590, w: 470, size: 42, tail: { at: 0.66, dir: 1 }, text: `Deux minutes, je peux survivre.` })}
      ${quentin({ ...Q, eyes: { px: 8, py: 0, laugh: true }, brows: [-6, 6], browY: -6, mouth: 'smile', arms: 'fist' })}
      ${ground()}
      ${chimp({ ...K, eyes: { px: -8, py: 0 }, brows: [-6, 6], mouth: 'smile', arms: 'finger' })}` }),

    slide({ n: 7, total: T, series, cta: 'Et toi ? →', content: `
      ${saleve()}
      ${caption({ x: 48, y: 150, size: 34, bg: C.flamme, color: '#fff', rot: -2, text: `Morale de l'histoire` })}
      <div class="title" style="left:48px;top:250px;width:960px;font-size:64px">Ce n’est pas dur parce que c’est grand. C’est grand parce que tu n’y as pas <span style="color:${C.flamme}">touché.</span></div>
      ${quentin({ ...Q, eyes: { px: 5, py: 0, laugh: true }, brows: [-7, 7], browY: -6, mouth: 'smile' })}
      ${ground()}
      ${chimp({ ...K, eyes: { closed: true }, brows: [-4, 4], mouth: 'smile', arms: 'calm' })}` }),

    slide({ n: 8, total: T, series, cta: 'Envoie-le à un ami ↗', content: `
      ${saleve({ sky: ['#FFF6EA', '#FFD98A'] })}
      <div class="title" style="left:48px;top:150px;width:900px;font-size:80px">Viens prendre l’air avec moi.</div>
      <div class="title" style="left:48px;top:334px;width:900px;font-size:52px;color:${C.flamme}">On crée ce qui t’anime.</div>
      ${caption({ x: 48, y: 440, w: 560, size: 32, bg: C.soleil, rot: -1.5, text: `Ton «${nb}trop dur${nb}» du moment${nb}? Écris-le en commentaire.` })}
      ${quentin({ ...Q, eyes: { px: 5, py: 0, laugh: true }, brows: [-7, 7], browY: -6, mouth: 'smile', arms: 'wave' })}
      ${ground()}
      ${chimp({ ...K, eyes: { px: -8, py: 2 }, brows: [-6, 6], mouth: 'smile', arms: 'hips' })}
      ${sources({ x: 560, y: 596, w: 480, items: ['Sénèque, <i>Lettres à Lucilius</i>, lettre 104, § 26 (v. 64 apr. J.-C.).'] })}` }),
  ],
};
