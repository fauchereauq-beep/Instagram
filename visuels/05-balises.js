// Visuel unique n°5 — FORMAT COMPARAISON : « Lis les balises » (pour qui / pas pour qui).
// Textes repris du site (section « Pour qui ? »). Panneau de randonnée dessiné.
const { K, typo, pill, signature, bouton, page } = require('../src/site.js');

// Poteau de rando avec deux flèches : « par ici » (soleil, coche) et « demi-tour » (gris, croix).
const panneau = `<svg class="abs" style="left:742px;top:40px" width="300" height="300" viewBox="0 0 300 300">
  <rect x="138" y="40" width="24" height="250" rx="8" fill="#8A5A2B"/>
  <path d="M 40 60 H 240 L 284 100 L 240 140 H 40 Z" fill="${K.soleil}"/>
  <path d="M 120 100 l 22 22 l 44 -46" fill="none" stroke="${K.nuit}" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M 260 160 H 60 L 16 200 L 60 240 H 260 Z" fill="${K.sable}"/>
  <path d="M 124 178 l 44 44 M 168 178 l -44 44" stroke="${K.flamme}" stroke-width="14" stroke-linecap="round"/>
  <ellipse cx="150" cy="292" rx="60" ry="8" fill="rgba(30,27,58,.12)"/></svg>`;

const rond = (ok) => `<svg width="56" height="56" viewBox="-28 -28 56 56" style="flex:none"><circle r="28" fill="${ok ? K.jungle : K.flamme}"/>${ok
  ? `<path d="M -11 0 l 7 8 l 15 -16" fill="none" stroke="#fff" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>`
  : `<path d="M -9 -9 l 18 18 M 9 -9 l -18 18" stroke="#fff" stroke-width="6" stroke-linecap="round"/>`}</svg>`;

const bonne = [
  ['« J’ai peur de me lancer. »', 'Tu as une ou plusieurs idées, mais tu as peur de te lancer, ou de choisir la mauvaise direction.'],
  ['« Je suis à bout. »', 'Tu es épuisé, la tête qui tourne en boucle, et tu ne sais plus comment repartir.'],
];
const mauvaise = [
  'Tu cherches une thérapie ou un suivi médical : ce n’est pas mon métier.',
  'Tu veux quelqu’un qui fasse à ta place.',
  'Tu es en arrêt ou en burn-out : commence par voir un médecin.',
];

function post() {
  return page(1350, `${pill('Pour qui ?')}${panneau}
    <div class="abs t" style="left:64px;top:140px;font-size:100px;line-height:1;letter-spacing:-.03em">Lis les<br><span class="surligne">balises.</span></div>
    <div class="abs carte" style="left:48px;right:48px;top:372px;padding:34px 40px">
      <div style="display:flex;align-items:center;gap:18px">${rond(true)}<span class="t" style="font-size:44px">Bonne direction</span></div>
      ${bonne.map(([q, t]) => `<div style="margin-top:24px"><div class="t" style="font-size:34px;line-height:1.15">${typo(q)}</div><div style="font-family:Inter;font-size:27px;line-height:1.35;color:${K.grisNuit};margin-top:4px">${typo(t)}</div></div>`).join('')}
    </div>
    <div class="abs" style="left:48px;right:48px;top:800px;padding:30px 40px;background:${K.sable};border-radius:44px">
      <div style="display:flex;align-items:center;gap:18px">${rond(false)}<span class="t" style="font-size:44px">Mauvaise direction</span></div>
      ${mauvaise.map((t) => `<div style="display:flex;gap:14px;margin-top:16px;font-family:Inter;font-size:27px;line-height:1.35;color:${K.nuit}"><span style="color:${K.flammeTexte};font-weight:600">–</span><span>${typo(t)}</span></div>`).join('')}
    </div>
    <div class="abs" style="left:64px;top:1150px;width:960px;display:flex;align-items:center;justify-content:space-between;gap:20px">
      <div class="t" style="font-size:34px;line-height:1.15">Tu hésites ?<br><span style="font-family:Inter;font-weight:400;font-size:25px;letter-spacing:0;color:${K.grisNuit}">15 min au téléphone, gratuit, zéro discours de vente.</span></div>
      ${bouton('On s’appelle ? →', { size: 28 })}</div>
    ${signature(1290)}`);
}

module.exports = { slug: '05-balises', formats: { post: { w: 1080, h: 1350, html: post() } } };
