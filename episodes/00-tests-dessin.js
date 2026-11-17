// Quatre propositions de style, chacune avec ses propres personnages. Planche de choix, non publiée.
const { C, useStyle, bubble, caption, slide, ono } = require('../src/kit.js');
useStyle('pop');

const I = '#14121F', nb = '&nbsp;';
const SK = '#F2C29B', HAIR = '#2A211E', BEARD = '#3A2B24', FUR = '#6C6690', MUZ = '#F6E3C8';
const st = (w = 6) => `stroke="${I}" stroke-width="${w}" stroke-linejoin="round" stroke-linecap="round"`;
const limb = (d, col, w = 24, ink = 7) => `<path d="${d}" fill="none" stroke="${I}" stroke-width="${w + ink * 2}" stroke-linecap="round"/><path d="${d}" fill="none" stroke="${col}" stroke-width="${w}" stroke-linecap="round"/>`;
const page = (inner) => `<svg class="abs" style="left:0;top:0" width="1080" height="1350" viewBox="0 0 1080 1350">${inner}</svg>`;
const band = `<div class="abs" style="left:0;right:0;top:1250px;bottom:0;background:${C.nuit}"></div>`;
const visor = (d, w = 7) => `<path d="${d}" fill="url(#lens)" stroke="${I}" stroke-width="${w * 2}" stroke-linejoin="round"/><path d="${d}" fill="none" stroke="#E5322D" stroke-width="${w}" stroke-linejoin="round"/>`;
const lens = `<linearGradient id="lens" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stop-color="#FFE14D"/><stop offset=".5" stop-color="#7BE38B"/><stop offset="1" stop-color="#FF7AB8"/></linearGradient>`;
const label = (n, name, desc) => caption({ x: 44, y: 140, size: 40, bg: C.soleil, rot: -2, text: `Style ${n} · ${name}` }) +
  caption({ x: 44, y: 236, w: 640, size: 26, bg: C.creme, rot: 0, text: desc });
const chipsBag = (x, y, r = -12, s = 1) => `<g transform="translate(${x} ${y}) rotate(${r}) scale(${s})"><path d="M -46 -56 L 46 -56 L 38 56 L -38 56 Z" fill="${C.soleil}" ${st(5)}/><path d="M -46 -56 l 9 -10 l 9 10 l 9 -10 l 9 10 l 9 -10 l 9 10 l 9 -10 l 9 10 l 9 -10" fill="${C.soleil}" ${st(4)}/><text y="10" text-anchor="middle" font-family="Poppins" font-weight="700" font-size="22" fill="#E5322D">CHIPS</text></g>`;

// ---------- 1. Gros nez franco-belge : grosse tête, petit corps, nez patate ----------
const q1 = `
  ${limb('M 165 640 L 160 760', '#3E6FB5', 28)}${limb('M 235 640 L 240 760', '#3E6FB5', 28)}
  <ellipse cx="146" cy="780" rx="50" ry="24" fill="${I}"/><ellipse cx="258" cy="780" rx="50" ry="24" fill="${I}"/>
  ${limb('M 122 500 C 86 560, 80 610, 92 648', SK, 22)}<circle cx="92" cy="660" r="26" fill="${SK}" ${st(7)}/>
  ${limb('M 278 500 C 330 470, 352 420, 350 376', SK, 22)}
  <path d="M 330 352 l -10 -34 M 346 344 l -2 -38 M 362 348 l 8 -32 M 374 362 l 22 -20" stroke="${I}" stroke-width="22" stroke-linecap="round"/><path d="M 330 352 l -10 -34 M 346 344 l -2 -38 M 362 348 l 8 -32 M 374 362 l 22 -20" stroke="${SK}" stroke-width="9" stroke-linecap="round"/>
  <circle cx="352" cy="368" r="30" fill="${SK}" ${st(7)}/>
  <path d="M 120 470 Q 200 446 280 470 L 302 652 Q 200 672 98 652 Z" fill="${C.flamme}" ${st(7)}/>
  <path d="M 120 470 L 96 540 L 126 548 Z M 280 470 L 304 540 L 274 548 Z" fill="${C.flamme}" ${st(6)}/>
  <rect x="176" y="420" width="48" height="56" fill="${SK}" ${st(7)}/>
  <ellipse cx="34" cy="280" rx="34" ry="46" fill="${SK}" ${st(7)}/><ellipse cx="366" cy="280" rx="34" ry="46" fill="${SK}" ${st(7)}/>
  <path d="M 40 250 C 40 120, 120 70, 200 70 C 280 70, 360 120, 360 250 C 360 380, 300 452, 200 452 C 100 452, 40 380, 40 250 Z" fill="${SK}" ${st(8)}/>
  <path d="M 44 290 C 56 400, 120 456, 200 456 C 280 456, 344 400, 356 290 C 334 336, 296 350, 256 338 L 200 352 L 144 338 C 104 350, 66 336, 44 290 Z" fill="${BEARD}" ${st(8)}/>
  <path d="M 70 360 l 8 10 M 96 396 l 8 8 M 330 360 l -8 10 M 304 396 l -8 8 M 160 434 l 4 10 M 240 434 l -4 10" stroke="#6E5444" stroke-width="5" stroke-linecap="round"/>
  <path d="M 120 346 Q 200 372 280 346 Q 262 418 200 420 Q 138 418 120 346 Z" fill="#fff" ${st(7)}/><path d="M 132 372 Q 200 388 268 372" fill="none" stroke="#C9C3D6" stroke-width="4"/>
  <ellipse cx="158" cy="226" rx="44" ry="60" fill="#fff" ${st(7)}/><ellipse cx="242" cy="226" rx="44" ry="60" fill="#fff" ${st(7)}/>
  <circle cx="172" cy="236" r="13" fill="${I}"/><circle cx="228" cy="236" r="13" fill="${I}"/>
  <path d="M 110 156 Q 150 128 192 150 M 208 150 Q 250 128 290 156" fill="none" stroke="${HAIR}" stroke-width="16" stroke-linecap="round"/>
  <ellipse cx="200" cy="300" rx="52" ry="42" fill="#E3A47F" ${st(7)}/><ellipse cx="186" cy="288" rx="14" ry="9" fill="#fff" opacity=".6"/>
  <path d="M 36 240 C 30 170, 50 120, 80 100 L 46 64 L 100 72 L 88 20 L 140 52 L 150 0 L 190 42 L 210 -10 L 240 38 L 272 0 L 280 52 L 332 20 L 320 72 L 372 66 L 332 104 C 360 130, 372 180, 364 240 C 350 190, 320 150, 290 140 C 260 150, 230 160, 200 186 C 170 160, 140 150, 110 140 C 80 150, 50 190, 36 240 Z" fill="${HAIR}" ${st(8)}/>
  <path d="M 120 60 l 14 30 M 176 40 l 8 34 M 250 40 l -6 34 M 300 56 l -14 30" stroke="#5E4E48" stroke-width="6" stroke-linecap="round"/>
  ${visor('M 70 112 Q 200 40 330 112 L 338 146 Q 200 78 62 146 Z')}`;
const k1 = `
  <ellipse cx="128" cy="560" rx="44" ry="20" fill="${MUZ}" ${st(6)}/><ellipse cx="232" cy="560" rx="44" ry="20" fill="${MUZ}" ${st(6)}/>
  <path d="M 108 352 C 76 420, 88 548, 180 550 C 272 548, 284 420, 252 352 Z" fill="${FUR}" ${st(7)}/><ellipse cx="180" cy="470" rx="52" ry="60" fill="${MUZ}"/>
  ${limb('M 116 380 C 70 430, 60 480, 70 530', FUR, 22)}<circle cx="72" cy="540" r="22" fill="${MUZ}" ${st(6)}/>
  ${limb('M 244 380 C 290 410, 306 450, 300 486', FUR, 22)}
  ${chipsBag(312, 470, 14)}<circle cx="300" cy="494" r="22" fill="${MUZ}" ${st(6)}/>
  <circle cx="40" cy="190" r="52" fill="${FUR}" ${st(7)}/><circle cx="40" cy="190" r="26" fill="#C9A88F"/>
  <circle cx="320" cy="190" r="52" fill="${FUR}" ${st(7)}/><circle cx="320" cy="190" r="26" fill="#C9A88F"/>
  <path d="M 148 54 L 156 6 L 180 40 L 200 0 L 214 50 Z" fill="${FUR}" ${st(6)}/>
  <circle cx="180" cy="196" r="150" fill="${FUR}" ${st(8)}/>
  <path d="M 180 116 C 140 76, 64 96, 70 178 C 72 222, 100 242, 116 252 C 88 296, 110 344, 180 344 C 250 344, 272 296, 244 252 C 260 242, 288 222, 290 178 C 296 96, 220 76, 180 116 Z" fill="${MUZ}" ${st(6)}/>
  <ellipse cx="148" cy="176" rx="34" ry="46" fill="#fff" ${st(6)}/><ellipse cx="212" cy="176" rx="34" ry="46" fill="#fff" ${st(6)}/>
  <circle cx="142" cy="158" r="12" fill="${I}"/><circle cx="206" cy="158" r="12" fill="${I}"/>
  <path d="M 110 108 L 170 124 M 250 108 L 190 124" stroke="${I}" stroke-width="12" stroke-linecap="round"/>
  <circle cx="168" cy="252" r="6" fill="${I}"/><circle cx="192" cy="252" r="6" fill="${I}"/>
  <path d="M 140 296 q 10 -14 20 0 t 20 0 t 20 0 t 20 0" fill="none" ${st(7)}/>
  <path d="M 312 60 q 18 26 0 38 q -18 -12 0 -38 Z" fill="#8FD3FF" ${st(5)}/>`;

// ---------- 2. Pop art comics : encre épaisse, trames de points, couleurs primaires ----------
const q2 = `
  <path d="M 40 640 C 50 520, 110 470, 190 450 L 260 482 L 330 450 C 410 470, 470 520, 480 640 Z" fill="#E5322D" ${st(9)}/>
  <path d="M 330 450 C 410 470, 470 520, 480 640 L 380 640 C 390 560, 370 500, 330 450 Z" fill="url(#dd)"/>
  <path d="M 200 380 L 196 470 Q 260 504 324 470 L 320 380 Z" fill="#F9CFAE" ${st(9)}/><path d="M 200 400 Q 260 440 320 400 L 322 450 Q 260 480 198 450 Z" fill="url(#dd)"/>
  <ellipse cx="146" cy="262" rx="24" ry="40" fill="#F9CFAE" ${st(9)}/><ellipse cx="374" cy="262" rx="24" ry="40" fill="#F9CFAE" ${st(9)}/>
  <path d="M 150 170 C 152 90, 210 60, 260 60 C 320 60, 372 96, 372 170 L 372 270 C 366 340, 326 392, 260 400 C 194 392, 154 340, 150 270 Z" fill="#F9CFAE" ${st(9)}/>
  <path d="M 150 170 C 152 90, 210 60, 260 60 C 320 60, 372 96, 372 170 L 372 270 C 366 340, 326 392, 260 400 C 194 392, 154 340, 150 270 Z" fill="url(#d2)"/>
  <path d="M 318 80 C 372 112, 380 200, 372 280 C 366 340, 330 390, 282 398 C 330 330, 342 220, 318 80 Z" fill="url(#dd)"/>
  <path d="M 150 250 C 156 340, 200 404, 260 406 C 320 404, 366 340, 372 250 C 360 300, 330 318, 300 314 C 286 304, 274 302, 260 306 C 246 302, 234 304, 220 314 C 190 318, 162 300, 150 250 Z" fill="#1B1410" ${st(9)}/>
  <path d="M 178 332 q 20 30 50 44 M 296 370 q 30 -16 48 -52" fill="none" stroke="#3E7BD6" stroke-width="6" stroke-linecap="round"/>
  <path d="M 212 330 Q 260 348 308 330 Q 298 376 260 378 Q 222 376 212 330 Z" fill="#fff" ${st(6)}/><path d="M 222 350 H 298" stroke="${I}" stroke-width="3"/>
  <path d="M 264 228 L 248 296 Q 262 308 282 298" fill="none" ${st(6)}/>
  <path d="M 188 234 Q 214 212 244 232 Q 214 248 188 234 Z" fill="#fff" ${st(4)}/><circle cx="218" cy="232" r="10" fill="#6B3F1E"/><circle cx="218" cy="232" r="4.5" fill="${I}"/>
  <path d="M 278 232 Q 306 212 332 234 Q 306 248 278 232 Z" fill="#fff" ${st(4)}/><circle cx="304" cy="232" r="10" fill="#6B3F1E"/><circle cx="304" cy="232" r="4.5" fill="${I}"/>
  <path d="M 186 226 Q 214 206 246 226 M 276 226 Q 306 206 334 226" fill="none" stroke="${I}" stroke-width="7" stroke-linecap="round"/>
  <path d="M 182 194 L 246 186 L 244 200 L 184 206 Z M 276 186 L 338 194 L 336 206 L 278 200 Z" fill="${I}"/>
  <path d="M 146 200 C 140 140, 150 100, 172 80 L 156 52 L 190 60 L 186 20 L 220 44 L 236 6 L 258 40 L 284 8 L 296 44 L 330 22 L 330 60 L 364 56 L 352 92 C 372 120, 378 160, 374 200 C 366 160, 352 136, 334 124 C 312 126, 286 134, 262 156 C 240 134, 214 126, 192 124 C 172 136, 154 160, 146 200 Z" fill="#141018" ${st(9)}/>
  <path d="M 196 62 q 12 26 8 50 M 246 40 q 10 30 4 60 M 300 56 q 0 30 -14 54 M 170 120 q 0 24 -10 44" fill="none" stroke="#3E7BD6" stroke-width="7" stroke-linecap="round"/>
  ${visor('M 168 86 Q 260 50 354 86 L 358 116 Q 260 86 164 116 Z', 8)}`;
const k2 = `
  <path d="M 60 600 C 70 470, 140 420, 230 420 C 320 420, 390 470, 400 600 Z" fill="#7B5EA7" ${st(9)}/><path d="M 300 430 C 360 450, 396 520, 400 600 L 320 600 Z" fill="url(#dd)"/>
  ${limb('M 110 470 C 40 420, 40 300, 80 220', '#7B5EA7', 34, 9)}${limb('M 350 470 C 420 420, 420 300, 380 220', '#7B5EA7', 34, 9)}
  <circle cx="64" cy="200" r="54" fill="#7B5EA7" ${st(9)}/><circle cx="64" cy="200" r="26" fill="#E8B9A0"/>
  <circle cx="396" cy="200" r="54" fill="#7B5EA7" ${st(9)}/><circle cx="396" cy="200" r="26" fill="#E8B9A0"/>
  <circle cx="230" cy="230" r="156" fill="#7B5EA7" ${st(10)}/><path d="M 330 110 C 390 170, 390 300, 320 370 C 360 290, 360 180, 330 110 Z" fill="url(#dd)"/>
  <path d="M 140 104 q 20 -40 60 -50 M 260 60 q 40 0 70 30" fill="none" stroke="#B9A2E0" stroke-width="8" stroke-linecap="round"/>
  <path d="M 230 150 C 194 112, 118 128, 124 206 C 126 244, 150 262, 166 270 C 140 314, 160 362, 230 362 C 300 362, 320 314, 294 270 C 310 262, 334 244, 336 206 C 342 128, 266 112, 230 150 Z" fill="#F6D9C0" ${st(7)}/>
  <path d="M 230 150 C 194 112, 118 128, 124 206 C 126 244, 150 262, 166 270 C 140 314, 160 362, 230 362 C 300 362, 320 314, 294 270 C 310 262, 334 244, 336 206 C 342 128, 266 112, 230 150 Z" fill="url(#d2)"/>
  <circle cx="196" cy="200" r="30" fill="#fff" ${st(6)}/><circle cx="264" cy="200" r="30" fill="#fff" ${st(6)}/><circle cx="196" cy="200" r="7" fill="${I}"/><circle cx="264" cy="200" r="7" fill="${I}"/>
  <path d="M 160 150 L 214 166 M 300 150 L 246 166" stroke="${I}" stroke-width="12" stroke-linecap="round"/>
  <path d="M 184 270 Q 230 250 276 270 Q 272 346 230 348 Q 188 346 184 270 Z" fill="#7A1E22" ${st(7)}/><path d="M 204 324 Q 230 310 256 324 Q 230 340 204 324 Z" fill="#E5322D"/>
  <path d="M 190 272 h 80 v 12 h -80 Z" fill="#fff"/>
  <path d="M 360 80 q 22 32 0 46 q -22 -14 0 -46 Z M 100 70 q 18 26 0 38 q -18 -12 0 -38 Z" fill="#8FD3FF" ${st(5)}/>`;

// ---------- 3. Sticker kawaii pop : tout rond, gros yeux brillants, contour blanc ----------
const halo = (g) => `<g style="filter:drop-shadow(0 12px 0 rgba(20,18,31,.18))"><g class="halo">${g}</g></g>${g}`;
const q3g = `
  <ellipse cx="160" cy="506" rx="40" ry="20" fill="${I}"/><ellipse cx="240" cy="506" rx="40" ry="20" fill="${I}"/>
  <path d="M 116 352 Q 200 330 284 352 Q 306 470 272 500 L 128 500 Q 94 470 116 352 Z" fill="${C.flamme}" ${st(5)}/>
  <ellipse cx="86" cy="420" rx="26" ry="40" fill="${C.flamme}" transform="rotate(20 86 420)" ${st(5)}/><circle cx="76" cy="458" r="20" fill="${SK}" ${st(5)}/>
  <ellipse cx="318" cy="330" rx="26" ry="40" fill="${C.flamme}" transform="rotate(-30 318 330)" ${st(5)}/><circle cx="336" cy="292" r="22" fill="${SK}" ${st(5)}/>
  <circle cx="40" cy="214" r="28" fill="${SK}" ${st(5)}/><circle cx="360" cy="214" r="28" fill="${SK}" ${st(5)}/>
  <circle cx="200" cy="200" r="166" fill="${SK}" ${st(5)}/>
  <path d="M 52 238 Q 74 352 200 360 Q 326 352 348 238 Q 312 300 254 290 Q 200 306 146 290 Q 88 300 52 238 Z" fill="${BEARD}" ${st(5)}/>
  <path d="M 40 170 Q 40 60 140 44 L 130 4 L 176 34 L 200 -4 L 226 34 L 272 4 L 262 44 Q 360 60 360 170 Q 320 110 260 108 Q 230 112 200 140 Q 170 112 140 108 Q 80 110 40 170 Z" fill="${HAIR}" ${st(5)}/>
  ${visor('M 74 96 Q 200 34 326 96 L 330 124 Q 200 70 70 124 Z', 6)}
  <circle cx="146" cy="214" r="36" fill="${I}"/><circle cx="254" cy="214" r="36" fill="${I}"/>
  <circle cx="158" cy="200" r="13" fill="#fff"/><circle cx="136" cy="230" r="6" fill="#fff"/><circle cx="266" cy="200" r="13" fill="#fff"/><circle cx="244" cy="230" r="6" fill="#fff"/>
  <path d="M 104 168 Q 134 150 166 162 M 234 162 Q 266 150 296 168" fill="none" stroke="${HAIR}" stroke-width="10" stroke-linecap="round"/>
  <ellipse cx="102" cy="268" rx="26" ry="15" fill="#FF8FB1" opacity=".75"/><ellipse cx="298" cy="268" rx="26" ry="15" fill="#FF8FB1" opacity=".75"/>
  <ellipse cx="200" cy="256" rx="11" ry="8" fill="#E3A47F"/>
  <path d="M 172 292 Q 200 330 228 292 Z" fill="#7A1E22" ${st(5)}/><path d="M 186 308 Q 200 300 214 308 Q 200 318 186 308 Z" fill="#FF7A8A"/>`;
const k3g = `
  <ellipse cx="140" cy="476" rx="38" ry="18" fill="${MUZ}" ${st(5)}/><ellipse cx="220" cy="476" rx="38" ry="18" fill="${MUZ}" ${st(5)}/>
  <ellipse cx="180" cy="400" rx="96" ry="84" fill="${FUR}" ${st(5)}/><ellipse cx="180" cy="414" rx="54" ry="50" fill="${MUZ}"/>
  <ellipse cx="88" cy="394" rx="24" ry="40" fill="${FUR}" transform="rotate(30 88 394)" ${st(5)}/>
  <ellipse cx="270" cy="394" rx="24" ry="40" fill="${FUR}" transform="rotate(-30 270 394)" ${st(5)}/>
  ${chipsBag(260, 360, 16, 0.75)}<circle cx="276" cy="420" r="18" fill="${MUZ}" ${st(5)}/>
  <circle cx="26" cy="170" r="54" fill="${FUR}" ${st(5)}/><circle cx="26" cy="170" r="28" fill="#F2B8C6"/>
  <circle cx="334" cy="170" r="54" fill="${FUR}" ${st(5)}/><circle cx="334" cy="170" r="28" fill="#F2B8C6"/>
  <circle cx="180" cy="176" r="146" fill="${FUR}" ${st(5)}/>
  <path d="M 170 30 q -30 -30 0 -40 q 30 -6 26 20" fill="none" stroke="${I}" stroke-width="12" stroke-linecap="round"/><path d="M 170 30 q -30 -30 0 -40 q 30 -6 26 20" fill="none" stroke="${FUR}" stroke-width="5" stroke-linecap="round"/>
  <path d="M 180 104 C 140 70, 66 88, 72 166 C 74 206, 98 226, 112 234 C 86 276, 108 322, 180 322 C 252 322, 274 276, 248 234 C 262 226, 286 206, 288 166 C 294 88, 220 70, 180 104 Z" fill="${MUZ}" ${st(5)}/>
  <circle cx="134" cy="170" r="34" fill="${I}"/><circle cx="226" cy="170" r="34" fill="${I}"/>
  <circle cx="146" cy="156" r="12" fill="#fff"/><circle cx="124" cy="186" r="6" fill="#fff"/><circle cx="238" cy="156" r="12" fill="#fff"/><circle cx="216" cy="186" r="6" fill="#fff"/>
  <path d="M 112 214 q 10 22 0 34" stroke="#8FD3FF" stroke-width="8" stroke-linecap="round" fill="none"/>
  <ellipse cx="96" cy="236" rx="22" ry="12" fill="#FF8FB1" opacity=".7"/><ellipse cx="264" cy="236" rx="22" ry="12" fill="#FF8FB1" opacity=".7"/>
  <circle cx="170" cy="234" r="5" fill="${I}"/><circle cx="190" cy="234" r="5" fill="${I}"/>
  <path d="M 150 276 q 7.5 -10 15 0 t 15 0 t 15 0 t 15 0" fill="none" ${st(5)}/>
  <path d="M 300 40 q 18 26 0 38 q -18 -12 0 -38 Z" fill="#8FD3FF" ${st(4)}/>`;
const sparkle = (x, y, r, c = C.soleil) => `<path d="M ${x} ${y - r} Q ${x + r * 0.18} ${y - r * 0.18} ${x + r} ${y} Q ${x + r * 0.18} ${y + r * 0.18} ${x} ${y + r} Q ${x - r * 0.18} ${y + r * 0.18} ${x - r} ${y} Q ${x - r * 0.18} ${y - r * 0.18} ${x} ${y - r} Z" fill="${c}"/>`;

// ---------- 4. Flat moderne : sans contour, formes géométriques, longues silhouettes ----------
const q4 = `
  <path d="M 104 520 L 92 880 L 140 880 L 150 560 Z M 196 520 L 208 880 L 160 880 L 150 560 Z" fill="${C.nuit}"/>
  <path d="M 70 872 h 74 v 26 h -86 Z M 156 872 h 74 l 12 26 h -86 Z" fill="${C.flamme}"/>
  <path d="M 72 300 Q 150 272 228 300 L 252 540 L 48 540 Z" fill="${C.flamme}"/><path d="M 150 286 Q 200 290 228 300 L 252 540 L 160 540 Z" fill="#D9461A"/>
  <path d="M 84 316 L 120 296 L 128 540 L 96 540 Z M 216 316 L 180 296 L 172 540 L 204 540 Z" fill="${C.nuit}"/>
  <path d="M 74 306 L 30 470 L 58 480 L 100 330 Z" fill="${C.flamme}"/><circle cx="40" cy="486" r="20" fill="${SK}"/>
  <path d="M 226 306 L 300 210 L 278 196 L 210 290 Z" fill="${C.flamme}"/><circle cx="292" cy="196" r="20" fill="${SK}"/>
  <rect x="132" y="236" width="36" height="60" fill="#D9A07C"/>
  <ellipse cx="86" cy="184" rx="14" ry="22" fill="${SK}"/><ellipse cx="214" cy="184" rx="14" ry="22" fill="#D9A07C"/>
  <ellipse cx="150" cy="176" rx="64" ry="84" fill="${SK}"/><path d="M 150 92 A 64 84 0 0 1 150 260 Z" fill="#E3AE88"/>
  <path d="M 88 196 Q 92 260 150 264 Q 208 260 212 196 Q 196 230 150 222 Q 104 230 88 196 Z" fill="${BEARD}"/>
  <path d="M 128 236 Q 150 254 172 236 Z" fill="#fff"/>
  <path d="M 84 160 L 80 110 L 100 92 L 92 64 L 120 78 L 126 48 L 146 72 L 160 44 L 172 74 L 196 56 L 194 88 L 220 96 L 216 160 Q 196 120 150 128 Q 104 120 84 160 Z" fill="${HAIR}"/>
  <path d="M 92 98 Q 150 70 210 98 L 212 112 Q 150 88 90 112 Z" fill="#E5322D"/>
  <circle cx="128" cy="176" r="6" fill="${I}"/><circle cx="172" cy="176" r="6" fill="${I}"/>
  <rect x="114" y="154" width="28" height="7" rx="3" fill="${HAIR}"/><rect x="158" y="154" width="28" height="7" rx="3" fill="${HAIR}"/>
  <path d="M 150 178 L 140 210 L 158 210 Z" fill="#C98E69"/>`;
const k4 = `
  <rect x="0" y="300" width="300" height="120" rx="40" fill="#8E8AAE"/><rect x="150" y="300" width="150" height="120" rx="40" fill="#7A769B"/>
  <ellipse cx="150" cy="230" rx="80" ry="90" fill="${FUR}"/><ellipse cx="150" cy="250" rx="46" ry="54" fill="${MUZ}"/>
  <path d="M 84 190 Q 40 260 70 310 L 96 306 Q 80 260 112 214 Z M 216 190 Q 260 240 220 290 L 196 280 Q 222 240 190 214 Z" fill="#5B5675"/>
  <rect x="176" y="250" width="56" height="86" rx="10" fill="${C.nuit}" transform="rotate(-14 204 293)"/><rect x="184" y="260" width="40" height="62" rx="5" fill="#9FE3FF" transform="rotate(-14 204 293)"/>
  <circle cx="210" cy="296" r="18" fill="${MUZ}"/>
  <circle cx="62" cy="80" r="34" fill="${FUR}"/><circle cx="238" cy="80" r="34" fill="#5B5675"/>
  <circle cx="150" cy="80" r="86" fill="${FUR}"/><path d="M 150 -6 A 86 86 0 0 1 150 166 Z" fill="#5B5675"/>
  <path d="M 150 40 C 120 20, 80 40, 86 90 C 88 116, 104 126, 112 130 C 96 156, 110 168, 150 168 C 190 168, 204 156, 188 130 C 196 126, 212 116, 214 90 C 220 40, 180 20, 150 40 Z" fill="${MUZ}"/>
  <circle cx="126" cy="88" r="7" fill="${I}"/><circle cx="174" cy="88" r="7" fill="${I}"/>
  <rect x="140" y="132" width="20" height="5" rx="2" fill="${I}"/>`;

const defs = `<defs>${lens}
  <pattern id="d2" width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="7" cy="7" r="3" fill="#E5322D" opacity=".35"/></pattern>
  <pattern id="dd" width="12" height="12" patternUnits="userSpaceOnUse"><circle cx="6" cy="6" r="4" fill="${I}" opacity=".45"/></pattern>
  <pattern id="bg2" width="36" height="36" patternUnits="userSpaceOnUse"><circle cx="18" cy="18" r="9" fill="#fff" opacity=".35"/></pattern>
  <linearGradient id="bg3" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stop-color="#FFE3F1"/><stop offset="1" stop-color="#D9F2FF"/></linearGradient>
</defs>
<style>.halo *{fill:#fff !important;stroke:#fff !important;stroke-width:34px !important}</style>`;

const rays = (cx, cy, c1, c2) => `<rect width="1080" height="1350" fill="${c1}"/>${Array.from({ length: 24 }, (_, i) => {
  const a1 = (i * 15) * Math.PI / 180, a2 = (i * 15 + 7) * Math.PI / 180, R = 1600;
  return `<path d="M ${cx} ${cy} L ${cx + R * Math.cos(a1)} ${cy + R * Math.sin(a1)} L ${cx + R * Math.cos(a2)} ${cy + R * Math.sin(a2)} Z" fill="${c2}"/>`;
}).join('')}`;
const boom = (cx, cy, r1, r2, n, fill) => `<path d="${Array.from({ length: n * 2 }, (_, i) => {
  const a = i * Math.PI / n, r = i % 2 ? r1 : r2; return `${i ? 'L' : 'M'} ${(cx + r * Math.cos(a)).toFixed(1)} ${(cy + r * Math.sin(a)).toFixed(1)}`; }).join(' ')} Z" fill="${fill}" ${st(9)}/>`;

module.exports = {
  slug: '00-tests-dessin',
  slides: [
    slide({ n: 1, total: 4, series: 'Test de dessin', cta: 'Style 2 →', content: `
      ${page(`${defs}${rays(540, 760, '#FFC233', '#FFD45E')}
        <rect x="0" y="1130" width="1080" height="220" fill="${C.jungle}"/><path d="M 0 1130 H 1080" ${st(8)}/>
        <g transform="translate(70 360)">${q1}</g><g transform="translate(620 660) scale(0.8)">${k1}</g>`)}
      ${band}${label(1, 'Gros nez franco-belge', 'Grosse tête, petit corps, nez patate, yeux collés.')}
      ${bubble({ x: 560, y: 470, w: 470, size: 40, tail: { at: 0.6, dir: 0 }, text: `Il a un nez de caractère.` })}` }),

    slide({ n: 2, total: 4, series: 'Test de dessin', cta: 'Style 3 →', content: `
      ${page(`${defs}<rect width="1080" height="1350" fill="#29B6E8"/><rect width="1080" height="1350" fill="url(#bg2)"/>
        ${boom(800, 860, 250, 330, 14, C.soleil)}
        <g transform="translate(10 600) scale(1.05)">${q2}</g><g transform="translate(580 650) scale(0.92)">${k2}</g>`)}
      ${band}${label(2, 'Pop art comics', 'Encre épaisse, trames de points, couleurs primaires.')}
      ${ono('AAARGH&nbsp;!', { x: 600, y: 470, size: 92, rot: -8, fill: '#E5322D' })}` }),

    slide({ n: 3, total: 4, series: 'Test de dessin', cta: 'Style 4 →', content: `
      ${page(`${defs}<rect width="1080" height="1350" fill="url(#bg3)"/>
        ${sparkle(140, 420, 34)}${sparkle(980, 380, 44, '#FF8FB1')}${sparkle(540, 520, 26, '#7FD4FF')}${sparkle(920, 640, 22)}${sparkle(90, 760, 22, '#FF8FB1')}
        <ellipse cx="540" cy="1190" rx="520" ry="60" fill="#14121F" opacity=".08"/>
        <g transform="translate(90 610) scale(1.08)">${halo(q3g)}</g><g transform="translate(620 700) scale(1)">${halo(k3g)}</g>`)}
      ${band}${label(3, 'Sticker kawaii pop', 'Tout rond, gros yeux brillants, contour blanc d’autocollant.')}
      ${bubble({ x: 580, y: 450, w: 440, size: 40, tail: { at: 0.6, dir: 0 }, text: `On dirait des stickers de goûter.` })}` }),

    slide({ n: 4, total: 4, series: 'Test de dessin', cta: 'Ton choix ?', content: `
      ${page(`${defs}<rect width="1080" height="1350" fill="${C.creme}"/>
        <circle cx="820" cy="470" r="110" fill="${C.soleil}"/>
        <path d="M 0 760 L 260 520 L 420 660 L 640 430 L 900 700 L 1080 560 L 1080 900 L 0 900 Z" fill="${C.lointain}"/>
        <path d="M 640 430 L 900 700 L 1080 560 L 1080 900 L 640 900 Z" fill="#9893C9"/>
        <rect x="0" y="860" width="1080" height="90" fill="${C.lac}"/>
        <rect x="0" y="940" width="1080" height="410" fill="${C.jungle}"/>
        <path d="M 0 940 L 120 860 L 240 940 Z M 900 940 L 1000 870 L 1080 940 Z" fill="${C.jungleFonce}"/>
        <g transform="translate(140 300)">${q4}</g><g transform="translate(660 760)">${k4}</g>`)}
      ${band}${label(4, 'Flat moderne', 'Sans contour, formes géométriques, longues silhouettes.')}
      ${bubble({ x: 600, y: 520, w: 430, size: 40, tail: { at: 0.4, dir: -1 }, text: `Moi, je scrolle. Toi, tu marches.` })}` }),
  ],
};
