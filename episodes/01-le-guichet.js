// Épisode 1 — « Le guichet ». On ose : se passer de permission.
// Fil de la série : tu n'oses pas, voilà pourquoi, et voilà un geste pour oser quand même.
const { C, useStyle, quentin, chimp, saleve, ground, bubble, caption, slide } = require('../src/kit.js');
useStyle('roman');

const TOTAL = 7;
const nb = '&nbsp;';
const Q = { x: -50, y: 600, w: 600 };
const K = { x: 590, y: 780, w: 440 };
const P = `stroke="${C.nuit}" stroke-width="5" stroke-linejoin="round"`;

// Le guichet du Chimpanzé, posé sur son rocher.
const guichet = (sign) => `<svg class="abs" style="left:0;top:0" width="1080" height="1350" viewBox="0 0 1080 1350">
  <rect x="572" y="1036" width="476" height="150" fill="#C99A62" ${P}/>
  <path d="M 572 1036 h 476 v 150 h -160 Z" fill="${C.nuit}" opacity=".14"/>
  <rect x="556" y="1010" width="508" height="36" rx="6" fill="#E0B57E" ${P}/>
  <rect x="632" y="1070" width="356" height="76" rx="8" fill="${C.creme}" ${P}/>
  <text x="810" y="1122" text-anchor="middle" font-family="Poppins" font-weight="700" font-size="38" fill="${C.nuit}">${sign}</text>
</svg>`;

const feuille = (x, y, r, t = '') => `<div class="abs" style="left:${x}px;top:${y}px;width:120px;height:156px;background:#fff;border:5px solid ${C.nuit};transform:rotate(${r}deg);font-family:Poppins;font-weight:700;font-size:22px;padding:10px;line-height:1.5;color:${C.grisNuit}">${t}<br>▬▬▬▬<br>▬▬▬<br>▬▬▬▬</div>`;

const tampon = (text, { x, y, size = 120, color = C.flamme, rot = -10 }) =>
  `<div class="abs" style="left:${x}px;top:${y}px;border:12px solid ${color};border-radius:14px;color:${color};font-family:Poppins;font-weight:700;font-size:${size}px;line-height:1;padding:14px 30px 8px;transform:rotate(${rot}deg);letter-spacing:4px;background:rgba(255,246,234,.75)">${text}</div>`;

// Le tampon encreur, tenu dans le poing de Quentin.
const outil = `<svg class="abs" style="left:432px;top:860px" width="130" height="150" viewBox="0 0 130 150">
  <g transform="rotate(14 65 75)"><circle cx="65" cy="24" r="20" fill="#8A5A2B" ${P}/><rect x="55" y="38" width="20" height="52" fill="#8A5A2B" ${P}/>
  <rect x="22" y="88" width="86" height="30" rx="6" fill="${C.nuit}" ${P}/><rect x="28" y="116" width="74" height="10" fill="${C.flamme}" ${P}/></g></svg>`;

module.exports = {
  slug: '01-le-guichet',
  slides: [
    // 1 — Accroche
    slide({
      n: 1, total: TOTAL,
      content: `
        ${saleve()}
        <div class="title" style="left:48px;top:150px;width:900px;font-size:84px">J’ai demandé<br>la permission de<br><span style="color:${C.flamme}">vivre ma vie.</span></div>
        ${bubble({ x: 520, y: 520, w: 510, size: 46, tail: { at: 0.7, dir: 1 }, text: `On en reparle en <b>2031</b>.` })}
        ${quentin({ ...Q, eyes: { px: 8, py: 0 }, brows: [-10, 10], browY: -8, mouth: 'default' })}
        ${ground()}
        ${chimp({ ...K, eyes: { px: -8, py: 2, lid: 0.35 }, brows: [8, -8], mouth: 'flat', arms: 'finger' })}
        ${guichet('AUTORISATIONS')}`,
    }),

    // 2 — Escalade
    slide({
      n: 2, total: TOTAL,
      content: `
        ${saleve()}
        ${bubble({ x: 40, y: 190, w: 540, size: 46, tail: { at: 0.3, dir: -1 }, text: `Je veux juste lancer mon projet.` })}
        ${bubble({ x: 460, y: 440, w: 580, size: 44, tail: { at: 0.72, dir: 1 }, text: `Formulaire B-12. En trois exemplaires. <b>Signé par tes parents.</b>` })}
        ${quentin({ ...Q, eyes: { px: 8, py: 0 }, brows: [-12, 12], browY: -8, mouth: 'small', arms: 'shrug' })}
        ${ground()}
        ${chimp({ ...K, eyes: { px: -8, py: 4, lid: 0.3 }, brows: [6, -6], mouth: 'flat', arms: 'point' })}
        ${guichet('AUTORISATIONS')}
        ${feuille(548, 884, -9, 'B-12')}${feuille(590, 872, 5, 'B-12')}`,
    }),

    // 3 — Escalade, plus absurde
    slide({
      n: 3, total: TOTAL,
      content: `
        ${saleve()}
        ${bubble({ x: 440, y: 170, w: 600, size: 42, tail: { at: 0.74, dir: 1 }, text: `Pièces manquantes${nb}: un diplôme, une garantie de succès, <b>l'accord de tata Monique</b>.` })}
        ${bubble({ x: 40, y: 430, w: 480, size: 44, tail: { at: 0.3, dir: -1 }, text: `Elle a jamais aimé mes idées.` })}
        ${quentin({ ...Q, eyes: { px: 6, py: 6 }, brows: [-16, 16], browY: -6, mouth: 'frown', arms: 'think' })}
        ${ground()}
        ${chimp({ ...K, eyes: { px: -8, py: 2 }, brows: [-6, 6], mouth: 'smirk', arms: 'shrug' })}
        ${guichet('AUTORISATIONS')}
        ${feuille(544, 880, -11)}${feuille(590, 866, 4)}${feuille(948, 876, 10)}`,
    }),

    // 4 — Point culminant : au fond du trou
    slide({
      n: 4, total: TOTAL,
      content: `
        ${saleve({ sky: ['#CFCBE6', '#EADFD8'], sun: false, mist: 0.9, dim: 0.12 })}
        ${tampon('REFUSÉ', { x: 250, y: 150, size: 130, rot: -8 })}
        ${bubble({ x: 470, y: 480, w: 570, size: 44, tail: { at: 0.72, dir: 1 }, text: `Motif${nb}: et si ça se voyait que <b>t'as peur</b>${nb}?` })}
        ${feuille(60, 420, -18)}${feuille(330, 470, 14)}
        ${quentin({ ...Q, eyes: { px: 0, py: 8, lid: 0.3 }, brows: [-18, 18], browY: -4, mouth: 'wobble' })}
        ${bubble({ x: 30, y: 1010, w: 470, size: 40, tail: { at: 0.5, dir: 0, side: 'top' }, text: `Dix ans que je fais la queue.` })}
        ${ground()}
        ${chimp({ ...K, eyes: { px: -6, py: 0 }, brows: [-14, 14], browY: -6, mouth: 'wobble', arms: 'rub', sweat: true })}
        ${guichet('AUTORISATIONS')}`,
    }),

    // 5 — Bascule : il s'arrête, respire, revient au corps
    slide({
      n: 5, total: TOTAL,
      content: `
        ${saleve({ sky: ['#FFF6EA', '#FFD98A'], mist: 0.9 })}
        <div class="title" style="left:48px;top:160px;width:700px;font-size:68px">Alors j’ai arrêté de faire la queue.</div>
        ${caption({ x: 48, y: 420, size: 34, bg: C.creme, rot: 0, text: `J'ai respiré. Senti mes pieds. Regardé le lac.` })}
        ${quentin({ ...Q, eyes: { closed: true }, brows: [-4, 4], browY: -4, mouth: 'default', arms: 'heart' })}
        ${ground()}
        ${chimp({ ...K, eyes: { px: -8, py: 0 }, brows: [-8, 8], browY: -4, mouth: 'small', arms: 'calm' })}
        ${guichet('…PAUSE ?')}`,
    }),

    // 6 — Le message
    slide({
      n: 6, total: TOTAL,
      content: `
        ${saleve()}
        ${bubble({ x: 40, y: 170, w: 560, size: 46, tail: { at: 0.3, dir: -1 }, text: `Attends… c'est <b>moi</b> qui tiens le tampon.` })}
        ${bubble({ x: 600, y: 560, w: 420, size: 44, tail: { at: 0.66, dir: 1 }, text: `…Depuis le début${nb}?` })}
        ${quentin({ ...Q, eyes: { px: 8, py: -2, laugh: true }, brows: [-8, 8], browY: -8, mouth: 'grin', arms: 'fist' })}
        ${outil}
        ${ground()}
        ${chimp({ ...K, eyes: { px: -8, py: -2 }, brows: [-12, 12], browY: -8, mouth: 'open', arms: 'head' })}
        ${guichet('AUTORISATIONS')}
        ${caption({ x: 36, y: 1076, w: 490, size: 33, bg: C.soleil, rot: -1.5, text: `Personne ne viendra te donner la permission.` })}`,
    }),

    // 7 — Appel final
    slide({
      n: 7, total: TOTAL, cta: 'Envoie-le à un ami ↗',
      content: `
        ${saleve({ sky: ['#FFF6EA', '#FFD98A'] })}
        <div class="title" style="left:48px;top:150px;width:900px;font-size:84px">Viens prendre l’air avec moi.</div>
        <div class="title" style="left:48px;top:340px;width:900px;font-size:56px;color:${C.flamme}">On crée ce qui t’anime.</div>
        ${bubble({ x: 560, y: 560, w: 470, size: 42, tail: { at: 0.66, dir: 1 }, text: `Je garde le formulaire. Au cas où.` })}
        ${quentin({ ...Q, eyes: { px: 5, py: 0, laugh: true }, brows: [-7, 7], browY: -6, mouth: 'smile', arms: 'wave' })}
        ${ground()}
        ${chimp({ ...K, eyes: { px: -8, py: 2 }, brows: [-6, 6], mouth: 'smile', arms: 'hips' })}
        ${guichet('OUVERT')}
        ${tampon('ACCORDÉ', { x: 70, y: 470, size: 64, color: C.jungle, rot: -7 })}`,
    }),
  ],
};
