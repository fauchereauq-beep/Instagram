// Ils ont osé n°1 — Le facteur Cheval. Les excuses de départ sont celles de Quentin (apéro, match, formations).
const { C, G, nb, fl, so, big, S, tag, bulle, tq, tb, narr, hook, fleche, actions, ep3, ono } = require('../src/v3.js');
const s = ep3('Ils ont osé · n°1', 8);
const I = G.I, st = G.st;

const ecran = (x, y, w, h, inner) => `<div class="abs" style="left:${x}px;top:${y}px;width:${w}px;height:${h}px;border:10px solid #2B2B33;border-radius:10px;overflow:hidden;box-shadow:0 0 0 6px ${I},0 0 70px rgba(255,214,120,.4);background:#FFF6EA">${inner}</div>`;
const fauteuils = `${[0, 1, 2, 3, 4].map((i) => `<rect x="${-40 + i * 230}" y="1110" width="210" height="200" rx="40" fill="#8E2C2A" ${st(6)}/><rect x="${-20 + i * 230}" y="1090" width="170" height="60" rx="26" fill="#A93A36" ${st(6)}/>`).join('')}`;
const sablier = `<path d="M -70 -110 H 70 M -70 110 H 70" ${st(12)}/><path d="M -56 -104 Q -56 -20 0 0 Q -56 20 -56 104 H 56 Q 56 20 0 0 Q 56 -20 56 -104 Z" fill="#DDF3FF" ${st(7)}/><path d="M -36 70 Q 0 40 36 70 L 44 104 H -44 Z" fill="${C.soleil}"/><path d="M 0 4 V 70" stroke="${C.soleil}" stroke-width="5"/>`;
const verre = `<path d="M 140 520 L 200 520 L 182 580 L 158 580 Z" fill="#FFB347" ${st(5)}/><path d="M 170 580 V 616 M 150 618 H 190" ${st(5)}/><circle cx="190" cy="514" r="10" fill="#7FB98A" ${st(3)}/>`;
const telecommande = `<rect x="-26" y="-70" width="52" height="140" rx="14" fill="#2B2B33" ${st(6)}/><circle cy="-40" r="10" fill="#E5322D"/>${[[-10, -8], [10, -8], [-10, 14], [10, 14], [-10, 36], [10, 36]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="6" fill="#9C98AE"/>`).join('')}`;
const pierre = (x, y, r = 1) => `<path d="M ${x - 60 * r} ${y} C ${x - 70 * r} ${y - 40 * r}, ${x - 30 * r} ${y - 70 * r}, ${x + 10 * r} ${y - 64 * r} C ${x + 60 * r} ${y - 60 * r}, ${x + 76 * r} ${y - 20 * r}, ${x + 62 * r} ${y} Z" fill="#B9B2A6" ${st(6)}/><path d="M ${x - 20 * r} ${y - 40 * r} q 20 -10 40 0" fill="none" stroke="#fff" stroke-width="5" opacity=".6"/>`;
const sentier = (inner) => `<svg width="100%" height="100%" viewBox="0 0 940 560" preserveAspectRatio="xMidYMid slice"><rect width="940" height="560" fill="#FFE7B0"/><circle cx="780" cy="110" r="56" fill="${C.soleil}" ${st(6)}/><path d="M 0 360 C 200 300, 500 320, 940 280 L 940 560 L 0 560 Z" fill="${C.jungleClair}" ${st(6)}/><path d="M 0 470 C 300 430, 600 440, 940 410 L 940 560 L 0 560 Z" fill="#E8D2A8" ${st(6)}/>${inner}</svg>`;
const facteur = `<g transform="translate(250 400) rotate(-24)">
  <path d="M -70 -6 L -150 -70 M -60 14 L -150 -20" stroke="${I}" stroke-width="30" stroke-linecap="round"/><path d="M -70 -6 L -150 -70 M -60 14 L -150 -20" stroke="#2F4E8C" stroke-width="18" stroke-linecap="round"/>
  <rect x="-80" y="-34" width="150" height="70" rx="26" fill="#2F4E8C" ${st(6)}/>
  <path d="M 40 -30 L 70 -90 M 50 30 L 100 60" stroke="${I}" stroke-width="24" stroke-linecap="round"/><path d="M 40 -30 L 70 -90 M 50 30 L 100 60" stroke="#2F4E8C" stroke-width="12" stroke-linecap="round"/>
  <circle cx="110" cy="-6" r="34" fill="#F0C6A4" ${st(6)}/><path d="M 96 -40 h 46 v -18 h -46 Z M 136 -40 l 22 6" fill="#2F4E8C" ${st(5)}/><path d="M 96 0 q 14 10 30 0" fill="none" ${st(5)}/>
  <rect x="-30" y="26" width="64" height="48" rx="8" fill="#8A5A2B" ${st(5)}/></g>
  ${[[420, 140, -20], [520, 90, 15], [610, 170, 40], [360, 80, -50]].map(([x, y, r]) => `<g transform="translate(${x} ${y}) rotate(${r})"><rect x="-30" y="-20" width="60" height="40" fill="#fff" ${st(4)}/><path d="M -30 -20 L 0 4 L 30 -20" fill="none" ${st(3)}/></g>`).join('')}`;
const maison = `<g transform="translate(700 300)"><rect x="0" y="0" width="200" height="170" fill="#F2D49B" ${st(6)}/><path d="M -20 0 L 100 -80 L 220 0 Z" fill="#C8692E" ${st(6)}/>
  ${[[30, 40], [120, 40]].map(([x, y]) => `<rect x="${x}" y="${y}" width="56" height="56" fill="#FFE07A" ${st(5)}/><circle cx="${x + 28}" cy="${y + 30}" r="18" fill="#F0C6A4" ${st(4)}/><ellipse cx="${x + 28}" cy="${y + 38}" rx="8" ry="7" fill="#5A1F26"/>`).join('')}
  <text x="40" y="-90" font-family="Poppins" font-weight="700" font-size="36" fill="#E5322D" stroke="${I}" stroke-width="2">HA HA&nbsp;!</text></g>`;
const palais = (x = 470, y = 400, k = 1) => `<g transform="translate(${x} ${y}) scale(${k})" ${st(6)}>
  <rect x="-260" y="0" width="520" height="60" rx="16" fill="#D9C7A8"/><rect x="-240" y="-110" width="150" height="114" rx="24" fill="#E3D2B4"/><rect x="90" y="-130" width="160" height="134" rx="24" fill="#E3D2B4"/>
  <rect x="-90" y="-200" width="180" height="204" rx="30" fill="#D9C7A8"/><path d="M -60 4 v -60 a 30 30 0 0 1 60 0 v 60 Z M 10 4 v -60 a 30 30 0 0 1 60 0 v 60 Z" fill="#8C6B4A"/>
  <path d="M -40 -200 L 0 -290 L 40 -200 Z M -220 -110 L -190 -170 L -160 -110 Z M 150 -130 L 180 -200 L 210 -130 Z" fill="#E3D2B4"/>
  <circle cx="0" cy="-130" r="22" fill="${C.soleil}"/><path d="M -200 -60 h 40 M 120 -70 h 50 M -40 -150 h 80" stroke="#8C6B4A" stroke-width="5"/></g>`;
const popcorn = [[700, 960], [740, 900], [900, 920], [960, 990], [690, 1040]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="16" fill="#FFF6D8" ${st(4)}/>`).join('');
const BC = { x: 760, y: 900, s: 0.5 };
const brutusCine = (o) => G.brutus({ ...BC, arms: 'hold', hold: G.P.popcorn, ...o });
const texte = (t) => big(t, 40, 730, { w: 600, color: C.creme });
const Q = { x: 40, y: 560 };

module.exports = {
  slug: '42-ils-ont-ose-cheval',
  slides: [
    // 1 — HOOK
    s(1, 'Qui était ce fou ? →', `${G.bgRays('#FF8A5C', '#FFA27A', 540, 900)}
      ${hook('On le prenait<br>pour un fou.', { y: 120, size: 90 })}
      ${hook('Aujourd’hui, on paie pour visiter son jardin.', { y: 330, size: 58, w: 900 })}
      ${S(`<rect x="-20" y="1040" width="1120" height="320" fill="${C.jungle}" ${st(6)}/>${palais(500, 940, 1.35)}
        ${G.brutus({ x: 760, y: 820, s: 0.6, arms: 'head', eyes: { mode: 'wide' }, mouth: 'scream', brows: 'up' })}${popcorn}`)}
      ${fleche('« son jardin »', { x: 40, y: 560, tx: 260, ty: 760, size: 42 })}`),

    // 2 — Le point de départ : mes excuses
    s(2, 'Assieds-toi →', `${G.salon({ tv: true, panama: false })}
      ${narr('Moi, entre l’apéro, le match et ma formation n°5 :', { size: 30, w: 760 })}
      ${big(`«${nb}J’ai pas le temps de créer.${nb}»`, 66, 268)}
      ${S(`${G.brutus({ x: 30, y: 760, s: 0.62, arms: 'hold', hold: sablier, brows: 'sly', mouth: 'smirk', eyes: { px: 8, lid: 0.3 } })}${G.quentin({ x: 330, y: 520, arms: { l: 'hold', r: 'hip' }, brows: 'up', mouth: 'smirk', eyes: { px: 12 }, extra: verre })}`)}
      ${ono('BUUUT&nbsp;!', { x: 700, y: 470, size: 62, rot: 6, fill: '#3FA35B' })}
      ${bulle({ x: 30, yb: 700, w: 300, who: 'b', size: 38, to: tb({ x: 30, y: 760, s: 0.62 }), text: 'Validé. Dossier classé.' })}`),

    // 3 — Au cinéma
    s(3, '1879 →', `${G.cinema()}
      ${ecran(170, 130, 740, 300, `<div style="height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:Poppins;font-weight:700;color:${I}"><div style="font-size:28px;color:${C.grisNuit}">Une histoire vraie</div><div style="font-size:62px">Le facteur</div></div>`)}
      ${S(`${G.quentin({ x: 40, y: 620, arms: { l: 'down', r: 'point' }, mouth: 'grin', eyes: { px: 10, py: -8 } })}${brutusCine({ x: 740, y: 820, s: 0.62, eyes: { px: -6, py: -12, lid: 0.3 }, mouth: 'flat', brows: 'flat' })}${fauteuils}`)}
      ${bulle({ x: 40, yb: 560, w: 480, to: tq({ x: 40, y: 620 }), text: 'Assieds-toi, Brutus. <b>Histoire vraie.</b>' })}
      ${bulle({ x: 600, yb: 760, w: 430, who: 'b', size: 40, to: tb({ x: 740, y: 820, s: 0.62 }), text: 'Si c’est un film d’auteur, je dors.' })}`),

    // 4 — 1879
    s(4, 'Et alors ? →', `${G.cinema()}
      ${ecran(60, 130, 960, 560, sentier(`${pierre(500, 450, 1.3)}${facteur}`))}
      ${ono('BAF&nbsp;!', { x: 640, y: 220, size: 110, rot: -8, fill: C.flamme })}
      ${texte(`${so('1879.')} Un facteur de la Drôme, 43 ans, fait sa tournée à pied. Il trébuche sur une pierre.`)}
      ${S(`${brutusCine({ eyes: { px: -6, py: -12 }, mouth: 'smirk', brows: 'sly' })}${fauteuils}`)}
      ${bulle({ x: 660, yb: 880, w: 380, who: 'b', size: 34, to: tb(BC), text: 'Moi aussi j’ai trébuché. <b>Sieste de trois jours.</b>' })}`),

    // 5 — Le village se moque
    s(5, 'Et après ? →', `${G.cinema()}
      ${ecran(60, 130, 960, 560, sentier(`${pierre(130, 470, 0.6)}${pierre(230, 470, 0.7)}${pierre(180, 420, 0.6)}<path d="M 400 470 v -120 a 50 50 0 0 1 100 0 v 120 Z" fill="#E3D2B4" ${st(6)}/>${pierre(560, 470, 0.7)}${pierre(520, 420, 0.5)}${maison}<circle cx="110" cy="100" r="40" fill="#fff" ${st(5)}/><circle cx="94" cy="90" r="40" fill="#FFE7B0"/>`))}
      ${texte(`Il ramasse une pierre à chaque tournée. Le soir, il construit. ${so('Le village se moque de lui.')}`)}
      ${S(`${brutusCine({ eyes: { px: -6, py: -10 }, mouth: 'grin', brows: 'up' })}${fauteuils}`)}
      ${bulle({ x: 680, yb: 880, w: 360, who: 'b', size: 36, to: tb(BC), text: 'Enfin des gens raisonnables.' })}`),

    // 6 — La révélation
    s(6, 'La morale →', `${G.cinema()}
      ${ecran(60, 130, 960, 560, `<svg width="100%" height="100%" viewBox="0 0 940 560"><rect width="940" height="560" fill="#BFE3FF"/><circle cx="800" cy="100" r="50" fill="${C.soleil}" ${st(5)}/><rect y="440" width="940" height="120" fill="${C.jungleClair}"/>${palais()}</svg>`)}
      ${texte(`${so('33 ans plus tard : son Palais idéal.')} Monument historique depuis 1969.`)}
      ${S(`${G.brutus({ ...BC, arms: 'head', eyes: { mode: 'wide' }, mouth: 'scream', brows: 'up' })}${popcorn}${fauteuils}`)}
      ${ono('POP&nbsp;!', { x: 470, y: 960, size: 70, rot: -10, fill: C.soleil })}
      ${bulle({ x: 660, yb: 880, w: 380, who: 'b', size: 40, to: tb(BC), text: '33 ans ? <b>Sans Netflix ?!</b>' })}`, { source: 'Palais idéal du facteur Cheval, Hauterives (Drôme) : construit de 1879 à 1912.' }),

    // 7 — Morale + gag
    s(7, 'Ton défi →', `${G.saleve2({ mood: 'or' })}
      ${tag('Morale de l’histoire')}
      ${big(`Tu n’as pas besoin de temps libre. Tu as besoin d’${fl('une pierre par jour.')}`, 60, 230)}
      ${S(`${G.quentin({ ...Q, arms: { l: 'hip', r: 'point' }, brows: 'sly', mouth: 'smirk', eyes: { px: 12, lid: 0.2 } })}${G.brutus({ x: 670, y: 720, arms: 'hold', hold: telecommande, eyes: { mode: 'happy' }, brows: 'up', mouth: 'grin' })}`)}
      ${G.avantPlan()}
      ${bulle({ x: 620, yb: 660, w: 400, who: 'b', to: tb({ x: 670, y: 720 }), text: 'J’ai trouvé une pierre !' })}
      ${bulle({ x: 40, yb: 548, w: 540, to: tq(Q), size: 40, text: 'C’est la télécommande, Brutus.' })}`),

    // 8 — Action
    s(8, 'Partage-le ↗', `${G.saleve2({ mood: 'matin' })}
      ${tag('Ton défi')}
      ${big(`Dix minutes pour ton projet. ${fl('Avant le match.')}`, 62, 222)}
      ${actions({ y: 430, mot: 'PIERRE', pourquoi: 'quand tu as posé ta première pierre : dix minutes, aujourd’hui', envoie: 'l’ami qui n’a « jamais le temps »', enregistre: 'pour ton prochain « pas le temps »' })}
      ${S(`${G.quentin({ x: 30, y: 930, s: 0.48, arms: { l: 'down', r: 'raise' }, mouth: 'grin', eyes: { px: 6, py: -6 } })}${G.brutus({ x: 820, y: 1000, s: 0.5, arms: 'head', mouth: 'scream', eyes: { mode: 'wide' }, brows: 'up' })}`)}
      ${bulle({ x: 330, yb: 1110, w: 440, who: 'b', size: 34, to: tb({ x: 820, y: 1000, s: 0.5 }), text: 'Avant le match ?! <b>Monstre.</b>' })}`),
  ],
};
