// Série « Dossier impossible » en style gros nez : « j'aimerais », Brutus classe le dossier, une histoire vraie le rouvre.
// Mêmes données que la v1 (voir archives/src/dossier-v1.js).
const { C, G, S, guichet, big, tag, bulle, tq, tb, hook, ep3 } = require('./v3.js');
const fin3 = require('./fin3.js');

const nb = '&nbsp;';
const fl = (t) => `<span style="color:${C.flamme}">${t}</span>`;
const so = (t) => `<span style="color:${C.soleil}">${t}</span>`;
const I = G.I;
const P = `stroke="${I}" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"`;
const PROPS = {
  clap: `<rect x="24" y="78" width="152" height="96" rx="8" fill="${C.creme}" ${P}/><g transform="rotate(-12 24 78)"><rect x="24" y="48" width="152" height="30" rx="5" fill="${C.nuit}" ${P}/><path d="M44 48 l-12 30 M78 48 l-12 30 M112 48 l-12 30 M146 48 l-12 30" stroke="${C.creme}" stroke-width="10"/></g><path d="M40 110 h120 M40 134 h80" stroke="${C.grisNuit}" stroke-width="6" stroke-linecap="round"/>`,
  robe: `<path d="M84 24 L72 60 L84 86 L40 178 Q100 196 160 178 L116 86 L128 60 L116 24 L100 44 Z" fill="${C.creme}" ${P}/><path d="M84 86 h32" ${P} fill="none"/><path d="M70 150 q30 14 60 0" stroke="${C.sable}" stroke-width="5" fill="none"/>`,
  palais: `<g fill="${C.sable}" ${P}><rect x="20" y="150" width="160" height="30" rx="10"/><rect x="34" y="120" width="60" height="32" rx="12"/><rect x="100" y="116" width="70" height="36" rx="12"/><rect x="52" y="88" width="50" height="34" rx="12"/><rect x="106" y="80" width="46" height="38" rx="12"/><rect x="70" y="50" width="40" height="40" rx="12"/><path d="M78 50 L90 20 L102 50 Z"/></g><circle cx="150" cy="40" r="14" fill="${C.soleil}" ${P}/>`,
  lettres: `<g ${P}><rect x="30" y="110" width="140" height="70" rx="6" fill="${C.sable}" transform="rotate(-6 100 145)"/><rect x="30" y="80" width="140" height="70" rx="6" fill="${C.creme}" transform="rotate(5 100 115)"/><rect x="30" y="46" width="140" height="74" rx="6" fill="#fff"/><path d="M30 46 L100 92 L170 46" fill="none"/></g><g transform="rotate(-10 104 94)"><rect x="68" y="76" width="74" height="34" rx="5" fill="none" stroke="${C.flamme}" stroke-width="5"/><text x="105" y="102" text-anchor="middle" font-family="Poppins" font-weight="700" font-size="26" fill="${C.flamme}">NON</text></g>`,
  chevalet: `<path d="M56 30 L30 186 M144 30 L170 186 M100 30 L100 190" stroke="#8A5A2B" stroke-width="9" stroke-linecap="round"/><rect x="36" y="44" width="128" height="96" fill="#fff" ${P}/><path d="M36 116 Q70 88 100 110 T164 100 V140 H36 Z" fill="${C.jungleClair}" ${P}/><circle cx="134" cy="70" r="13" fill="${C.soleil}" ${P}/><path d="M60 110 l8 -18 l8 18 Z" fill="${C.jungle}" ${P}/>`,
};


const Q = { x: 40, y: 500 }, B = { x: 670, y: 720 };
const BA = { rub: 'down', hips: 'hip', shrug: 'up', finger: 'point', calm: 'down', up: 'up', head: 'head' };
const BM = { small: 'flat' };
const BC = { x: 740, y: 880, s: 0.54 };

// Flashback : grande date, texte, accessoire, Brutus au cinéma qui commente.
function flash(d, f) {
  return `<div class="abs" style="inset:0;background:${d.bg}"></div>${G.dots(0.1)}
    <div class="abs" style="left:-140px;top:560px;width:900px;height:900px;border-radius:50%;background:radial-gradient(circle, rgba(255,194,51,.25), transparent 62%)"></div>
    <div class="abs" style="left:48px;top:130px;font-family:Poppins;font-weight:700;font-size:150px;line-height:1;color:${C.soleil};letter-spacing:-4px;-webkit-text-stroke:10px ${I};paint-order:stroke fill">${f.year}</div>
    <div class="abs" style="left:48px;top:300px;width:980px;font-family:Poppins;font-weight:700;font-size:58px;line-height:1.08;color:${C.creme};letter-spacing:-1px">${f.text}</div>
    <svg class="abs" style="left:20px;top:700px;transform:rotate(-5deg)" width="480" height="480" viewBox="0 0 200 200">${PROPS[d.prop]}</svg>
    ${S(G.brutus({ ...BC, arms: 'hold', hold: G.P.popcorn, mouth: BM[f.mouth] || f.mouth || 'smirk', eyes: f.mouth === 'open' ? { mode: 'wide' } : { px: -10, py: -12 }, brows: f.mouth === 'open' ? 'up' : 'sly' }))}
    ${f.quip ? bulle({ x: 520, yb: 860, w: 510, who: 'b', size: 38, to: tb(BC), text: f.quip }) : ''}`;
}

function dossier(d) {
  const T = 8, s = ep3(d.series, T);
  return {
    slug: d.slug,
    slides: [
      s(1, 'Ses arguments →', `${G.saleve2(d.sky1 ? { mood: 'matin' } : {})}
        ${hook(d.wish, { y: 130, size: Math.min(d.wishSize || 76, 80) })}
        ${S(G.quentin({ ...Q, arms: { l: 'hip', r: 'raise' }, mouth: 'grin', eyes: { px: 8 } }) + G.brutus({ ...B, arms: 'point', mouth: 'flat', eyes: { px: -8, lid: 0.35 }, brows: 'angry' }))}
        ${guichet('BUREAU DES IMPOSSIBLES', 29)}
        ${bulle({ x: 560, yb: 650, w: 470, who: 'b', to: tb(B), text: d.verdict })}`),
      s(2, 'Sauf que →', `${G.saleve2({ mood: 'gris' })}
        ${S(G.quentin({ ...Q, arms: { l: 'hip', r: 'chin' }, mouth: 'smirk', eyes: { px: 8, lid: 0.25 }, brows: 'flat' }) + G.brutus({ ...B, arms: 'up', mouth: 'smirk', eyes: { px: -8 }, brows: 'sly' }))}
        ${guichet('BUREAU DES IMPOSSIBLES', 29)}
        ${bulle({ x: 380, yb: 330, w: 650, who: 'b', to: tb(B), text: d.argument })}
        ${bulle({ x: 40, yb: 470, w: 460, to: tq(Q), text: d.reply })}`),
      s(3, d.f1.cta, flash(d, d.f1)),
      s(4, d.f2.cta, flash(d, d.f2)),
      s(5, d.f3.cta, flash(d, d.f3)),
      s(6, 'La morale →', `<div class="abs" style="inset:0;background:${d.bg}"></div>${G.dots(0.1)}
        <div class="abs" style="left:90px;top:120px;width:900px;height:900px;border-radius:50%;background:radial-gradient(circle, rgba(255,194,51,.3), transparent 62%)"></div>
        ${tag('C’était', { bg: C.soleil, color: I })}
        <div class="abs" style="left:48px;top:240px;width:990px;font-family:Poppins;font-weight:700;font-size:${d.nameSize || 104}px;line-height:.98;color:#fff;letter-spacing:-3px;-webkit-text-stroke:12px ${I};paint-order:stroke fill;text-shadow:8px 8px 0 ${I}">${d.name}</div>
        <div class="abs" style="left:48px;top:${d.afterTop || 480}px;width:960px;font-family:Poppins;font-weight:700;font-size:46px;line-height:1.12;color:${C.soleil}">${d.after}</div>
        <svg class="abs" style="left:30px;top:760px;transform:rotate(-5deg)" width="430" height="430" viewBox="0 0 200 200">${PROPS[d.prop]}</svg>
        ${S(G.brutus({ ...BC, arms: 'head', mouth: 'scream', eyes: { mode: 'wide' }, brows: 'up' }))}
        ${bulle({ x: 520, yb: 860, w: 510, who: 'b', size: 38, to: tb(BC), text: d.reaction })}`, { source: d.ref }),
      s(7, 'Et toi ? →', `${G.saleve2({ mood: 'or' })}
        ${tag('Morale de l’histoire')}
        ${big(d.morale, Math.min(d.moraleSize || 64, 66), 230)}
        ${S(G.quentin({ ...Q, y: 540, arms: { l: 'hip', r: 'raise' }, mouth: 'grin', eyes: { px: 6 } }) + G.brutus({ ...B, arms: 'hip', mouth: 'smirk', eyes: { px: -8, lid: 0.25 }, brows: 'sly' }))}
        ${guichet('DOSSIER ROUVERT', 34)}
        ${bulle({ x: 560, yb: 660, w: 470, who: 'b', to: tb(B), text: d.last })}`),
      s(8, 'Partage-le ↗', `${G.saleve2({ mood: 'or' })}${S(G.quentin({ x: 30, y: 760, s: 0.5, arms: { l: 'down', r: 'wave' }, mouth: 'grin', eyes: { px: 6 } }) + G.brutus({ x: 820, y: 900, s: 0.5, arms: 'hip', mouth: 'smirk', eyes: { px: -8 } }))}${G.avantPlan()}
        ${fin3({ question: d.question, teaser: d.teaser, envoie: 'l’ami qui pense que c’est « trop tard » ou « impossible »', enregistre: 'pour la prochaine fois que tu doutes' })}`, { source: d.ref }),
    ],
  };
}

module.exports = { dossier, nb, fl, so };
