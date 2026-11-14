// Épisode 1 — « Aujourd'hui, je crée. »
// Idée de fond : la procrastination du créateur protège un chef-d'œuvre imaginaire.
const { C, INK, quentin, brain, bubble, caption, burst, floor, link, slide } = require('../src/kit.js');

const TOTAL = 7;
const nb = '&nbsp;';

// Le dessin raté de la dernière planche : une pieuvre à trois cœurs.
const pieuvre = `
<svg class="abs" style="left:0;top:0" width="100%" height="100%" viewBox="0 0 640 560">
  <g fill="none" stroke="#6B4FBF" stroke-width="9" stroke-linecap="round" stroke-linejoin="round">
    <path d="M 214 250 C 196 150, 268 92, 336 104 C 412 112, 452 176, 428 256 C 420 282, 232 290, 214 250 Z" fill="#CDBEFF"/>
    <path d="M 226 270 C 190 330, 150 330, 120 380 C 108 404, 132 420, 146 400"/>
    <path d="M 256 280 C 250 350, 204 380, 214 440 C 220 462, 246 456, 240 436"/>
    <path d="M 292 284 C 300 350, 276 400, 296 452"/>
    <path d="M 328 284 C 330 340, 356 380, 344 440 C 340 460, 364 464, 368 444"/>
    <path d="M 364 282 C 388 340, 430 350, 436 410"/>
    <path d="M 396 276 C 440 310, 486 300, 510 350 C 520 372, 498 384, 490 366"/>
    <path d="M 420 262 C 470 262, 500 232, 540 250"/>
    <path d="M 220 256 C 170 262, 150 230, 106 246"/>
  </g>
  <circle cx="288" cy="186" r="15" fill="#fff" stroke="${INK}" stroke-width="6"/><circle cx="291" cy="189" r="6" fill="${INK}"/>
  <circle cx="364" cy="176" r="21" fill="#fff" stroke="${INK}" stroke-width="6"/><circle cx="360" cy="180" r="7" fill="${INK}"/>
  <path d="M 300 232 Q 330 252 362 226" fill="none" stroke="${INK}" stroke-width="6" stroke-linecap="round"/>
  ${[[92, 92, 1], [506, 76, 1.15], [540, 170, 0.9]].map(([x, y, k], i) => `
    <g transform="translate(${x} ${y}) scale(${k})">
      <path d="M 0 14 C -26 -14, -52 16, 0 54 C 52 16, 26 -14, 0 14 Z" fill="${C.coral}" stroke="${INK}" stroke-width="6" stroke-linejoin="round"/>
      <text x="0" y="-22" text-anchor="middle" font-family="Hand" font-size="40" fill="${INK}">${i + 1}</text>
    </g>`).join('')}
  <text x="556" y="530" text-anchor="end" font-family="Hand" font-size="46" fill="${INK}">Q.</text>
</svg>`;

// Repères : le sol est à y = 1196. Avatar w=600 -> tête entre y+12 et y+380. Cerveau w=440 -> pieds à y+361.
const Q = { x: -50, y: 590, w: 600 };
const B = { x: 590, y: 852, w: 440 };

module.exports = {
  slug: 'ep01-aujourdhui-je-cree',
  slides: [
    // 1 — Couverture
    slide({
      n: 1, total: TOTAL, bg: C.mustard,
      bgCss: `background-image:repeating-conic-gradient(from 0deg at 50% 62%, ${C.mustard} 0 9deg, #F8C84E 9deg 18deg)`,
      content: `
        <div class="title" style="left:0;right:0;top:128px;text-align:center;font-size:236px">MOI</div>
        <div class="title" style="left:0;right:0;top:338px;text-align:center;font-size:100px;color:${C.coral}">VS</div>
        <div class="title" style="left:0;right:0;top:428px;text-align:center;font-size:172px">MON CERVEAU</div>
        ${caption({ x: 200, y: 624, w: 680, size: 44, bg: '#fff', rot: 1.2, text: `<span style="font-family:Bangers;font-weight:400;letter-spacing:3px;color:${C.coral}">Épisode 1</span><br>«${nb}Aujourd'hui, je crée.${nb}»` })}
        ${quentin({ x: -10, y: 748, w: 530, eyes: { px: 6, py: 0 }, brows: [12, -12], browY: 4, mouth: 'grin', arms: 'fist' })}
        ${floor()}
        ${brain({ x: 600, y: 852, w: 440, eyes: { px: -9, py: 3, lid: 0.38 }, brows: [16, -16], browY: 8, mouth: 'smirk', arms: 'rub' })}
        ${caption({ x: 690, y: 800, size: 36, bg: INK, color: '#fff', rot: -3, text: '(Spoiler : non.)' })}`,
    }),

    // 2 — La diversion
    slide({
      n: 2, total: TOTAL, bg: C.cream,
      content: `
        ${bubble({ x: 50, y: 236, w: 570, size: 52, tail: { at: 0.3, dir: -1 }, text: `Bon. Aujourd'hui, je m'y mets.` })}
        ${bubble({ x: 420, y: 520, w: 610, size: 46, tail: { at: 0.72, dir: 1 }, text: `Excellente idée. Mais d'abord${nb}: on a vérifié <b>combien de temps vit une pieuvre</b>${nb}?` })}
        ${quentin({ ...Q, eyes: { px: 8, py: 0 }, brows: [6, -6], browY: 0, mouth: 'grin', arms: 'fist' })}
        ${floor()}
        ${brain({ ...B, eyes: { px: -8, py: -2 }, brows: [-8, 8], mouth: 'grin', arms: 'finger' })}`,
    }),

    // 3 — 47 minutes plus tard
    slide({
      n: 3, total: TOTAL, bg: C.navy, dark: true,
      content: `
        ${caption({ x: 262, y: 138, size: 50, rot: -2, text: '47 minutes plus tard…' })}
        ${bubble({ x: 50, y: 290, w: 600, size: 50, tail: { at: 0.3, dir: -1 }, text: `…trois cœurs.<br>Elles ont <b>trois cœurs</b>.` })}
        ${bubble({ x: 440, y: 560, w: 590, size: 46, tail: { at: 0.72, dir: 1 }, text: `Et toi, zéro projet terminé.<br>Fascinant, la nature.` })}
        ${quentin({ ...Q, eyes: { px: 0, py: 10, pr: 6 }, brows: [-12, 12], browY: -10, mouth: 'small', arms: 'phone' })}
        ${floor('#151A33')}
        ${brain({ ...B, eyes: { px: -8, py: 2, lid: 0.42 }, brows: [0, 0], browY: 6, mouth: 'smirk', arms: 'hips' })}`,
    }),

    // 4 — L'argument imparable
    slide({
      n: 4, total: TOTAL, bg: C.sky,
      content: `
        ${caption({ x: 60, y: 150, size: 44, bg: '#fff', rot: -2, text: 'Tentative n°2.' })}
        ${bubble({ x: 470, y: 150, w: 560, h: 190, size: 48, tail: null, text: `Attends. Et si c'était <b>nul</b>${nb}?` })}
        ${link({ x: 860, y: 333, h: 274 })}
        ${bubble({ x: 40, y: 380, w: 500, size: 48, tail: { at: 0.3, dir: -1 }, text: `Je n'ai encore rien fait.` })}
        ${bubble({ x: 480, y: 600, w: 550, size: 48, tail: { at: 0.6, dir: 1 }, text: `Justement. Pour l'instant, c'est <b>parfait</b>.` })}
        ${quentin({ x: -60, y: 620, w: 580, eyes: { px: 9, py: -2 }, brows: [-14, 6], browY: -4, mouth: 'flat', arms: 'scratch' })}
        ${floor()}
        ${brain({ ...B, eyes: { px: -8, py: 0, lid: 0.3 }, brows: [10, -10], browY: 6, mouth: 'smile', arms: 'shrug' })}`,
    }),

    // 5 — La bascule (le fond)
    slide({
      n: 5, total: TOTAL, bg: INK, dark: true,
      bgCss: `background-image:radial-gradient(ellipse 640px 760px at 50% 74%, #4A4F7A 0%, ${INK} 72%)`,
      content: `
        <div class="abs" style="left:70px;right:70px;top:150px;text-align:center;font-family:Bangers;font-weight:400;font-size:100px;line-height:1;letter-spacing:3px;color:#fff;text-transform:uppercase">
          Tant que je ne crée rien,<br>mon œuvre reste un<br><span style="color:${C.mustard}">chef-d’œuvre</span>.
        </div>
        <div class="abs" style="left:0;right:0;top:468px;text-align:center;font-family:Hand;font-size:56px;color:#C9CCE8">(imaginaire, certes.)</div>
        ${quentin({ x: 240, y: 628, w: 600, eyes: { px: 6, py: -10 }, brows: [-10, 10], browY: -8, mouth: 'small', arms: 'think' })}
        ${floor('#101014')}
        ${caption({ x: 100, y: 1062, w: 880, size: 38, bg: '#fff', rot: -1, text: `Mon cerveau ne me sabote pas. Il <b>protège un rêve</b> de la réalité.` })}`,
    }),

    // 6 — La riposte
    slide({
      n: 6, total: TOTAL, bg: C.coral,
      content: `
        ${burst({ cx: 810, cy: 1010, r1: 250, r2: 1000, n: 30, color: 'rgba(27,27,31,.5)', width: 6 })}
        ${bubble({ x: 50, y: 216, w: 580, size: 52, tail: { at: 0.3, dir: -1 }, text: `Donc je vais faire un truc <b>nul</b>. Exprès.` })}
        ${bubble({ x: 480, y: 520, w: 550, size: 96, shout: true, rot: 3, tail: { at: 0.66, dir: 1 }, text: `Tu n'oserais pas${nb}!` })}
        ${quentin({ ...Q, eyes: { px: 8, py: 2, lid: 0.3 }, brows: [16, -16], browY: 8, mouth: 'smirk', arms: 'pencil' })}
        ${floor()}
        ${brain({ ...B, eyes: { px: -6, py: 0, pr: 5 }, brows: [-18, 18], browY: -12, mouth: 'scream', arms: 'up', sweat: true })}`,
    }),

    // 7 — La chute + appel à commenter
    slide({
      n: 7, total: TOTAL, bg: C.cream, cta: 'Envoie-la à un procrastinateur ↗',
      content: `
        <div class="abs" style="left:170px;top:132px;width:660px;height:566px;background:#8A5A2B;border:8px solid ${INK};box-shadow:12px 12px 0 ${INK};transform:rotate(-2deg)">
          <div class="abs" style="left:28px;top:28px;right:28px;bottom:28px;background:#FFFDF6;border:6px solid ${INK};overflow:hidden">${pieuvre}</div>
        </div>
        ${caption({ x: 50, y: 664, size: 62, bg: C.mustard, rot: -4, text: `<span style="font-family:Bangers;font-weight:400;letter-spacing:3px">Nul. Terminé. Réel.</span>` })}
        <div class="abs" style="left:54px;top:800px;width:560px;font-family:Bangers;font-weight:400;font-size:60px;line-height:1.03;letter-spacing:2px;text-transform:uppercase">
          Un truc nul et fini<br>bat un chef-d’œuvre<br>imaginaire.<br><span style="color:${C.coral}">Tous les jours.</span>
        </div>
        ${bubble({ x: 610, y: 760, w: 420, size: 40, tail: { at: 0.6, dir: 1 }, text: `…Bon. Elle a bien ses trois cœurs.` })}
        ${floor()}
        ${brain({ x: 740, y: 986, w: 280, eyes: { px: -9, py: -6 }, brows: [-10, 10], browY: -4, mouth: 'wobble', arms: 'hips' })}
        ${caption({ x: 54, y: 1070, w: 600, size: 32, bg: INK, color: '#fff', rot: 0, text: `Et toi, c'est quoi ton chef-d'œuvre imaginaire${nb}? Dis-le en commentaire.` })}`,
    }),
  ],
};
