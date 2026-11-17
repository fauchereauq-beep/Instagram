// Style « gros nez » franco-belge pop : Quentin, Brutus, invités, décors et accessoires.
// Repères : Quentin dessiné dans une boîte 400 x 800 (pieds à y = 790), Brutus dans 360 x 580 (pieds à y = 575).
const { C } = require('./kit.js');
const A = require('./avatar.config.js');

const I = '#14121F';
const SKIN = A.skin, HAIR = A.hair, BEARD = A.beard;
const FUR = C.fourrure, MUZ = C.museau;
let uid = 0;
const id = (p) => `${p}${uid++}`;
const st = (w = 7) => `stroke="${I}" stroke-width="${w}" stroke-linejoin="round" stroke-linecap="round"`;
const limb = (d, col, w = 22, ink = 7) => `<path d="${d}" fill="none" stroke="${I}" stroke-width="${w + ink * 2}" stroke-linecap="round" stroke-linejoin="round"/><path d="${d}" fill="none" stroke="${col}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"/>`;
const hand = (x, y, r = 25, col = SKIN) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${col}" ${st(7)}/>`;
const mirror = (g, w) => `<g transform="translate(${w} 0) scale(-1 1)">${g}</g>`;
const shade = (hex, amt) => {
  const n = parseInt(hex.slice(1), 16), f = (v) => Math.max(0, Math.min(255, v + amt));
  return '#' + [n >> 16, (n >> 8) & 255, n & 255].map((v) => f(v).toString(16).padStart(2, '0')).join('');
};
const place = (x, y, s, flip, w, inner) => `<g transform="translate(${x} ${y}) scale(${flip ? -s : s} ${s})${flip ? ` translate(${-w} 0)` : ''}">${inner}</g>`;
const svgPage = (inner) => `<svg class="abs" style="left:0;top:0" width="1080" height="1350" viewBox="0 0 1080 1350" overflow="visible">${inner}</svg>`;

// ---------- yeux, sourcils, bouches ----------
function eyesPair(cxL, cxR, cy, rx, ry, o = {}, skinCol = SKIN) {
  const { px = 0, py = 0, lid = 0, mode = 'open', pr } = o;
  if (mode === 'happy') return `<path d="M ${cxL - rx + 4} ${cy + 12} Q ${cxL} ${cy - ry * 0.7} ${cxL + rx - 4} ${cy + 12} M ${cxR - rx + 4} ${cy + 12} Q ${cxR} ${cy - ry * 0.7} ${cxR + rx - 4} ${cy + 12}" fill="none" ${st(9)}/>`;
  if (mode === 'closed') return `<path d="M ${cxL - rx + 4} ${cy} Q ${cxL} ${cy + ry * 0.5} ${cxL + rx - 4} ${cy} M ${cxR - rx + 4} ${cy} Q ${cxR} ${cy + ry * 0.5} ${cxR + rx - 4} ${cy}" fill="none" ${st(9)}/>`;
  const r = pr || (mode === 'wide' ? 7 : 13);
  return [cxL, cxR].map((cx, i) => {
    const c = id('e');
    const top = cy - ry + lid * 2 * ry;
    const pxx = cx + px + (i === 0 ? 10 : -10) * (mode === 'wide' ? 0 : 1);
    return `<clipPath id="${c}"><ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}"/></clipPath>
      <ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="#fff"/>
      <g clip-path="url(#${c})"><circle cx="${pxx}" cy="${cy + 10 + py}" r="${r}" fill="${I}"/><circle cx="${pxx + r * 0.35}" cy="${cy + 10 + py - r * 0.4}" r="${r * 0.3}" fill="#fff"/>
        ${lid > 0 ? `<rect x="${cx - rx - 2}" y="${cy - ry - 2}" width="${rx * 2 + 4}" height="${top - (cy - ry) + 2}" fill="${skinCol}"/><line x1="${cx - rx}" y1="${top}" x2="${cx + rx}" y2="${top}" ${st(7)}/>` : ''}</g>
      <ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="none" ${st(7)}/>`;
  }).join('');
}
const BROWS = { normal: [0, 0, 0], up: [0, 0, -26], sad: [-16, 16, -8], angry: [18, -18, 6], flat: [0, 0, 4], sly: [10, -4, 0] };
function browsPair(cxL, cxR, cy, preset, col, len = 46, w = 15) {
  const [aL, aR, dy] = Array.isArray(preset) ? preset : (BROWS[preset] || BROWS.normal);
  const one = (cx, a) => `<path d="M ${cx - len} ${cy + dy + 6} Q ${cx} ${cy + dy - 14} ${cx + len} ${cy + dy + 6}" fill="none" stroke="${col}" stroke-width="${w}" stroke-linecap="round" transform="rotate(${a} ${cx} ${cy + dy})"/>`;
  return one(cxL, aL) + one(cxR, aR);
}
const LIP = '#E9A696';
function mouthQ(type) {
  const line = (d, w = 10) => `<path d="${d}" fill="none" stroke="${LIP}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"/>`;
  switch (type) {
    case 'smile': return `<path d="M 140 354 Q 200 404 260 354 Q 200 386 140 354 Z" fill="#B8574D" ${st(6)}/>`;
    case 'flat': return line('M 160 374 Q 200 382 240 374');
    case 'small': return line('M 182 376 L 218 376');
    case 'open': return `<ellipse cx="200" cy="384" rx="26" ry="31" fill="#5A1F26" ${st(6)}/><ellipse cx="200" cy="398" rx="14" ry="9" fill="#E5677A"/>`;
    case 'scream': return `<path d="M 134 348 Q 200 334 266 348 Q 260 436 200 438 Q 140 436 134 348 Z" fill="#5A1F26" ${st(7)}/><path d="M 140 350 Q 200 340 260 350 L 258 366 Q 200 358 142 366 Z" fill="#fff"/><path d="M 170 414 Q 200 396 230 414 Q 200 430 170 414 Z" fill="#E5677A"/>`;
    case 'wobble': return line('M 150 376 q 12.5 -14 25 0 t 25 0 t 25 0 t 25 0');
    case 'frown': return line('M 150 394 Q 200 352 250 394');
    case 'smirk': return line('M 152 382 Q 214 398 256 360');
    case 'o': return `<ellipse cx="200" cy="384" rx="14" ry="17" fill="#5A1F26" ${st(5)}/>`;
    default: return `<path d="M 120 346 Q 200 372 280 346 Q 262 420 200 422 Q 138 420 120 346 Z" fill="#fff" ${st(7)}/><path d="M 134 372 Q 200 390 266 372" fill="none" stroke="#C9C3D6" stroke-width="4"/>`; // grin
  }
}

// ---------- bras de Quentin (côté gauche, épaule en 122,500 ; le côté droit est le miroir) ----------
function armQ(pose, col) {
  const L = (d, hx, hy, extra = '') => limb(d, col, 22) + extra + hand(hx, hy);
  switch (pose) {
    case 'hip': return L('M 122 500 C 66 530, 62 590, 112 604', 116, 604, '');
    case 'up': return L('M 122 500 C 70 470, 46 420, 48 360', 48, 346);
    case 'wave': return limb('M 122 500 C 70 470, 48 420, 50 376', col, 22) + `<path d="M 70 352 l 10 -34 M 54 344 l 2 -38 M 38 348 l -8 -32 M 26 362 l -22 -20" stroke="${I}" stroke-width="22" stroke-linecap="round"/><path d="M 70 352 l 10 -34 M 54 344 l 2 -38 M 38 348 l -8 -32 M 26 362 l -22 -20" stroke="${SKIN}" stroke-width="9" stroke-linecap="round"/>` + hand(48, 368, 28);
    case 'point': return L('M 122 500 C 70 500, 30 486, 8 466', 4, 462, `<path d="M -10 456 l -36 -10" stroke="${I}" stroke-width="22" stroke-linecap="round"/><path d="M -10 456 l -36 -10" stroke="${SKIN}" stroke-width="9" stroke-linecap="round"/>`);
    case 'chest': return L('M 122 500 C 108 572, 170 582, 194 558', 198, 554, '');
    case 'hold': return L('M 122 500 C 108 590, 148 616, 170 612', 172, 612, '');
    case 'chin': return L('M 122 500 C 150 566, 196 520, 172 444', 168, 434, '');
    case 'head': return L('M 122 500 C 40 470, 30 300, 70 210', 76, 198, '');
    case 'raise': return L('M 122 500 C 90 440, 80 300, 92 180', 92, 166, '');
    case 'none': return '';
    default: return L('M 122 500 C 86 560, 80 610, 92 648', 92, 660, ''); // down
  }
}

// ---------- Quentin et les invités humains ----------
const HAIR_Q = 'M 36 240 C 30 170, 50 120, 80 100 L 46 64 L 100 72 L 88 20 L 140 52 L 150 0 L 190 42 L 210 -10 L 240 38 L 272 0 L 280 52 L 332 20 L 320 72 L 372 66 L 332 104 C 360 130, 372 180, 364 240 C 350 190, 320 150, 290 140 C 260 150, 230 160, 200 186 C 170 160, 140 150, 110 140 C 80 150, 50 190, 36 240 Z';
const HAIR_WILD = 'M 20 250 C -20 210, 0 160, 20 150 C -10 110, 20 60, 60 70 C 50 20, 110 0, 140 30 C 160 -10, 230 -14, 250 24 C 290 -6, 350 20, 340 70 C 390 60, 420 120, 380 150 C 420 180, 410 240, 380 250 C 368 200, 330 150, 300 140 C 250 120, 150 120, 100 140 C 70 150, 34 200, 20 250 Z';
const HEADP = 'M 40 250 C 40 120, 120 70, 200 70 C 280 70, 360 120, 360 250 C 360 380, 300 452, 200 452 C 100 452, 40 380, 40 250 Z';

function person(o = {}) {
  const {
    eyes = {}, brows = 'normal', mouth = 'grin', arms = 'down', outfit = 'rando', legs = true, sweat = false, blush = true, extra = '', front = '',
    hairPath = HAIR_Q, hairCol = HAIR, beard = true, mustache = false, visor = true, skin = SKIN, browCol = HAIR, wrinkles = false,
  } = o;
  const a = typeof arms === 'string' ? { l: arms, r: arms } : { l: 'down', r: 'down', ...arms };
  const outfits = {
    rando: { body: C.flamme, sleeve: skin, straps: true },
    chemise: { body: A.shirt, sleeve: A.shirt, tee: '#fff' },
    pull: { body: '#8C8A99', sleeve: '#8C8A99', collar: '#fff' },
  };
  const f = outfits[outfit] || outfits.rando;
  const hc = id('h'), lg = id('lens');
  const phone = (a.l === 'phone' || a.r === 'phone');
  const armL = armQ(a.l === 'phone' ? 'hold' : a.l, f.sleeve), armR = mirror(armQ(a.r === 'phone' ? 'hold' : a.r, f.sleeve), 400);
  return `
    <defs><clipPath id="${hc}"><path d="${HEADP}"/></clipPath>
      <linearGradient id="${lg}" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stop-color="#FFE14D"/><stop offset=".5" stop-color="#7BE38B"/><stop offset="1" stop-color="#FF7AB8"/></linearGradient></defs>
    ${legs ? `${limb('M 165 640 L 160 760', '#3E6FB5', 30)}${limb('M 235 640 L 240 760', '#3E6FB5', 30)}
      <path d="M 96 790 Q 96 756 150 756 Q 196 758 196 790 Z" fill="${I}"/><path d="M 204 790 Q 204 758 250 756 Q 304 756 304 790 Z" fill="${I}"/>
      <path d="M 120 768 q 14 -6 28 -4 M 262 764 q 14 -2 26 4" stroke="#fff" stroke-width="5" stroke-linecap="round" opacity=".6"/>` : ''}
    <path d="M 120 470 Q 200 446 280 470 L 302 652 Q 200 672 98 652 Z" fill="${f.body}" ${st(7)}/>
    <path d="M 240 462 Q 270 466 280 470 L 302 652 Q 270 664 236 666 Z" fill="${I}" opacity=".14"/>
    ${f.tee ? `<path d="M 168 462 Q 200 484 232 462 L 224 662 L 176 662 Z" fill="${f.tee}" ${st(6)}/><path d="M 168 462 L 146 488 L 180 556 L 176 662 M 232 462 L 254 488 L 220 556 L 224 662" fill="none" ${st(6)}/>
      <path d="M 116 520 v 120 M 134 500 v 150 M 266 500 v 150 M 284 520 v 120" stroke="${shade(f.body, -30)}" stroke-width="4" stroke-linecap="round"/>` : ''}
    ${f.collar ? `<path d="M 160 462 Q 200 492 240 462 Q 200 474 160 462 Z" fill="${f.collar}" ${st(6)}/>` : ''}
    ${f.straps ? `<path d="M 138 476 L 162 468 L 172 652 L 146 652 Z M 262 476 L 238 468 L 228 652 L 254 652 Z" fill="${A.vest}" ${st(6)}/><path d="M 166 566 H 234" ${st(7)}/><rect x="186" y="554" width="28" height="24" rx="5" fill="${C.soleil}" ${st(5)}/>` : ''}
    <rect x="176" y="420" width="48" height="56" fill="${skin}" ${st(7)}/>
    <ellipse cx="34" cy="280" rx="34" ry="46" fill="${skin}" ${st(7)}/><ellipse cx="366" cy="280" rx="34" ry="46" fill="${skin}" ${st(7)}/>
    <path d="M 26 268 q 12 10 6 26 M 374 268 q -12 10 -6 26" fill="none" ${st(5)}/>
    <path d="${HEADP}" fill="${skin}" ${st(8)}/>
    <g clip-path="url(#${hc})"><path d="M 300 70 C 390 150, 390 360, 250 470 L 420 470 L 420 70 Z" fill="#8A3B22" opacity=".16"/></g>
    ${beard ? `<path d="M 44 290 C 56 400, 120 456, 200 456 C 280 456, 344 400, 356 290 C 334 336, 296 350, 256 338 L 200 352 L 144 338 C 104 350, 66 336, 44 290 Z" fill="${BEARD}" ${st(8)}/>
      <path d="M 70 360 l 8 10 M 96 396 l 8 8 M 330 360 l -8 10 M 304 396 l -8 8 M 160 434 l 4 10 M 240 434 l -4 10" stroke="#6E5444" stroke-width="5" stroke-linecap="round"/>` : ''}
    ${mustache ? `<path d="M 120 352 C 140 316, 190 320, 200 334 C 210 320, 260 316, 280 352 C 250 342, 220 350, 200 346 C 180 350, 150 342, 120 352 Z" fill="${mustache === true ? '#E8E4EE' : mustache}" ${st(6)}/>` : ''}
    ${mouthQ(mouth)}
    ${wrinkles ? `<path d="M 130 120 q 70 -18 140 0 M 140 140 q 60 -14 120 0" fill="none" stroke="#B9806A" stroke-width="5" stroke-linecap="round"/>` : ''}
    ${eyesPair(158, 242, 226, 44, 60, eyes, skin)}
    <path d="M 108 220 l -14 -6 M 108 234 l -14 6 M 292 220 l 14 -6 M 292 234 l 14 6" fill="none" ${st(4)}/>
    ${browsPair(152, 248, 150, brows, browCol)}
    ${blush ? `<ellipse cx="96" cy="300" rx="22" ry="12" fill="#F4917F" opacity=".5"/><ellipse cx="304" cy="300" rx="22" ry="12" fill="#F4917F" opacity=".5"/>` : ''}
    <ellipse cx="200" cy="300" rx="52" ry="42" fill="${shade(skin, -22)}" ${st(7)}/><ellipse cx="184" cy="288" rx="14" ry="9" fill="#fff" opacity=".65"/>
    <path d="${hairPath}" fill="${hairCol}" ${st(8)}/>
    ${hairPath === HAIR_Q ? `<path d="M 120 60 l 14 30 M 176 40 l 8 34 M 250 40 l -6 34 M 300 56 l -14 30" stroke="${shade(hairCol, 50)}" stroke-width="6" stroke-linecap="round"/>` : ''}
    ${visor ? `<path d="M 70 112 Q 200 40 330 112 L 338 146 Q 200 78 62 146 Z" fill="url(#${lg})" stroke="${I}" stroke-width="16" stroke-linejoin="round"/><path d="M 70 112 Q 200 40 330 112 L 338 146 Q 200 78 62 146 Z" fill="none" stroke="#E5322D" stroke-width="7" stroke-linejoin="round"/><path d="M 120 98 q 40 -22 90 -26" stroke="#fff" stroke-width="6" stroke-linecap="round" opacity=".85"/>` : ''}
    ${sweat ? `<path d="M 372 130 q 18 28 0 40 q -18 -12 0 -40 Z" fill="#8FD3FF" ${st(5)}/>` : ''}
    ${front}
    ${phone ? `<rect x="164" y="526" width="72" height="110" rx="12" fill="#2B2B33" ${st(6)}/><rect x="173" y="538" width="54" height="80" rx="4" fill="#9FE3FF"/>` : ''}
    ${armL}${armR}
    ${extra}`;
}
const quentin = (o = {}) => place(o.x || 0, o.y || 0, o.s || 0.82, o.flip, 400, person(o));
const einstein = (o = {}) => place(o.x || 0, o.y || 0, o.s || 0.82, o.flip, 400, person({
  hairPath: HAIR_WILD, hairCol: '#EDEBF2', browCol: '#CFCBD8', beard: false, mustache: true, visor: false, outfit: 'pull', skin: '#F0C6A4', wrinkles: true, ...o,
}));

// ---------- Brutus ----------
function armB(pose) {
  const L = (d, hx, hy, extra = '') => limb(d, FUR, 22) + extra + hand(hx, hy, 21, MUZ);
  switch (pose) {
    case 'hip': return L('M 116 386 C 56 410, 64 466, 108 470', 110, 470);
    case 'up': return L('M 116 390 C 50 380, 12 330, 4 268', 4, 256);
    case 'head': return L('M 116 390 C 30 360, 30 220, 84 112', 90, 100);
    case 'hold': return L('M 116 390 C 100 450, 128 482, 150 478', 152, 478);
    case 'point': return L('M 116 390 C 60 380, 20 360, -8 340', -14, 336, `<path d="M -26 330 l -30 -10" stroke="${I}" stroke-width="20" stroke-linecap="round"/><path d="M -26 330 l -30 -10" stroke="${MUZ}" stroke-width="8" stroke-linecap="round"/>`);
    case 'chin': return L('M 116 390 C 150 440, 176 384, 152 330', 152, 320);
    case 'none': return '';
    default: return L('M 116 380 C 70 430, 60 480, 70 530', 72, 540);
  }
}
function brutusInner(o = {}) {
  const { eyes = {}, brows = 'normal', mouth = 'wobble', arms = 'down', casque = false, sirene = false, sweat = false, hold = '', extra = '', plaid = false, legs = true } = o;
  const a = typeof arms === 'string' ? { l: arms, r: arms } : { l: 'down', r: 'down', ...arms };
  const hc = id('b');
  const m = {
    wobble: `<path d="M 140 296 q 10 -14 20 0 t 20 0 t 20 0 t 20 0" fill="none" ${st(7)}/>`,
    smile: `<path d="M 140 284 Q 180 322 220 284" fill="none" ${st(8)}/>`,
    grin: `<path d="M 132 278 Q 180 292 228 278 Q 220 330 180 332 Q 140 330 132 278 Z" fill="#fff" ${st(7)}/>`,
    open: `<ellipse cx="180" cy="300" rx="22" ry="27" fill="#5A1F26" ${st(6)}/>`,
    scream: `<path d="M 132 270 Q 180 258 228 270 Q 224 340 180 342 Q 136 340 132 270 Z" fill="#5A1F26" ${st(7)}/><path d="M 156 320 Q 180 306 204 320 Q 180 334 156 320 Z" fill="#E5677A"/>`,
    flat: `<path d="M 150 296 L 210 296" ${st(8)}/>`,
    smirk: `<path d="M 146 298 Q 196 312 220 280" fill="none" ${st(8)}/>`,
    munch: `<ellipse cx="180" cy="296" rx="30" ry="18" fill="#5A1F26" ${st(6)}/><circle cx="168" cy="292" r="7" fill="#F2B544"/><circle cx="192" cy="298" r="6" fill="#F2B544"/>`,
    o: `<ellipse cx="180" cy="300" rx="12" ry="15" fill="#5A1F26" ${st(5)}/>`,
  }[mouth] || '';
  return `
    <defs><clipPath id="${hc}"><circle cx="180" cy="196" r="150"/></clipPath></defs>
    ${legs ? `<ellipse cx="128" cy="560" rx="44" ry="20" fill="${MUZ}" ${st(6)}/><ellipse cx="232" cy="560" rx="44" ry="20" fill="${MUZ}" ${st(6)}/>` : ''}
    <path d="M 108 352 C 76 420, 88 548, 180 550 C 272 548, 284 420, 252 352 Z" fill="${FUR}" ${st(7)}/><ellipse cx="180" cy="470" rx="52" ry="60" fill="${MUZ}"/>
    <path d="M 230 360 C 276 420, 270 520, 200 548 C 250 520, 262 430, 230 360 Z" fill="${I}" opacity=".15"/>
    ${plaid ? `<path d="M 70 380 Q 180 330 290 380 L 316 566 L 44 566 Z" fill="url(#tartan)" ${st(7)}/>` : ''}
    <circle cx="40" cy="190" r="52" fill="${FUR}" ${st(7)}/><circle cx="40" cy="190" r="26" fill="#C9A88F"/>
    <circle cx="320" cy="190" r="52" fill="${FUR}" ${st(7)}/><circle cx="320" cy="190" r="26" fill="#C9A88F"/>
    <path d="M 148 54 L 156 6 L 180 40 L 200 0 L 214 50 Z" fill="${FUR}" ${st(6)}/>
    <circle cx="180" cy="196" r="150" fill="${FUR}" ${st(8)}/>
    <g clip-path="url(#${hc})"><path d="M 250 60 C 340 120, 340 290, 230 350 L 340 350 L 340 40 Z" fill="${I}" opacity=".15"/></g>
    <path d="M 120 82 q 30 -26 66 -26" fill="none" stroke="${shade(FUR, 40)}" stroke-width="8" stroke-linecap="round"/>
    <path d="M 180 116 C 140 76, 64 96, 70 178 C 72 222, 100 242, 116 252 C 88 296, 110 344, 180 344 C 250 344, 272 296, 244 252 C 260 242, 288 222, 290 178 C 296 96, 220 76, 180 116 Z" fill="${MUZ}" ${st(6)}/>
    ${eyesPair(148, 212, 176, 34, 46, { ...eyes }, MUZ)}
    ${browsPair(140, 220, 112, brows === 'worried' ? 'sad' : brows, I, 34, 12)}
    <circle cx="168" cy="252" r="6" fill="${I}"/><circle cx="192" cy="252" r="6" fill="${I}"/>
    ${m}
    ${casque ? `<path d="M 40 150 Q 180 -10 320 150 Z" fill="${C.soleil}" ${st(8)}/><path d="M 180 40 V 146 M 112 70 Q 104 110 108 146 M 248 70 Q 256 110 252 146" fill="none" ${st(6)}/><rect x="16" y="136" width="328" height="26" rx="13" fill="${C.soleil}" ${st(8)}/>` : ''}
    ${sirene ? `<path d="M 150 52 h 60 l -6 -46 q -24 -22 -48 0 Z" fill="#E5322D" ${st(7)}/><path d="M 166 20 q 6 -10 14 -8" stroke="#fff" stroke-width="6" fill="none" stroke-linecap="round"/><path d="M 120 6 l -40 -26 M 240 6 l 40 -26 M 180 -34 v -40 M 136 -22 l -22 -36 M 224 -22 l 22 -36" stroke="#E5322D" stroke-width="10" stroke-linecap="round"/>` : ''}
    ${sweat ? `<path d="M 312 60 q 18 26 0 38 q -18 -12 0 -38 Z" fill="#8FD3FF" ${st(5)}/>` : ''}
    ${armB(a.l)}${mirror(armB(a.r), 360)}
    ${hold ? `<g transform="translate(180 470)">${hold}</g>` : ''}
    ${extra}`;
}
const brutus = (o = {}) => place(o.x || 0, o.y || 0, o.s || 0.74, o.flip, 360, brutusInner(o));

// ---------- l'âne (pour les fables) : boîte 440 x 360, sabots à y = 350 ----------
const ane = ({ x = 0, y = 0, s = 1, flip = false, rot = 0, eyes = 'grumpy' } = {}) => {
  const G = '#A7A3B6';
  return `<g transform="translate(${x} ${y}) rotate(${rot} ${220 * s} ${180 * s}) scale(${flip ? -s : s} ${s})${flip ? ' translate(-440 0)' : ''}">
    ${[120, 170, 280, 330].map((lx) => limb(`M ${lx} 240 L ${lx} 330`, G, 26)).join('')}
    ${[120, 170, 280, 330].map((lx) => `<rect x="${lx - 18}" y="326" width="36" height="24" rx="6" fill="${I}"/>`).join('')}
    <path d="M 70 180 q -40 20 -36 70" fill="none" ${st(7)}/><path d="M 34 250 l -10 24 l 16 -6 l 6 14 l 4 -26 Z" fill="${I}"/>
    <ellipse cx="220" cy="200" rx="160" ry="78" fill="${G}" ${st(8)}/><ellipse cx="220" cy="236" rx="110" ry="36" fill="#D8D5E2"/>
    <path d="M 340 170 C 360 120, 360 90, 380 70 L 420 90 C 410 130, 400 170, 380 200 Z" fill="${G}" ${st(7)}/>
    <path d="M 352 116 l 14 -10 l 6 14 l 14 -10 l 6 14 l 14 -10" fill="none" ${st(6)}/>
    <ellipse cx="370" cy="2" rx="16" ry="48" fill="${G}" transform="rotate(-18 370 2)" ${st(6)}/><ellipse cx="410" cy="0" rx="16" ry="48" fill="${G}" transform="rotate(14 410 0)" ${st(6)}/>
    <ellipse cx="410" cy="80" rx="52" ry="70" fill="${G}" transform="rotate(-24 410 80)" ${st(7)}/>
    <ellipse cx="440" cy="132" rx="38" ry="30" fill="#D8D5E2" transform="rotate(-24 440 132)" ${st(6)}/>
    <circle cx="434" cy="126" r="5" fill="${I}"/><circle cx="456" cy="118" r="5" fill="${I}"/>
    <ellipse cx="404" cy="62" rx="15" ry="18" fill="#fff" ${st(5)}/><circle cx="410" cy="${eyes === 'grumpy' ? 68 : 62}" r="7" fill="${I}"/>
    ${eyes === 'grumpy' ? `<path d="M 386 54 L 422 50" ${st(7)}/>` : ''}
    <path d="M 430 150 q 12 6 22 -4" fill="none" ${st(5)}/>
  </g>`;
};

// ---------- décors ----------
const tartan = `<pattern id="tartan" width="60" height="60" patternUnits="userSpaceOnUse"><rect width="60" height="60" fill="#D9473A"/><rect x="22" width="16" height="60" fill="#14121F" opacity=".22"/><rect y="22" width="60" height="16" fill="#14121F" opacity=".22"/><rect x="28" width="4" height="60" fill="#FFC233" opacity=".7"/><rect y="28" width="60" height="4" fill="#FFC233" opacity=".7"/></pattern>`;
const dots = (o = 0.12) => `<div class="abs" style="inset:0;background-image:radial-gradient(rgba(20,18,31,${o}) 2.6px,transparent 3.2px);background-size:18px 18px;pointer-events:none"></div>`;
const band = `<div class="abs" style="left:0;right:0;top:1250px;bottom:0;background:${C.nuit}"></div>`;

function bgRays(c1 = C.soleil, c2 = '#FFD45E', cx = 540, cy = 760) {
  const r = Array.from({ length: 24 }, (_, i) => {
    const a1 = (i * 15) * Math.PI / 180, a2 = (i * 15 + 7) * Math.PI / 180, R = 1700;
    return `<path d="M ${cx} ${cy} L ${cx + R * Math.cos(a1)} ${cy + R * Math.sin(a1)} L ${cx + R * Math.cos(a2)} ${cy + R * Math.sin(a2)} Z" fill="${c2}"/>`;
  }).join('');
  return svgPage(`<rect width="1080" height="1350" fill="${c1}"/>${r}`) + dots(0.08);
}

// Le Salève en version pop : crête, lac, jet d'eau, collines, sentier.
function bgSaleve({ sky = ['#BFE3FF', '#FFE7B0'], sun = true, grey = false } = {}) {
  const g = id('sky');
  return svgPage(`
    <defs><linearGradient id="${g}" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="${sky[0]}"/><stop offset="1" stop-color="${sky[1]}"/></linearGradient></defs>
    <rect width="1080" height="1350" fill="url(#${g})"/>
    ${sun ? `<circle cx="860" cy="600" r="150" fill="${C.soleil}" opacity=".3"/><circle cx="860" cy="600" r="86" fill="${C.soleil}" ${st(7)}/>` : ''}
    <path d="M -20 760 C 150 640, 300 600, 480 620 C 640 640, 760 560, 900 580 C 980 590, 1040 620, 1100 640 L 1100 830 L -20 830 Z" fill="${grey ? '#B9B5CC' : C.lointain}" ${st(6)}/>
    <path d="M 480 620 C 640 640, 760 560, 900 580 C 980 590, 1040 620, 1100 640 L 1100 830 L 640 830 Z" fill="${I}" opacity=".08"/>
    <rect x="-20" y="810" width="1120" height="80" fill="${C.lac}" ${st(6)}/>
    <path d="M 560 812 c -3 -30 0 -52 6 -66 c 6 14 9 36 6 66 Z" fill="#fff" ${st(4)}/>
    <path d="M 90 846 h 70 M 300 866 h 100 M 700 850 h 90 M 900 870 h 60" stroke="#fff" stroke-width="6" stroke-linecap="round"/>
    <path d="M -20 900 C 200 860, 420 890, 600 870 C 800 850, 960 880, 1100 864 L 1100 1000 L -20 1000 Z" fill="${C.jungleClair}" ${st(6)}/>
    ${[[60, 960, 110], [170, 940, 80], [930, 950, 100], [1030, 930, 80]].map(([x, y, h]) => `<path d="M ${x} ${y - h} Q ${x + h * 0.5} ${y - h * 0.2} ${x + h * 0.36} ${y} L ${x - h * 0.36} ${y} Q ${x - h * 0.5} ${y - h * 0.2} ${x} ${y - h} Z" fill="${C.jungle}" ${st(6)}/>`).join('')}
    <rect x="-20" y="990" width="1120" height="400" fill="${C.jungle}" ${st(6)}/>
    <path d="M 400 1350 C 460 1200, 600 1120, 760 1060 C 860 1024, 960 1010, 1100 1006 L 1100 1060 C 960 1070, 860 1090, 790 1120 C 640 1180, 560 1260, 560 1350 Z" fill="${C.sable}" ${st(6)}/>
    <path d="M 40 1040 l 10 -24 l 8 22 l 12 -28 l 6 30 M 300 1070 l 8 -22 l 10 22 l 10 -26 l 6 28" fill="none" ${st(5)}/>`);
}

// Intérieur : mur, sol, fenêtre sur le Salève.
function bgRoom({ wall = '#F7C6A3', floor = '#C98E5A', window = true } = {}) {
  return svgPage(`
    <rect width="1080" height="1350" fill="${wall}"/>
    <rect x="0" y="1060" width="1080" height="290" fill="${floor}" ${st(6)}/>
    ${[160, 380, 600, 820].map((x) => `<path d="M ${x} 1060 L ${x - 60} 1350" stroke="${I}" stroke-width="4" opacity=".25"/>`).join('')}
    ${window ? `<rect x="660" y="430" width="300" height="260" fill="#BFE3FF" ${st(10)}/><path d="M 660 600 L 740 520 L 800 570 L 870 500 L 960 590 L 960 690 L 660 690 Z" fill="${C.lointain}" ${st(4)}/><rect x="660" y="640" width="300" height="50" fill="${C.lac}"/><rect x="660" y="430" width="300" height="260" fill="none" ${st(10)}/><path d="M 810 430 V 690 M 660 560 H 960" ${st(7)}/>` : ''}`) + dots(0.1);
}

// Fond sombre de flashback, avec projecteur.
function bgDark(color = C.nuit, glow = 'rgba(255,194,51,.25)') {
  return `<div class="abs" style="inset:0;background:${color}"></div><div class="abs" style="inset:0;background:radial-gradient(circle at 50% 60%, ${glow}, transparent 60%)"></div>` + dots(0.1);
}

// ---------- accessoires ----------
const P = {
  chips: `<path d="M -50 -60 L 50 -60 L 40 60 L -40 60 Z" fill="${C.soleil}" ${st(6)}/><path d="M -50 -60 l 10 -12 l 10 12 l 10 -12 l 10 12 l 10 -12 l 10 12 l 10 -12 l 10 12 l 10 -12" fill="${C.soleil}" ${st(5)}/><text y="10" text-anchor="middle" font-family="Poppins" font-weight="700" font-size="24" fill="#E5322D">CHIPS</text>`,
  popcorn: `${[[-40, -70], [-10, -84], [22, -76], [46, -64], [-28, -56], [8, -60]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="20" fill="#FFF6D8" ${st(5)}/>`).join('')}<path d="M -60 -50 L 60 -50 L 46 70 L -46 70 Z" fill="#fff" ${st(6)}/><path d="M -36 -50 L -28 70 M 0 -50 V 70 M 36 -50 L 28 70" stroke="#E5322D" stroke-width="16"/><path d="M -60 -50 L 60 -50 L 46 70 L -46 70 Z" fill="none" ${st(6)}/>`,
  classeur: `<rect x="-120" y="-100" width="240" height="210" rx="10" fill="#E5322D" ${st(7)}/><rect x="-120" y="-100" width="20" height="210" fill="#9E1F1A" ${st(5)}/><rect x="-80" y="-34" width="170" height="60" rx="6" fill="#fff" ${st(5)}/><text x="5" y="8" text-anchor="middle" font-family="Poppins" font-weight="700" font-size="32" fill="${I}">RISQUES</text><text x="5" y="80" text-anchor="middle" font-family="Poppins" font-weight="700" font-size="24" fill="#fff">vol. 1 / 12</text>`,
  carte: `<path d="M -130 -90 L -50 -74 L 30 -90 L 130 -74 L 130 100 L 30 84 L -50 100 L -130 84 Z" fill="${C.sable}" ${st(7)}/><path d="M -110 70 C -60 30, -100 -20, -30 -30 S 60 -40, 110 -80" fill="none" stroke="${C.flamme}" stroke-width="6" stroke-dasharray="4 14" stroke-linecap="round"/>${[[-90, -50], [0, 20], [80, -30], [60, 60], [-60, 60]].map(([x, y]) => `<g transform="translate(${x} ${y})"><circle r="14" fill="#fff" ${st(4)}/><rect x="-8" y="9" width="16" height="10" rx="2" fill="#fff" ${st(4)}/><circle cx="-5" cy="-2" r="3.5" fill="${I}"/><circle cx="5" cy="-2" r="3.5" fill="${I}"/></g>`).join('')}`,
  poster: (t) => `<rect x="-150" y="-190" width="300" height="290" rx="6" fill="#fff" ${st(8)}/><rect x="-130" y="-170" width="260" height="190" fill="#3E6FB5"/><circle cx="60" cy="-120" r="26" fill="${C.soleil}"/><path d="M -130 20 L -60 -60 L 0 -10 L 60 -70 L 130 0 L 130 20 Z" fill="${C.lointain}"/><text x="0" y="56" text-anchor="middle" font-family="Poppins" font-weight="700" font-size="22" fill="${I}">${t}</text><text x="0" y="86" text-anchor="middle" font-family="Poppins" font-weight="700" font-size="18" fill="${C.grisNuit}">— A. Einstein (?)</text>`,
  cornichons: `<rect x="-44" y="-70" width="88" height="22" rx="6" fill="#C9A36A" ${st(6)}/><rect x="-50" y="-50" width="100" height="120" rx="20" fill="#CFEFD8" ${st(6)}/>${[[-20, -10], [16, 0], [-8, 30], [22, 40]].map(([x, y]) => `<ellipse cx="${x}" cy="${y}" rx="11" ry="26" fill="#5E8F3E" ${st(3)} transform="rotate(${x} ${x} ${y})"/>`).join('')}`,
};
const ecureuil = (x, y, s = 1, lunettes = false) => `<g transform="translate(${x} ${y}) scale(${s})">
  <path d="M 34 104 C -34 96, -44 4, 8 -8 C 52 -18, 66 34, 34 44 C 56 56, 58 90, 34 104 Z" fill="#C8692E" ${st(5)}/>
  <ellipse cx="64" cy="84" rx="32" ry="36" fill="#D9783A" ${st(5)}/><ellipse cx="72" cy="92" rx="15" ry="22" fill="#F6E3C8"/>
  <path d="M 62 16 l 4 -26 l 14 22 Z" fill="#D9783A" ${st(4)}/><circle cx="78" cy="38" r="27" fill="#D9783A" ${st(5)}/>
  <circle cx="86" cy="32" r="8" fill="#fff" ${st(3)}/><circle cx="88" cy="32" r="4" fill="${I}"/><circle cx="104" cy="42" r="5" fill="${I}"/><path d="M 88 50 q 8 6 14 0" fill="none" ${st(3)}/>${lunettes ? `<path d="M 66 26 h 46" ${st(4)}/><rect x="72" y="24" width="20" height="14" rx="5" fill="${I}"/><rect x="94" y="24" width="18" height="14" rx="5" fill="${I}"/><path d="M 76 28 l 6 0" stroke="#fff" stroke-width="3"/><path d="M 86 54 q 10 2 16 -6" fill="none" ${st(3)}/>` : ''}</g>`;

module.exports = { ...require('./decors.js'), I, st, limb, svgPage, place, quentin, einstein, brutus, ane, tartan, dots, band, bgRays, bgSaleve, bgRoom, bgDark, P, ecureuil, shade };
