// Boîte à outils BD : personnages vectoriels, bulles, cadre de planche.
const A = require('./avatar.config.js');

const INK = '#1B1B1F';
const C = {
  ink: INK,
  cream: '#FFF4DC',
  mustard: '#F5B82E',
  coral: '#EF5B4C',
  teal: '#16A39B',
  navy: '#232A4D',
  sky: '#CFE3FF',
  pink: '#F79AB5',
  pinkDark: '#D9668D',
};

let uid = 0;
const S = `stroke="${INK}" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"`;

// ---------- briques communes ----------
function eye(cx, cy, { rx = 22, ry = 26, px = 0, py = 0, lid = 0, pr = 9 } = {}) {
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

// ---------- l'avatar ----------
function hairPath() {
  const h = {
    bataille: `M 141 196 C 118 132, 150 66, 214 60 C 222 34, 262 36, 266 58 C 290 40, 318 58, 310 80 C 352 104, 356 150, 338 196
               C 334 160, 318 136, 296 128 C 270 150, 222 150, 198 124 C 170 132, 150 156, 141 196 Z`,
    court: `M 141 190 C 126 120, 170 70, 240 70 C 310 70, 354 120, 339 190 C 332 150, 310 126, 240 124 C 170 126, 148 150, 141 190 Z`,
    boucles: `M 141 200 C 108 190, 108 150, 132 138 C 116 108, 146 78, 174 88 C 180 54, 226 46, 244 70 C 266 44, 312 58, 312 90
              C 344 82, 370 116, 350 140 C 372 156, 366 194, 339 200 C 336 166, 316 140, 290 134 C 262 152, 218 152, 192 132 C 166 140, 148 164, 141 200 Z`,
    pics: `M 141 204 C 130 170, 132 132, 146 104 L 128 90 L 154 84 L 146 54 L 176 64 L 182 30 L 206 50 L 224 14 L 242 46 L 264 16 L 276 50 L 302 30 L 306 64 L 334 54 L 328 84 L 352 90 L 334 104
           C 348 132, 350 170, 339 204 C 337 176, 330 152, 318 138 C 310 120, 298 110, 286 106 C 270 110, 252 120, 240 132 C 228 120, 210 110, 194 106 C 182 110, 170 120, 162 138 C 150 152, 143 176, 141 204 Z`,
    rase: `M 146 170 C 150 104, 196 78, 240 78 C 284 78, 330 104, 334 170 C 320 130, 290 112, 240 112 C 190 112, 160 130, 146 170 Z`,
  };
  return h[A.hairStyle] || h.bataille;
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
    case 'pencil':
    case 'scratch':
      return limb('M 366 446 Q 428 410 420 330', col) +
        `<g transform="rotate(${arms === 'scratch' ? -28 : 16} 420 300)"><rect x="412" y="190" width="16" height="110" fill="${C.mustard}" ${S} stroke-width="5"/>
         <path d="M 412 190 L 420 166 L 428 190 Z" fill="#F6C9A0" ${S} stroke-width="5"/></g>` + hand(420, 304, 28);
    case 'shrug':
      return limb('M 118 446 Q 58 432 50 372', col) + limb('M 362 446 Q 422 432 430 372', col) + hand(48, 350) + hand(432, 350);
    default:
      return '';
  }
}

// Avatar en buste. viewBox 480 x 520.
function quentin({ x = 0, y = 0, w = 520, flip = false, eyes = {}, brows = [0, 0], browY = 0, mouth: m = 'smile', arms = 'down', sweat = false } = {}) {
  const el = eyes.l || eyes, er = eyes.r || eyes;
  return `<svg style="position:absolute;left:${x}px;top:${y}px;${flip ? 'transform:scaleX(-1);' : ''}" width="${w}" viewBox="0 0 480 520" overflow="visible">
    <ellipse cx="240" cy="322" rx="96" ry="40" fill="${shade(A.hoodie, -28)}" ${S}/>
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
      <path d="M 160 68 Q 240 40 320 68 L 324 100 Q 240 76 156 100 Z" fill="url(#lens${uid++})" stroke="${INK}" stroke-width="16" stroke-linejoin="round"/>
      <path d="M 160 68 Q 240 40 320 68 L 324 100 Q 240 76 156 100 Z" fill="none" stroke="#E5322D" stroke-width="7" stroke-linejoin="round"/>
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

// ---------- le cerveau ----------
function brainArms(arms) {
  const L = (d) => `<path d="${d}" fill="none" ${S} stroke-width="8"/>`;
  const H = (cx, cy) => `<circle cx="${cx}" cy="${cy}" r="15" fill="#fff" ${S} stroke-width="6"/>`;
  switch (arms) {
    case 'finger':
      return L('M 60 196 Q 26 216 66 232') + H(68, 232) + L('M 304 170 Q 348 150 338 96') + L('M 338 86 L 338 50') + H(338, 88);
    case 'up':
      return L('M 58 150 Q 16 112 26 62') + H(26, 50) + L('M 304 150 Q 346 112 336 62') + H(336, 50);
    case 'rub':
      return L('M 66 204 Q 88 256 164 242') + L('M 296 204 Q 274 256 198 242') + H(168, 240) + H(194, 240);
    case 'point':
      return L('M 60 184 L -8 168') + H(-14, 166) + L('M 300 196 Q 336 216 294 232') + H(292, 232);
    case 'shrug':
      return L('M 58 176 Q 16 176 8 136') + H(6, 124) + L('M 304 176 Q 346 176 354 136') + H(356, 124);
    default: // hips
      return L('M 60 196 Q 26 216 66 232') + H(68, 232) + L('M 300 196 Q 336 216 294 232') + H(292, 232);
  }
}

// Le cerveau. viewBox -30 0 420 380.
function brain({ x = 0, y = 0, w = 420, flip = false, eyes = {}, brows = [0, 0], browY = 0, mouth: m = 'smirk', arms = 'hips', sweat = false } = {}) {
  const el = eyes.l || eyes, er = eyes.r || eyes;
  return `<svg style="position:absolute;left:${x}px;top:${y}px;${flip ? 'transform:scaleX(-1);' : ''}" width="${w}" viewBox="-30 0 420 380" overflow="visible">
    <path d="M 150 240 L 140 326 M 210 240 L 220 326" fill="none" ${S} stroke-width="8"/>
    <ellipse cx="128" cy="332" rx="26" ry="13" fill="#fff" ${S} stroke-width="6"/><ellipse cx="232" cy="332" rx="26" ry="13" fill="#fff" ${S} stroke-width="6"/>
    <path d="M 80 222 C 40 216, 30 166, 62 146 C 46 106, 86 70, 122 86 C 136 50, 196 40, 216 72 C 250 50, 306 76, 298 118
             C 336 130, 340 186, 306 206 C 300 240, 250 250, 230 232 C 206 256, 150 256, 136 232 C 116 246, 86 240, 80 222 Z" fill="${C.pink}" ${S}/>
    <g fill="none" stroke="${C.pinkDark}" stroke-width="6" stroke-linecap="round">
      <path d="M 180 62 C 168 84, 190 100, 180 122"/>
      <path d="M 96 110 q 22 -8 30 12"/><path d="M 236 92 q 24 -10 36 10"/>
      <path d="M 70 190 q 14 16 2 30"/><path d="M 296 160 q 16 10 6 30"/>
      <path d="M 134 112 q 14 6 12 20"/><path d="M 258 214 q 16 -4 22 -18"/>
    </g>
    ${eye(146, 170, el)}${eye(214, 170, er)}
    ${brow(146, 132 + browY, brows[0], 40)}${brow(214, 132 + browY, brows[1], 40)}
    ${mouth(m, 180, 218)}
    ${sweat ? `<path d="M 300 60 q 14 22 0 30 q -14 -8 0 -30 Z" fill="#8FD3FF" ${S} stroke-width="5"/>` : ''}
    ${brainArms(arms)}
  </svg>`;
}

// ---------- bulles et cartouches ----------
// tail: { at: 0..1 (position horizontale), dir: -1 | 0 | 1 (inclinaison), side: 'bottom' | 'top' }
const typo = (t) => t.replace(/'/g, '’');

function bubble({ x, y, w, h, text, tail = { at: 0.3, dir: -1 }, size = 46, bg = '#fff', color = INK, shout = false, rot = 0 }) {
  text = typo(text);
  const tip = !tail ? 0 : tail.dir < 0 ? 8 : tail.dir > 0 ? 62 : 35;
  const side = (tail && tail.side) || 'bottom';
  const tailSvg = !tail ? '' : `<svg width="70" height="64" style="position:absolute;left:calc(${tail.at * 100}% - 35px);${side === 'bottom' ? 'top:100%' : 'bottom:100%;transform:scaleY(-1)'}">
      <path d="M 5 0 L ${tip} 56 L 65 0" fill="${bg}" ${S} stroke-linecap="butt"/></svg>`;
  return `<div class="bubble${shout ? ' shout' : ''}" style="left:${x}px;top:${y}px;width:${w}px;${h ? `height:${h}px;` : ''}font-size:${size}px;background:${bg};color:${color};transform:rotate(${rot}deg)"><span>${text}</span>${tailSvg}</div>`;
}

function caption({ x, y, w, text, size = 40, bg = C.mustard, color = INK, rot = -1.5 }) {
  text = typo(text);
  return `<div class="caption" style="left:${x}px;top:${y}px;${w ? `width:${w}px;` : ''}font-size:${size}px;background:${bg};color:${color};transform:rotate(${rot}deg)">${text}</div>`;
}

// Lignes de vitesse rayonnantes (panique, impact).
function burst({ cx, cy, r1 = 180, r2 = 520, n = 28, color = INK, width = 7 }) {
  let d = '';
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2 + (i % 2) * 0.05;
    const s = r1 + (i % 3) * 26;
    d += `M ${(cx + Math.cos(a) * s).toFixed(1)} ${(cy + Math.sin(a) * s).toFixed(1)} L ${(cx + Math.cos(a) * r2).toFixed(1)} ${(cy + Math.sin(a) * r2).toFixed(1)} `;
  }
  return `<svg style="position:absolute;left:0;top:0" width="1080" height="1350"><path d="${d}" stroke="${color}" stroke-width="${width}" stroke-linecap="round" fill="none"/></svg>`;
}

// Bande de sol : les bustes passent derrière, le cerveau se tient dessus.
const FLOOR_Y = 1196;
function floor(color = INK) {
  return `<div class="abs" style="left:0;right:0;top:${FLOOR_Y}px;bottom:0;background:${color};border-top:8px solid ${INK}"></div>`;
}

// Relie deux bulles du même personnage.
function link({ x, y, h, bg = '#fff' }) {
  return `<div class="abs" style="left:${x}px;top:${y}px;width:46px;height:${h}px;background:${bg};border-left:7px solid ${INK};border-right:7px solid ${INK};z-index:2"></div>`;
}

function shade(hex, amt) {
  const n = parseInt(hex.slice(1), 16);
  const f = (v) => Math.max(0, Math.min(255, v + amt));
  return '#' + [n >> 16, (n >> 8) & 255, n & 255].map((v) => f(v).toString(16).padStart(2, '0')).join('');
}

// ---------- la planche ----------
function slide({ bg = C.cream, bgCss = '', n, total, series = 'MOI VS MON CERVEAU', ep = 'ÉP. 1', content, dark = false, cta = 'LA SUITE →' }) {
  return `<div class="page" style="background:${bg};${bgCss}">
    <div class="dots${dark ? ' dark' : ''}"></div>
    <div class="panel">
      ${content}
      <div class="tag">${series} <span>· ${ep}</span></div>
      <div class="num">${n}/${total}</div>
      <div class="foot"><span>${A.handle}</span>${cta ? `<span class="swipe">${cta}</span>` : ''}</div>
    </div>
  </div>`;
}

const CSS = (fontDir) => `
@font-face{font-family:Bangers;src:url('${fontDir}/bangers-latin-400-normal.woff2')}
@font-face{font-family:Comic;font-weight:700;src:url('${fontDir}/comic-neue-latin-700-normal.woff2')}
@font-face{font-family:Hand;src:url('${fontDir}/patrick-hand-latin-400-normal.woff2')}
*{box-sizing:border-box;margin:0;padding:0}
body{width:1080px;height:1350px;overflow:hidden}
.page{position:relative;width:1080px;height:1350px;overflow:hidden;font-family:Comic;font-weight:700;color:${INK}}
.dots{position:absolute;inset:0;background-image:radial-gradient(rgba(0,0,0,.13) 2.6px,transparent 3.2px);background-size:20px 20px}
.dots.dark{background-image:radial-gradient(rgba(255,255,255,.09) 2.6px,transparent 3.2px)}
.panel{position:absolute;inset:0;overflow:hidden}
.tag{position:absolute;left:44px;top:44px;background:${INK};color:#fff;font-family:Bangers;font-size:38px;letter-spacing:2px;padding:8px 22px 6px;transform:rotate(-1.5deg)}
.tag span{color:${C.mustard}}
.num{position:absolute;right:44px;top:44px;background:#fff;border:6px solid ${INK};font-family:Comic;font-weight:700;font-size:34px;padding:4px 16px 2px;box-shadow:5px 5px 0 ${INK}}
.foot{position:absolute;left:44px;right:44px;bottom:44px;display:flex;justify-content:space-between;align-items:center;font-family:Bangers;font-size:38px;letter-spacing:2px;color:#fff;z-index:5}
.foot .swipe{background:${C.mustard};color:${INK};padding:8px 20px 5px}
.bubble{display:flex;align-items:center;justify-content:center;position:absolute;border:7px solid ${INK};border-radius:44px;padding:24px 30px 22px;text-align:center;line-height:1.12;text-transform:uppercase;box-shadow:8px 8px 0 rgba(0,0,0,.22)}
.bubble.shout{font-family:Bangers;font-weight:400;letter-spacing:3px;line-height:1.02}
.bubble b,.caption b{color:${C.coral}}
.caption{position:absolute;border:7px solid ${INK};padding:14px 24px 12px;text-transform:uppercase;line-height:1.12;box-shadow:8px 8px 0 ${INK};text-align:center}
.title{position:absolute;font-family:Bangers;font-weight:400;line-height:.9;letter-spacing:4px;color:#fff;-webkit-text-stroke:5px ${INK};paint-order:stroke fill;text-shadow:9px 9px 0 ${INK}}
.abs{position:absolute}
.ground{position:absolute;left:0;right:0;bottom:0;border-top:8px solid ${INK}}
`;

module.exports = { C, INK, S, quentin, brain, bubble, caption, burst, floor, link, slide, CSS, shade, FLOOR_Y };
