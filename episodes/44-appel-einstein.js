// Appel à un ami n°1 — Einstein n'a jamais dit ça. Cible moqueuse : les citations « coucher de soleil » d'Instagram.
const { C, G, nb, fl, so, big, S, tag, bulle, tq, tb, narr, hook, fleche, actions, ep3, ono } = require('../src/v3.js');
const s = ep3('Appel à un ami · n°1', 8);
const I = G.I, st = G.st;

let pid = 0;
const poster = (t, { sign = '— A. Einstein (?)', w = 220, h = 250, rot = 0 } = {}) => {
  const g = `ps${pid++}`;
  return `<g transform="rotate(${rot})"><defs><linearGradient id="${g}" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#FF7AB8"/><stop offset=".6" stop-color="#FFB347"/><stop offset="1" stop-color="#FFE07A"/></linearGradient></defs>
  <rect x="${-w / 2}" y="${-h / 2}" width="${w}" height="${h}" rx="6" fill="#fff" ${st(7)}/><rect x="${-w / 2 + 14}" y="${-h / 2 + 14}" width="${w - 28}" height="${h * 0.56}" fill="url(#${g})"/>
  <circle cx="0" cy="${-h / 2 + 14 + h * 0.4}" r="${w * 0.16}" fill="#FFF3C4"/><rect x="${-w / 2 + 14}" y="${-h / 2 + 14 + h * 0.42}" width="${w - 28}" height="${h * 0.14}" fill="#7B5EA7"/>
  <text x="0" y="${h * 0.24}" text-anchor="middle" font-family="Poppins" font-weight="700" font-size="${Math.round(w / 11)}" fill="${I}">${t}</text>
  <text x="0" y="${h * 0.24 + w / 9}" text-anchor="middle" font-family="Poppins" font-weight="700" font-size="${Math.round(w / 15)}" fill="${C.grisNuit}">${sign}</text></g>`;
};
const chambre = `<div class="abs" style="inset:0;background:#3E6FB5"></div><div class="abs" style="inset:0;background-image:repeating-linear-gradient(90deg, rgba(255,255,255,.07) 0 40px, transparent 40px 80px)"></div>${G.dots(0.08)}
  ${G.svgPage(`<rect x="-10" y="1100" width="1100" height="260" fill="#2F5A99" ${st(6)}/>
    ${[['Sois toi-même.', 140, 470, -5], ['Crois en tes rêves.', 400, 450, 4], ['Bois de l’eau.', 660, 470, -3], ['Le lundi, c’est mental.', 920, 450, 5]].map(([t, x, y, r]) => `<g transform="translate(${x} ${y})">${poster(t, { rot: r })}</g>`).join('')}`)}`;
const frigo = (open = true) => `<rect x="380" y="320" width="330" height="830" rx="30" fill="#E9F4FF" ${st(8)}/>
  <rect x="400" y="350" width="290" height="770" rx="16" fill="#BFE3FF"/><circle cx="545" cy="420" r="160" fill="#fff" opacity=".6"/>
  <path d="M 400 560 H 690 M 400 780 H 690 M 400 980 H 690" ${st(5)}/>
  ${open ? `<rect x="700" y="320" width="120" height="830" rx="24" fill="#DCE9F5" ${st(8)}/><rect x="720" y="560" width="20" height="160" rx="10" fill="#9C98AE" ${st(4)}/>` : ''}
  ${[[430, 330], [600, 300], [520, 280], [680, 340]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="38" fill="#fff" ${st(5)}/>`).join('')}`;
const lumiere = `<path d="M 400 350 L 120 1250 L 980 1250 L 690 350 Z" fill="#E9F7FF" opacity=".35"/>`;
const jarre = `<g transform="translate(200 600)">${G.P.cornichons}</g>`;
const cornichon = (x, y, r) => `<ellipse cx="${x}" cy="${y}" rx="16" ry="38" fill="#5E8F3E" transform="rotate(${r} ${x} ${y})" ${st(5)}/><path d="M ${x - 4} ${y - 20} v 8 M ${x + 6} ${y} v 8 M ${x - 4} ${y + 14} v 8" stroke="#9CCB72" stroke-width="4" stroke-linecap="round" transform="rotate(${r} ${x} ${y})"/>`;
const P1 = poster('L’intelligence qui s’amuse.', { w: 240, h: 270 });
const Q = { x: 40, y: 600 }, B = { x: 670, y: 740 }, E = { x: 400, y: 520, s: 0.72 };

module.exports = {
  slug: '44-appel-einstein',
  slides: [
    // 1 — HOOK
    s(1, 'Pourquoi ? →', `${G.cuisine()}
      ${S(`${lumiere}${frigo()}${G.einstein({ ...E, arms: { l: 'hold', r: 'point' }, mouth: 'scream', brows: 'angry', eyes: { px: -12, py: 8 }, extra: jarre })}${G.fx.veine(660, 560, 1.2)}
        ${G.quentin({ x: 20, y: 640, s: 0.62, outfit: 'chemise', arms: 'up', brows: 'up', mouth: 'open', eyes: { mode: 'wide' } })}
        ${G.brutus({ x: 820, y: 860, s: 0.54, arms: 'head', mouth: 'scream', eyes: { mode: 'wide' }, brows: 'up', sweat: true })}`)}
      <div class="abs" style="left:0;right:0;top:0;height:400px;background:linear-gradient(rgba(20,18,31,.9) 72%, rgba(20,18,31,0))"></div>
      ${hook('Einstein est sorti de mon frigo.', { y: 138, size: 74 })}
      ${hook('Il était furieux.', { y: 296, size: 60, w: 700 })}
      ${ono('POUF&nbsp;!', { x: 720, y: 400, size: 90, rot: 8, fill: C.soleil })}`),

    // 2 — Le contexte : les posters de Brutus
    s(2, 'Ce qu’il croit →', `${chambre}
      ${big(`Sur Instagram, Einstein a écrit ${fl('plus de citations que de théories.')}`, 56, 130, { color: C.creme })}
      ${narr('Brutus, mon chimpanzé intérieur, les collectionne.', { x: 520, y: 256, w: 520, size: 24, bg: C.creme, rot: 1.5 })}
      ${S(`${G.quentin({ ...Q, arms: { l: 'hip', r: 'chin' }, brows: 'sly', mouth: 'smirk', eyes: { px: 12, lid: 0.25 } })}${G.brutus({ ...B, arms: 'hold', hold: P1, mouth: 'grin', eyes: { px: -4 }, brows: 'up' })}`)}
      ${bulle({ x: 620, yb: 680, w: 400, who: 'b', to: tb(B), text: 'Il a tout dit. <b>Tout.</b>' })}`),

    // 3 — Le problème
    s(3, 'J’appelle un ami →', `${chambre}
      ${S(`${G.quentin({ ...Q, outfit: 'chemise', arms: { l: 'hip', r: 'chin' }, brows: 'sad', mouth: 'frown', eyes: { px: 6 } })}${G.brutus({ ...B, arms: 'hold', hold: P1, mouth: 'smirk', eyes: { px: -6, lid: 0.2 }, brows: 'sly' })}`)}
      ${bulle({ x: 40, yb: 300, w: 520, to: tq(Q), text: 'Moi, je suis pas créatif. <b>C’est pour les génies.</b>' })}
      ${bulle({ x: 560, yb: 680, w: 470, who: 'b', size: 40, to: tb(B), text: 'Einstein l’a dit. <b>Y a un coucher de soleil.</b>' })}`),

    // 4 — L'apparition
    s(4, 'Il parle →', `${G.cuisine()}
      ${S(`${frigo()}${G.einstein({ ...E, arms: 'hold', mouth: 'flat', brows: 'angry', eyes: { px: -10 }, extra: jarre })}
        ${G.quentin({ x: 20, y: 600, s: 0.66, outfit: 'chemise', arms: 'phone', brows: 'up', mouth: 'open', eyes: { mode: 'wide' } })}
        <g transform="translate(760 820) rotate(-20)">${poster('L’intelligence…', { w: 150, h: 170 })}</g>
        ${G.brutus({ x: 820, y: 820, s: 0.56, arms: 'down', mouth: 'wobble', eyes: { px: -12, py: -4 }, brows: 'sad', sweat: true })}`)}
      ${bulle({ x: 40, yb: 300, w: 520, who: 'e', to: [545, 520], text: 'Qui me fait encore dire <b>n’importe quoi ?</b>' })}
      ${bulle({ x: 830, yb: 760, w: 210, who: 'b', size: 38, to: tb({ x: 820, y: 820, s: 0.56 }), text: '…Personne.' })}`),

    // 5 — La vérité
    s(5, 'La vraie phrase →', `${G.cuisine()}
      ${S(`${G.einstein({ x: 60, y: 520, s: 0.8, arms: { l: 'hip', r: 'point' }, mouth: 'flat', brows: 'sly', eyes: { px: 10 } })}${G.brutus({ ...B, y: 720, arms: 'hold', hold: P1, mouth: 'open', eyes: { mode: 'wide' }, brows: 'up', sweat: true })}`)}
      ${bulle({ x: 40, yb: 260, w: 560, who: 'e', to: [220, 520], text: 'Je n’ai jamais dit ça.' })}
      ${bulle({ x: 40, yb: 460, w: 560, who: 'e', size: 40, to: [230, 520], text: 'C’est de 1984. <b>J’étais mort depuis 29 ans.</b>' })}
      ${bulle({ x: 640, yb: 660, w: 390, who: 'b', size: 38, to: tb({ ...B, y: 720 }), text: 'Mais… y avait un coucher de soleil.' })}`, { source: 'Quote Investigator (2017). Einstein est mort en 1955.' }),

    // 6 — La vraie phrase
    s(6, 'La morale →', `${G.cuisine()}<div class="abs" style="left:24px;right:24px;top:120px;height:470px;background:rgba(255,246,234,.95);border:6px solid #14121F;border-radius:24px"></div>
      ${tag('La vraie phrase', { bg: C.soleil, color: '#14121F' })}
      ${big(`«${nb}L’imagination n’est peut-être que l’intelligence qui s’amuse.${nb}»`, 50, 230)}
      ${narr('— George Scialabba, Harvard Magazine, 1984', { y: 420, w: 640, size: 24, bg: C.creme, rot: 0 })}
      ${big(fl('Qui s’amuse. Pas qui réussit.'), 44, 500)}
      ${S(`${G.quentin({ x: 40, y: 600, outfit: 'chemise', arms: { l: 'hip', r: 'point' }, mouth: 'grin', eyes: { px: 10 } })}<g transform="translate(560 620) scale(0.66)">${frigo()}</g>${G.einstein({ x: 640, y: 760, s: 0.48, arms: { l: 'hold', r: 'wave' }, mouth: 'smirk', eyes: { mode: 'happy' }, extra: jarre })}`)}
      ${bulle({ x: 560, yb: 720, w: 470, who: 'e', size: 36, to: [736, 762], text: 'Je retourne au frais. <b>Ne me citez pas.</b>' })}`),

    // 7 — Morale
    s(7, 'Ton défi →', `${G.saleve2({ mood: 'matin' })}
      ${tag('Morale de l’histoire')}
      ${big(`La créativité n’est pas réservée aux génies. ${fl('Elle se réveille quand tu joues.')}`, 56, 230)}
      ${S(`${G.quentin({ x: 40, y: 560, arms: { l: 'hip', r: 'wave' }, mouth: 'grin', eyes: { px: 6 } })}${G.brutus({ ...B, arms: 'hold', hold: poster('Joue d’abord.', { sign: '— Brutus (vérifié)', w: 240, h: 270 }), mouth: 'smile', eyes: { px: -4 } })}`)}
      ${G.avantPlan()}
      ${bulle({ x: 560, yb: 680, w: 470, who: 'b', size: 36, to: tb(B), text: 'Poster corrigé. <b>Coucher de soleil conservé.</b>' })}`),

    // 8 — Action
    s(8, 'Partage-le ↗', `${G.saleve2({ mood: 'or' })}
      ${tag('Ton défi')}
      ${big(`Dix minutes de jeu sans but. ${fl('Aujourd’hui.')}`, 62, 222)}
      ${actions({ y: 430, mot: 'JEU', pourquoi: 'quand tu as dessiné, chanté ou bricolé dix minutes, juste pour jouer', envoie: 'l’ami qui dit « moi, je suis pas créatif »', enregistre: 'pour la prochaine fausse citation' })}
      ${S(`${G.quentin({ x: 30, y: 930, s: 0.48, arms: 'up', mouth: 'grin', eyes: { mode: 'happy' } })}${G.brutus({ x: 820, y: 1000, s: 0.5, arms: 'up', mouth: 'grin', eyes: { px: -4, py: -14 } })}${cornichon(850, 960, -30)}${cornichon(920, 930, 20)}${cornichon(990, 960, 60)}`)}
      ${bulle({ x: 330, yb: 1110, w: 440, who: 'b', size: 32, to: tb({ x: 820, y: 1000, s: 0.5 }), text: 'Je jongle avec des cornichons. <b>C’est de l’art.</b>' })}`, { source: 'Quote Investigator (2017) ; G. Scialabba, « Mindplay », Harvard Magazine (1984).' }),
  ],
};
