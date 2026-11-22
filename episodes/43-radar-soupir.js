// Le radar du corps n°1 — Le soupir cyclique. On ose : se lancer malgré la boule au ventre.
const { C, G, nb, fl, so, big, S, tag, bulle, tq, tb, narr, hook, fleche, actions, ep3, ono } = require('../src/v3.js');
const s = ep3('Le radar du corps · n°1', 8);
const I = G.I, st = G.st;

const roue = `<g transform="translate(544 330)"><path d="M 0 180 L -70 300 M 0 180 L 70 300" ${st(10)}/><circle r="180" fill="#FFF6EA" ${st(9)}/><circle r="150" fill="none" stroke="${I}" stroke-width="4"/>
  ${Array.from({ length: 12 }, (_, i) => { const a = i * Math.PI / 6; return `<path d="M 0 0 L ${(150 * Math.cos(a)).toFixed(1)} ${(150 * Math.sin(a)).toFixed(1)}" stroke="${I}" stroke-width="3" opacity=".3"/>`; }).join('')}</g>`;
const rayonX = (cx = 224, cy = 1000, k = 1) => `<g transform="translate(${cx} ${cy}) scale(${k})"><ellipse rx="110" ry="120" fill="#7FD4FF" opacity=".28" stroke="#7FD4FF" stroke-width="6"/>
  <ellipse cx="-34" cy="-30" rx="30" ry="40" fill="#BFE3FF" ${st(4)}/><ellipse cx="34" cy="-30" rx="30" ry="40" fill="#BFE3FF" ${st(4)}/>
  <path d="M 12 -40 c -14 -20 -40 -6 -26 14 l 26 24 l 26 -24 c 14 -20 -12 -34 -26 -14 Z" fill="#E5322D" ${st(4)}/>
  <path d="M -24 60 c 20 -30 50 -10 30 10 c -20 20 -50 0 -30 -10 c 30 -20 60 10 40 20" fill="none" stroke="#C9A36A" stroke-width="9" stroke-linecap="round"/></g>`;
const pause = (x, y, r = 90) => `<g transform="translate(${x} ${y})"><circle r="${r * 1.7}" fill="#E5322D" opacity=".18"/><circle r="${r}" fill="#E5322D" ${st(8)}/><rect x="${-r * 0.42}" y="${-r * 0.48}" width="${r * 0.28}" height="${r * 0.96}" rx="6" fill="#fff"/><rect x="${r * 0.14}" y="${-r * 0.48}" width="${r * 0.28}" height="${r * 0.96}" rx="6" fill="#fff"/></g>`;
const bouclier = `<path d="M -80 -90 H 80 V 10 Q 80 80 0 110 Q -80 80 -80 10 Z" fill="#9C98AE" ${st(7)}/><path d="M 0 -60 V 80 M -50 0 H 50" stroke="${I}" stroke-width="8" opacity=".35"/>`;
const envoyer = `<rect x="-100" y="-130" width="200" height="70" rx="16" fill="#E5322D" ${st(5)}/><text y="-84" text-anchor="middle" font-family="Poppins" font-weight="700" font-size="30" fill="#fff">ENVOYER</text><path d="M -110 -160 h 220 M -110 -40 h 160" stroke="#C9C3D6" stroke-width="10" stroke-linecap="round"/>`;
const etape = (n, t, y) => `<div class="abs" style="left:48px;top:${y}px;width:984px;display:flex;gap:26px;align-items:center;background:#fff;border:7px solid ${I};border-radius:26px;box-shadow:9px 9px 0 ${I};padding:22px 28px;font-family:Poppins;font-weight:700;font-size:44px;line-height:1.1;color:${I}">
  <span style="flex:none;width:90px;height:90px;border-radius:50%;background:${C.soleil};border:6px solid ${I};display:flex;align-items:center;justify-content:center;font-size:48px">${n}</span><span>${t}</span></div>`;
const hamac = (dy = 0) => `<g transform="translate(0 ${dy})"><rect x="546" y="600" width="26" height="560" fill="#7A4A2A" ${st(5)}/><rect x="1028" y="600" width="26" height="560" fill="#7A4A2A" ${st(5)}/><path d="M 559 860 L 600 920 M 1041 860 L 1000 920" ${st(4)}/></g>`;
const hamacAvant = (dy = 0) => `<g transform="translate(0 ${dy})"><path d="M 590 916 Q 800 1040 1010 916 Q 800 1150 590 916 Z" fill="#E5677A" ${st(6)}/><path d="M 640 950 Q 800 1060 960 950 M 690 990 Q 800 1080 910 990" fill="none" stroke="#fff" stroke-width="6" opacity=".6"/></g>`;

module.exports = {
  slug: '43-radar-soupir',
  slides: [
    // 1 — HOOK
    s(1, 'Où il est ? →', `${G.choc('#2A2350', 540, 860)}
      ${hook('Ton corps a un bouton pause.', { y: 120, size: 92 })}
      ${hook('Personne ne te l’a jamais montré.', { y: 330, size: 54, w: 900 })}
      ${S(`${G.quentin({ x: 300, y: 560, s: 0.9, arms: 'down', mouth: 'o', eyes: { mode: 'closed' }, brows: 'flat' })}${pause(480, 1020, 70)}
        ${G.brutus({ x: 760, y: 760, s: 0.62, arms: 'up', casque: true, sirene: true, mouth: 'scream', eyes: { mode: 'wide' }, brows: 'up' })}
        <rect x="730" y="700" width="290" height="380" rx="30" fill="#BFE9FF" opacity=".55" stroke="#fff" stroke-width="8"/><path d="M 760 730 l 60 0 M 760 750 l 30 0" stroke="#fff" stroke-width="10" stroke-linecap="round"/>`)}
      <div class="abs" style="left:700px;top:640px;z-index:4;font-family:Poppins;font-weight:700;font-size:30px;color:#7FD4FF;transform:rotate(-4deg)">(figé en plein cri)</div>
      ${fleche('ICI.', { x: 640, y: 520, tx: 540, ty: 970, color: '#FFC233' })}`),

    // 2 — La situation
    s(2, 'Ce qui se passe →', `${G.choc('#FFC6B8', 540, 820)}<div class="abs" style="left:0;right:0;top:0;height:520px;background:linear-gradient(#FFC6B8 78%, rgba(255,198,184,0))"></div>
      ${big(`Ton cœur bat à 140. ${fl('Pour un mail.')}`, 70, 130)}
      ${narr('Brutus, mon chimpanzé intérieur, est en alerte rouge.', { y: 330, size: 26, w: 600, bg: C.creme, rot: 1 })}
      ${S(`${G.brutus({ x: 700, y: 650, s: 0.66, arms: 'head', casque: true, sirene: true, sweat: true, mouth: 'scream', eyes: { mode: 'wide' }, brows: 'up' })}
        <rect x="380" y="1090" width="720" height="170" fill="#8A5A2B" ${st(7)}/>${G.fx.laptop(760, 1090, 1.05, envoyer)}
        ${G.quentin({ x: 30, y: 520, arms: { l: 'down', r: 'point' }, brows: 'up', mouth: 'wobble', eyes: { mode: 'wide' }, sweat: true })}${G.fx.gouttes(70, 520)}`)}
      ${ono('WIIIOU&nbsp;!', { x: 560, y: 520, size: 80, rot: -8, fill: '#E5322D' })}`),

    // 3 — Le mental en boucle
    s(3, 'Dans ton corps →', `${G.salon({ etagere: false })}
      ${S(`${roue}${G.brutus({ x: 480, y: 210, s: 0.34, arms: 'up', mouth: 'scream', eyes: { mode: 'wide' }, brows: 'up', sweat: true })}${G.fx.pigeon(880, 610, 0.9)}
        ${G.quentin({ x: 380, y: 560, outfit: 'chemise', arms: { l: 'head', r: 'down' }, brows: 'sad', mouth: 'wobble', eyes: { lid: 0.3 }, sweat: true })}`)}
      ${bulle({ x: 30, yb: 330, w: 330, who: 'b', size: 36, to: [400, 300], text: 'Et s’ils trouvent ça nul ? <b>Et si un pigeon ?</b>' })}
      ${bulle({ x: 740, yb: 520, w: 300, size: 40, to: [690, 600], text: 'Un pigeon ?' })}
      ${bulle({ x: 30, yb: 640, w: 330, who: 'b', size: 34, to: [420, 420], text: 'On ne sait jamais avec les pigeons.' })}`),

    // 4 — Le radar
    s(4, 'L’exercice →', `${G.bgDark(C.nuit, 'rgba(127,212,255,.2)')}
      ${tag('Le radar du corps', { bg: C.soleil, color: '#14121F' })}
      ${big('Quand Brutus panique, ton corps suit.', 58, 230, { color: C.creme })}
      ${big(`Il se prépare à fuir un lion. ${so('Pour un mail.')}`, 42, 400, { color: C.creme })}
      <div class="abs" style="left:540px;top:540px;width:500px;font-family:Poppins;font-weight:700;font-size:38px;line-height:1.35;color:${C.creme}">
        <div>${so('●')} Cœur qui s’emballe</div><div>${so('●')} Souffle court et haut</div><div>${so('●')} Ventre noué</div></div>
      ${narr('C’est ton système nerveux en mode alarme. Pas un défaut.', { x: 540, y: 740, w: 460, size: 26, bg: C.creme, rot: 1 })}
      ${S(`${G.quentin({ x: 60, y: 570, arms: 'down', brows: 'sad', mouth: 'flat', eyes: { lid: 0.2 } })}${rayonX()}${G.brutus({ x: 800, y: 900, s: 0.46, arms: 'hold', hold: bouclier, casque: true, mouth: 'flat', brows: 'angry', eyes: { px: -6 } })}`)}
      ${ono('BOUM BOUM', { x: 290, y: 840, size: 50, rot: -8, fill: '#E5322D' })}
      ${bulle({ x: 400, yb: 1150, w: 400, who: 'b', size: 32, to: tb({ x: 800, y: 900, s: 0.46 }), text: 'Un mail. <b>Le prédateur n°1 de la savane.</b>' })}`),

    // 5 — La fiche (à enregistrer)
    s(5, 'On essaie ? →', `<div class="abs" style="inset:0;background:${C.creme}"></div>${G.dots(0.1)}
      ${tag('Le bouton pause : le soupir cyclique', { bg: C.soleil, color: '#14121F' })}
      ${etape(1, 'Inspire par le nez.', 250)}
      ${etape(2, 'Ré-inspire un petit coup par-dessus.', 440)}
      ${etape(3, 'Expire très lentement par la bouche.', 630)}
      ${big(fl('Pendant 5 minutes, juste avant de te lancer.'), 44, 830, { w: 600 })}
      ${S(`${G.quentin({ x: 640, y: 830, s: 0.5, arms: { l: 'down', r: 'chest' }, mouth: 'o', eyes: { mode: 'closed' } })}${G.brutus({ x: 850, y: 960, s: 0.38, arms: 'down', mouth: 'o', eyes: { mode: 'closed' } })}`)}
      ${narr('Enregistre cette planche pour le jour J.', { y: 1040, w: 560, size: 28, bg: C.flamme, color: '#fff' })}`),

    // 6 — On le fait
    s(6, 'Ça marche vraiment ? →', `${G.saleve2({ mood: 'matin' })}
      ${S(`${G.quentin({ x: 40, y: 500, arms: { l: 'down', r: 'chest' }, mouth: 'o', eyes: { mode: 'closed' } })}
        <path d="M 330 830 q 30 -10 60 0 t 60 0 M 330 860 q 30 -10 60 0 t 60 0" fill="none" stroke="#fff" stroke-width="8" stroke-linecap="round"/>
        ${G.brutus({ x: 690, y: 800, s: 0.6, arms: 'down', mouth: 'o', eyes: { mode: 'closed' } })}`)}
      ${G.avantPlan()}
      ${ono('PFFFFF…', { x: 600, y: 640, size: 80, rot: -4, fill: '#7FD4FF' })}
      ${bulle({ x: 540, yb: 560, w: 490, who: 'b', size: 38, to: tb({ x: 690, y: 800, s: 0.6 }), text: 'Je me dégonfle. <b>Comme tes résolutions de janvier.</b>' })}`),

    // 7 — La science
    s(7, 'Ton défi →', `${G.saleve2({ mood: 'matin', path: false })}
      ${tag('Ce que dit la science', { bg: C.soleil, color: '#14121F' })}
      ${big(`Stanford, 2023 : cinq minutes par jour ont ${fl('amélioré l’humeur')} et ralenti la respiration.`, 48, 230)}
      ${narr('Une étude sur 108 personnes : prometteur, pas magique.', { y: 440, w: 560, size: 26, bg: C.creme, rot: 0 })}
      ${S(`${G.quentin({ x: 40, y: 560, arms: { l: 'hip', r: 'point' }, mouth: 'grin', eyes: { px: 8 } })}${G.brutus({ x: 670, y: 720, arms: 'hip', mouth: 'smirk', eyes: { lid: 0.35, px: -4 }, casque: true })}`)}
      ${G.avantPlan()}
      ${bulle({ x: 600, yb: 660, w: 430, who: 'b', size: 38, to: tb({ x: 670, y: 720 }), text: 'Alerte orange. <b>Je garde le casque.</b>' })}`, { source: 'Balban et al., « Brief structured respiration practices… », Cell Reports Medicine, 2023.' }),

    // 8 — Action (le mot-clé déclenche l'envoi de la fiche)
    s(8, 'Partage-le ↗', `${G.saleve2({ mood: 'or' })}
      ${tag('Morale de l’histoire')}
      ${big(`On ne raisonne pas Brutus. ${fl('On le calme par le souffle.')}`, 58, 222)}
      ${actions({ y: 430, mot: 'SOUFFLE', pourquoi: 'et je t’envoie la fiche de l’exercice en message privé', envoie: 'l’ami qui stresse avant chaque mail', enregistre: 'pour ton prochain jour J' })}
      ${S(`${hamac(160)}${G.brutus({ x: 700, y: 870, s: 0.56, arms: 'down', mouth: 'smile', eyes: { mode: 'closed' } })}${hamacAvant(160)}${G.fx.zzz(900, 900)}
        ${G.quentin({ x: 30, y: 930, s: 0.48, arms: { l: 'down', r: 'wave' }, mouth: 'smirk', eyes: { px: 14, lid: 0.2 } })}`)}
      ${bulle({ x: 230, yb: 1150, w: 330, size: 32, to: tq({ x: 30, y: 930, s: 0.48 }, 60, 20), text: 'Il dort. <b>Vite, envoie ton mail.</b>' })}`),
  ],
};
