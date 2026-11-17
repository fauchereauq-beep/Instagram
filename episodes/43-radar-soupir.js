// Le radar du corps n°1 — Le soupir cyclique. On ose : se lancer malgré la boule au ventre.
const { C, G, nb, fl, so, big, S, tag, ep, bubble, caption, ono } = require('../src/ep.js');
const s = ep('Le radar du corps · n°1', 7);
const I = G.I, st = G.st;

const roue = `<g transform="translate(470 300)"><circle r="190" fill="#FFF6EA" ${st(9)}/><circle r="160" fill="none" stroke="${I}" stroke-width="4"/>
  ${Array.from({ length: 12 }, (_, i) => { const a = i * Math.PI / 6; return `<path d="M 0 0 L ${(160 * Math.cos(a)).toFixed(1)} ${(160 * Math.sin(a)).toFixed(1)}" stroke="${I}" stroke-width="3" opacity=".35"/>`; }).join('')}
  <path d="M 0 190 L -60 300 M 0 190 L 60 300" ${st(9)}/></g>`;
const rayonX = `<ellipse cx="224" cy="990" rx="110" ry="120" fill="#7FD4FF" opacity=".28" stroke="#7FD4FF" stroke-width="6"/>
  <ellipse cx="190" cy="960" rx="30" ry="40" fill="#BFE3FF" ${st(4)}/><ellipse cx="258" cy="960" rx="30" ry="40" fill="#BFE3FF" ${st(4)}/>
  <path d="M 236 950 c -14 -20 -40 -6 -26 14 l 26 24 l 26 -24 c 14 -20 -12 -34 -26 -14 Z" fill="#E5322D" ${st(4)}/>
  <path d="M 200 1050 c 20 -30 50 -10 30 10 c -20 20 -50 0 -30 -10 c 30 -20 60 10 40 20 M 190 1056 l -30 10 M 270 1060 l 30 8" fill="none" stroke="#C9A36A" stroke-width="9" stroke-linecap="round"/>`;
const etape = (n, t, y) => `<div class="abs" style="left:48px;top:${y}px;width:984px;display:flex;gap:26px;align-items:center;background:#fff;border:7px solid ${I};border-radius:26px;box-shadow:9px 9px 0 ${I};padding:22px 28px;font-family:Poppins;font-weight:700;font-size:44px;line-height:1.1;color:${I}">
  <span style="flex:none;width:90px;height:90px;border-radius:50%;background:${C.soleil};border:6px solid ${I};display:flex;align-items:center;justify-content:center;font-size:48px">${n}</span><span>${t}</span></div>`;

module.exports = {
  slug: '43-radar-soupir',
  slides: [
    s(1, 'Ce que fait Brutus →', `${G.bgRays('#FFB4A2', '#FFC6B8', 820, 900)}
      ${big('Boule au ventre avant de te lancer ?', 72, 130, { w: 900 })}
      ${big(fl('Ton corps a un bouton pause.'), 54, 300)}
      ${caption({ x: 48, y: 400, w: 560, size: 24, bg: C.creme, rot: -1.5, text: `Brutus, mon chimpanzé intérieur, est en alerte rouge.` })}
      ${S(`<rect x="0" y="1130" width="1080" height="220" fill="${C.jungle}"/><path d="M 0 1130 H 1080" ${st(8)}/>${G.quentin({ x: 60, y: 500, arms: { l: 'down', r: 'chest' }, mouth: 'smile', eyes: { mode: 'closed' } })}${G.brutus({ x: 670, y: 720, arms: 'head', casque: true, sirene: true, sweat: true, mouth: 'scream', eyes: { mode: 'wide' }, brows: 'up' })}`)}
      ${ono('WIIIOU&nbsp;!', { x: 600, y: 520, size: 80, rot: -8, fill: '#E5322D' })}`),

    s(2, 'Dans ton corps →', `${G.bgRoom()}
      ${S(`${roue}${G.brutus({ x: 405, y: 210, s: 0.36, arms: 'up', mouth: 'scream', eyes: { mode: 'wide' }, brows: 'up', sweat: true })}${G.quentin({ x: 60, y: 560, outfit: 'chemise', arms: { l: 'head', r: 'down' }, brows: 'sad', mouth: 'wobble', eyes: { lid: 0.3 }, sweat: true })}`)}
      ${bubble({ x: 680, y: 140, w: 360, size: 34, tail: { at: 0.1, dir: -1 }, text: `Et s'ils trouvent ça nul${nb}? Et si je bégaie${nb}? Et si…` })}
      ${bubble({ x: 600, y: 600, w: 420, size: 44, tail: { at: 0.15, dir: -1 }, text: `Brutus, respire.` })}
      ${ono('JE RESPIRE&nbsp;!', { x: 540, y: 820, size: 70, rot: -6, fill: '#E5322D' })}`),

    s(3, 'L’exercice →', `${G.bgDark(C.nuit, 'rgba(127,212,255,.2)')}
      ${tag('Le radar du corps', { bg: C.soleil, color: '#14121F' })}
      ${big('Quand Brutus panique, ton corps suit.', 60, 230, { color: C.creme })}
      <div class="abs" style="left:540px;top:560px;width:500px;font-family:Poppins;font-weight:700;font-size:40px;line-height:1.35;color:${C.creme}">
        <div>${so('●')} Cœur qui s’emballe</div><div>${so('●')} Souffle court et haut</div><div>${so('●')} Ventre noué</div></div>
      ${S(`${G.quentin({ x: 60, y: 560, arms: 'down', brows: 'sad', mouth: 'flat', eyes: { lid: 0.2 } })}${rayonX}`)}
      ${ono('BOUM BOUM', { x: 300, y: 830, size: 52, rot: -8, fill: '#E5322D' })}
      ${caption({ x: 540, y: 860, w: 480, size: 28, bg: C.creme, rot: 1, text: `C'est ton système nerveux en mode alarme. Pas un défaut.` })}`),

    s(4, 'On essaie ? →', `<div class="abs" style="inset:0;background:${C.creme}"></div>${G.dots(0.1)}
      ${tag('L’exercice : le soupir cyclique', { bg: C.soleil, color: '#14121F' })}
      ${etape(1, 'Inspire par le nez.', 250)}
      ${etape(2, 'Ré-inspire un petit coup par-dessus.', 440)}
      ${etape(3, 'Expire très lentement par la bouche.', 630)}
      ${big(fl('Pendant 5 minutes, juste avant de te lancer.'), 44, 830, { w: 600 })}
      ${S(G.quentin({ x: 700, y: 820, s: 0.5, arms: { l: 'down', r: 'chest' }, mouth: 'o', eyes: { mode: 'closed' } }))}
      ${caption({ x: 48, y: 1040, w: 560, size: 28, bg: C.flamme, color: '#fff', rot: -1, text: `Enregistre cette planche pour le jour J.` })}`),

    s(5, 'Ça marche vraiment ? →', `${G.bgSaleve()}
      ${S(`${G.quentin({ x: 60, y: 500, arms: { l: 'down', r: 'chest' }, mouth: 'o', eyes: { mode: 'closed' } })}
        <path d="M 330 820 q 30 -10 60 0 t 60 0 M 330 850 q 30 -10 60 0 t 60 0" fill="none" stroke="#fff" stroke-width="8" stroke-linecap="round"/>
        ${G.brutus({ x: 690, y: 800, s: 0.6, arms: 'down', mouth: 'o', eyes: { mode: 'closed' }, brows: 'normal' })}`)}
      ${ono('PFFFFF…', { x: 600, y: 620, size: 80, rot: -4, fill: '#7FD4FF' })}
      ${bubble({ x: 560, y: 340, w: 460, size: 38, tail: { at: 0.6, dir: 0 }, text: `Je me dégonfle… dans le bon sens.` })}`),

    s(6, 'La morale →', `${G.bgRays('#BFE3FF', '#D6EEFF', 540, 900)}
      ${tag('Ce que dit la science', { bg: C.soleil, color: '#14121F' })}
      ${big(`Stanford, 2023 : cinq minutes par jour de soupir cyclique ont ${fl('amélioré l’humeur')} et ralenti la respiration.`, 48, 230)}
      ${caption({ x: 48, y: 470, w: 560, size: 26, bg: C.creme, rot: 0, text: `Une étude sur 108 personnes : prometteur, pas magique.` })}
      ${S(`<rect x="0" y="1130" width="1080" height="220" fill="${C.jungle}"/><path d="M 0 1130 H 1080" ${st(8)}/>${G.quentin({ x: 60, y: 560, arms: { l: 'hip', r: 'point' }, mouth: 'grin', eyes: { px: 8 } })}${G.brutus({ x: 670, y: 720, arms: 'hold', hold: `<path d="M -40 30 h 80 l -8 -54 q -32 -30 -64 0 Z" fill="#9C98AE" ${st(6)}/>`, mouth: 'smile', eyes: { lid: 0.35, px: -4 }, casque: true })}`)}
      ${bubble({ x: 600, y: 560, w: 430, size: 38, tail: { at: 0.5, dir: 0 }, text: `Bon. Je baisse la sirène.` })}`, { source: 'Balban et al., « Brief structured respiration practices… », Cell Reports Medicine, 2023.' }),

    s(7, 'Enregistre-le pour le jour J ↗', `${G.bgSaleve({ sky: ['#FFF6EA', '#FFD98A'] })}
      ${tag('Morale de l’histoire')}
      ${big(`On ne raisonne pas Brutus. ${fl('On le calme par le souffle.')}`, 62, 230)}
      ${caption({ x: 48, y: 420, w: 620, size: 28, bg: C.soleil, rot: -1, text: `Défi${nb}: 5 minutes aujourd'hui, avant de te lancer. Écris SOUFFLE quand c'est fait.` })}
      ${S(`${G.quentin({ x: 60, y: 600, s: 0.78, arms: { l: 'down', r: 'wave' }, mouth: 'grin', eyes: { px: 6 } })}${G.brutus({ x: 670, y: 740, arms: 'hip', mouth: 'smile', eyes: { mode: 'closed' } })}`)}`),
  ],
};
