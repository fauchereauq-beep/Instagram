// Crash-test n°1 — « La balade fantôme ». Vraie histoire : Brutus a fait repousser le lancement des balades plus de six mois.
// Style pop franco-belge. Scénario validé par Quentin le 15 novembre.
const { C, useStyle, quentin, chimp, saleve, ground, bubble, caption, link, slide, ono, popBg, cases } = require('../src/kit.js');
useStyle('pop');

const T = 7, nb = '&nbsp;', series = 'Crash-test · n°1';
const I = '#14121F';
const P = (w = 6) => `stroke="${I}" stroke-width="${w}" stroke-linejoin="round" stroke-linecap="round"`;
const svg = (inner, extra = '') => `<svg class="abs" style="left:0;top:0;${extra}" width="1080" height="1350" viewBox="0 0 1080 1350" overflow="visible">${inner}</svg>`;
const big = (t, size, top, { w = 980, color = I } = {}) => `<div class="title" style="left:48px;top:${top}px;width:${w}px;font-size:${size}px;color:${color}">${t}</div>`;
const fl = (t) => `<span style="color:${C.flamme}">${t}</span>`;
const hand = (x, y) => `<circle cx="${x}" cy="${y}" r="18" fill="${C.museau}" ${P(6)}/>`;

// Accessoires de Brutus, dans le repère de son dessin (viewBox -30 0 420 380).
const casque = (sirene = false) => `
  <path d="M 70 70 Q 180 -52 290 70 Z" fill="${C.soleil}" ${P(7)}/>
  <path d="M 180 -10 V 64 M 128 6 Q 120 40 122 66 M 232 6 Q 240 40 238 66" fill="none" ${P(5)}/>
  <rect x="52" y="58" width="256" height="22" rx="11" fill="${C.soleil}" ${P(7)}/>
  ${sirene ? `<path d="M 150 -36 h 60 l -6 -40 q -24 -22 -48 0 Z" fill="#E5322D" ${P(6)}/><path d="M 166 -66 q 6 -10 14 -8" stroke="#fff" stroke-width="6" fill="none" stroke-linecap="round"/>
    <path d="M 120 -70 l -40 -26 M 240 -70 l 40 -26 M 180 -110 v -40 M 132 -100 l -22 -36 M 228 -100 l 22 -36" stroke="#E5322D" stroke-width="9" stroke-linecap="round"/>` : ''}`;

// Barrière de chantier devant Brutus.
const barriere = svg(`
  <defs><pattern id="stripes" width="80" height="80" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="40" height="80" fill="#E5322D"/><rect x="40" width="40" height="80" fill="#fff"/></pattern></defs>
  <rect x="600" y="1060" width="22" height="150" fill="#5B5675" ${P(5)}/><rect x="1000" y="1060" width="22" height="150" fill="#5B5675" ${P(5)}/>
  <rect x="560" y="1010" width="500" height="74" rx="8" fill="url(#stripes)" ${P(7)}/>
  <rect x="650" y="1094" width="320" height="64" rx="8" fill="${C.creme}" ${P(6)}/>
  <text x="810" y="1138" text-anchor="middle" font-family="Poppins" font-weight="700" font-size="32" fill="${I}">SENTIER FERMÉ</text>`);

const classeur = svg(`
  <g transform="rotate(-5 815 1100)">
    <rect x="712" y="1004" width="16" height="190" fill="#9E1F1A" ${P(5)}/>
    <rect x="726" y="996" width="216" height="206" rx="10" fill="#E5322D" ${P(7)}/>
    <path d="M 760 990 h 150 v 14 M 770 984 h 120" fill="none" stroke="#fff" stroke-width="10"/>
    <rect x="756" y="1060" width="156" height="58" rx="6" fill="#fff" ${P(5)}/>
    <text x="834" y="1100" text-anchor="middle" font-family="Poppins" font-weight="700" font-size="30" fill="${I}">RISQUES</text>
    <text x="834" y="1170" text-anchor="middle" font-family="Poppins" font-weight="700" font-size="22" fill="#fff">vol. 1 / 12</text>
  </g>
  ${hand(718, 1100)}${hand(944, 1088)}`);

const skull = (x, y) => `<g transform="translate(${x} ${y})"><circle r="13" fill="#fff" ${P(4)}/><rect x="-8" y="8" width="16" height="10" rx="2" fill="#fff" ${P(4)}/><circle cx="-5" cy="-2" r="3.5" fill="${I}"/><circle cx="5" cy="-2" r="3.5" fill="${I}"/></g>`;
const carte = svg(`
  <g transform="rotate(4 820 1090)">
    <path d="M 690 990 L 770 1006 L 850 990 L 950 1006 L 950 1190 L 850 1174 L 770 1190 L 690 1174 Z" fill="#F6E3C8" ${P(7)}/>
    <path d="M 770 1006 V 1190 M 850 990 V 1174" stroke="${I}" stroke-width="3" opacity=".4"/>
    <path d="M 712 1160 C 760 1120, 720 1070, 790 1060 S 880 1050, 930 1010" fill="none" stroke="${C.flamme}" stroke-width="6" stroke-dasharray="4 14" stroke-linecap="round"/>
    ${skull(730, 1040)}${skull(820, 1110)}${skull(900, 1060)}${skull(880, 1150)}${skull(760, 1150)}
  </g>
  ${hand(690, 1080)}${hand(950, 1084)}`);

const ecureuil = svg(`
  <g transform="translate(452 1074)">
    <path d="M 34 104 C -34 96, -44 4, 8 -8 C 52 -18, 66 34, 34 44 C 56 56, 58 90, 34 104 Z" fill="#C8692E" ${P(5)}/>
    <ellipse cx="64" cy="84" rx="32" ry="36" fill="#D9783A" ${P(5)}/><ellipse cx="72" cy="92" rx="15" ry="22" fill="#F6E3C8"/>
    <path d="M 62 16 l 4 -26 l 14 22 Z" fill="#D9783A" ${P(4)}/>
    <circle cx="78" cy="38" r="27" fill="#D9783A" ${P(5)}/>
    <circle cx="86" cy="32" r="8" fill="#fff" ${P(3)}/><circle cx="88" cy="32" r="4" fill="${I}"/>
    <circle cx="104" cy="42" r="5" fill="${I}"/><path d="M 88 50 q 8 6 14 0" fill="none" ${P(3)}/>
  </g>`);

// Salon : mur, canapé (dossier derrière les personnages, assise devant).
const mur = popBg('#F7C6A3');
const dossier = svg(`<rect x="-40" y="840" width="1160" height="300" rx="60" fill="#3E6FB5" ${P(8)}/><path d="M 380 870 V 1110 M 720 870 V 1110" stroke="${I}" stroke-width="5" opacity=".35"/>`);
const assise = svg(`
  <rect x="-40" y="1090" width="1160" height="300" rx="40" fill="#2F5A99" ${P(8)}/>
  <rect x="-60" y="930" width="120" height="420" rx="50" fill="#3E6FB5" ${P(8)}/><rect x="1020" y="930" width="120" height="420" rx="50" fill="#3E6FB5" ${P(8)}/>`);
const agenda = svg(`
  <g transform="rotate(4 820 300)">
    <rect x="626" y="150" width="390" height="330" rx="10" fill="#fff" ${P(7)}/>
    <rect x="626" y="150" width="390" height="70" rx="10" fill="#E5322D" ${P(7)}/>
    <text x="821" y="198" text-anchor="middle" font-family="Poppins" font-weight="700" font-size="34" fill="#fff">AGENDA</text>
    <circle cx="680" cy="150" r="9" fill="${I}"/><circle cx="960" cy="150" r="9" fill="${I}"/>
    <text x="656" y="276" font-family="Poppins" font-weight="700" font-size="30" fill="${I}">Lancer les balades</text>
    <path d="M 652 266 L 990 262" stroke="#E5322D" stroke-width="7" stroke-linecap="round"/>
    <text x="656" y="330" font-family="Poppins" font-weight="700" font-size="28" fill="${C.grisNuit}">→ au printemps</text>
    <text x="656" y="380" font-family="Poppins" font-weight="700" font-size="28" fill="${C.grisNuit}">→ après l’été</text>
    <text x="656" y="430" font-family="Poppins" font-weight="700" font-size="28" fill="${C.grisNuit}">→ quand ce sera clair</text>
  </g>`);
const fenetre = svg(`
  <defs><linearGradient id="ciel" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#BFE3FF"/><stop offset="1" stop-color="#FFE7B0"/></linearGradient>
    <clipPath id="vitre"><rect x="400" y="560" width="240" height="230"/></clipPath></defs>
  <rect x="400" y="560" width="240" height="230" fill="url(#ciel)"/>
  <g clip-path="url(#vitre)">
    <path d="M 400 720 L 470 640 L 520 690 L 580 620 L 640 700 L 640 790 L 400 790 Z" fill="${C.lointain}" ${P(4)}/>
    <rect x="400" y="740" width="240" height="50" fill="${C.lac}"/><path d="M 560 740 c -2 -20 0 -34 4 -44 c 4 10 6 24 4 44 Z" fill="#fff" ${P(2)}/>
  </g>
  <rect x="400" y="560" width="240" height="230" fill="none" ${P(12)}/><path d="M 520 560 V 790 M 400 675 H 640" ${P(7)}/>
  <path d="M 380 548 Q 400 680 384 806 L 352 806 Q 368 680 350 548 Z" fill="${C.soleil}" ${P(6)}/>
  <path d="M 660 548 Q 640 680 656 806 L 688 806 Q 672 680 690 548 Z" fill="${C.soleil}" ${P(6)}/>`);
const horloge = svg(`
  <circle cx="770" cy="640" r="54" fill="#fff" ${P(8)}/>
  <path d="M 770 640 V 604 M 770 640 L 796 652" ${P(7)}/><circle cx="770" cy="640" r="6" fill="#14121F"/>
  <path d="M 832 612 q 14 -8 22 4 M 838 640 q 16 -2 20 12" fill="none" ${P(4)}/>`);
const lampe = svg(`
  <circle cx="1000" cy="610" r="120" fill="${C.soleil}" opacity=".25"/>
  <path d="M 1000 650 V 1100" ${P(10)}/><path d="M 1000 650 V 1100" stroke="#C9A36A" stroke-width="4"/>
  <path d="M 936 560 L 1064 560 L 1090 660 L 910 660 Z" fill="${C.soleil}" ${P(7)}/>`);
const salon = (perso) => `${mur}${fenetre}${horloge}${lampe}${dossier}${perso}${assise}`;

const plaid = (top = 980) => svg(`
  <defs><pattern id="tartan" width="60" height="60" patternUnits="userSpaceOnUse"><rect width="60" height="60" fill="#D9473A"/><rect x="22" width="16" height="60" fill="#14121F" opacity=".22"/><rect y="22" width="60" height="16" fill="#14121F" opacity=".22"/><rect x="28" width="4" height="60" fill="#FFC233" opacity=".7"/><rect y="28" width="60" height="4" fill="#FFC233" opacity=".7"/></pattern></defs>
  <path d="M 630 ${top + 20} Q 812 ${top - 30} 1000 ${top + 20} L 1030 1200 L 600 1200 Z" fill="url(#tartan)" ${P(7)}/>`);
const chips = (x, y, r = -14) => svg(`
  <g transform="rotate(${r} ${x + 50} ${y + 60})">
    <path d="M ${x} ${y} L ${x + 104} ${y} L ${x + 94} ${y + 124} L ${x + 10} ${y + 124} Z" fill="${C.soleil}" ${P(6)}/>
    <path d="M ${x} ${y} l 10 -12 l 12 12 l 12 -12 l 12 12 l 12 -12 l 12 12 l 12 -12 l 12 12 l 10 -12" fill="${C.soleil}" ${P(5)}/>
    <text x="${x + 52}" y="${y + 72}" text-anchor="middle" font-family="Poppins" font-weight="700" font-size="24" fill="#E5322D">CHIPS</text>
  </g>`);
const chip = (x, y, r) => `<ellipse cx="${x}" cy="${y}" rx="18" ry="12" fill="#F2B544" transform="rotate(${r} ${x} ${y})" ${P(4)}/>`;

const phone = `
  <div class="abs" style="left:560px;top:150px;width:440px;height:560px;transform:rotate(4deg);background:${I};border-radius:52px;padding:22px;box-shadow:12px 12px 0 rgba(20,18,31,.35);z-index:3">
    <div style="width:100%;height:100%;background:#EAF3FF;border-radius:34px;padding:34px 26px;font-family:Poppins;font-weight:700;color:${I}">
      <div style="font-size:26px;color:${C.grisNuit};margin-bottom:22px">Nouveau message</div>
      <div style="background:#fff;border:5px solid ${I};border-radius:28px;padding:22px 24px;font-size:36px;line-height:1.18">Depuis la balade, j’ai l’esprit plus clair. Merci.</div>
    </div>
  </div>`;

// Salle des machines dans le ventre (rayon X).
const machine = svg(`
  <defs><clipPath id="loupe"><circle cx="790" cy="900" r="232"/></clipPath>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 H 0 V 40" fill="none" stroke="#7FD4FF" stroke-width="1.5" opacity=".35"/></pattern></defs>
  <path d="M 340 1080 L 590 760 M 360 1150 L 640 1110" stroke="#7FD4FF" stroke-width="6" stroke-dasharray="14 12"/>
  <circle cx="300" cy="1110" r="72" fill="#7FD4FF" opacity=".35" stroke="#7FD4FF" stroke-width="8"/>
  <g clip-path="url(#loupe)">
    <rect x="540" y="660" width="500" height="480" fill="#12304F"/><rect x="540" y="660" width="500" height="480" fill="url(#grid)"/>
    <g fill="#B8B4C8" opacity=".9" ${P(5)}><circle cx="640" cy="720" r="44"/><circle cx="700" cy="690" r="36"/><circle cx="600" cy="680" r="30"/></g>
    <rect x="590" y="980" width="410" height="150" rx="14" fill="#5B5675" ${P(7)}/>
    <circle cx="650" cy="1050" r="30" fill="#EAF3FF" ${P(5)}/><path d="M 650 1050 L 672 1030" ${P(5)}/>
    <rect x="900" y="900" width="18" height="94" fill="#B8B4C8" ${P(4)}/><circle cx="909" cy="896" r="22" fill="${C.jungle}" ${P(5)}/>
    <rect x="950" y="930" width="18" height="64" fill="#B8B4C8" ${P(4)}/><circle cx="959" cy="926" r="22" fill="${C.jungle}" ${P(5)}/>
    <path d="M 846 990 L 814 834" ${P(16)}/><path d="M 846 990 L 814 834" stroke="#B8B4C8" stroke-width="8" stroke-linecap="round"/>
    <circle cx="812" cy="826" r="28" fill="#E5322D" ${P(6)}/>
    <rect x="626" y="1066" width="290" height="48" rx="8" fill="${C.soleil}" ${P(5)}/>
    <text x="771" y="1099" text-anchor="middle" font-family="Poppins" font-weight="700" font-size="25" fill="${I}">INCONNU = TIGRE</text>
  </g>
  <circle cx="790" cy="900" r="232" fill="none" stroke="#7FD4FF" stroke-width="12"/>
  <circle cx="1000" cy="720" r="24" fill="#E5322D" ${P(6)}/>`);

module.exports = {
  slug: '31-crash-balade-fantome',
  slides: [
    // 1 — Couverture
    slide({ n: 1, total: T, series, cta: 'Le dossier RISQUES →', content: `
      ${saleve()}
      ${big(`J’ai créé une balade pour débloquer les gens.`, 62, 140, { w: 860 })}
      ${big(fl('Devine qui était bloqué.'), 80, 290)}
      ${caption({ x: 48, y: 400, w: 520, size: 27, bg: C.creme, rot: -1.5, text: `Brutus, mon chimpanzé intérieur. Garde du corps. Parano.` })}
      ${bubble({ x: 590, y: 540, w: 440, size: 40, tail: { at: 0.5, dir: 0 }, text: `Sentier fermé. Pour ta sécurité.` })}
      ${quentin({ x: -50, y: 600, w: 600, eyes: { px: 9, py: 0 }, brows: [-12, 12], browY: -8, mouth: 'small', arms: 'shrug' })}
      ${ground()}
      ${chimp({ x: 590, y: 780, w: 440, eyes: { px: -8, py: 2, lid: 0.3 }, brows: [10, -10], mouth: 'flat', arms: 'hips', extra: casque() })}
      ${barriere}` }),

    // 2 — Le classeur
    slide({ n: 2, total: T, series, cta: 'Ça empire →', content: `
      ${saleve()}
      ${bubble({ x: 430, y: 150, w: 600, h: 150, size: 42, tail: null, text: `Et s'il pleut${nb}? Et si personne ne vient${nb}?` })}
      ${link({ x: 860, y: 293, h: 234 })}
      ${bubble({ x: 560, y: 520, w: 470, size: 46, tail: { at: 0.5, dir: 0 }, text: `Et si <b>quelqu'un</b> vient${nb}?!` })}
      ${bubble({ x: 40, y: 400, w: 440, size: 44, tail: { at: 0.4, dir: -1 }, text: `C'est le but, Brutus.` })}
      ${quentin({ x: -50, y: 600, w: 600, eyes: { px: 9, py: 0, lid: 0.25 }, brows: [-4, 4], mouth: 'flat' })}
      ${ground()}
      ${chimp({ x: 590, y: 780, w: 440, eyes: { px: -6, py: -2 }, brows: [-14, 14], browY: -6, mouth: 'open', arms: 'calm', extra: casque() })}
      ${classeur}` }),

    // 3 — Le mode survie
    slide({ n: 3, total: T, series, cta: 'Six mois plus tard →', content: `
      ${saleve()}
      ${bubble({ x: 450, y: 140, w: 580, h: 160, size: 40, tail: null, text: `J'ai repéré quatorze dangers. Dont un <b>écureuil</b>.` })}
      ${link({ x: 900, y: 293, h: 214 })}
      ${bubble({ x: 40, y: 410, w: 380, size: 44, tail: { at: 0.4, dir: -1 }, text: `Il a l'air sympa.` })}
      ${bubble({ x: 560, y: 500, w: 470, size: 40, tail: { at: 0.55, dir: 0 }, text: `C'est ce qu'il veut que tu croies.` })}
      ${quentin({ x: -50, y: 600, w: 600, eyes: { px: 10, py: 6 }, brows: [-6, 6], mouth: 'smile' })}
      ${ground()}
      ${ecureuil}
      ${chimp({ x: 590, y: 780, w: 440, eyes: { px: -12, py: 4 }, brows: [16, -16], browY: 2, mouth: 'flat', arms: 'calm', sweat: true, extra: casque(true) })}
      ${carte}
      ${ono('WIIIOU&nbsp;!', { x: 380, y: 690, size: 76, rot: -10, fill: '#E5322D' })}` }),

    // 4 — Le fond du trou, en deux cases : gros plan sur l'agenda, puis plan large du salon.
    slide({ n: 4, total: T, series, cta: 'BZZZ →', content: `
      ${popBg(C.creme)}
      <div class="abs" style="left:0;right:0;top:1250px;bottom:0;background:${C.nuit}"></div>
      ${cases([
        { x: 40, y: 130, w: 1000, h: 420, scene: mur + agenda, cx: 210, cy: 110, k: 1.15 },
        { x: 40, y: 590, w: 1000, h: 630, cx: 0, cy: 540, k: 0.926, scene: salon(`
          ${quentin({ x: -40, y: 650, w: 600, outfit: 'chemise', eyes: { px: 0, py: 2, lid: 0.45 }, brows: [0, 0], mouth: 'flat' })}
          ${chimp({ x: 610, y: 760, w: 400, eyes: { px: -4, py: 0, lid: 0.4 }, brows: [-6, 6], mouth: 'smile', arms: 'calm' })}
          ${plaid(980)}${chips(860, 930)}
          ${svg(chip(560, 1120, 20) + chip(620, 1140, -30) + chip(470, 1150, 10))}`) },
      ])}
      ${caption({ x: 70, y: 170, w: 400, size: 34, bg: C.soleil, rot: -2, text: `Résultat${nb}: j'ai repoussé. Plus de six mois.` })}
      ${bubble({ x: 610, y: 610, w: 400, size: 44, tail: { at: 0.55, dir: 0 }, text: `On est bien, là.` })}
      ${bubble({ x: 80, y: 600, w: 170, size: 52, tail: { at: 0.6, dir: 1 }, text: `…` })}` }),

    // 5 — La bascule : le message
    slide({ n: 5, total: T, series, cta: 'Ce qui se passe dans le corps →', content: `
      ${mur}
      ${dossier}
      ${quentin({ x: -40, y: 650, w: 600, outfit: 'chemise', eyes: { px: 10, py: -6, pr: 6 }, brows: [-16, 16], browY: -12, mouth: 'open' })}
      ${chimp({ x: 610, y: 720, w: 400, eyes: { px: -4, py: -4, pr: 4 }, brows: [-16, 16], browY: -10, mouth: 'open', arms: 'up' })}
      ${plaid(1060)}
      ${svg(chip(700, 760, 20) + chip(980, 740, -30) + chip(1010, 840, 50) + chip(660, 860, -10) + chip(940, 660, 10))}
      ${assise}
      ${phone}
      ${ono('BZZZ', { x: 470, y: 130, size: 90, rot: -14 })}
      ${ono('CRUNCH', { x: 620, y: 1140, size: 74, rot: 6, fill: C.flamme })}
      ${bubble({ x: 40, y: 380, w: 460, size: 42, tail: { at: 0.45, dir: 0 }, text: `…Elle a eu lieu, la balade.` })}` }),

    // 6 — Le radar du corps
    slide({ n: 6, total: T, series, cta: 'Ton défi →', bg: C.nuit, content: `
      ${popBg(C.nuit)}
      ${caption({ x: 48, y: 140, size: 32, bg: C.soleil, rot: -2, text: `Le radar du corps` })}
      ${big(`Brutus ne veut pas que j’échoue. Il veut que ${fl('rien ne change.')}`, 68, 240, { color: C.creme })}
      ${big(`Pour lui, l’inconnu, c’est un tigre.`, 46, 500, { color: C.soleil })}
      ${quentin({ x: -50, y: 640, w: 600, eyes: { closed: true }, brows: [-4, 4], browY: -4, mouth: 'default', arms: 'heart' })}
      ${machine}
      ${chimp({ x: 630, y: 790, w: 210, eyes: { px: 6, py: -6, pr: 4 }, brows: [-16, 16], browY: -8, mouth: 'scream', arms: 'up', sweat: true, extra: casque() })}` }),

    // 7 — Le défi
    slide({ n: 7, total: T, series, cta: 'Envoie-le à un ami qui repousse ↗', content: `
      ${saleve({ sky: ['#FFF6EA', '#FFD98A'] })}
      ${caption({ x: 48, y: 140, size: 34, bg: C.flamme, color: '#fff', rot: -2, text: `Ton défi` })}
      ${big(`Envoie aujourd’hui le message que ton Brutus te fait repousser.`, 56, 236)}
      ${big(fl(`Puis écris ENVOYÉ en commentaire.`), 44, 410)}
      ${bubble({ x: 560, y: 500, w: 470, size: 40, tail: { at: 0.15, dir: -1 }, text: `J'ai mis un émoji pour adoucir.` })}
      ${chimp({ x: 290, y: 650, w: 380, eyes: { px: -10, py: 8 }, brows: [-12, 12], browY: -6, mouth: 'wobble', arms: 'calm', sweat: true })}
      ${quentin({ x: -50, y: 540, w: 600, eyes: { px: 4, py: 10, laugh: true }, brows: [-6, 6], browY: -6, mouth: 'smile', arms: 'phone' })}
      ${ground()}` }),
  ],
};
