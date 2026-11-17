// Crash-test n°1 — « La balade fantôme » (version gros nez). Vraie histoire de Quentin, scénario validé le 15 novembre.
const { C, G, nb, fl, big, S, tag, ep, bubble, caption, link, ono, cases } = require('../src/ep.js');
const s = ep('Crash-test · n°1', 7);
const I = G.I, st = G.st;

const barriere = `<defs><pattern id="stripes" width="80" height="80" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="40" height="80" fill="#E5322D"/><rect x="40" width="40" height="80" fill="#fff"/></pattern></defs>
  <rect x="620" y="1050" width="22" height="120" fill="#5B5675" ${st(5)}/><rect x="1000" y="1050" width="22" height="120" fill="#5B5675" ${st(5)}/>
  <rect x="580" y="1000" width="480" height="70" rx="8" fill="url(#stripes)" ${st(7)}/>
  <rect x="660" y="1080" width="320" height="60" rx="8" fill="${C.creme}" ${st(6)}/><text x="820" y="1121" text-anchor="middle" font-family="Poppins" font-weight="700" font-size="30" fill="${I}">SENTIER FERMÉ</text>`;
const agenda = `<g transform="rotate(4 820 300)">
  <rect x="626" y="150" width="390" height="330" rx="10" fill="#fff" ${st(7)}/><rect x="626" y="150" width="390" height="70" rx="10" fill="#E5322D" ${st(7)}/>
  <text x="821" y="198" text-anchor="middle" font-family="Poppins" font-weight="700" font-size="34" fill="#fff">AGENDA</text>
  <text x="656" y="276" font-family="Poppins" font-weight="700" font-size="30" fill="${I}">Lancer les balades</text><path d="M 652 266 L 990 262" stroke="#E5322D" stroke-width="7" stroke-linecap="round"/>
  <text x="656" y="330" font-family="Poppins" font-weight="700" font-size="28" fill="${C.grisNuit}">→ au printemps</text>
  <text x="656" y="380" font-family="Poppins" font-weight="700" font-size="28" fill="${C.grisNuit}">→ après l’été</text>
  <text x="656" y="430" font-family="Poppins" font-weight="700" font-size="28" fill="${C.grisNuit}">→ quand ce sera clair</text></g>`;
const canapeDos = `<rect x="-40" y="800" width="1160" height="300" rx="60" fill="#3E6FB5" ${st(8)}/><path d="M 380 830 V 1080 M 720 830 V 1080" stroke="${I}" stroke-width="5" opacity=".3"/>`;
const canapeAssise = `<rect x="-40" y="1070" width="1160" height="300" rx="40" fill="#2F5A99" ${st(8)}/><rect x="-60" y="900" width="120" height="460" rx="50" fill="#3E6FB5" ${st(8)}/><rect x="1020" y="900" width="120" height="460" rx="50" fill="#3E6FB5" ${st(8)}/>`;
const chip = (x, y, r) => `<ellipse cx="${x}" cy="${y}" rx="18" ry="12" fill="#F2B544" transform="rotate(${r} ${x} ${y})" ${st(4)}/>`;
const phone = `<div class="abs" style="left:560px;top:150px;width:440px;height:540px;transform:rotate(4deg);background:${I};border-radius:52px;padding:22px;box-shadow:12px 12px 0 rgba(20,18,31,.35);z-index:3">
  <div style="width:100%;height:100%;background:#EAF3FF;border-radius:34px;padding:34px 26px;font-family:Poppins;font-weight:700;color:${I}">
    <div style="font-size:26px;color:${C.grisNuit};margin-bottom:22px">Nouveau message</div>
    <div style="background:#fff;border:5px solid ${I};border-radius:28px;padding:22px 24px;font-size:36px;line-height:1.18">Depuis la balade, j’ai l’esprit plus clair. Merci.</div></div></div>`;
const machine = `<defs><clipPath id="loupe"><circle cx="790" cy="880" r="232"/></clipPath><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 H 0 V 40" fill="none" stroke="#7FD4FF" stroke-width="1.5" opacity=".35"/></pattern></defs>
  <path d="M 280 1000 L 580 790 M 290 1070 L 620 1060" stroke="#7FD4FF" stroke-width="6" stroke-dasharray="14 12"/>
  <circle cx="228" cy="1010" r="72" fill="#7FD4FF" opacity=".3" stroke="#7FD4FF" stroke-width="8"/>
  <g clip-path="url(#loupe)"><rect x="540" y="640" width="500" height="480" fill="#12304F"/><rect x="540" y="640" width="500" height="480" fill="url(#grid)"/>
    <g fill="#B8B4C8" opacity=".9" ${st(5)}><circle cx="640" cy="700" r="44"/><circle cx="700" cy="670" r="36"/><circle cx="600" cy="660" r="30"/></g>
    <rect x="590" y="960" width="410" height="150" rx="14" fill="#5B5675" ${st(7)}/><circle cx="650" cy="1030" r="30" fill="#EAF3FF" ${st(5)}/><path d="M 650 1030 L 672 1010" ${st(5)}/>
    <rect x="900" y="880" width="18" height="94" fill="#B8B4C8" ${st(4)}/><circle cx="909" cy="876" r="22" fill="${C.jungle}" ${st(5)}/>
    <path d="M 846 970 L 812 868" ${st(16)}/><path d="M 846 970 L 812 868" stroke="#B8B4C8" stroke-width="8" stroke-linecap="round"/><circle cx="810" cy="862" r="26" fill="#E5322D" ${st(6)}/>
    <rect x="626" y="1046" width="290" height="48" rx="8" fill="${C.soleil}" ${st(5)}/><text x="771" y="1079" text-anchor="middle" font-family="Poppins" font-weight="700" font-size="25" fill="${I}">INCONNU = TIGRE</text></g>
  <circle cx="790" cy="880" r="232" fill="none" stroke="#7FD4FF" stroke-width="12"/><circle cx="1000" cy="700" r="24" fill="#E5322D" ${st(6)}/>`;

module.exports = {
  slug: '41-crash-balade-fantome',
  slides: [
    s(1, 'Le dossier RISQUES →', `${G.bgSaleve()}
      ${big('J’ai créé une balade pour débloquer les gens.', 58, 130, { w: 900 })}
      ${big(fl('Devine qui était bloqué.'), 76, 270)}
      ${caption({ x: 48, y: 380, w: 540, size: 26, bg: C.creme, rot: -1.5, text: `Brutus, mon chimpanzé intérieur. Garde du corps. Parano.` })}
      ${S(`${G.quentin({ x: 60, y: 500, arms: 'hip', brows: 'sad', mouth: 'flat', eyes: { px: 8 } })}${G.brutus({ x: 670, y: 720, arms: 'hip', brows: 'angry', mouth: 'flat', eyes: { px: -8, lid: 0.3 }, casque: true })}${barriere}`)}
      ${bubble({ x: 600, y: 520, w: 440, size: 40, tail: { at: 0.5, dir: 0 }, text: `Sentier fermé. Pour ta sécurité.` })}`),

    s(2, 'Ça empire →', `${G.bgSaleve()}
      ${S(`${G.quentin({ x: 60, y: 500, arms: { l: 'hip', r: 'point' }, brows: 'flat', mouth: 'smirk', eyes: { px: 8, lid: 0.25 } })}${G.brutus({ x: 670, y: 720, arms: 'hold', hold: G.P.classeur, brows: 'worried', mouth: 'open', eyes: { px: -6, py: -8 }, casque: true })}`)}
      ${bubble({ x: 430, y: 140, w: 600, h: 150, size: 42, tail: null, text: `Et s'il pleut${nb}? Et si personne ne vient${nb}?` })}
      ${link({ x: 860, y: 283, h: 244 })}
      ${bubble({ x: 560, y: 520, w: 470, size: 46, tail: { at: 0.5, dir: 0 }, text: `Et si <b>quelqu'un</b> vient${nb}?!` })}
      ${bubble({ x: 40, y: 330, w: 420, size: 44, tail: { at: 0.4, dir: -1 }, text: `C'est le but, Brutus.` })}`),

    s(3, 'Six mois plus tard →', `${G.bgSaleve()}
      ${S(`${G.quentin({ x: 60, y: 500, arms: 'down', mouth: 'smile', eyes: { px: 10, py: 10 } })}${G.ecureuil(450, 1040)}${G.brutus({ x: 670, y: 720, arms: 'hold', hold: G.P.carte, brows: 'angry', mouth: 'flat', eyes: { px: -14, py: 6 }, casque: true, sirene: true, sweat: true })}`)}
      ${bubble({ x: 450, y: 130, w: 580, h: 160, size: 40, tail: null, text: `J'ai repéré quatorze dangers. Dont un <b>écureuil</b>.` })}
      ${link({ x: 900, y: 283, h: 214 })}
      ${bubble({ x: 40, y: 330, w: 380, size: 44, tail: { at: 0.4, dir: -1 }, text: `Il a l'air sympa.` })}
      ${bubble({ x: 560, y: 490, w: 470, size: 40, tail: { at: 0.4, dir: 0 }, text: `C'est ce qu'il veut que tu croies.` })}
      ${ono('WIIIOU&nbsp;!', { x: 360, y: 650, size: 72, rot: -10, fill: '#E5322D' })}`),

    s(4, 'BZZZ →', `<div class="abs" style="inset:0;background:${C.creme}"></div>${G.dots(0.1)}
      ${cases([
        { x: 40, y: 130, w: 1000, h: 420, scene: G.bgRoom({ window: false }) + S(agenda), cx: 210, cy: 110, k: 1.15 },
        { x: 40, y: 590, w: 1000, h: 630, cx: 0, cy: 480, k: 0.926, scene: G.bgRoom() + S(`${canapeDos}
            ${G.quentin({ x: 60, y: 560, outfit: 'chemise', arms: 'down', brows: 'flat', mouth: 'flat', eyes: { lid: 0.45 } })}
            ${G.brutus({ x: 650, y: 760, plaid: true, arms: 'hold', hold: G.P.chips, mouth: 'munch', eyes: { lid: 0.4, px: -4 }, brows: 'normal' })}
            ${canapeAssise}${chip(560, 1100, 20)}${chip(620, 1120, -30)}`) },
      ])}
      ${caption({ x: 70, y: 170, w: 400, size: 34, bg: C.soleil, rot: -2, text: `Résultat${nb}: j'ai repoussé. Plus de six mois.` })}
      ${bubble({ x: 610, y: 640, w: 400, size: 44, tail: { at: 0.5, dir: 0 }, text: `On est bien, là.` })}
      ${bubble({ x: 330, y: 610, w: 160, size: 52, tail: { at: 0.2, dir: -1 }, text: `…` })}`),

    s(5, 'Ce qui se passe dans le corps →', `${G.bgRoom()}
      ${S(`${canapeDos}${G.quentin({ x: 60, y: 560, outfit: 'chemise', arms: 'up', brows: 'up', mouth: 'open', eyes: { mode: 'wide' } })}
        ${G.brutus({ x: 660, y: 700, arms: 'up', brows: 'up', mouth: 'scream', eyes: { mode: 'wide' } })}
        ${canapeAssise}${chip(700, 760, 20)}${chip(980, 730, -30)}${chip(1010, 840, 50)}${chip(640, 860, -10)}`)}
      ${phone}
      ${ono('BZZZ', { x: 470, y: 130, size: 90, rot: -14 })}
      ${ono('CRUNCH', { x: 640, y: 1130, size: 72, rot: 6, fill: C.flamme })}
      ${bubble({ x: 40, y: 360, w: 460, size: 42, tail: { at: 0.45, dir: 0 }, text: `…Elle a eu lieu, la balade.` })}`),

    s(6, 'Ton défi →', `${G.bgDark(C.nuit, 'rgba(127,212,255,.18)')}
      ${tag('Le radar du corps', { bg: C.soleil, color: '#14121F' })}
      ${big(`Brutus ne veut pas que j’échoue. Il veut que ${fl('rien ne change.')}`, 64, 230, { color: C.creme })}
      ${big('Pour lui, l’inconnu, c’est un tigre.', 44, 460, { color: C.soleil })}
      ${S(`${G.quentin({ x: 60, y: 560, arms: { l: 'down', r: 'chest' }, eyes: { mode: 'closed' }, mouth: 'smile' })}${machine}
        ${G.brutus({ x: 700, y: 800, s: 0.3, arms: 'up', casque: true, sweat: true, mouth: 'scream', eyes: { mode: 'wide' }, brows: 'up' })}`)}`),

    s(7, 'Envoie-le à un ami qui repousse ↗', `${G.bgSaleve({ sky: ['#FFF6EA', '#FFD98A'] })}
      ${tag('Ton défi')}
      ${big('Envoie aujourd’hui le message que ton Brutus te fait repousser.', 54, 230)}
      ${big(fl('Puis écris ENVOYÉ en commentaire.'), 40, 410)}
      ${S(`${G.brutus({ x: 300, y: 610, s: 0.6, arms: 'hip', brows: 'worried', mouth: 'wobble', eyes: { px: -12, py: 14 }, sweat: true })}
        ${G.quentin({ x: 60, y: 520, arms: 'phone', mouth: 'smile', eyes: { px: 0, py: 14 } })}`)}
      ${bubble({ x: 520, y: 470, w: 480, size: 40, tail: { at: 0.12, dir: -1 }, text: `J'ai mis un émoji pour adoucir.` })}`),
  ],
};
