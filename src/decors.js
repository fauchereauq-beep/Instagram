// Décors v2 et effets BD : profondeur, ambiances, détails cachés (Panama, formations, cornichons, écureuil louche).
const { C } = require('./kit.js');

const I = '#14121F';
let uid = 0;
const id = (p) => `${p}${uid++}`;
const st = (w = 7) => `stroke="${I}" stroke-width="${w}" stroke-linejoin="round" stroke-linecap="round"`;
const page = (inner) => `<svg class="abs" style="left:0;top:0" width="1080" height="1350" viewBox="0 0 1080 1350" overflow="visible">${inner}</svg>`;
const trame = (o = 0.08) => `<div class="abs" style="inset:0;background-image:radial-gradient(rgba(20,18,31,${o}) 2.6px,transparent 3.2px);background-size:18px 18px;pointer-events:none"></div>`;

const MOODS = {
  matin: { sky: ['#8FD0FF', '#FFE9C2'], sun: C.soleil, alps: '#CBC8EA', ridge: '#A39FD0', lake: '#9CC9F0', hill: '#9BD1A8', grass: C.jungle },
  or: { sky: ['#FF8A5C', '#FFD48A'], sun: '#FFE07A', alps: '#E9AFA6', ridge: '#B07AA8', lake: '#F4B994', hill: '#86BE8C', grass: '#2A7A57' },
  gris: { sky: ['#9C9AB5', '#D4CFDE'], sun: null, alps: '#BDBACB', ridge: '#8F8BA8', lake: '#A7AEC9', hill: '#8FAE98', grass: '#3C6E58' },
  nuit: { sky: ['#14122B', '#3D3470'], sun: null, moon: true, alps: '#4B4580', ridge: '#3A3468', lake: '#2D3A6E', hill: '#24504A', grass: '#1B3D35' },
};

const nuage = (x, y, s = 1, o = 1) => `<g transform="translate(${x} ${y}) scale(${s})" opacity="${o}"><path d="M -90 20 C -112 20, -110 -16, -80 -14 C -78 -44, -36 -54, -18 -32 C -6 -66, 52 -66, 60 -28 C 84 -40, 112 -16, 98 6 C 116 12, 108 28, 90 28 L -80 28 Z" fill="#fff" ${st(5)}/><path d="M -56 12 q 50 10 120 0" fill="none" stroke="#DCE6F2" stroke-width="8" stroke-linecap="round"/></g>`;
const oiseau = (x, y, s = 1) => `<path d="M ${x - 16 * s} ${y} q ${8 * s} ${-10 * s} ${16 * s} 0 q ${8 * s} ${-10 * s} ${16 * s} 0" fill="none" ${st(4)}/>`;
const fleur = (x, y, c = '#FF8FB1') => `<g transform="translate(${x} ${y})">${[0, 72, 144, 216, 288].map((a) => `<circle cx="${(10 * Math.cos(a * Math.PI / 180)).toFixed(1)}" cy="${(10 * Math.sin(a * Math.PI / 180)).toFixed(1)}" r="8" fill="${c}" ${st(3)}/>`).join('')}<circle r="6" fill="${C.soleil}" ${st(3)}/></g>`;
const touffe = (x, y, s = 1, c = '#14432F') => `<path d="M ${x} ${y} q ${-6 * s} ${-18 * s} ${-16 * s} ${-30 * s} M ${x} ${y} q 0 ${-22 * s} ${4 * s} ${-40 * s} M ${x} ${y} q ${8 * s} ${-16 * s} ${20 * s} ${-26 * s}" fill="none" stroke="${c}" stroke-width="${6 * s}" stroke-linecap="round"/>`;
function sapin(x, y, h, c = C.jungle) {
  const w = h * 0.6;
  const t = (cy, ww, hh) => `<path d="M ${x} ${cy - hh} Q ${x + ww * 0.12} ${cy - hh * 0.5} ${x + ww / 2} ${cy} Q ${x} ${cy + hh * 0.14} ${x - ww / 2} ${cy} Q ${x - ww * 0.12} ${cy - hh * 0.5} ${x} ${cy - hh} Z" fill="${c}" ${st(5)}/>`;
  return `<rect x="${x - 7}" y="${y - h * 0.14}" width="14" height="${h * 0.16}" fill="#7A4A2A" ${st(4)}/>${t(y - h * 0.12, w, h * 0.46)}${t(y - h * 0.4, w * 0.8, h * 0.42)}${t(y - h * 0.64, w * 0.58, h * 0.38)}`;
}

// Le Salève, version riche : Alpes enneigées, falaises, téléphérique, lac, jet d'eau, Genève, sapins, sentier.
function saleve({ mood = 'matin', path = true, panneau = '', panneauX = 880, birds = true, clouds = true } = {}) {
  const m = MOODS[mood] || MOODS.matin;
  const g = id('sk'), gl = id('gl');
  const stars = m.moon ? Array.from({ length: 40 }, (_, i) => `<circle cx="${(i * 197) % 1080}" cy="${(i * 83) % 520 + 20}" r="${i % 3 ? 2 : 3.5}" fill="#fff" opacity="${i % 2 ? 0.6 : 0.9}"/>`).join('') : '';
  return page(`
    <defs><linearGradient id="${g}" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="${m.sky[0]}"/><stop offset="1" stop-color="${m.sky[1]}"/></linearGradient>
      <radialGradient id="${gl}"><stop offset="0" stop-color="#fff" stop-opacity=".6"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient></defs>
    <rect width="1080" height="1350" fill="url(#${g})"/>
    ${stars}
    ${m.moon ? `<circle cx="850" cy="420" r="70" fill="#FFF3C4" ${st(6)}/><circle cx="880" cy="400" r="60" fill="${m.sky[0]}"/>` : ''}
    ${m.sun ? `<circle cx="850" cy="500" r="280" fill="url(#${gl})"/><circle cx="850" cy="500" r="82" fill="${m.sun}" ${st(6)}/>` : ''}
    ${clouds ? nuage(150, 600, 0.75) + nuage(1000, 610, 0.6) + (mood === 'gris' ? nuage(560, 590, 0.9) : '') : ''}
    ${birds && !m.moon ? oiseau(600, 610) + oiseau(645, 628, 0.8) + oiseau(565, 640, 0.7) : ''}
    <path d="M -20 690 L 50 630 L 110 660 L 200 570 L 280 640 L 350 610 L 440 540 Q 500 505 560 535 L 650 610 L 720 580 L 800 640 L 880 600 L 960 655 L 1040 615 L 1100 640 L 1100 790 L -20 790 Z" fill="${m.alps}" ${st(5)}/>
    <g fill="#fff" ${st(4)}><path d="M 178 592 L 200 570 L 224 594 L 212 590 L 202 600 L 190 590 Z"/><path d="M 418 562 L 440 540 Q 500 505 560 535 L 586 560 L 566 556 L 548 568 L 526 554 L 500 570 L 478 556 L 456 570 Z"/><path d="M 700 600 L 720 580 L 744 598 L 732 596 L 722 606 L 710 596 Z"/><path d="M 862 614 L 880 600 L 900 616 L 888 614 L 880 622 L 870 614 Z"/></g>
    <rect x="-20" y="796" width="1120" height="90" fill="${m.lake}" ${st(5)}/>
    <g fill="${C.grisNuit}" opacity=".85"><rect x="790" y="778" width="18" height="20"/><rect x="812" y="768" width="14" height="30"/><rect x="830" y="782" width="26" height="16"/><rect x="860" y="764" width="12" height="34"/><rect x="876" y="778" width="30" height="20"/><rect x="910" y="772" width="16" height="26"/></g>
    <path d="M 714 800 C 712 760, 716 720, 722 688 C 728 720, 732 760, 730 800 Z" fill="#fff" ${st(3)}/><circle cx="722" cy="686" r="12" fill="#fff" opacity=".8"/><circle cx="710" cy="696" r="7" fill="#fff" opacity=".7"/><circle cx="734" cy="698" r="7" fill="#fff" opacity=".7"/>
    <path d="M 560 830 h 60 M 620 852 h 90 M 820 840 h 70 M 940 860 h 60" stroke="#fff" stroke-width="5" stroke-linecap="round" opacity=".85"/>
    <path d="M -20 810 L -20 680 C 60 650, 160 628, 260 640 C 330 648, 380 670, 430 700 C 480 730, 520 770, 560 812 Z" fill="${m.ridge}" ${st(6)}/>
    ${[30, 70, 110, 150, 190, 230, 270, 310, 350].map((x, i) => `<path d="M ${x} ${680 - (i < 6 ? 30 - Math.abs(4 - i) * 3 : 0) + 20} L ${x + 6} ${770 + (i % 2) * 14}" stroke="${I}" stroke-width="4" opacity=".22"/>`).join('')}
    <rect x="232" y="626" width="34" height="20" fill="#E8E4EE" ${st(4)}/>
    <path d="M 250 640 L 20 880" stroke="${I}" stroke-width="3"/><path d="M 146 749 V 768" stroke="${I}" stroke-width="4"/>
    <rect x="128" y="766" width="38" height="30" rx="7" fill="#E5322D" ${st(4)}/><rect x="135" y="772" width="24" height="11" rx="3" fill="#BFE3FF"/>
    <path d="M -20 900 C 160 860, 360 880, 540 868 C 720 856, 900 880, 1100 862 L 1100 1012 L -20 1012 Z" fill="${m.hill}" ${st(6)}/>
    ${sapin(70, 990, 150, C.jungleFonce)}${sapin(165, 978, 105)}${sapin(970, 988, 140, C.jungleFonce)}${sapin(1055, 972, 100)}${sapin(880, 996, 82)}
    <rect x="-20" y="1000" width="1120" height="400" fill="${m.grass}" ${st(6)}/>
    <ellipse cx="540" cy="1060" rx="600" ry="40" fill="#fff" opacity=".07"/>
    ${path ? `<path d="M 380 1350 C 450 1200, 600 1120, 760 1062 C 860 1026, 960 1010, 1100 1006 L 1100 1060 C 960 1072, 860 1092, 790 1122 C 640 1182, 560 1262, 560 1350 Z" fill="${C.sable}" ${st(6)}/><path d="M 620 1170 l 30 -8 M 800 1090 l 26 -6 M 520 1290 l 24 -10" stroke="#C9A36A" stroke-width="6" stroke-linecap="round"/>` : ''}
    ${touffe(40, 1050)}${touffe(330, 1070, 0.8)}${touffe(470, 1040, 0.7)}${fleur(300, 1100)}${fleur(120, 1090, '#FFFFFF')}
    ${panneau ? `<g transform="translate(${panneauX} 900)"><rect x="40" y="0" width="16" height="150" fill="#8A5A2B" ${st(5)}/><path d="M -20 10 H 150 L 186 40 L 150 70 H -20 Z" fill="#E0B57E" ${st(6)}/><text x="70" y="52" text-anchor="middle" font-family="Poppins" font-weight="700" font-size="26" fill="${I}">${panneau}</text></g>` : ''}`) + trame(0.06);
}

// Premier plan : buissons et fleurs dans les coins du bas, à poser après les personnages.
function avantPlan(c = '#1B6B4E') {
  const bush = (cx, f) => `<g transform="translate(${cx} 1250) scale(${f} 1)"><circle cx="0" cy="-40" r="80" fill="${c}" ${st(6)}/><circle cx="70" cy="-10" r="56" fill="${c}" ${st(6)}/><circle cx="-10" cy="10" r="60" fill="${c}" ${st(6)}/><path d="M -40 -70 q 20 -14 40 -6 M 40 -30 q 16 -8 30 0" fill="none" stroke="#fff" stroke-width="6" opacity=".25" stroke-linecap="round"/></g>`;
  return page(`${bush(-30, 1)}${bush(1110, -1)}${fleur(40, 1180, '#FF8FB1')}${fleur(1030, 1190, '#FFFFFF')}`);
}

// Le salon : papier peint, carte postale du Panama, étagère des formations, fenêtre sur le Salève ou télé (match).
function salon({ tv = false, wall = '#F7C6A3', stripe = '#EFAE86', panama = true, etagere = true } = {}) {
  const w = id('win');
  return page(`
    <rect width="1080" height="1350" fill="${wall}"/>
    ${Array.from({ length: 15 }, (_, i) => `<rect x="${i * 76}" y="0" width="30" height="1040" fill="${stripe}" opacity=".45"/>`).join('')}
    <rect x="-10" y="1030" width="1100" height="30" fill="#FFF6EA" ${st(5)}/>
    <rect x="-10" y="1058" width="1100" height="300" fill="#C98E5A" ${st(6)}/>
    ${[100, 300, 500, 700, 900].map((x) => `<path d="M ${x} 1060 L ${x - 80} 1350" stroke="${I}" stroke-width="4" opacity=".25"/>`).join('')}
    <ellipse cx="540" cy="1250" rx="440" ry="76" fill="#E5677A" ${st(6)}/><ellipse cx="540" cy="1250" rx="380" ry="54" fill="none" stroke="#fff" stroke-width="5" stroke-dasharray="14 12" opacity=".7"/>
    ${panama ? `<g transform="translate(96 230) rotate(-4)">
      <rect width="240" height="180" fill="#fff" ${st(8)}/><rect x="14" y="14" width="212" height="118" fill="#7FD4FF"/>
      <circle cx="180" cy="44" r="18" fill="${C.soleil}"/><rect x="14" y="100" width="212" height="32" fill="#2A8FD6"/><path d="M 14 124 Q 120 112 226 126 V 132 H 14 Z" fill="#F2D49B"/>
      <path d="M 70 128 C 74 100, 66 70, 80 50" fill="none" stroke="#7A4A2A" stroke-width="8" stroke-linecap="round"/>
      <path d="M 80 50 q -30 -10 -46 6 M 80 50 q -10 -24 -32 -26 M 80 50 q 20 -22 44 -16 M 80 50 q 28 -2 40 18" fill="none" stroke="${C.jungle}" stroke-width="9" stroke-linecap="round"/>
      <text x="120" y="164" text-anchor="middle" font-family="Poppins" font-weight="700" font-size="26" fill="${I}">PANAMA</text></g>` : ''}
    ${etagere ? `    <rect x="80" y="560" width="380" height="20" fill="#8A5A2B" ${st(5)}/><path d="M 120 580 v 30 M 420 580 v 30" ${st(6)}/>
    ${['#3E6FB5', C.flamme, C.jungle, '#7B5EA7'].map((c, i) => `<g transform="translate(${100 + i * 46} 446)"><rect width="40" height="114" rx="4" fill="${c}" ${st(5)}/><text transform="translate(27 104) rotate(-90)" font-family="Poppins" font-weight="700" font-size="17" fill="#fff">FORMATION ${i + 1}</text></g>`).join('')}
    <g transform="translate(300 470) rotate(-14)"><rect width="40" height="100" rx="4" fill="${C.soleil}" ${st(5)}/><text transform="translate(27 92) rotate(-90)" font-family="Poppins" font-weight="700" font-size="16" fill="${I}">FORMATION 5</text></g>
    <path d="M 380 560 L 372 500 H 440 L 432 560 Z" fill="#E07A4F" ${st(5)}/><path d="M 406 500 q -30 -40 -10 -70 M 406 500 q 10 -50 40 -60 M 406 500 q -40 -20 -50 -50" fill="none" stroke="${C.jungle}" stroke-width="10" stroke-linecap="round"/>` : ''}
    ${tv ? `<rect x="560" y="880" width="430" height="160" fill="#8A5A2B" ${st(6)}/><path d="M 775 900 V 1020" ${st(4)}/>
      <rect x="580" y="560" width="390" height="300" rx="14" fill="${I}"/><rect x="598" y="578" width="354" height="246" fill="#3FA35B"/>
      <path d="M 775 578 V 824 M 598 700 H 952" stroke="#fff" stroke-width="4" opacity=".7"/><circle cx="775" cy="700" r="40" fill="none" stroke="#fff" stroke-width="4" opacity=".7"/>
      ${[[650, 640, '#E5322D'], [700, 760, '#E5322D'], [840, 650, '#fff'], [880, 770, '#fff'], [760, 720, '#E5322D']].map(([x, y, c]) => `<circle cx="${x}" cy="${y}" r="9" fill="${c}" ${st(3)}/>`).join('')}
      <rect x="606" y="586" width="130" height="34" rx="6" fill="${I}"/><text x="671" y="611" text-anchor="middle" font-family="Poppins" font-weight="700" font-size="20" fill="#fff">0 – 0 · 87’</text>
      <path d="M 700 860 l -30 20 M 850 860 l 30 20" ${st(6)}/>` :
    `<defs><clipPath id="${w}"><rect x="640" y="360" width="300" height="270"/></clipPath></defs>
      <rect x="640" y="360" width="300" height="270" fill="#9FD3FF"/>
      <g clip-path="url(#${w})"><path d="M 640 560 C 700 520, 760 510, 820 530 C 870 546, 910 570, 940 600 V 630 H 640 Z" fill="#A39FD0" ${st(4)}/><rect x="640" y="590" width="300" height="40" fill="#9CC9F0"/><path d="M 900 590 c -2 -20 0 -32 3 -42 c 3 10 5 22 3 42 Z" fill="#fff"/></g>
      <rect x="640" y="360" width="300" height="270" fill="none" ${st(12)}/><path d="M 790 360 V 630 M 640 495 H 940" ${st(7)}/>
      <path d="M 600 330 Q 630 500 612 690 L 580 690 Q 594 500 574 330 Z" fill="${C.soleil}" ${st(6)}/><path d="M 980 330 Q 950 500 968 690 L 1000 690 Q 986 500 1006 330 Z" fill="${C.soleil}" ${st(6)}/><rect x="560" y="320" width="460" height="18" rx="9" fill="#8A5A2B" ${st(5)}/>`}
    <circle cx="1030" cy="580" r="150" fill="${C.soleil}" opacity=".2"/><path d="M 1030 640 V 1040" ${st(10)}/><path d="M 966 556 L 1094 556 L 1118 650 L 942 650 Z" fill="${C.soleil}" ${st(7)}/>`) + trame(0.07);
}

// La cuisine : carrelage, bocaux (dont les cornichons), fenêtre sur le Salève.
function cuisine() {
  return page(`
    <rect width="1080" height="1350" fill="#CDE8F7"/>
    <defs><pattern id="carreau" width="64" height="64" patternUnits="userSpaceOnUse"><rect width="64" height="64" fill="#fff"/><rect width="64" height="64" fill="none" stroke="#B9D6E8" stroke-width="4"/></pattern></defs>
    <rect x="-10" y="600" width="1100" height="420" fill="url(#carreau)" ${st(5)}/>
    <rect x="60" y="420" width="420" height="18" fill="#8A5A2B" ${st(5)}/>
    ${[['SEL', '#fff', 110], ['PÂTES', '#F2D49B', 200], ['CORNICHONS', '#CFEFD8', 310]].map(([t, c, x]) => `<g transform="translate(${x} 320)"><rect x="0" y="0" width="${t.length > 6 ? 140 : 70}" height="16" rx="5" fill="#C9A36A" ${st(4)}/><rect x="-4" y="14" width="${t.length > 6 ? 148 : 78}" height="86" rx="16" fill="${c}" ${st(5)}/><text x="${t.length > 6 ? 70 : 35}" y="66" text-anchor="middle" font-family="Poppins" font-weight="700" font-size="${t.length > 6 ? 20 : 18}" fill="${I}">${t}</text></g>`).join('')}
    <rect x="860" y="250" width="180" height="200" fill="#9FD3FF" ${st(9)}/><path d="M 860 400 C 900 370, 960 360, 1040 390 V 450 H 860 Z" fill="#A39FD0"/><path d="M 950 250 V 450 M 860 350 H 1040" ${st(6)}/>
    <path d="M 600 0 V 160" ${st(4)}/><path d="M 560 160 h 80 l -10 50 h -60 Z" fill="#E07A4F" ${st(5)}/><path d="M 600 160 q -50 30 -60 90 M 600 160 q 40 40 50 100 M 600 160 q -10 50 -4 110" fill="none" stroke="${C.jungle}" stroke-width="10" stroke-linecap="round"/>
    <rect x="-10" y="1010" width="1100" height="40" fill="#8A5A2B" ${st(6)}/>
    <rect x="-10" y="1050" width="1100" height="310" fill="#E8E4EE" ${st(6)}/>
    ${[0, 270, 540, 810].map((x) => `<rect x="${x + 20}" y="1074" width="230" height="260" rx="10" fill="none" ${st(4)}/><rect x="${x + 120}" y="1100" width="30" height="10" rx="5" fill="#9C98AE" ${st(3)}/>`).join('')}`) + trame(0.06);
}

// Le cinéma : rideaux de velours, faisceau du projecteur, panneau SORTIE.
function cinema() {
  const g = id('cin');
  return page(`
    <defs><linearGradient id="${g}" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#100E1E"/><stop offset="1" stop-color="#2E2346"/></linearGradient></defs>
    <rect width="1080" height="1350" fill="url(#${g})"/>
    <path d="M 1000 1300 L 60 700 L 1020 700 Z" fill="#FFE7A0" opacity=".1"/><path d="M 1000 1300 L 60 130 L 1020 130 Z" fill="#FFE7A0" opacity=".06"/>
    ${Array.from({ length: 26 }, (_, i) => `<circle cx="${560 + (i * 137) % 420}" cy="${760 + (i * 71) % 420}" r="${i % 3 ? 2 : 3}" fill="#FFE7A0" opacity=".5"/>`).join('')}
    ${[0, 1].map((side) => { const x0 = side ? 1080 : 0, d = side ? -1 : 1; return Array.from({ length: 5 }, (_, i) => `<path d="M ${x0 + d * i * 26} 0 Q ${x0 + d * (i * 26 + 14)} 560 ${x0 + d * i * 26} 1120 L ${x0 + d * (i * 26 + 26)} 1120 Q ${x0 + d * (i * 26 + 12)} 560 ${x0 + d * (i * 26 + 26)} 0 Z" fill="${i % 2 ? '#9E1F1A' : '#C8302C'}"/>`).join(''); }).join('')}
    <path d="M 130 0 Q 116 560 130 1120 M 950 0 Q 964 560 950 1120" fill="none" ${st(6)}/>
    <rect x="-10" y="-10" width="1100" height="70" fill="#C8302C" ${st(6)}/>
    ${Array.from({ length: 12 }, (_, i) => `<path d="M ${i * 92} 60 q 46 50 92 0" fill="#C8302C" ${st(5)}/>`).join('')}
    <g transform="translate(830 730)"><rect width="120" height="44" rx="6" fill="#1F9D55" ${st(4)}/><text x="60" y="30" text-anchor="middle" font-family="Poppins" font-weight="700" font-size="20" fill="#fff">SORTIE →</text></g>`);
}

// Fond « choc » : lignes de vitesse vers un point (pour les répliques qui claquent).
function choc(color = '#FFF6EA', cx = 540, cy = 700) {
  const lines = Array.from({ length: 70 }, (_, i) => {
    const a = (i / 70) * Math.PI * 2, r1 = 330 + (i * 53) % 160, r2 = 1600, w = 2 + (i % 4) * 2;
    return `<path d="M ${(cx + r1 * Math.cos(a)).toFixed(1)} ${(cy + r1 * Math.sin(a)).toFixed(1)} L ${(cx + r2 * Math.cos(a)).toFixed(1)} ${(cy + r2 * Math.sin(a)).toFixed(1)}" stroke="${I}" stroke-width="${w}" opacity=".7"/>`;
  }).join('');
  return page(`<rect width="1080" height="1350" fill="${color}"/>${lines}`);
}

// ---------- effets BD (coordonnées de la page) ----------
const fx = {
  veine: (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})" stroke="#E5322D" stroke-width="9" fill="none" stroke-linecap="round"><path d="M -24 -8 Q -8 -8 -8 -24 M 8 -24 Q 8 -8 24 -8 M 24 8 Q 8 8 8 24 M -8 24 Q -8 8 -24 8"/></g>`,
  gouttes: (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})" fill="#8FD3FF" ${st(4)}><path d="M 0 0 q 14 22 0 32 q -14 -10 0 -32 Z"/><path d="M 30 18 q 10 16 0 24 q -10 -8 0 -24 Z"/><path d="M -26 22 q 9 14 0 21 q -9 -7 0 -21 Z"/></g>`,
  choc: (x, y, r = 60) => `<g stroke="${I}" stroke-width="7" stroke-linecap="round">${[-60, -30, 0, 30, 60].map((a) => { const t = (a - 90) * Math.PI / 180; return `<path d="M ${(x + r * Math.cos(t)).toFixed(1)} ${(y + r * Math.sin(t)).toFixed(1)} L ${(x + (r + 34) * Math.cos(t)).toFixed(1)} ${(y + (r + 34) * Math.sin(t)).toFixed(1)}"/>`; }).join('')}</g>`,
  zzz: (x, y) => `<g font-family="Poppins" font-weight="700" fill="${C.creme}" stroke="${I}" stroke-width="5" paint-order="stroke"><text x="${x}" y="${y}" font-size="44">Z</text><text x="${x + 34}" y="${y - 40}" font-size="58">Z</text><text x="${x + 80}" y="${y - 96}" font-size="74">Z</text></g>`,
  pigeon: (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M -40 10 Q -60 -10 -44 -20 L 0 -16 Q 40 -20 50 10 Q 30 34 -10 30 Z" fill="#A7A3B6" ${st(5)}/><circle cx="40" cy="-24" r="20" fill="#A7A3B6" ${st(5)}/><path d="M 58 -24 l 14 4 l -14 4 Z" fill="${C.soleil}" ${st(3)}/><circle cx="46" cy="-28" r="5" fill="#fff" ${st(2)}/><circle cx="47" cy="-28" r="2.5" fill="${I}"/><path d="M 30 -10 q 6 6 16 4" stroke="#7FB98A" stroke-width="6" fill="none"/><path d="M 0 30 v 14 M 16 30 v 14" ${st(4)}/></g>`,
  tigre: (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><circle cx="-56" cy="-56" r="24" fill="${C.flamme}" ${st(5)}/><circle cx="56" cy="-56" r="24" fill="${C.flamme}" ${st(5)}/><circle r="76" fill="${C.flamme}" ${st(6)}/><path d="M -20 -72 l 6 22 M 0 -76 v 24 M 20 -72 l -6 22 M -74 -10 l 22 6 M 74 -10 l -22 6 M -70 16 l 20 0 M 70 16 l -20 0" stroke="${I}" stroke-width="8" stroke-linecap="round"/><ellipse cx="0" cy="26" rx="44" ry="32" fill="#FFF6EA" ${st(5)}/><circle cx="-28" cy="-14" r="10" fill="${I}"/><circle cx="28" cy="-14" r="10" fill="${I}"/><path d="M -10 10 h 20 l -10 10 Z" fill="${I}"/><path d="M -24 34 l 6 22 l 6 -20 M 24 34 l -6 22 l -6 -20" fill="#fff" ${st(4)}/></g>`,
  laptop: (x, y, s = 1, ecran = '') => `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-150" y="-200" width="300" height="200" rx="14" fill="#2B2B33" ${st(6)}/><rect x="-134" y="-186" width="268" height="168" rx="6" fill="#EAF3FF"/>${ecran}<path d="M -190 0 H 190 L 170 26 H -170 Z" fill="#9C98AE" ${st(6)}/></g>`,
};

// Toile d'araignée (coin), avec son araignée.
function toile(x, y, r = 90, sx = 1, sy = 1) {
  const rays = [0, 22, 45, 68, 90].map((a) => `<path d="M 0 0 L ${(r * Math.cos(a * Math.PI / 180)).toFixed(1)} ${(r * Math.sin(a * Math.PI / 180)).toFixed(1)}"/>`).join('');
  const arcs = [0.35, 0.6, 0.85].map((k) => `<path d="M ${r * k} 0 ${[22, 45, 68, 90].map((a) => `Q ${(r * k * 0.8 * Math.cos((a - 11) * Math.PI / 180)).toFixed(1)} ${(r * k * 0.8 * Math.sin((a - 11) * Math.PI / 180)).toFixed(1)} ${(r * k * Math.cos(a * Math.PI / 180)).toFixed(1)} ${(r * k * Math.sin(a * Math.PI / 180)).toFixed(1)}`).join(' ')}"/>`).join('');
  return `<g transform="translate(${x} ${y}) scale(${sx} ${sy})" fill="none" stroke="#fff" stroke-width="3" opacity=".9">${rays}${arcs}<path d="M ${r * 0.5} ${r * 0.5} v 40" stroke="${I}" stroke-width="2"/><circle cx="${r * 0.5}" cy="${r * 0.5 + 48}" r="9" fill="${I}" stroke="none"/></g>`;
}

// Carte de commentaire générique (pseudo fictif, pas de logo de réseau social).
function commentaire({ x, y, w = 620, pseudo, text, likes = '', color = C.flamme, rot = 0, size = 32 }) {
  return `<div class="abs" style="left:${x}px;top:${y}px;width:${w}px;transform:rotate(${rot}deg);background:#fff;border:6px solid ${I};border-radius:26px;box-shadow:8px 8px 0 ${I};padding:16px 22px;display:flex;gap:18px;align-items:flex-start;font-family:Inter;font-weight:600;color:${I};z-index:3">
    <div style="flex:none;width:62px;height:62px;border-radius:50%;background:${color};border:5px solid ${I};display:flex;align-items:center;justify-content:center;font-family:Poppins;font-weight:700;font-size:28px;color:#fff">${pseudo.replace('@', '').charAt(0).toUpperCase()}</div>
    <div style="flex:1"><div style="font-family:Poppins;font-weight:700;font-size:26px">${pseudo}</div><div style="font-size:${size}px;line-height:1.2;margin-top:4px">${text}</div>
    <div style="font-size:21px;color:#77738A;margin-top:8px">il y a 2 min · Répondre${likes ? ` · ♥ ${likes}` : ''}</div></div></div>`;
}

module.exports = { toile, saleve2: saleve, avantPlan, salon, cuisine, cinema, choc, fx, commentaire, sapin2: sapin, nuage, trame };
