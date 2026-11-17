// Crash-test n°1 — « La balade fantôme ». Vraie histoire de Quentin : il a repoussé ses propres balades plus de six mois.
const { C, G, nb, fl, big, S, tag, ep, bubble, caption, link, ono, cases } = require('../src/ep.js');
const s = ep('Crash-test · n°1', 7);
const I = G.I, st = G.st;

const ferme = `<g transform="translate(0 -40)"><rect x="-120" y="-62" width="240" height="124" rx="10" fill="#fff" ${st(7)}/><rect x="-106" y="-48" width="212" height="96" rx="6" fill="#E5322D"/><text y="-4" text-anchor="middle" font-family="Poppins" font-weight="700" font-size="36" fill="#fff">FERMÉ</text><text y="32" text-anchor="middle" font-family="Poppins" font-weight="700" font-size="21" fill="#fff">(pour toujours)</text></g>`;
const agenda = `<g transform="translate(410 168) rotate(2)">
  <rect width="570" height="330" rx="12" fill="#fff" ${st(7)}/><rect width="570" height="62" rx="12" fill="#E5322D" ${st(7)}/>
  <text x="285" y="44" text-anchor="middle" font-family="Poppins" font-weight="700" font-size="34" fill="#fff">AGENDA</text>
  <text x="30" y="112" font-family="Poppins" font-weight="700" font-size="30" fill="${I}">Lancer les balades</text><path d="M 24 102 L 330 98" stroke="#E5322D" stroke-width="7" stroke-linecap="round"/>
  ${['→ au printemps', '→ après l’été', '→ quand Mercure ne sera plus rétrograde', '→ quand ce sera clair'].map((t, i) => `<text x="30" y="${162 + i * 46}" font-family="Poppins" font-weight="700" font-size="${i === 2 ? 23 : 28}" fill="${i === 3 ? C.flamme : C.grisNuit}">${t}</text>`).join('')}</g>`;
const dos = (w = 1160) => `<rect x="-40" y="820" width="${w}" height="300" rx="60" fill="#3E6FB5" ${st(8)}/>`;
const assise = (w = 1160) => `<rect x="-40" y="1080" width="${w}" height="300" rx="40" fill="#2F5A99" ${st(8)}/><rect x="-60" y="920" width="110" height="440" rx="50" fill="#3E6FB5" ${st(8)}/>`;
const chip = (x, y, r) => `<ellipse cx="${x}" cy="${y}" rx="18" ry="12" fill="#F2B544" transform="rotate(${r} ${x} ${y})" ${st(4)}/>`;
const canape = (extra = '') => G.salon({ panama: true, etagere: false }) + S(`${dos(840)}
  ${G.quentin({ x: 40, y: 560, outfit: 'chemise', arms: 'down', brows: 'flat', mouth: 'flat', eyes: { lid: 0.5 } })}
  ${G.brutus({ x: 400, y: 760, plaid: true, arms: 'hold', hold: G.P.chips, mouth: 'munch', eyes: { lid: 0.45, px: -4 } })}
  ${assise(840)}${chip(300, 1110, 20)}${chip(360, 1130, -30)}${extra}`);
const machine = `<defs><clipPath id="loupe"><circle cx="790" cy="900" r="230"/></clipPath><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 H 0 V 40" fill="none" stroke="#7FD4FF" stroke-width="1.5" opacity=".35"/></pattern></defs>
  <path d="M 280 1010 L 580 820 M 290 1080 L 620 1080" stroke="#7FD4FF" stroke-width="6" stroke-dasharray="14 12"/>
  <circle cx="228" cy="1020" r="72" fill="#7FD4FF" opacity=".3" stroke="#7FD4FF" stroke-width="8"/>
  <g clip-path="url(#loupe)"><rect x="540" y="660" width="500" height="480" fill="#12304F"/><rect x="540" y="660" width="500" height="480" fill="url(#grid)"/>
    <g fill="#B8B4C8" opacity=".9" ${st(5)}><circle cx="640" cy="720" r="44"/><circle cx="700" cy="690" r="36"/><circle cx="600" cy="680" r="30"/></g>
    <rect x="590" y="980" width="410" height="150" rx="14" fill="#5B5675" ${st(7)}/><circle cx="650" cy="1050" r="30" fill="#EAF3FF" ${st(5)}/><path d="M 650 1050 L 672 1030" ${st(5)}/>
    <rect x="900" y="900" width="18" height="94" fill="#B8B4C8" ${st(4)}/><circle cx="909" cy="896" r="22" fill="${C.jungle}" ${st(5)}/>
    <path d="M 846 990 L 812 888" ${st(16)}/><path d="M 846 990 L 812 888" stroke="#B8B4C8" stroke-width="8" stroke-linecap="round"/><circle cx="810" cy="882" r="26" fill="#E5322D" ${st(6)}/>
    <rect x="626" y="1066" width="290" height="48" rx="8" fill="${C.soleil}" ${st(5)}/><text x="771" y="1099" text-anchor="middle" font-family="Poppins" font-weight="700" font-size="25" fill="${I}">INCONNU = TIGRE</text></g>
  <circle cx="790" cy="900" r="230" fill="none" stroke="#7FD4FF" stroke-width="12"/><circle cx="1000" cy="720" r="24" fill="#E5322D" ${st(6)}/>`;
const phone = `<div class="abs" style="left:600px;top:140px;width:400px;height:470px;transform:rotate(4deg);background:${I};border-radius:48px;padding:20px;box-shadow:12px 12px 0 rgba(20,18,31,.35);z-index:3">
  <div style="width:100%;height:100%;background:#EAF3FF;border-radius:32px;padding:30px 24px;font-family:Poppins;font-weight:700;color:${I}">
    <div style="font-size:24px;color:${C.grisNuit};margin-bottom:20px">Nouveau message</div>
    <div style="background:#fff;border:5px solid ${I};border-radius:26px;padding:20px 22px;font-size:34px;line-height:1.18">Depuis la balade, j’ai l’esprit plus clair. Merci.</div></div></div>`;

module.exports = {
  slug: '41-crash-balade-fantome',
  slides: [
    s(1, 'Le dossier RISQUES →', `${G.saleve2({ panneau: 'DÉCLIC', panneauX: 860 })}
      ${S(G.toile(1032, 902, 70, -1, 1))}
      ${big('J’ai créé une balade pour débloquer les gens.', 54, 130, { w: 880 })}
      ${big(fl('Six mois plus tard, devine qui est bloqué.'), 60, 262)}
      ${caption({ x: 48, y: 412, w: 560, size: 25, bg: C.creme, rot: -1.5, text: `Brutus, mon chimpanzé intérieur. Garde du corps. Parano.` })}
      ${S(`${G.quentin({ x: 40, y: 500, arms: { l: 'hip', r: 'chin' }, brows: 'sad', mouth: 'smirk', eyes: { px: 10 } })}${G.brutus({ x: 560, y: 720, arms: 'hold', hold: ferme, brows: 'angry', mouth: 'flat', eyes: { px: -8, lid: 0.3 }, casque: true })}`)}
      ${G.avantPlan()}
      ${bubble({ x: 560, y: 500, w: 430, size: 42, tail: { at: 0.32, dir: -1 }, text: `Je protège les gens. <b>De toi.</b>` })}`),

    s(2, 'Ça empire →', `${G.saleve2()}
      ${S(`${G.quentin({ x: 40, y: 500, arms: { l: 'hip', r: 'point' }, brows: 'flat', mouth: 'smirk', eyes: { px: 8, lid: 0.25 } })}${G.brutus({ x: 670, y: 720, arms: 'hold', hold: G.P.classeur, brows: 'worried', mouth: 'open', eyes: { px: -6, py: -8 }, casque: true })}`)}
      ${G.avantPlan()}
      ${bubble({ x: 430, y: 130, w: 600, h: 120, size: 42, tail: null, text: `Risque n°1${nb}: il pleut.` })}
      ${link({ x: 880, y: 243, h: 170 })}
      ${bubble({ x: 430, y: 400, w: 600, size: 40, tail: { at: 0.72, dir: 0 }, text: `Risque n°2${nb}: il ne pleut pas, et <b>des gens viennent</b>.` })}
      ${bubble({ x: 40, y: 340, w: 360, size: 42, tail: { at: 0.4, dir: -1 }, text: `C'est le but, Brutus.` })}`),

    s(3, 'Six mois plus tard →', `${G.saleve2()}
      ${S(`${G.quentin({ x: 40, y: 500, arms: 'down', mouth: 'smile', eyes: { px: 10, py: 10 } })}${G.ecureuil(440, 1030, 1.15, true)}${G.brutus({ x: 670, y: 720, arms: 'hold', hold: G.P.carte, brows: 'angry', mouth: 'flat', eyes: { px: -14, py: 6 }, casque: true, sirene: true, sweat: true })}`)}
      ${G.avantPlan()}
      ${bubble({ x: 450, y: 130, w: 580, h: 160, size: 40, tail: null, text: `J'ai repéré quatorze dangers. Dont un <b>écureuil</b>.` })}
      ${link({ x: 900, y: 283, h: 214 })}
      ${bubble({ x: 40, y: 330, w: 380, size: 44, tail: { at: 0.4, dir: -1 }, text: `Il a l'air sympa.` })}
      ${bubble({ x: 560, y: 490, w: 470, size: 40, tail: { at: 0.4, dir: 0 }, text: `C'est ce qu'il veut que tu croies.` })}
      ${ono('WIIIOU&nbsp;!', { x: 360, y: 650, size: 72, rot: -10, fill: '#E5322D' })}`),

    s(4, 'BZZZ →', `<div class="abs" style="inset:0;background:${C.creme}"></div>${G.dots(0.1)}
      ${cases([
        { x: 40, y: 130, w: 1000, h: 370, scene: G.salon({ etagere: false }) + S(agenda), cx: 0, cy: 150, k: 1 },
        { x: 40, y: 530, w: 600, h: 690, scene: canape(), cx: 0, cy: 440, k: 0.79 },
        { x: 660, y: 530, w: 380, h: 690, scene: canape(G.toile(60, 600, 120) + G.toile(330, 930, 80, -1, 1)), cx: 10, cy: 520, k: 0.95 },
      ])}
      ${caption({ x: 70, y: 420, w: 330, size: 30, bg: C.soleil, rot: -2, text: `Résultat${nb}: six mois de report.` })}
      ${bubble({ x: 60, y: 560, w: 150, size: 52, tail: { at: 0.6, dir: 1 }, text: `…` })}
      ${bubble({ x: 300, y: 560, w: 320, size: 40, tail: { at: 0.5, dir: 0 }, text: `On est bien, là.` })}
      ${caption({ x: 690, y: 560, size: 34, bg: C.nuit, color: C.creme, rot: -3, text: `Jour 183.` })}`),

    s(5, 'Ce qui se passe dans le corps →', `${G.salon({ etagere: false })}
      ${S(`${dos()}${G.quentin({ x: 40, y: 560, outfit: 'chemise', arms: 'up', brows: 'up', mouth: 'open', eyes: { mode: 'wide' } })}
        ${G.brutus({ x: 660, y: 800, arms: 'up', brows: 'angry', mouth: 'scream', eyes: { mode: 'wide' } })}
        <rect x="-40" y="1080" width="1160" height="300" rx="40" fill="#2F5A99" ${st(8)}/>${chip(700, 790, 20)}${chip(980, 760, -30)}${chip(1010, 860, 50)}${chip(640, 880, -10)}${chip(860, 740, 70)}`)}
      ${phone}
      ${ono('BZZZ', { x: 470, y: 120, size: 90, rot: -14 })}
      ${ono('CRUNCH', { x: 600, y: 1130, size: 72, rot: 6, fill: C.flamme })}
      ${bubble({ x: 40, y: 330, w: 480, size: 40, tail: { at: 0.4, dir: 0 }, text: `…Attends. Elle a eu lieu, la balade${nb}?` })}
      ${bubble({ x: 600, y: 650, w: 420, size: 40, tail: { at: 0.55, dir: 0 }, text: `Qui a laissé faire ça${nb}?!` })}`),

    s(6, 'Ton défi →', `${G.bgDark(C.nuit, 'rgba(127,212,255,.18)')}
      ${tag('Le radar du corps', { bg: C.soleil, color: '#14121F' })}
      ${big(`Brutus ne veut pas que j’échoue. Il veut que ${fl('rien ne change.')}`, 62, 230, { w: 760, color: C.creme })}
      ${big('Pour lui, un mardi différent, c’est un tigre à dents de sabre.', 40, 470, { color: C.soleil })}
      ${S(`${G.fx.tigre(930, 330, 0.95)}${G.quentin({ x: 60, y: 570, arms: { l: 'down', r: 'chest' }, eyes: { mode: 'closed' }, mouth: 'smile' })}${machine}
        ${G.brutus({ x: 700, y: 820, s: 0.3, arms: 'up', casque: true, sweat: true, mouth: 'scream', eyes: { mode: 'wide' }, brows: 'up' })}`)}`),

    s(7, 'Envoie-le à un ami qui repousse ↗', `${G.saleve2({ mood: 'or' })}
      ${tag('Ton défi')}
      ${big('Envoie aujourd’hui le message que ton Brutus te fait repousser.', 52, 230)}
      ${big(fl('Puis écris ENVOYÉ en commentaire.'), 40, 380)}
      ${S(`${G.brutus({ x: 380, y: 690, s: 0.6, arms: 'hip', brows: 'worried', mouth: 'wobble', eyes: { px: 12, py: 14 }, sweat: true })}${G.quentin({ x: 640, y: 600, flip: true, arms: 'phone', mouth: 'smirk', eyes: { px: 0, py: 14 } })}`)}
      ${G.avantPlan()}
      ${bubble({ x: 40, y: 470, w: 450, size: 34, tail: { at: 0.85, dir: 1 }, text: `J'ai ajouté «${nb}pas d'obligation hein${nb}» et trois émojis.` })}
      ${bubble({ x: 600, y: 450, w: 430, size: 34, tail: { at: 0.45, dir: 0 }, text: `Et «${nb}désolé du dérangement${nb}». Classique.` })}`),
  ],
};
