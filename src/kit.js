// Boîte à outils BD : personnages vectoriels, décor du Salève, bulles, cadre de planche.
// Palette, polices de titre et logo repris de quentinfauchereau.com.
const A = require('./avatar.config.js');

const C = {
  nuit: '#1E1B3A',
  creme: '#FFF6EA',
  sable: '#F6E3C8',
  grisNuit: '#5B5675',
  flamme: '#FF5A1F',
  flammeTexte: '#C2410C',
  soleil: '#FFC233',
  jungle: '#1F7A5C',
  // teintes dérivées de la palette, pour le paysage et le singe
  jungleFonce: '#175E47',
  jungleClair: '#8CC2A6',
  lac: '#BFC8EE',
  lointain: '#A9A5D4',
  fourrure: '#6C6690',
  museau: '#F6E3C8',
};
const INK = C.nuit;
const FLOOR_Y = 1196;

let uid = 0;
const S = `stroke="${INK}" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"`;

// ---------- briques communes ----------
function eye(cx, cy, { rx = 22, ry = 26, px = 0, py = 0, lid = 0, pr = 9, closed = false } = {}) {
  if (closed) return `<path d="M ${cx - rx} ${cy - 2} Q ${cx} ${cy + 16} ${cx + rx} ${cy - 2}" fill="none" ${S}/>`;
  const id = `c${uid++}`;
  const top = cy - ry + lid * 2 * ry;
  return `
    <clipPath id="${id}"><rect x="${cx - rx - 8}" y="${top}" width="${2 * rx + 16}" height="${2 * ry + 16}"/></clipPath>
    <g clip-path="url(#${id})">
      <ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="#fff" ${S}/>
      <circle cx="${cx + px}" cy="${cy + py}" r="${pr}" fill="${INK}"/>
    </g>
    ${lid > 0 ? `<line x1="${cx - rx - 3}" y1="${top}" x2="${cx + rx + 3}" y2="${top}" ${S}/>` : ''}`;
}

function brow(cx, cy, angle = 0, len = 44) {
  return `<line x1="${cx - len / 2}" y1="${cy}" x2="${cx + len / 2}" y2="${cy}" ${S} stroke-width="9" transform="rotate(${angle} ${cx} ${cy})"/>`;
}

function mouth(type, cx, cy) {
  const m = {
    smile: `<path d="M ${cx - 30} ${cy - 5} Q ${cx} ${cy + 22} ${cx + 30} ${cy - 5}" fill="none" ${S}/>`,
    grin: `<path d="M ${cx - 34} ${cy - 10} Q ${cx} ${cy + 38} ${cx + 34} ${cy - 10} Z" fill="#fff" ${S}/>`,
    flat: `<path d="M ${cx - 24} ${cy} L ${cx + 24} ${cy}" fill="none" ${S}/>`,
    frown: `<path d="M ${cx - 28} ${cy + 8} Q ${cx} ${cy - 14} ${cx + 28} ${cy + 8}" fill="none" ${S}/>`,
    open: `<ellipse cx="${cx}" cy="${cy + 2}" rx="17" ry="22" fill="#5A1F26" ${S}/>`,
    scream: `<path d="M ${cx - 34} ${cy - 14} Q ${cx} ${cy - 30} ${cx + 34} ${cy - 14} Q ${cx + 30} ${cy + 40} ${cx} ${cy + 40} Q ${cx - 30} ${cy + 40} ${cx - 34} ${cy - 14} Z" fill="#5A1F26" ${S}/>`,
    smirk: `<path d="M ${cx - 26} ${cy + 2} Q ${cx + 6} ${cy + 14} ${cx + 30} ${cy - 12}" fill="none" ${S}/>`,
    wobble: `<path d="M ${cx - 30} ${cy} q 7.5 -10 15 0 t 15 0 t 15 0 t 15 0" fill="none" ${S}/>`,
    small: `<path d="M ${cx - 12} ${cy} L ${cx + 12} ${cy}" fill="none" ${S}/>`,
  };
  return m[type] || m.smile;
}

function limb(d, color, width = 46) {
  return `<path d="${d}" fill="none" stroke="${INK}" stroke-width="${width + 14}" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="${d}" fill="none" stroke="${color}" stroke-width="${width}" stroke-linecap="round" stroke-linejoin="round"/>`;
}
const hand = (cx, cy, r = 27) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${A.skin}" ${S}/>`;

function shade(hex, amt) {
  const n = parseInt(hex.slice(1), 16);
  const f = (v) => Math.max(0, Math.min(255, v + amt));
  return '#' + [n >> 16, (n >> 8) & 255, n & 255].map((v) => f(v).toString(16).padStart(2, '0')).join('');
}

// ---------- Quentin ----------
function hairPath() {
  const h = {
    pics: `M 141 204 C 130 170, 132 132, 146 104 L 128 90 L 154 84 L 146 54 L 176 64 L 182 30 L 206 50 L 224 14 L 242 46 L 264 16 L 276 50 L 302 30 L 306 64 L 334 54 L 328 84 L 352 90 L 334 104
           C 348 132, 350 170, 339 204 C 337 176, 330 152, 318 138 C 310 120, 298 110, 286 106 C 270 110, 252 120, 240 132 C 228 120, 210 110, 194 106 C 182 110, 170 120, 162 138 C 150 152, 143 176, 141 204 Z`,
    bataille: `M 141 196 C 118 132, 150 66, 214 60 C 222 34, 262 36, 266 58 C 290 40, 318 58, 310 80 C 352 104, 356 150, 338 196
               C 334 160, 318 136, 296 128 C 270 150, 222 150, 198 124 C 170 132, 150 156, 141 196 Z`,
    court: `M 141 190 C 126 120, 170 70, 240 70 C 310 70, 354 120, 339 190 C 332 150, 310 126, 240 124 C 170 126, 148 150, 141 190 Z`,
    boucles: `M 141 200 C 108 190, 108 150, 132 138 C 116 108, 146 78, 174 88 C 180 54, 226 46, 244 70 C 266 44, 312 58, 312 90
              C 344 82, 370 116, 350 140 C 372 156, 366 194, 339 200 C 336 166, 316 140, 290 134 C 262 152, 218 152, 192 132 C 166 140, 148 164, 141 200 Z`,
    rase: `M 146 170 C 150 104, 196 78, 240 78 C 284 78, 330 104, 334 170 C 320 130, 290 112, 240 112 C 190 112, 160 130, 146 170 Z`,
  };
  return h[A.hairStyle] || h.pics;
}

function quentinArms(arms) {
  const col = A.hoodie;
  switch (arms) {
    case 'fist':
      return limb('M 366 446 Q 428 410 416 322', col) + hand(416, 296, 31) +
        `<path d="M 400 290 h 30 M 402 302 h 28" fill="none" ${S} stroke-width="4"/>`;
    case 'point':
      return limb('M 366 446 Q 428 410 416 326', col) + limb('M 416 300 L 416 236', A.skin, 15) + hand(416, 300, 27);
    case 'phone':
      return `<rect x="208" y="366" width="64" height="104" rx="10" fill="#2B2B33" ${S}/>
              <rect x="217" y="377" width="46" height="74" rx="3" fill="#BFE9FF"/>` +
        limb('M 124 462 Q 150 500 206 452', col) + limb('M 356 462 Q 330 500 274 452', col) +
        hand(208, 448, 22) + hand(272, 448, 22);
    case 'think':
      return limb('M 366 470 Q 420 400 316 322', col) + hand(300, 302, 27);
    case 'heart': // main posée sur la poitrine : il respire
      return limb('M 366 470 Q 392 416 296 410', col) + hand(274, 408, 27);
    case 'pencil':
    case 'scratch':
      return limb('M 366 446 Q 428 410 420 330', col) +
        `<g transform="rotate(${arms === 'scratch' ? -28 : 16} 420 300)"><rect x="412" y="190" width="16" height="110" fill="${C.soleil}" ${S} stroke-width="5"/>
         <path d="M 412 190 L 420 166 L 428 190 Z" fill="#F6C9A0" ${S} stroke-width="5"/></g>` + hand(420, 304, 28);
    case 'shrug':
      return limb('M 118 446 Q 58 432 50 372', col) + limb('M 362 446 Q 422 432 430 372', col) + hand(48, 350) + hand(432, 350);
    default:
      return '';
  }
}

// Quentin en buste. viewBox 480 x 520.
function quentin({ x = 0, y = 0, w = 520, flip = false, eyes = {}, brows = [0, 0], browY = 0, mouth: m = 'smile', arms = 'down', sweat = false } = {}) {
  const el = eyes.l || eyes, er = eyes.r || eyes;
  const V = 'M 160 68 Q 240 40 320 68 L 324 100 Q 240 76 156 100 Z';
  return `<svg style="position:absolute;left:${x}px;top:${y}px;${flip ? 'transform:scaleX(-1);' : ''}" width="${w}" viewBox="0 0 480 520" overflow="visible">
    <ellipse cx="240" cy="322" rx="96" ry="40" fill="${shade(A.hoodie, -40)}" ${S}/>
    <rect x="212" y="270" width="56" height="70" fill="${A.skin}" ${S}/>
    <path d="M 108 524 C 108 404, 150 334, 210 322 L 240 356 L 270 322 C 330 334, 372 404, 372 524 Z" fill="${A.hoodie}" ${S}/>
    <path d="M 226 352 L 222 414 M 254 352 L 258 414" fill="none" ${S} stroke-width="5"/>
    <circle cx="140" cy="204" r="24" fill="${A.skin}" ${S}/><circle cx="340" cy="204" r="24" fill="${A.skin}" ${S}/>
    <path d="M 144 190 C 144 110, 190 84, 240 84 C 290 84, 336 110, 336 190 C 336 262, 296 304, 240 304 C 184 304, 144 262, 144 190 Z" fill="${A.skin}" ${S}/>
    ${A.beard ? `<path d="M 145 206 C 146 262, 184 306, 240 306 C 296 306, 334 262, 335 206 C 326 226, 312 236, 296 238 C 284 226, 262 222, 240 228 C 218 222, 196 226, 184 238 C 168 236, 154 226, 145 206 Z" fill="${A.beardColor || A.hair}" ${S}/>
      <ellipse cx="240" cy="264" rx="44" ry="21" fill="${shade(A.skin, -14)}" stroke="${INK}" stroke-width="5"/>` : ''}
    <path d="${hairPath()}" fill="${A.hair}" ${S}/>
    ${A.shades ? `<defs><linearGradient id="lens${uid}" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stop-color="#FFE14D"/><stop offset=".5" stop-color="#7BE38B"/><stop offset="1" stop-color="#FF7AB8"/></linearGradient></defs>
      <g transform="rotate(-4 240 80)">
      <path d="${V}" fill="url(#lens${uid++})" stroke="${INK}" stroke-width="16" stroke-linejoin="round"/>
      <path d="${V}" fill="none" stroke="#E5322D" stroke-width="7" stroke-linejoin="round"/>
      <path d="M 188 68 q 22 -8 46 -9" fill="none" stroke="#fff" stroke-width="6" stroke-linecap="round" opacity=".85"/></g>` : ''}
    ${eye(204, 200, el)}${eye(276, 200, er)}
    ${A.glasses ? `<g fill="none" ${S} stroke-width="6"><circle cx="204" cy="200" r="34"/><circle cx="276" cy="200" r="34"/><path d="M 238 198 h 4 M 170 196 L 146 190 M 310 196 L 334 190"/></g>` : ''}
    ${brow(204, 160 + browY, brows[0])}${brow(276, 160 + browY, brows[1])}
    <path d="M 240 212 q 12 22 -4 27" fill="none" ${S} stroke-width="5"/>
    ${mouth(m, 240, 262)}
    ${sweat ? `<path d="M 352 120 q 14 22 0 30 q -14 -8 0 -30 Z" fill="#8FD3FF" ${S} stroke-width="5"/>` : ''}
    ${quentinArms(arms)}
  </svg>`;
}

// ---------- le Chimpanzé ----------
function chimpArms(arms) {
  const F = C.fourrure;
  const L = (d) => limb(d, F, 20);
  const H = (cx, cy) => `<circle cx="${cx}" cy="${cy}" r="16" fill="${C.museau}" ${S} stroke-width="6"/>`;
  const hipL = L('M 126 250 Q 76 274 120 298') + H(124, 298);
  const hipR = L('M 234 250 Q 284 274 240 298') + H(236, 298);
  switch (arms) {
    case 'finger':
      return hipL + L('M 236 250 Q 318 250 334 172') + limb('M 334 156 L 334 122', C.museau, 9) + H(334, 160);
    case 'up':
      return L('M 124 250 Q 40 250 30 152') + H(28, 138) + L('M 236 250 Q 320 250 330 152') + H(332, 138);
    case 'head': // mains sur la tête : panique
      return L('M 124 252 Q 34 232 66 96') + H(72, 82) + L('M 236 252 Q 326 232 294 96') + H(288, 82);
    case 'rub':
      return L('M 126 250 Q 112 304 164 296') + L('M 234 250 Q 248 304 196 296') + H(168, 294) + H(192, 294);
    case 'point':
      return L('M 126 250 L 34 236') + H(20, 234) + hipR;
    case 'shrug':
      return L('M 124 250 Q 60 264 44 222') + H(40, 208) + L('M 236 250 Q 300 264 316 222') + H(320, 208);
    case 'calm': // mains posées sur les genoux
      return L('M 126 250 Q 96 290 132 322') + H(136, 324) + L('M 234 250 Q 264 290 228 322') + H(224, 324);
    default:
      return hipL + hipR;
  }
}

// Le Chimpanzé, en pied. viewBox -30 0 420 380, pieds à y = 352.
function chimp({ x = 0, y = 0, w = 440, flip = false, eyes = {}, brows = [0, 0], browY = 0, mouth: m = 'smirk', arms = 'hips', sweat = false, extra = '' } = {}) {
  const el = eyes.l || eyes, er = eyes.r || eyes;
  const F = C.fourrure, M = C.museau;
  return `<svg style="position:absolute;left:${x}px;top:${y}px;${flip ? 'transform:scaleX(-1);' : ''}" width="${w}" viewBox="-30 0 420 380" overflow="visible">
    ${limb('M 152 300 L 138 340', F, 22)}${limb('M 208 300 L 222 340', F, 22)}
    <ellipse cx="124" cy="352" rx="30" ry="14" fill="${M}" ${S} stroke-width="6"/><ellipse cx="236" cy="352" rx="30" ry="14" fill="${M}" ${S} stroke-width="6"/>
    <ellipse cx="180" cy="266" rx="64" ry="58" fill="${F}" ${S}/>
    <ellipse cx="180" cy="278" rx="36" ry="34" fill="${M}"/>
    <circle cx="62" cy="128" r="36" fill="${F}" ${S}/><circle cx="62" cy="128" r="17" fill="${shade(C.museau, -34)}"/>
    <circle cx="298" cy="128" r="36" fill="${F}" ${S}/><circle cx="298" cy="128" r="17" fill="${shade(C.museau, -34)}"/>
    <path d="M 156 34 L 166 6 L 180 26 L 194 2 L 204 34 Z" fill="${F}" ${S}/>
    <ellipse cx="180" cy="128" rx="114" ry="104" fill="${F}" ${S}/>
    <path d="M 180 80 C 152 50, 96 68, 98 122 C 99 146, 114 160, 128 166 C 106 186, 114 224, 180 224 C 246 224, 254 186, 232 166 C 246 160, 261 146, 262 122 C 264 68, 208 50, 180 80 Z" fill="${M}" ${S} stroke-width="5"/>
    ${eye(146, 126, { rx: 20, ry: 24, ...el })}${eye(214, 126, { rx: 20, ry: 24, ...er })}
    ${brow(146, 88 + browY, brows[0], 40)}${brow(214, 88 + browY, brows[1], 40)}
    <circle cx="171" cy="170" r="4.5" fill="${INK}"/><circle cx="189" cy="170" r="4.5" fill="${INK}"/>
    ${mouth(m, 180, 198)}
    ${sweat ? `<path d="M 296 30 q 14 22 0 30 q -14 -8 0 -30 Z" fill="#8FD3FF" ${S} stroke-width="5"/>` : ''}
    ${chimpArms(arms)}
    ${extra}
  </svg>`;
}

// ---------- le décor : le Salève, vue sur Genève et le lac ----------
// Toujours le même paysage ; seuls le ciel et la brume changent selon l'ambiance de la planche.
function sapin(x, y, h, fill = C.jungle) {
  const w = h * 0.5;
  return `<path d="M ${x} ${y - h} L ${x + w * 0.34} ${y - h * 0.62} L ${x + w * 0.2} ${y - h * 0.62} L ${x + w * 0.44} ${y - h * 0.3} L ${x + w * 0.28} ${y - h * 0.3} L ${x + w * 0.5} ${y} L ${x - w * 0.5} ${y} L ${x - w * 0.28} ${y - h * 0.3} L ${x - w * 0.44} ${y - h * 0.3} L ${x - w * 0.2} ${y - h * 0.62} L ${x - w * 0.34} ${y - h * 0.62} Z" fill="${fill}" stroke="${INK}" stroke-width="5" stroke-linejoin="round"/>`;
}

function saleve({ sky = [C.creme, '#FFE7B0'], sun = true, mist = 0.75, dim = 0 } = {}) {
  const id = `sky${uid++}`;
  const trees = [[40, 150], [118, 118], [196, 136], [300, 104], [392, 126], [520, 100], [618, 122], [706, 104], [800, 132], [890, 112], [972, 146], [1052, 124]];
  return `<svg class="abs" style="left:0;top:0" width="1080" height="1350" viewBox="0 0 1080 1350">
    <defs><linearGradient id="${id}" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="${sky[0]}"/><stop offset="1" stop-color="${sky[1]}"/></linearGradient></defs>
    <rect width="1080" height="800" fill="url(#${id})"/>
    ${sun ? `<circle cx="850" cy="560" r="170" fill="${C.soleil}" opacity=".22"/><circle cx="850" cy="560" r="96" fill="${C.soleil}" stroke="${INK}" stroke-width="6"/>` : ''}
    <path d="M 0 700 C 120 660, 220 690, 330 668 C 430 648, 520 690, 640 664 C 760 640, 860 684, 960 660 C 1010 650, 1050 664, 1080 656 L 1080 780 L 0 780 Z" fill="${C.lointain}" stroke="${INK}" stroke-width="5"/>
    <rect x="0" y="752" width="1080" height="130" fill="${C.lac}" stroke="${INK}" stroke-width="5"/>
    <g fill="${C.grisNuit}"><rect x="372" y="734" width="22" height="20"/><rect x="398" y="726" width="16" height="28"/><rect x="418" y="738" width="30" height="16"/><rect x="452" y="722" width="14" height="32"/><rect x="470" y="736" width="34" height="18"/><rect x="508" y="730" width="18" height="24"/><rect x="530" y="740" width="26" height="14"/></g>
    <path d="M 600 754 C 598 724, 602 700, 610 682 C 616 700, 618 724, 616 754 Z" fill="#fff" stroke="${INK}" stroke-width="4" stroke-linejoin="round"/>
    <g stroke="#fff" stroke-width="5" stroke-linecap="round" opacity=".8"><path d="M 120 800 h 70 M 300 824 h 110 M 690 806 h 90 M 880 830 h 60 M 520 846 h 50"/></g>
    <path d="M 0 880 C 180 850, 360 872, 540 858 C 720 846, 900 868, 1080 850 L 1080 1000 L 0 1000 Z" fill="${C.jungleClair}" stroke="${INK}" stroke-width="5"/>
    ${mist ? `<g fill="#fff" opacity="${mist}"><ellipse cx="230" cy="900" rx="330" ry="26"/><ellipse cx="820" cy="876" rx="300" ry="22"/><ellipse cx="560" cy="938" rx="240" ry="18"/></g>` : ''}
    ${trees.map(([x, h]) => sapin(x, 1010, h)).join('')}
    <rect x="-10" y="1000" width="1100" height="360" fill="${C.jungle}" stroke="${INK}" stroke-width="5"/>
    ${dim ? `<rect width="1080" height="1350" fill="${C.nuit}" opacity="${dim}"/>` : ''}
  </svg>`;
}

// Premier plan : l'herbe du sentier et le rocher du Chimpanzé. Les bustes passent derrière.
function ground() {
  return `<svg class="abs" style="left:0;top:0" width="1080" height="1350" viewBox="0 0 1080 1350">
    <path d="M 540 1230 L 588 1166 L 690 1146 L 880 1140 L 1000 1152 L 1090 1140 L 1090 1290 L 540 1290 Z" fill="${C.sable}" ${S}/>
    <path d="M 610 1182 L 760 1172 M 820 1188 L 1010 1178 M 660 1212 L 900 1204" fill="none" stroke="${shade(C.sable, -50)}" stroke-width="6" stroke-linecap="round"/>
    <path d="M -10 1204 C 140 1184, 300 1206, 470 1194 C 640 1214, 800 1226, 1090 1220 L 1090 1360 L -10 1360 Z" fill="${C.jungleFonce}" ${S}/>
    <path d="M 60 1196 l 10 -26 l 8 24 l 12 -30 l 6 32 M 330 1198 l 8 -24 l 10 24 l 10 -28 l 6 30 M 470 1194 l 10 -22 l 8 24" fill="none" ${S} stroke-width="5"/>
  </svg>`;
}

// ---------- bulles et cartouches ----------
const typo = (t) => t.replace(/'/g, '’');

// tail: { at: 0..1 (position horizontale), dir: -1 | 0 | 1 (inclinaison), side: 'bottom' | 'top' } ou null
function bubble({ x, y, w, h, text, tail = { at: 0.3, dir: -1 }, size = 46, bg = '#fff', color = INK, shout = false, rot = 0 }) {
  text = typo(text);
  const tip = !tail ? 0 : tail.dir < 0 ? 8 : tail.dir > 0 ? 62 : 35;
  const side = (tail && tail.side) || 'bottom';
  const tailSvg = !tail ? '' : `<svg width="70" height="64" style="position:absolute;left:calc(${tail.at * 100}% - 35px);${side === 'bottom' ? 'top:100%' : 'bottom:100%;transform:scaleY(-1)'}">
      <path d="M 5 0 L ${tip} 56 L 65 0" fill="${bg}" ${S} stroke-linecap="butt"/></svg>`;
  return `<div class="bubble${shout ? ' shout' : ''}" style="left:${x}px;top:${y}px;width:${w}px;${h ? `height:${h}px;` : ''}font-size:${size}px;background:${bg};color:${color};transform:rotate(${rot}deg)"><span>${text}</span>${tailSvg}</div>`;
}

function caption({ x, y, w, text, size = 40, bg = C.soleil, color = INK, rot = -1.5 }) {
  return `<div class="caption" style="left:${x}px;top:${y}px;${w ? `width:${w}px;` : ''}font-size:${size}px;background:${bg};color:${color};transform:rotate(${rot}deg)">${typo(text)}</div>`;
}

// Relie deux bulles du même personnage.
function link({ x, y, h, bg = '#fff' }) {
  return `<div class="abs" style="left:${x}px;top:${y}px;width:46px;height:${h}px;background:${bg};border-left:7px solid ${INK};border-right:7px solid ${INK};z-index:2"></div>`;
}

// Lignes rayonnantes (panique, impact).
function burst({ cx, cy, r1 = 180, r2 = 520, n = 28, color = INK, width = 7 }) {
  let d = '';
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2 + (i % 2) * 0.05;
    const s = r1 + (i % 3) * 26;
    d += `M ${(cx + Math.cos(a) * s).toFixed(1)} ${(cy + Math.sin(a) * s).toFixed(1)} L ${(cx + Math.cos(a) * r2).toFixed(1)} ${(cy + Math.sin(a) * r2).toFixed(1)} `;
  }
  return `<svg class="abs" style="left:0;top:0" width="1080" height="1350"><path d="${d}" stroke="${color}" stroke-width="${width}" stroke-linecap="round" fill="none"/></svg>`;
}

// Le logo du site (pastille soleil, Q, étincelle flamme).
function logo(size = 64) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 64 64"><circle cx="29" cy="35" r="26" fill="${C.soleil}"/><circle cx="29" cy="35" r="12" fill="none" stroke="${C.nuit}" stroke-width="6"/><path d="M35 41 L44 50" stroke="${C.nuit}" stroke-width="6" stroke-linecap="round"/><path d="M51 2 L54.2 10.3 L62.5 13.5 L54.2 16.7 L51 25 L47.8 16.7 L39.5 13.5 L47.8 10.3 Z" fill="${C.flamme}"/></svg>`;
}

// ---------- la planche ----------
function slide({ bg = C.creme, bgCss = '', n, total, series = 'Mon chimpanzé et moi', content, cta = 'La suite →' }) {
  return `<div class="page" style="background:${bg};${bgCss}">
    <div class="panel">
      ${content}
      <div class="tag">${logo(58)}<span>${series}</span></div>
      ${n ? `<div class="num">${n}/${total}</div>` : ''}
      <div class="foot"><span>${A.handle}</span>${cta ? `<span class="swipe">${cta}</span>` : ''}</div>
    </div>
  </div>`;
}

const CSS = (fontDir) => `
@font-face{font-family:Poppins;font-weight:700;src:url('${fontDir}/poppins-700.woff2')}
@font-face{font-family:Inter;font-weight:600;src:url('${fontDir}/inter-600.woff2')}
@font-face{font-family:Comic;font-weight:700;src:url('${fontDir}/comic-neue-latin-700-normal.woff2')}
@font-face{font-family:Hand;src:url('${fontDir}/patrick-hand-latin-400-normal.woff2')}
*{box-sizing:border-box;margin:0;padding:0}
body{width:1080px;height:1350px;overflow:hidden}
.page{position:relative;width:1080px;height:1350px;overflow:hidden;font-family:Comic;font-weight:700;color:${INK}}
.panel{position:absolute;inset:0;overflow:hidden}
.abs{position:absolute}
.tag{position:absolute;left:40px;top:40px;display:flex;align-items:center;gap:12px;background:${C.creme};border:6px solid ${INK};border-radius:999px;padding:6px 26px 6px 10px;font-family:Poppins;font-weight:700;font-size:28px;box-shadow:5px 5px 0 ${INK};z-index:5}
.num{position:absolute;right:40px;top:50px;background:${C.creme};border:6px solid ${INK};border-radius:999px;font-family:Poppins;font-weight:700;font-size:28px;padding:8px 20px;box-shadow:5px 5px 0 ${INK};z-index:5}
.foot{position:absolute;left:44px;right:44px;bottom:40px;display:flex;justify-content:space-between;align-items:center;font-family:Poppins;font-weight:700;font-size:32px;color:${C.creme};z-index:5}
.foot .swipe{background:${C.soleil};color:${INK};padding:10px 24px;border-radius:999px;border:5px solid ${INK}}
.bubble{display:flex;align-items:center;justify-content:center;position:absolute;border:7px solid ${INK};border-radius:44px;padding:24px 30px 22px;text-align:center;line-height:1.12;text-transform:uppercase;box-shadow:8px 8px 0 rgba(30,27,58,.25)}
.bubble.shout{font-family:Poppins;font-weight:700;line-height:1.02}
.bubble b,.caption b{color:${C.flamme}}
.caption{position:absolute;border:7px solid ${INK};border-radius:18px;padding:14px 26px 12px;font-family:Poppins;font-weight:700;line-height:1.14;box-shadow:8px 8px 0 ${INK};text-align:center}
.title{position:absolute;font-family:Poppins;font-weight:700;line-height:.98;letter-spacing:-2px;color:${INK}}
`;

module.exports = { C, INK, S, FLOOR_Y, quentin, chimp, saleve, ground, bubble, caption, burst, link, logo, slide, CSS, shade };
