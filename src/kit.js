// Boîte à outils BD : personnages vectoriels, décor du Salève, bulles, cadre de planche.
// Palette, police de titre et logo repris de quentinfauchereau.com.
const A = require('./avatar.config.js');

const C = {
  nuit: '#1E1B3A', creme: '#FFF6EA', sable: '#F6E3C8', grisNuit: '#5B5675',
  flamme: '#FF5A1F', flammeTexte: '#C2410C', soleil: '#FFC233', jungle: '#1F7A5C',
  // teintes dérivées de la palette, pour le paysage et le singe
  jungleFonce: '#175E47', jungleClair: '#8CC2A6', lac: '#BFC8EE', lointain: '#A9A5D4',
  fourrure: '#6C6690', museau: '#F6E3C8',
};
const FLOOR_Y = 1196;

// ---------- styles de dessin ----------
const STYLES = {
  cartoon: { key: 'cartoon', name: 'Cartoon rond', lw: 7, eye: 'big', ink: C.nuit },
  claire: { key: 'claire', name: 'Ligne claire', lw: 4, eye: 'dot', ink: C.nuit },
  roman: { key: 'roman', name: 'Roman graphique', lw: 5, eye: 'almond', ink: C.nuit, shadow: true },
  carnet: { key: 'carnet', name: 'Carnet de rando', lw: 4.5, eye: 'almond', ink: '#2E2A52', sketch: true },
};
let ST = STYLES.cartoon;
const useStyle = (k) => { ST = STYLES[k] || STYLES.cartoon; return ST; };

let uid = 0;
const S = (k = 1) => `stroke="${ST.ink}" stroke-width="${+(ST.lw * k).toFixed(1)}" stroke-linecap="round" stroke-linejoin="round"`;
const SH = (d, o = 0.17) => (ST.shadow ? `<path d="${d}" fill="${C.nuit}" opacity="${o}"/>` : '');

function shade(hex, amt) {
  const n = parseInt(hex.slice(1), 16);
  const f = (v) => Math.max(0, Math.min(255, v + amt));
  return '#' + [n >> 16, (n >> 8) & 255, n & 255].map((v) => f(v).toString(16).padStart(2, '0')).join('');
}

// ---------- yeux ----------
// type forcé par le style, sauf `closed`. px/py : direction du regard. lid : paupière (0..1). laugh : œil plissé par le sourire.
function eye(cx, cy, { px = 0, py = 0, lid = 0, pr, closed = false, laugh = false, iris = '#3A2B24', scale = 1 } = {}, side = 1) {
  if (closed) return `<path d="M ${cx - 18} ${cy - 2} Q ${cx} ${cy + 14} ${cx + 18} ${cy - 2}" fill="none" ${S()}/>`;
  const type = ST.eye;
  if (type === 'dot') {
    const r = 6.5 * scale;
    return `<circle cx="${cx + px * 0.4}" cy="${cy + py * 0.4}" r="${r}" fill="${ST.ink}"/>` +
      (lid > 0.25 ? `<path d="M ${cx - 12} ${cy - 9} h 24" fill="none" ${S()}/>` : '');
  }
  if (type === 'almond') {
    const h = (laugh ? 9 : 14) * (1 - lid * 0.6) * scale, w = 21 * scale;
    const id = `e${uid++}`;
    const shape = `M ${cx - w} ${cy + 1} Q ${cx} ${cy - h * 1.5} ${cx + w} ${cy} Q ${cx} ${cy + h} ${cx - w} ${cy + 1} Z`;
    return `<clipPath id="${id}"><path d="${shape}"/></clipPath>
      <path d="${shape}" fill="#fff"/>
      <g clip-path="url(#${id})"><circle cx="${cx + px * 0.7}" cy="${cy + py * 0.5 - 1}" r="${9.5 * scale}" fill="${iris}"/><circle cx="${cx + px * 0.7}" cy="${cy + py * 0.5 - 1}" r="${pr || 4.5 * scale}" fill="#14101F"/><circle cx="${cx + px * 0.7 + 3}" cy="${cy + py * 0.5 - 5}" r="2.2" fill="#fff"/></g>
      <path d="M ${cx - w} ${cy + 1} Q ${cx} ${cy - h * 1.5} ${cx + w} ${cy}" fill="none" ${S(1.25)}/>
      <path d="M ${cx + w} ${cy} Q ${cx} ${cy + h} ${cx - w} ${cy + 1}" fill="none" ${S(0.5)}/>
      ${laugh ? `<path d="M ${cx + side * (w + 5)} ${cy - 4} l ${side * 11} -7 M ${cx + side * (w + 6)} ${cy + 3} l ${side * 12} 3" fill="none" ${S(0.6)}/>` : ''}`;
  }
  // 'big'
  const rx = 17 * scale, ry = 20 * scale, id = `c${uid++}`;
  const top = cy - ry + lid * 2 * ry;
  return `<clipPath id="${id}"><rect x="${cx - rx - 8}" y="${top}" width="${2 * rx + 16}" height="${2 * ry + 16}"/></clipPath>
    <g clip-path="url(#${id})"><ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="#fff" ${S()}/>
    <circle cx="${cx + px}" cy="${cy + py}" r="${pr || 8 * scale}" fill="${ST.ink}"/></g>
    ${top > cy - ry ? `<line x1="${cx - rx - 2}" y1="${top}" x2="${cx + rx + 2}" y2="${top}" ${S()}/>` : ''}`;
}

function limb(d, color, width = 46) {
  return `<path d="${d}" fill="none" stroke="${ST.ink}" stroke-width="${width + ST.lw * 2}" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="${d}" fill="none" stroke="${color}" stroke-width="${width}" stroke-linecap="round" stroke-linejoin="round"/>`;
}
const hand = (cx, cy, r = 27) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${A.skin}" ${S()}/>`;

// ---------- Quentin ----------
// Tracés de référence du visage (viewBox 480 x 540).
const HEAD = 'M 154 170 C 154 112, 196 86, 240 86 C 284 86, 326 112, 326 170 L 326 232 C 322 262, 306 290, 280 308 C 262 320, 218 320, 200 308 C 174 290, 158 262, 154 232 Z';
const BEARD = 'M 153 196 L 154 232 C 158 262, 174 290, 200 308 C 218 320, 262 320, 280 308 C 306 290, 322 262, 326 232 L 327 196 C 322 224, 308 242, 290 246 C 280 240, 262 240, 250 245 L 240 250 L 230 245 C 218 240, 200 240, 190 246 C 172 242, 158 224, 153 196 Z';
const HAIR = `M 152 216 C 145 180, 146 140, 156 112 L 138 100 L 162 92 L 152 62 L 182 72 L 186 38 L 208 58 L 224 22 L 242 54 L 262 24 L 274 58 L 300 36 L 302 70 L 330 60 L 322 90 L 346 96 L 326 112
              C 336 140, 337 180, 328 216 C 327 190, 322 168, 314 150 C 308 130, 300 117, 290 111 C 274 113, 254 123, 240 140 C 226 123, 206 113, 190 111 C 180 117, 172 130, 166 150 C 158 168, 153 190, 152 216 Z`;
const VISOR = 'M 160 66 Q 240 38 320 66 L 324 98 Q 240 74 156 98 Z';

// Bouche, dessinée par-dessus la barbe. Centre (240, 274).
function qMouth(type) {
  const lip = (d, w = 9) => `<path d="${d}" fill="none" stroke="${A.lips}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"/>`;
  const fold = ST.eye !== 'almond' ? '' : `<path d="M 196 250 q -9 13 -3 26 M 284 250 q 9 13 3 26" fill="none" stroke="${shade(A.beard, -22)}" stroke-width="${ST.lw * 0.8}" stroke-linecap="round"/>`;
  switch (type) {
    case 'smile': // le grand sourire, dents visibles
      return fold + `<path d="M 204 264 Q 240 277 276 264 Q 264 300 240 300 Q 216 300 204 264 Z" fill="#fff" ${S(0.85)}/>
        <path d="M 212 282 Q 240 290 268 282" fill="none" stroke="${shade('#ffffff', -40)}" stroke-width="2.5" stroke-linecap="round"/>`;
    case 'grin': // rire franc, bouche ouverte
      return fold + `<path d="M 200 262 Q 240 275 280 262 Q 268 312 240 312 Q 212 312 200 262 Z" fill="#5A1F26" ${S(0.85)}/>
        <path d="M 200 262 Q 240 275 280 262 Q 276 280 240 284 Q 204 280 200 262 Z" fill="#fff" ${S(0.6)}/>
        <path d="M 222 304 Q 240 294 258 304 Q 240 312 222 304 Z" fill="${A.lips}"/>`;
    case 'flat': return lip('M 218 276 L 262 276');
    case 'small': return lip('M 228 277 L 252 277');
    case 'frown': return lip('M 214 284 Q 240 266 266 284');
    case 'smirk': return lip('M 216 278 Q 246 286 268 266');
    case 'wobble': return lip('M 212 276 q 7 -9 14 0 t 14 0 t 14 0 t 14 0', 8);
    case 'open': return `<ellipse cx="240" cy="280" rx="15" ry="19" fill="#5A1F26" stroke="${A.lips}" stroke-width="6"/>`;
    case 'scream': return `<path d="M 206 262 Q 240 250 274 262 Q 272 314 240 314 Q 208 314 206 262 Z" fill="#5A1F26" stroke="${A.lips}" stroke-width="6" stroke-linejoin="round"/><path d="M 212 264 Q 240 256 268 264 L 266 274 Q 240 268 214 274 Z" fill="#fff"/>`;
    default: return lip('M 214 270 Q 240 290 266 270'); // sourire bouche fermée
  }
}

function quentinArms(arms) {
  const col = A.top;
  switch (arms) {
    case 'fist':
      return limb('M 386 470 Q 446 430 434 340', col) + hand(434, 314, 31) + `<path d="M 418 308 h 30 M 420 320 h 28" fill="none" ${S(0.6)}/>`;
    case 'wave':
      return limb('M 386 470 Q 450 430 440 330', col) + hand(440, 304, 31) + `<path d="M 422 284 l -6 -22 M 436 278 l 0 -26 M 450 282 l 8 -22 M 462 294 l 16 -14" fill="none" stroke="${ST.ink}" stroke-width="${22}" stroke-linecap="round"/><path d="M 422 284 l -6 -22 M 436 278 l 0 -26 M 450 282 l 8 -22 M 462 294 l 16 -14" fill="none" stroke="${A.skin}" stroke-width="${22 - ST.lw * 2}" stroke-linecap="round"/>`;
    case 'point':
      return limb('M 386 470 Q 446 430 434 344', col) + limb('M 434 316 L 434 252', A.skin, 15) + hand(434, 318, 27);
    case 'phone':
      return `<rect x="208" y="388" width="64" height="104" rx="10" fill="#2B2B33" ${S()}/><rect x="217" y="399" width="46" height="74" rx="3" fill="#BFE9FF"/>` +
        limb('M 110 484 Q 140 522 206 474', col) + limb('M 370 484 Q 340 522 274 474', col) + hand(208, 470, 22) + hand(272, 470, 22);
    case 'think':
      return limb('M 386 490 Q 440 420 328 340', col) + hand(308, 322, 27);
    case 'heart': // main posée sur la poitrine : il respire
      return limb('M 386 490 Q 410 436 300 430', col) + hand(276, 428, 27);
    case 'pencil':
    case 'scratch':
      return limb('M 386 470 Q 446 430 438 350', col) +
        `<g transform="rotate(${arms === 'scratch' ? -28 : 16} 438 320)"><rect x="430" y="210" width="16" height="110" fill="${C.soleil}" ${S(0.7)}/><path d="M 430 210 L 438 186 L 446 210 Z" fill="#F6C9A0" ${S(0.7)}/></g>` + hand(438, 324, 28);
    case 'shrug':
      return limb('M 96 470 Q 38 452 32 392', col) + limb('M 384 470 Q 442 452 448 392', col) + hand(30, 370) + hand(450, 370);
    default:
      return '';
  }
}

// Quentin en buste. viewBox 480 x 540.
// eyes : { px, py, lid, closed, laugh } ; brows : [gauche, droite] en degrés ; mouth : voir qMouth ; arms : voir quentinArms.
function quentin({ x = 0, y = 0, w = 520, flip = false, eyes = {}, brows = [0, 0], browY = 0, mouth: m = 'smile', arms = 'down', sweat = false } = {}) {
  const el = eyes.l || eyes, er = eyes.r || eyes;
  const hc = `hc${uid++}`, lg = `lens${uid++}`;
  const bw = ST.eye === 'dot' ? 8 : 10;
  const brow = (cx, a) => `<line x1="${cx - 27}" y1="${172 + browY}" x2="${cx + 27}" y2="${172 + browY}" stroke="${A.hair}" stroke-width="${bw}" stroke-linecap="round" transform="rotate(${a} ${cx} ${172 + browY})"/>`;
  return `<svg style="position:absolute;left:${x}px;top:${y}px;${flip ? 'transform:scaleX(-1);' : ''}" width="${w}" viewBox="0 0 480 540" overflow="visible">
    <defs><clipPath id="${hc}"><path d="${HEAD}"/></clipPath>
      <linearGradient id="${lg}" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stop-color="#FFE14D"/><stop offset=".5" stop-color="#7BE38B"/><stop offset="1" stop-color="#FF7AB8"/></linearGradient></defs>
    <path d="M 204 296 L 200 362 L 280 362 L 276 296 Z" fill="${A.skin}" ${S()}/>
    ${SH('M 204 306 Q 240 340 276 306 L 278 336 Q 240 356 202 336 Z', 0.24)}
    <path d="M 82 546 C 82 430, 122 372, 198 352 Q 240 384 282 352 C 358 372, 398 430, 398 546 Z" fill="${A.top}" ${S()}/>
    ${SH('M 300 358 C 358 376, 398 430, 398 546 L 330 546 C 336 470, 326 410, 300 358 Z', 0.2)}
    <path d="M 198 352 Q 240 392 282 352" fill="none" ${S()}/>
    <path d="M 158 376 L 182 362 L 190 546 L 164 546 Z" fill="${A.vest}" ${S()}/><path d="M 322 376 L 298 362 L 290 546 L 316 546 Z" fill="${A.vest}" ${S()}/>
    <path d="M 190 462 L 290 462" fill="none" ${S()}/><rect x="226" y="450" width="28" height="24" rx="5" fill="${C.soleil}" ${S(0.8)}/>
    <ellipse cx="147" cy="210" rx="17" ry="27" fill="${A.skin}" ${S()}/><ellipse cx="333" cy="210" rx="17" ry="27" fill="${A.skin}" ${S()}/>
    <path d="M 143 200 q 9 8 4 22 M 337 200 q -9 8 -4 22" fill="none" ${S(0.6)}/>
    <path d="${HEAD}" fill="${A.skin}" ${S()}/>
    <g clip-path="url(#${hc})">${SH('M 292 80 C 304 150, 300 230, 268 326 L 340 326 L 340 80 Z')}</g>
    <path d="${BEARD}" fill="${A.beard}" ${S()}/>
    <path d="${HAIR}" fill="${A.hair}" ${S()}/>
    <path d="M 214 66 l 6 30 M 250 62 l -2 34 M 286 76 l -10 26" fill="none" stroke="#8C8690" stroke-width="3.5" stroke-linecap="round" opacity=".8"/>
    ${A.shades ? `<g transform="rotate(-4 240 80)">
      <path d="${VISOR}" fill="url(#${lg})" stroke="${ST.ink}" stroke-width="${ST.lw * 2 + 3}" stroke-linejoin="round"/>
      <path d="${VISOR}" fill="none" stroke="#E5322D" stroke-width="${Math.max(5, ST.lw)}" stroke-linejoin="round"/>
      <path d="M 188 66 q 22 -8 46 -9" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round" opacity=".85"/></g>` : ''}
    ${eye(204, 200, el, -1)}${eye(276, 200, er, 1)}
    ${brow(204, brows[0])}${brow(276, brows[1])}
    <path d="M 231 222 C 228 232, 222 237, 222 243 Q 224 253 240 252 Q 256 253 258 243" fill="none" ${S(0.85)}/>
    ${ST.shadow ? `<path d="M 240 252 Q 256 253 258 242 C 256 232, 250 220, 248 206 Z" fill="${C.nuit}" opacity=".14"/>` : ''}
    ${qMouth(m)}
    ${sweat ? `<path d="M 356 124 q 14 22 0 30 q -14 -8 0 -30 Z" fill="#8FD3FF" ${S(0.7)}/>` : ''}
    ${quentinArms(arms)}
  </svg>`;
}

// ---------- le Chimpanzé ----------
function cMouth(type, cx, cy) {
  const m = {
    smile: `<path d="M ${cx - 30} ${cy - 5} Q ${cx} ${cy + 22} ${cx + 30} ${cy - 5}" fill="none" ${S()}/>`,
    grin: `<path d="M ${cx - 34} ${cy - 10} Q ${cx} ${cy + 38} ${cx + 34} ${cy - 10} Z" fill="#fff" ${S()}/>`,
    flat: `<path d="M ${cx - 24} ${cy} L ${cx + 24} ${cy}" fill="none" ${S()}/>`,
    frown: `<path d="M ${cx - 28} ${cy + 8} Q ${cx} ${cy - 14} ${cx + 28} ${cy + 8}" fill="none" ${S()}/>`,
    open: `<ellipse cx="${cx}" cy="${cy + 2}" rx="17" ry="20" fill="#5A1F26" ${S()}/>`,
    scream: `<path d="M ${cx - 34} ${cy - 14} Q ${cx} ${cy - 28} ${cx + 34} ${cy - 14} Q ${cx + 30} ${cy + 30} ${cx} ${cy + 30} Q ${cx - 30} ${cy + 30} ${cx - 34} ${cy - 14} Z" fill="#5A1F26" ${S()}/>`,
    smirk: `<path d="M ${cx - 26} ${cy + 2} Q ${cx + 6} ${cy + 14} ${cx + 30} ${cy - 12}" fill="none" ${S()}/>`,
    wobble: `<path d="M ${cx - 30} ${cy} q 7.5 -10 15 0 t 15 0 t 15 0 t 15 0" fill="none" ${S()}/>`,
    small: `<path d="M ${cx - 12} ${cy} L ${cx + 12} ${cy}" fill="none" ${S()}/>`,
  };
  return m[type] || m.smile;
}

function chimpArms(arms) {
  const F = C.fourrure;
  const L = (d) => limb(d, F, 20);
  const H = (cx, cy) => `<circle cx="${cx}" cy="${cy}" r="16" fill="${C.museau}" ${S(0.85)}/>`;
  const hipL = L('M 126 250 Q 76 274 120 298') + H(124, 298);
  const hipR = L('M 234 250 Q 284 274 240 298') + H(236, 298);
  switch (arms) {
    case 'finger': return hipL + L('M 236 250 Q 318 250 334 172') + limb('M 334 156 L 334 122', C.museau, 9) + H(334, 160);
    case 'up': return L('M 124 250 Q 40 250 30 152') + H(28, 138) + L('M 236 250 Q 320 250 330 152') + H(332, 138);
    case 'head': return L('M 124 252 Q 34 232 66 96') + H(72, 82) + L('M 236 252 Q 326 232 294 96') + H(288, 82); // panique
    case 'rub': return L('M 126 250 Q 112 304 164 296') + L('M 234 250 Q 248 304 196 296') + H(168, 294) + H(192, 294);
    case 'point': return L('M 126 250 L 34 236') + H(20, 234) + hipR;
    case 'shrug': return L('M 124 250 Q 60 264 44 222') + H(40, 208) + L('M 236 250 Q 300 264 316 222') + H(320, 208);
    case 'calm': return L('M 126 250 Q 96 290 132 322') + H(136, 324) + L('M 234 250 Q 264 290 228 322') + H(224, 324);
    default: return hipL + hipR;
  }
}

// Le Chimpanzé, en pied. viewBox -30 0 420 380, pieds à y = 352.
function chimp({ x = 0, y = 0, w = 440, flip = false, eyes = {}, brows = [0, 0], browY = 0, mouth: m = 'smirk', arms = 'hips', sweat = false, extra = '' } = {}) {
  const el = eyes.l || eyes, er = eyes.r || eyes;
  const F = C.fourrure, M = C.museau, hc = `kc${uid++}`;
  const HEADK = '<ellipse cx="180" cy="128" rx="114" ry="104"';
  const brow = (cx, a) => `<line x1="${cx - 20}" y1="${88 + browY}" x2="${cx + 20}" y2="${88 + browY}" ${S(1.25)} transform="rotate(${a} ${cx} ${88 + browY})"/>`;
  const eo = { iris: '#5A3A22', scale: 1.12 };
  return `<svg style="position:absolute;left:${x}px;top:${y}px;${flip ? 'transform:scaleX(-1);' : ''}" width="${w}" viewBox="-30 0 420 380" overflow="visible">
    <defs><clipPath id="${hc}">${HEADK}/></clipPath></defs>
    ${limb('M 152 300 L 138 340', F, 22)}${limb('M 208 300 L 222 340', F, 22)}
    <ellipse cx="124" cy="352" rx="30" ry="14" fill="${M}" ${S(0.85)}/><ellipse cx="236" cy="352" rx="30" ry="14" fill="${M}" ${S(0.85)}/>
    <ellipse cx="180" cy="266" rx="64" ry="58" fill="${F}" ${S()}/>
    <ellipse cx="180" cy="278" rx="36" ry="34" fill="${M}"/>
    <circle cx="62" cy="128" r="36" fill="${F}" ${S()}/><circle cx="62" cy="128" r="17" fill="${shade(C.museau, -34)}"/>
    <circle cx="298" cy="128" r="36" fill="${F}" ${S()}/><circle cx="298" cy="128" r="17" fill="${shade(C.museau, -34)}"/>
    <path d="M 156 34 L 166 6 L 180 26 L 194 2 L 204 34 Z" fill="${F}" ${S()}/>
    ${HEADK} fill="${F}" ${S()}/>
    <path d="M 180 80 C 152 50, 96 68, 98 122 C 99 146, 114 160, 128 166 C 106 186, 114 224, 180 224 C 246 224, 254 186, 232 166 C 246 160, 261 146, 262 122 C 264 68, 208 50, 180 80 Z" fill="${M}" ${S(0.7)}/>
    <g clip-path="url(#${hc})">${SH('M 236 20 C 256 90, 250 170, 214 240 L 300 240 L 300 20 Z')}</g>
    ${eye(146, 126, { ...eo, ...el }, -1)}${eye(214, 126, { ...eo, ...er }, 1)}
    ${brow(146, brows[0])}${brow(214, brows[1])}
    <circle cx="171" cy="170" r="4.5" fill="${ST.ink}"/><circle cx="189" cy="170" r="4.5" fill="${ST.ink}"/>
    ${cMouth(m, 180, 198)}
    ${sweat ? `<path d="M 296 30 q 14 22 0 30 q -14 -8 0 -30 Z" fill="#8FD3FF" ${S(0.7)}/>` : ''}
    ${chimpArms(arms)}
    ${extra}
  </svg>`;
}

// ---------- le décor : le Salève, vue sur Genève et le lac ----------
// Toujours le même paysage ; seuls le ciel et la brume changent selon l'ambiance de la planche.
function sapin(x, y, h, fill = C.jungle) {
  const w = h * 0.5;
  return `<path d="M ${x} ${y - h} L ${x + w * 0.34} ${y - h * 0.62} L ${x + w * 0.2} ${y - h * 0.62} L ${x + w * 0.44} ${y - h * 0.3} L ${x + w * 0.28} ${y - h * 0.3} L ${x + w * 0.5} ${y} L ${x - w * 0.5} ${y} L ${x - w * 0.28} ${y - h * 0.3} L ${x - w * 0.44} ${y - h * 0.3} L ${x - w * 0.2} ${y - h * 0.62} L ${x - w * 0.34} ${y - h * 0.62} Z" fill="${fill}" ${S(0.75)}/>${SH(`M ${x} ${y - h} L ${x + w * 0.34} ${y - h * 0.62} L ${x + w * 0.2} ${y - h * 0.62} L ${x + w * 0.44} ${y - h * 0.3} L ${x + w * 0.28} ${y - h * 0.3} L ${x + w * 0.5} ${y} L ${x} ${y} Z`, 0.22)}`;
}

function saleve({ sky = [C.creme, '#FFE7B0'], sun = true, mist = 0.75, dim = 0 } = {}) {
  const id = `sky${uid++}`;
  const trees = [[40, 150], [118, 118], [196, 136], [300, 104], [392, 126], [520, 100], [618, 122], [706, 104], [800, 132], [890, 112], [972, 146], [1052, 124]];
  return `<svg class="abs" style="left:0;top:0" width="1080" height="1350" viewBox="0 0 1080 1350" overflow="visible">
    <defs><linearGradient id="${id}" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="${sky[0]}"/><stop offset="1" stop-color="${sky[1]}"/></linearGradient></defs>
    <rect x="-60" y="-60" width="1200" height="860" fill="url(#${id})"/>
    ${sun ? `<circle cx="850" cy="560" r="170" fill="${C.soleil}" opacity=".22"/><circle cx="850" cy="560" r="96" fill="${C.soleil}" ${S(0.85)}/>` : ''}
    <path d="M -60 706 L 0 700 C 120 660, 220 690, 330 668 C 430 648, 520 690, 640 664 C 760 640, 860 684, 960 660 C 1010 650, 1050 664, 1080 656 L 1140 652 L 1140 780 L -60 780 Z" fill="${C.lointain}" ${S(0.75)}/>
    <rect x="-60" y="752" width="1200" height="130" fill="${C.lac}" ${S(0.75)}/>
    <g fill="${C.grisNuit}"><rect x="372" y="734" width="22" height="20"/><rect x="398" y="726" width="16" height="28"/><rect x="418" y="738" width="30" height="16"/><rect x="452" y="722" width="14" height="32"/><rect x="470" y="736" width="34" height="18"/><rect x="508" y="730" width="18" height="24"/><rect x="530" y="740" width="26" height="14"/></g>
    <path d="M 600 754 C 598 724, 602 700, 610 682 C 616 700, 618 724, 616 754 Z" fill="#fff" ${S(0.55)}/>
    <g stroke="#fff" stroke-width="5" stroke-linecap="round" opacity=".8"><path d="M 120 800 h 70 M 300 824 h 110 M 690 806 h 90 M 880 830 h 60 M 520 846 h 50"/></g>
    <path d="M -60 884 L 0 880 C 180 850, 360 872, 540 858 C 720 846, 900 868, 1080 850 L 1140 848 L 1140 1000 L -60 1000 Z" fill="${C.jungleClair}" ${S(0.75)}/>
    ${mist ? `<g fill="#fff" opacity="${mist}"><ellipse cx="230" cy="900" rx="330" ry="26"/><ellipse cx="820" cy="876" rx="300" ry="22"/><ellipse cx="560" cy="938" rx="240" ry="18"/></g>` : ''}
    ${trees.map(([x, h]) => sapin(x, 1010, h)).join('')}
    <rect x="-60" y="1000" width="1200" height="460" fill="${C.jungle}" ${S(0.75)}/>
    ${dim ? `<rect x="-60" y="-60" width="1200" height="1470" fill="${C.nuit}" opacity="${dim}"/>` : ''}
  </svg>`;
}

// Premier plan : l'herbe du sentier et le rocher du Chimpanzé. Les bustes passent derrière.
function ground() {
  return `<svg class="abs" style="left:0;top:0" width="1080" height="1350" viewBox="0 0 1080 1350" overflow="visible">
    <path d="M 540 1230 L 588 1166 L 690 1146 L 880 1140 L 1000 1152 L 1140 1136 L 1140 1290 L 540 1290 Z" fill="${C.sable}" ${S()}/>
    ${SH('M 540 1230 L 588 1166 L 690 1146 L 720 1290 L 540 1290 Z', 0.2)}
    <path d="M 610 1182 L 760 1172 M 820 1188 L 1010 1178 M 660 1212 L 900 1204" fill="none" stroke="${shade(C.sable, -50)}" stroke-width="6" stroke-linecap="round"/>
    <path d="M -60 1208 C 140 1184, 300 1206, 470 1194 C 640 1214, 800 1226, 1140 1220 L 1140 1420 L -60 1420 Z" fill="${C.jungleFonce}" ${S()}/>
    <path d="M 60 1196 l 10 -26 l 8 24 l 12 -30 l 6 32 M 330 1198 l 8 -24 l 10 24 l 10 -28 l 6 30 M 470 1194 l 10 -22 l 8 24" fill="none" ${S(0.7)}/>
  </svg>`;
}

// ---------- bulles et cartouches ----------
const typo = (t) => t.replace(/'/g, '’');

// tail: { at: 0..1 (position horizontale), dir: -1 | 0 | 1 (inclinaison), side: 'bottom' | 'top' } ou null
function bubble({ x, y, w, h, text, tail = { at: 0.3, dir: -1 }, size = 46, bg = '#fff', color = ST.ink, shout = false, rot = 0 }) {
  text = typo(text);
  const tip = !tail ? 0 : tail.dir < 0 ? 8 : tail.dir > 0 ? 62 : 35;
  const side = (tail && tail.side) || 'bottom';
  const tailSvg = !tail ? '' : `<svg width="70" height="64" style="position:absolute;left:calc(${tail.at * 100}% - 35px);${side === 'bottom' ? 'top:100%' : 'bottom:100%;transform:scaleY(-1)'}">
      <path d="M 5 0 L ${tip} 56 L 65 0" fill="${bg}" ${S()} stroke-linecap="butt"/></svg>`;
  return `<div class="bubble${shout ? ' shout' : ''}" style="left:${x}px;top:${y}px;width:${w}px;${h ? `height:${h}px;` : ''}font-size:${size}px;background:${bg};color:${color};border:${ST.lw}px solid ${ST.ink};transform:rotate(${rot}deg)"><span>${text}</span>${tailSvg}</div>`;
}

function caption({ x, y, w, text, size = 40, bg = C.soleil, color = C.nuit, rot = -1.5 }) {
  return `<div class="caption" style="left:${x}px;top:${y}px;${w ? `width:${w}px;` : ''}font-size:${size}px;background:${bg};color:${color};border:${ST.lw}px solid ${ST.ink};transform:rotate(${rot}deg)">${typo(text)}</div>`;
}

// Relie deux bulles du même personnage.
function link({ x, y, h, bg = '#fff' }) {
  return `<div class="abs" style="left:${x}px;top:${y}px;width:46px;height:${h}px;background:${bg};border-left:${ST.lw}px solid ${ST.ink};border-right:${ST.lw}px solid ${ST.ink};z-index:2"></div>`;
}

// Lignes rayonnantes (panique, impact).
function burst({ cx, cy, r1 = 180, r2 = 520, n = 28, color = C.nuit, width = 7 }) {
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
// Le dessin (content) reçoit le filtre du style ; l'habillage (logo, numéro, pied) reste net.
function slide({ bg = C.creme, bgCss = '', n, total, series = 'Mon chimpanzé et moi', content, cta = 'La suite →' }) {
  const tex = (f, o, mode) => `<svg class="abs" style="left:0;top:0;mix-blend-mode:${mode};opacity:${o}" width="1080" height="1350"><filter id="t${uid}"><feTurbulence type="fractalNoise" baseFrequency="${f}" numOctaves="3" seed="${uid}"/><feColorMatrix type="saturate" values="0"/></filter><rect width="1080" height="1350" filter="url(#t${uid++})"/></svg>`;
  return `<div class="page st-${ST.key}" style="background:${bg};${bgCss}">
    <svg width="0" height="0" style="position:absolute"><filter id="sketch" x="-3%" y="-3%" width="106%" height="106%"><feTurbulence type="fractalNoise" baseFrequency="0.022" numOctaves="2" seed="4" result="n"/><feDisplacementMap in="SourceGraphic" in2="n" scale="8" xChannelSelector="R" yChannelSelector="G"/></filter></svg>
    <div class="panel">
      <div class="art"><div class="art-in">${content}</div></div>
      ${ST.sketch ? tex(0.012, 0.3, 'multiply') + tex(0.8, 0.28, 'multiply') : ''}
      ${ST.shadow ? '<div class="abs halftone"></div>' : ''}
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
.page{position:relative;width:1080px;height:1350px;overflow:hidden;font-family:Comic;font-weight:700;color:${C.nuit}}
.panel,.art,.art-in{position:absolute;inset:0;overflow:hidden}
.abs{position:absolute}
.tag{position:absolute;left:40px;top:40px;display:flex;align-items:center;gap:12px;background:${C.creme};border:6px solid ${C.nuit};border-radius:999px;padding:6px 26px 6px 10px;font-family:Poppins;font-weight:700;font-size:28px;box-shadow:5px 5px 0 ${C.nuit};z-index:5}
.num{position:absolute;right:40px;top:50px;background:${C.creme};border:6px solid ${C.nuit};border-radius:999px;font-family:Poppins;font-weight:700;font-size:28px;padding:8px 20px;box-shadow:5px 5px 0 ${C.nuit};z-index:5}
.foot{position:absolute;left:44px;right:44px;bottom:40px;display:flex;justify-content:space-between;align-items:center;font-family:Poppins;font-weight:700;font-size:32px;color:${C.creme};z-index:5}
.foot .swipe{background:${C.soleil};color:${C.nuit};padding:10px 24px;border-radius:999px;border:5px solid ${C.nuit}}
.bubble{display:flex;align-items:center;justify-content:center;position:absolute;border-radius:44px;padding:24px 30px 22px;text-align:center;line-height:1.12;text-transform:uppercase;box-shadow:8px 8px 0 rgba(30,27,58,.25)}
.bubble.shout{font-family:Poppins;font-weight:700;line-height:1.02}
.bubble b,.caption b{color:${C.flamme}}
.caption{position:absolute;border-radius:18px;padding:14px 26px 12px;font-family:Poppins;font-weight:700;line-height:1.14;box-shadow:8px 8px 0 ${C.nuit};text-align:center}
.title{position:absolute;font-family:Poppins;font-weight:700;line-height:.98;letter-spacing:-2px;color:${C.nuit}}
/* Ligne claire : trait fin, aucun effet */
.st-claire .bubble{box-shadow:none;border-radius:38px}
.st-claire .caption{box-shadow:none}
.st-claire .tag,.st-claire .num{border-width:4px;box-shadow:none}
.st-claire .foot .swipe{border-width:4px}
/* Roman graphique : bulles anguleuses, trame */
.st-roman .bubble{border-radius:10px;box-shadow:10px 10px 0 ${C.nuit}}
.st-roman .caption{border-radius:0}
.st-roman .halftone{inset:0;background-image:radial-gradient(rgba(30,27,58,.16) 2.2px,transparent 2.8px);background-size:14px 14px;-webkit-mask-image:linear-gradient(160deg,transparent 35%,#000 100%);mask-image:linear-gradient(160deg,transparent 35%,#000 100%);pointer-events:none}
/* Carnet de rando : trait tremblé, écriture à la main, papier */
.st-carnet .art{inset:-50px;filter:url(#sketch)}
.st-carnet .art-in{inset:50px;overflow:visible}
.st-carnet .bubble{font-family:Hand;font-weight:400;text-transform:none;font-size:1.22em;line-height:1.05;box-shadow:none;border-radius:60px 48px 64px 44px;background:${C.creme} !important}
.st-carnet .caption{box-shadow:none;border-radius:6px}
.st-carnet .tag,.st-carnet .num{box-shadow:none;border-width:4px}
`;

module.exports = { C, STYLES, useStyle, FLOOR_Y, quentin, chimp, saleve, ground, bubble, caption, burst, link, logo, slide, CSS, shade };
