// Crash-test n°1 — « La balade fantôme ». Vraie histoire : Quentin a repoussé ses propres balades plus de six mois.
const { C, G, nb, fl, big, S, tag, bulle, tq, tb, narr, hook, fleche, actions, ep3, ono, cases } = require('../src/v3.js');
const s = ep3('Crash-test · n°1', 8);
const I = G.I, st = G.st;

const ferme = `<g transform="translate(0 -40)"><rect x="-120" y="-62" width="240" height="124" rx="10" fill="#fff" ${st(7)}/><rect x="-106" y="-48" width="212" height="96" rx="6" fill="#E5322D"/><text y="-4" text-anchor="middle" font-family="Poppins" font-weight="700" font-size="36" fill="#fff">FERMÉ</text><text y="32" text-anchor="middle" font-family="Poppins" font-weight="700" font-size="21" fill="#fff">(pour toujours)</text></g>`;
const agenda = `<g transform="translate(410 168) rotate(2)">
  <rect width="570" height="330" rx="12" fill="#fff" ${st(7)}/><rect width="570" height="62" rx="12" fill="#E5322D" ${st(7)}/>
  <text x="285" y="44" text-anchor="middle" font-family="Poppins" font-weight="700" font-size="34" fill="#fff">AGENDA</text>
  <text x="30" y="112" font-family="Poppins" font-weight="700" font-size="30" fill="${I}">Lancer les balades</text><path d="M 24 102 L 330 98" stroke="#E5322D" stroke-width="7" stroke-linecap="round"/>
  ${['→ au printemps', '→ après l’été', '→ quand Mercure ne sera plus rétrograde', '→ quand ce sera clair'].map((t, i) => `<text x="30" y="${162 + i * 46}" font-family="Poppins" font-weight="700" font-size="${i === 2 ? 23 : 28}" fill="${i === 3 ? C.flamme : C.grisNuit}">${t}</text>`).join('')}</g>`;
const dos = (w = 1160, y = 820) => `<rect x="-40" y="${y}" width="${w}" height="300" rx="60" fill="#3E6FB5" ${st(8)}/>`;
const assise = (w = 1160, y = 1080) => `<rect x="-40" y="${y}" width="${w}" height="300" rx="40" fill="#2F5A99" ${st(8)}/><rect x="-60" y="${y - 160}" width="110" height="440" rx="50" fill="#3E6FB5" ${st(8)}/>`;
const chip = (x, y, r) => `<ellipse cx="${x}" cy="${y}" rx="18" ry="12" fill="#F2B544" transform="rotate(${r} ${x} ${y})" ${st(4)}/>`;
const QC = { x: 40, y: 560 }, BC = { x: 400, y: 760 };
const canape = (extra = '') => G.salon({ panama: true, etagere: false }) + S(`${dos(840)}
  ${G.quentin({ ...QC, outfit: 'chemise', arms: 'down', brows: 'flat', mouth: 'flat', eyes: { lid: 0.5 } })}
  ${G.brutus({ ...BC, plaid: true, arms: 'hold', hold: G.P.chips, mouth: 'munch', eyes: { lid: 0.45, px: -4 } })}
  ${assise(840)}${chip(300, 1110, 20)}${chip(360, 1130, -30)}${extra}`);
const machine = `<defs><clipPath id="loupe"><circle cx="790" cy="900" r="230"/></clipPath><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 H 0 V 40" fill="none" stroke="#7FD4FF" stroke-width="1.5" opacity=".35"/></pattern></defs>
  <path d="M 280 1010 L 580 820 M 290 1080 L 620 1080" stroke="#7FD4FF" stroke-width="6" stroke-dasharray="14 12"/>
  <circle cx="228" cy="1020" r="72" fill="#7FD4FF" opacity=".3" stroke="#7FD4FF" stroke-width="8"/>
  <g clip-path="url(#loupe)"><rect x="540" y="660" width="500" height="480" fill="#12304F"/><rect x="540" y="660" width="500" height="480" fill="url(#grid)"/>
    <rect x="590" y="980" width="410" height="150" rx="14" fill="#5B5675" ${st(7)}/><circle cx="650" cy="1050" r="30" fill="#EAF3FF" ${st(5)}/><path d="M 650 1050 L 672 1030" ${st(5)}/>
    <rect x="900" y="900" width="18" height="94" fill="#B8B4C8" ${st(4)}/><circle cx="909" cy="896" r="22" fill="${C.jungle}" ${st(5)}/>
    <path d="M 846 990 L 812 888" ${st(16)}/><path d="M 846 990 L 812 888" stroke="#B8B4C8" stroke-width="8" stroke-linecap="round"/><circle cx="810" cy="882" r="26" fill="#E5322D" ${st(6)}/>
    <rect x="626" y="1066" width="290" height="48" rx="8" fill="${C.soleil}" ${st(5)}/><text x="771" y="1099" text-anchor="middle" font-family="Poppins" font-weight="700" font-size="25" fill="${I}">INCONNU = TIGRE</text></g>
  <circle cx="790" cy="900" r="230" fill="none" stroke="#7FD4FF" stroke-width="12"/><circle cx="1000" cy="720" r="24" fill="#E5322D" ${st(6)}/>`;
const phone = `<div class="abs" style="left:600px;top:140px;width:400px;height:450px;transform:rotate(4deg);background:${I};border-radius:48px;padding:20px;box-shadow:12px 12px 0 rgba(20,18,31,.35);z-index:3">
  <div style="width:100%;height:100%;background:#EAF3FF;border-radius:32px;padding:28px 24px;font-family:Poppins;font-weight:700;color:${I}">
    <div style="font-size:24px;color:${C.grisNuit};margin-bottom:18px">Nouveau message</div>
    <div style="background:#fff;border:5px solid ${I};border-radius:26px;padding:20px 22px;font-size:36px;line-height:1.16">Depuis la balade, j’ai l’esprit plus clair. Merci.</div></div></div>`;

const Q = { x: 40, y: 500 }, B = { x: 670, y: 720 };

module.exports = {
  slug: '41-crash-balade-fantome',
  slides: [
    // 1 — HOOK : le moment le plus absurde, sans explication.
    s(1, 'Qui est ce singe ? →', `${G.bgRays(C.soleil, '#FFD45E', 700, 980)}
      ${hook('Ce singe m’a fait perdre 6 mois.', { y: 120, size: 100 })}
      ${S(`${dos(1160, 840)}
        ${G.quentin({ x: 40, y: 640, s: 0.7, outfit: 'chemise', arms: 'down', brows: 'flat', mouth: 'flat', eyes: { lid: 0.55 } })}
        ${G.toile(40, 640, 130)}${G.toile(290, 900, 70, -1, 1)}
        ${G.brutus({ x: 470, y: 520, s: 1.08, arms: 'hold', hold: G.P.chips, mouth: 'munch', eyes: { lid: 0.45, px: 10, py: 4 }, brows: 'sly' })}
        ${assise(1160, 1120)}${chip(420, 1150, 20)}${chip(480, 1170, -30)}${chip(980, 1140, 40)}`)}
      ${fleche('LUI.', { x: 800, y: 360, tx: 760, ty: 545 })}
      ${fleche('MOI.', { x: 60, y: 430, tx: 160, ty: 640, size: 44 })}`),

    // 2 — Le contexte.
    s(2, 'Ses arguments →', `${G.saleve2({ panneau: 'DÉCLIC', panneauX: 860 })}
      ${S(G.toile(1032, 902, 70, -1, 1))}
      ${narr('J’ai créé une balade pour débloquer les gens.', { size: 36, w: 820 })}
      ${narr('Lui, c’est Brutus. Mon chimpanzé intérieur. Garde du corps. Parano.', { y: 270, size: 26, w: 600, bg: C.creme, rot: 1 })}
      ${S(`${G.quentin({ ...Q, arms: { l: 'hip', r: 'chin' }, brows: 'sad', mouth: 'smirk', eyes: { px: 10 } })}${G.brutus({ x: 560, y: 720, arms: 'hold', hold: ferme, brows: 'angry', mouth: 'flat', eyes: { px: -8, lid: 0.3 }, casque: true })}`)}
      ${G.avantPlan()}
      ${bulle({ x: 540, yb: 640, w: 470, who: 'b', to: tb({ x: 560, y: 720 }), text: 'Je protège les gens. <b>De toi.</b>' })}`),

    // 3 — Le dossier RISQUES.
    s(3, 'Ça empire →', `${G.saleve2()}
      ${S(`${G.quentin({ ...Q, arms: { l: 'hip', r: 'point' }, brows: 'flat', mouth: 'smirk', eyes: { px: 8, lid: 0.25 } })}${G.brutus({ ...B, arms: 'hold', hold: G.P.classeur, brows: 'sad', mouth: 'open', eyes: { px: -6, py: -8 }, casque: true })}`)}
      ${G.avantPlan()}
      ${bulle({ x: 360, yb: 330, w: 670, who: 'b', to: tb(B, 0, -10), text: 'Risque n°1 : il pleut.<br>Risque n°2 : <b>des gens viennent.</b>' })}
      ${bulle({ x: 40, yb: 462, w: 310, who: 'q', to: tq(Q), text: 'C’est le but, Brutus.' })}`),

    // 4 — L'écureuil.
    s(4, 'Six mois plus tard →', `${G.saleve2()}
      ${S(`${G.quentin({ ...Q, arms: 'down', mouth: 'smile', eyes: { px: 10, py: 10 } })}${G.ecureuil(440, 1030, 1.15, true)}${G.brutus({ ...B, arms: 'hold', hold: G.P.carte, brows: 'angry', mouth: 'flat', eyes: { px: -14, py: 6 }, casque: true, sirene: true, sweat: true })}`)}
      ${G.avantPlan()}
      ${bulle({ x: 330, yb: 280, w: 700, who: 'b', to: tb(B, 40, -80), text: 'J’ai repéré 14 dangers. Dont <b>un écureuil.</b>' })}
      ${bulle({ x: 40, yb: 440, w: 340, who: 'q', to: tq(Q), text: 'Il a l’air sympa.' })}
      ${bulle({ x: 450, yb: 600, w: 470, who: 'b', to: tb(B, -40, -60), size: 40, text: 'C’est ce qu’il veut que tu croies.' })}
      ${ono('WIIIOU&nbsp;!', { x: 820, y: 640, size: 58, rot: 8, fill: '#E5322D' })}`),

    // 5 — Le report, en trois cases.
    s(5, 'BZZZ →', `<div class="abs" style="inset:0;background:${C.creme}"></div>${G.dots(0.1)}
      ${cases([
        { x: 40, y: 130, w: 1000, h: 370, scene: G.salon({ etagere: false }) + S(agenda), cx: 0, cy: 150, k: 1 },
        { x: 40, y: 530, w: 600, h: 690, scene: canape(), cx: 0, cy: 360, k: 0.79 },
        { x: 660, y: 530, w: 380, h: 690, scene: canape(G.toile(60, 600, 120) + G.toile(330, 930, 80, -1, 1)), cx: 10, cy: 520, k: 0.95 },
      ])}
      ${narr('Résultat : six mois de report.', { x: 70, y: 400, w: 330, size: 30, rot: -2 })}
      ${bulle({ x: 70, yb: 640, w: 130, size: 50, to: [200, 680], text: '…' })}
      ${bulle({ x: 360, yb: 790, w: 270, size: 38, who: 'b', to: [450, 860], text: 'On est bien, là.' })}
      ${narr('Jour 183.', { x: 690, y: 560, w: 200, size: 34, bg: C.nuit, color: C.creme, rot: -3 })}`),

    // 6 — La bascule.
    s(6, 'Dans mon corps →', `${G.salon({ etagere: false })}
      ${S(`${dos()}${G.quentin({ x: 40, y: 560, outfit: 'chemise', arms: 'up', brows: 'up', mouth: 'open', eyes: { mode: 'wide' } })}
        ${G.brutus({ x: 660, y: 800, arms: 'up', brows: 'angry', mouth: 'scream', eyes: { mode: 'wide' } })}
        <rect x="-40" y="1080" width="1160" height="300" rx="40" fill="#2F5A99" ${st(8)}/>${chip(700, 790, 20)}${chip(980, 760, -30)}${chip(1010, 860, 50)}${chip(640, 880, -10)}${chip(860, 740, 70)}`)}
      ${phone}
      ${ono('BZZZ', { x: 470, y: 120, size: 90, rot: -14 })}
      ${ono('CRUNCH', { x: 600, y: 1130, size: 72, rot: 6, fill: C.flamme })}
      ${bulle({ x: 40, yb: 480, w: 460, to: tq({ x: 40, y: 560 }), size: 42, text: '…Attends. Elle a eu lieu, la balade ?' })}
      ${bulle({ x: 590, yb: 760, w: 430, who: 'b', to: tb({ x: 660, y: 800 }), size: 42, text: 'Qui a laissé <b>faire ça ?!</b>' })}`),

    // 7 — Le radar du corps.
    s(7, 'Ton défi →', `${G.bgDark(C.nuit, 'rgba(127,212,255,.18)')}
      ${tag('Le radar du corps', { bg: C.soleil, color: '#14121F' })}
      ${big(`Brutus ne veut pas que j’échoue. Il veut que ${fl('rien ne change.')}`, 62, 230, { w: 760, color: C.creme })}
      ${big('Pour lui, un mardi différent, c’est un tigre à dents de sabre.', 40, 470, { color: C.soleil })}
      ${S(`${G.fx.tigre(930, 330, 0.95)}${G.quentin({ x: 60, y: 570, arms: { l: 'down', r: 'chest' }, eyes: { mode: 'closed' }, mouth: 'smile' })}${machine}
        ${G.brutus({ x: 700, y: 820, s: 0.3, arms: 'up', casque: true, sweat: true, mouth: 'scream', eyes: { mode: 'wide' }, brows: 'up' })}`)}`),

    // 8 — Action.
    s(8, 'Partage-le ↗', `${G.saleve2({ mood: 'or' })}
      ${tag('Morale de l’histoire')}
      ${big(`On n’est jamais prêt. ${fl('On envoie quand même.')}`, 64, 222)}
      ${actions({ y: 430, mot: 'ENVOYÉ', pourquoi: 'quand tu as envoyé le message que tu repousses depuis des semaines', envoie: 'l’ami qui repousse tout « au printemps »', enregistre: 'pour ton prochain report' })}
      ${S(`${G.quentin({ x: 30, y: 930, s: 0.48, arms: { l: 'hip', r: 'point' }, mouth: 'grin', eyes: { px: 8, py: -8 } })}${G.brutus({ x: 820, y: 1000, s: 0.5, arms: 'down', brows: 'sad', mouth: 'wobble', eyes: { px: -8, py: -6 }, sweat: true })}`)}
      ${bulle({ x: 330, yb: 1110, w: 440, who: 'b', size: 32, to: tb({ x: 820, y: 1000, s: 0.5 }), text: 'J’ai ajouté « désolé du dérangement ».' })}`),
  ],
};
