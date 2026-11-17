// Ils ont osé n°1 — Le facteur Cheval. On ose : créer sans avoir le temps.
const { C, G, nb, fl, so, big, S, tag, ep, bubble, caption, ono, sources } = require('../src/ep.js');
const s = ep('Ils ont osé · n°1', 7);
const I = G.I, st = G.st;

// Le cinéma : écran, rangée de fauteuils.
const ecran = (x, y, w, h, inner) => `<div class="abs" style="left:${x}px;top:${y}px;width:${w}px;height:${h}px;border:10px solid #2B2B33;border-radius:10px;overflow:hidden;box-shadow:0 0 0 6px ${I},0 0 60px rgba(255,214,120,.35);background:#FFF6EA">${inner}</div>`;
const fauteuils = `${[0, 1, 2, 3, 4].map((i) => `<rect x="${-40 + i * 230}" y="1110" width="210" height="200" rx="40" fill="#8E2C2A" ${st(6)}/><rect x="${-20 + i * 230}" y="1090" width="170" height="60" rx="26" fill="#A93A36" ${st(6)}/>`).join('')}`;
const sablier = `<path d="M -70 -110 H 70 M -70 110 H 70" ${st(12)}/><path d="M -56 -104 Q -56 -20 0 0 Q -56 20 -56 104 H 56 Q 56 20 0 0 Q 56 -20 56 -104 Z" fill="#DDF3FF" ${st(7)}/><path d="M -36 70 Q 0 40 36 70 L 44 104 H -44 Z" fill="${C.soleil}"/><path d="M 0 4 V 70" stroke="${C.soleil}" stroke-width="5"/>`;
const pierre = (x, y, r = 1) => `<path d="M ${x - 60 * r} ${y} C ${x - 70 * r} ${y - 40 * r}, ${x - 30 * r} ${y - 70 * r}, ${x + 10 * r} ${y - 64 * r} C ${x + 60 * r} ${y - 60 * r}, ${x + 76 * r} ${y - 20 * r}, ${x + 62 * r} ${y} Z" fill="#B9B2A6" ${st(6)}/><path d="M ${x - 20 * r} ${y - 40 * r} q 20 -10 40 0" fill="none" stroke="#fff" stroke-width="5" opacity=".6"/>`;
// Scène dans l'écran (coordonnées 0..940 x 0..560).
const sceneSentier = (inner) => `<svg width="100%" height="100%" viewBox="0 0 940 560" preserveAspectRatio="xMidYMid slice"><rect width="940" height="560" fill="#FFE7B0"/><circle cx="780" cy="120" r="60" fill="${C.soleil}" ${st(6)}/><path d="M 0 360 C 200 300, 500 320, 940 280 L 940 560 L 0 560 Z" fill="${C.jungleClair}" ${st(6)}/><path d="M 0 470 C 300 430, 600 440, 940 410 L 940 560 L 0 560 Z" fill="#E8D2A8" ${st(6)}/>${inner}</svg>`;
const palais = (x, y, k = 1) => `<g transform="translate(${x} ${y}) scale(${k})" ${st(6)}>
  <rect x="-260" y="0" width="520" height="60" rx="16" fill="#D9C7A8"/>
  <rect x="-240" y="-110" width="150" height="114" rx="24" fill="#E3D2B4"/><rect x="90" y="-130" width="160" height="134" rx="24" fill="#E3D2B4"/>
  <rect x="-90" y="-200" width="180" height="204" rx="30" fill="#D9C7A8"/>
  <path d="M -60 4 v -60 a 30 30 0 0 1 60 0 v 60 Z M 10 4 v -60 a 30 30 0 0 1 60 0 v 60 Z" fill="#8C6B4A"/>
  <path d="M -40 -200 L 0 -290 L 40 -200 Z M -220 -110 L -190 -170 L -160 -110 Z M 150 -130 L 180 -200 L 210 -130 Z" fill="#E3D2B4"/>
  <circle cx="0" cy="-130" r="22" fill="${C.soleil}"/><path d="M -200 -60 h 40 M 120 -70 h 50 M -40 -150 h 80" stroke="#8C6B4A" stroke-width="5"/></g>`;
const brutusCine = (o) => G.brutus({ x: 740, y: 820, s: 0.62, arms: 'hold', hold: G.P.popcorn, ...o });

module.exports = {
  slug: '42-ils-ont-ose-cheval',
  slides: [
    s(1, 'Assieds-toi →', `${G.bgSaleve({ grey: true, sky: ['#D9D4EA', '#F6E6D2'], sun: false })}
      ${big(`«${nb}J’ai pas le temps de créer.${nb}»`, 84, 130)}
      ${caption({ x: 48, y: 340, w: 560, size: 26, bg: C.creme, rot: -1.5, text: `Brutus, mon chimpanzé intérieur, adore cette phrase.` })}
      ${S(`${G.quentin({ x: 60, y: 500, arms: { l: 'hip', r: 'chin' }, brows: 'sad', mouth: 'flat', eyes: { px: 8 } })}${G.brutus({ x: 670, y: 720, arms: 'hold', hold: sablier, brows: 'sly', mouth: 'smirk', eyes: { px: -8, lid: 0.3 } })}`)}
      ${bubble({ x: 600, y: 500, w: 430, size: 42, tail: { at: 0.5, dir: 0 }, text: `Validé. Dossier classé.` })}`),

    s(2, '1879 →', `${G.bgDark('#1A1830')}
      ${ecran(170, 140, 740, 320, `<div style="height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:Poppins;font-weight:700;color:${I}"><div style="font-size:30px;color:${C.grisNuit}">Une histoire vraie</div><div style="font-size:64px">Le facteur</div></div>`)}
      ${S(`${G.quentin({ x: 40, y: 620, arms: { l: 'down', r: 'point' }, mouth: 'grin', eyes: { px: 10, py: -8 } })}${brutusCine({ eyes: { px: -6, py: -12 }, mouth: 'smile', brows: 'up' })}${fauteuils}`)}
      ${bubble({ x: 40, y: 480, w: 540, size: 36, tail: { at: 0.3, dir: -1 }, text: `Assieds-toi, Brutus. L'histoire vraie d'un facteur.` })}
      ${bubble({ x: 650, y: 560, w: 380, size: 38, tail: { at: 0.5, dir: 0 }, text: `J'ai pris du pop-corn.` })}`),

    s(3, 'Et alors ? →', `${G.bgDark('#1A1830')}
      ${ecran(60, 130, 960, 560, sceneSentier(`${pierre(470, 450, 1.3)}<path d="M 90 360 L 330 400 L 350 440 L 250 470 L 230 440 L 120 420 Z" fill="${C.nuit}" ${st(6)}/><path d="M 310 400 q 60 10 70 50 l -90 20 Z" fill="#3A2B24" ${st(6)}/>`))}
      ${ono('BAF&nbsp;!', { x: 560, y: 220, size: 110, rot: -8, fill: C.flamme })}
      ${big(`${so('1879.')} Un facteur de la Drôme, 43 ans. Trente kilomètres à pied par jour. Il trébuche sur une pierre.`, 40, 730, { w: 620, color: C.creme })}
      ${S(`${brutusCine({ x: 760, y: 900, s: 0.5, eyes: { px: -6, py: -12 }, mouth: 'smirk' })}${fauteuils}`)}
      ${bubble({ x: 690, y: 700, w: 350, size: 34, tail: { at: 0.5, dir: 0 }, text: `Il porte plainte, j'espère.` })}`),

    s(4, 'Et après ? →', `${G.bgDark('#1A1830')}
      ${ecran(60, 130, 960, 560, sceneSentier(`${pierre(150, 470, 0.6)}${pierre(250, 470, 0.7)}${pierre(200, 420, 0.6)}<path d="M 420 470 v -120 a 50 50 0 0 1 100 0 v 120 Z" fill="#E3D2B4" ${st(6)}/>${pierre(640, 470, 0.8)}${pierre(720, 420, 0.7)}${pierre(680, 380, 0.6)}<circle cx="120" cy="110" r="40" fill="#fff" ${st(5)}/><circle cx="104" cy="100" r="40" fill="#FFE7B0"/>`))}
      ${big(`Il trouve la pierre belle. Il en ramasse une à chaque tournée. Le soir, il construit. ${so('Pendant 33 ans.')}`, 40, 730, { w: 620, color: C.creme })}
      ${S(`${brutusCine({ x: 760, y: 900, s: 0.5, eyes: { mode: 'wide' }, mouth: 'open', brows: 'up' })}${fauteuils}`)}
      ${bubble({ x: 690, y: 700, w: 350, size: 36, tail: { at: 0.5, dir: 0 }, text: `33 ans${nb}? De cailloux${nb}?` })}`),

    s(5, 'La morale →', `${G.bgDark('#1A1830', 'rgba(255,194,51,.32)')}
      ${ecran(60, 130, 960, 560, `<svg width="100%" height="100%" viewBox="0 0 940 560"><rect width="940" height="560" fill="#BFE3FF"/><rect y="440" width="940" height="120" fill="${C.jungleClair}"/>${palais(470, 400, 1)}</svg>`)}
      ${big(`${so('Le Palais idéal du facteur Cheval.')} Classé monument historique en 1969. On le visite encore.`, 40, 730, { w: 560, color: C.creme })}
      ${S(`${G.brutus({ x: 760, y: 900, s: 0.5, arms: 'head', eyes: { mode: 'wide' }, mouth: 'scream', brows: 'up' })}${fauteuils}`)}
      ${ono('POP&nbsp;!', { x: 470, y: 960, size: 70, rot: -10, fill: C.soleil })}
      ${bubble({ x: 640, y: 690, w: 400, size: 34, tail: { at: 0.4, dir: 0 }, text: `Il avait un boulot à plein temps${nb}!` })}`, { source: 'Palais idéal du facteur Cheval, Hauterives (Drôme) : construit de 1879 à 1912.' }),

    s(6, 'Ton défi →', `${G.bgSaleve({ sky: ['#FFF6EA', '#FFD98A'] })}
      ${tag('Morale de l’histoire')}
      ${big(`Tu n’as pas besoin de temps libre. Tu as besoin d’${fl('une pierre par jour.')}`, 64, 230)}
      ${S(`${G.quentin({ x: 60, y: 520, arms: { l: 'hip', r: 'raise' }, mouth: 'grin', eyes: { px: 6, py: -6 }, extra: pierre(308, 150, 0.45) })}${G.brutus({ x: 670, y: 720, arms: 'hold', hold: pierre(0, 10, 0.18), eyes: { px: -4, py: 10 }, brows: 'worried', mouth: 'small' })}`)}
      ${bubble({ x: 570, y: 500, w: 460, size: 40, tail: { at: 0.5, dir: 0 }, text: `J'ai trouvé un gravier. Ça compte${nb}?` })}`),

    s(7, 'Envoie-le à un ami débordé ↗', `${G.bgRays(C.soleil, '#FFD45E', 540, 900)}
      ${tag('Ton défi')}
      ${big('Pose ta première pierre aujourd’hui : dix minutes pour ton projet.', 54, 230)}
      ${big(fl('Puis écris PIERRE en commentaire.'), 40, 420)}
      ${S(`<rect x="0" y="1130" width="1080" height="220" fill="${C.jungle}"/><path d="M 0 1130 H 1080" ${st(8)}/>${G.quentin({ x: 60, y: 500, arms: { l: 'down', r: 'wave' }, mouth: 'grin', eyes: { px: 6 } })}${G.brutus({ x: 670, y: 720, arms: 'hip', mouth: 'smile', eyes: { px: -6 } })}`)}
      ${sources({ x: 560, y: 520, w: 470, items: ['Palais idéal du facteur Cheval (Hauterives) : construit par Ferdinand Cheval de 1879 à 1912, classé monument historique en 1969.'] })}`),
  ],
};
