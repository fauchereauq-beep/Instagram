// Appel à un ami n°1 — Einstein n'a jamais dit ça. Cible moqueuse : les citations « coucher de soleil » d'Instagram.
const { C, G, nb, fl, so, big, S, tag, ep, bubble, caption, link, ono, sources } = require('../src/ep.js');
const s = ep('Appel à un ami · n°1', 7);
const I = G.I, st = G.st;

let pid = 0;
// Poster « citation inspirante » : coucher de soleil + phrase + fausse signature.
const poster = (t, { sign = '— A. Einstein (?)', w = 220, h = 250, rot = 0 } = {}) => {
  const g = `ps${pid++}`;
  return `<g transform="rotate(${rot})"><defs><linearGradient id="${g}" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#FF7AB8"/><stop offset=".6" stop-color="#FFB347"/><stop offset="1" stop-color="#FFE07A"/></linearGradient></defs>
  <rect x="${-w / 2}" y="${-h / 2}" width="${w}" height="${h}" rx="6" fill="#fff" ${st(7)}/>
  <rect x="${-w / 2 + 14}" y="${-h / 2 + 14}" width="${w - 28}" height="${h * 0.56}" fill="url(#${g})"/>
  <circle cx="0" cy="${-h / 2 + 14 + h * 0.4}" r="${w * 0.16}" fill="#FFF3C4"/><rect x="${-w / 2 + 14}" y="${-h / 2 + 14 + h * 0.42}" width="${w - 28}" height="${h * 0.14}" fill="#7B5EA7"/>
  <text x="0" y="${h * 0.24}" text-anchor="middle" font-family="Poppins" font-weight="700" font-size="${Math.round(w / 11)}" fill="${I}">${t}</text>
  <text x="0" y="${h * 0.24 + w / 9}" text-anchor="middle" font-family="Poppins" font-weight="700" font-size="${Math.round(w / 15)}" fill="${C.grisNuit}">${sign}</text></g>`;
};
const chambre = `<div class="abs" style="inset:0;background:#3E6FB5"></div><div class="abs" style="inset:0;background-image:repeating-linear-gradient(90deg, rgba(255,255,255,.07) 0 40px, transparent 40px 80px)"></div>${G.dots(0.08)}
  ${G.svgPage(`<rect x="-10" y="1100" width="1100" height="260" fill="#2F5A99" ${st(6)}/>
    ${[['Sois toi-même.', 140, 470, -5], ['Crois en tes rêves.', 400, 450, 4], ['Bois de l’eau.', 660, 470, -3], ['Le lundi, c’est mental.', 920, 450, 5]].map(([t, x, y, r]) => `<g transform="translate(${x} ${y})">${poster(t, { rot: r })}</g>`).join('')}`)}`;
const frigo = `<rect x="380" y="320" width="330" height="830" rx="30" fill="#E9F4FF" ${st(8)}/>
  <rect x="400" y="350" width="290" height="770" rx="16" fill="#BFE3FF"/><circle cx="545" cy="420" r="160" fill="#fff" opacity=".6"/>
  <path d="M 400 560 H 690 M 400 780 H 690 M 400 980 H 690" ${st(5)}/>
  <rect x="700" y="320" width="120" height="830" rx="24" fill="#DCE9F5" ${st(8)}/><rect x="720" y="560" width="20" height="160" rx="10" fill="#9C98AE" ${st(4)}/>
  ${[[430, 330], [600, 300], [520, 280], [680, 340]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="38" fill="#fff" ${st(5)}/>`).join('')}`;
const jarre = `<g transform="translate(200 600)">${G.P.cornichons}</g>`;
const cornichon = (x, y, r) => `<ellipse cx="${x}" cy="${y}" rx="16" ry="38" fill="#5E8F3E" transform="rotate(${r} ${x} ${y})" ${st(5)}/><path d="M ${x - 4} ${y - 20} v 8 M ${x + 6} ${y} v 8 M ${x - 4} ${y + 14} v 8" stroke="#9CCB72" stroke-width="4" stroke-linecap="round" transform="rotate(${r} ${x} ${y})"/>`;

module.exports = {
  slug: '44-appel-einstein',
  slides: [
    s(1, 'Vérifions →', `${chambre}
      ${big(`Sur Instagram, Einstein a écrit ${fl('plus de citations que de théories.')}`, 56, 130, { color: C.creme })}
      ${caption({ x: 520, y: 256, w: 520, size: 24, bg: C.creme, rot: 1.5, text: `Brutus, mon chimpanzé intérieur, les collectionne.` })}
      ${S(`${G.quentin({ x: 40, y: 600, arms: { l: 'hip', r: 'chin' }, brows: 'sly', mouth: 'smirk', eyes: { px: 12, lid: 0.25 } })}${G.brutus({ x: 670, y: 740, arms: 'hold', hold: poster('L’intelligence qui s’amuse.', { w: 240, h: 270 }), mouth: 'grin', eyes: { px: -4 }, brows: 'up' })}`)}
      ${bubble({ x: 640, y: 600, w: 400, size: 36, tail: { at: 0.5, dir: 0 }, text: `Il a tout dit. <b>Tout.</b>` })}`),

    s(2, 'J’appelle un ami →', `${chambre}
      ${S(`${G.quentin({ x: 40, y: 600, outfit: 'chemise', arms: { l: 'hip', r: 'chin' }, brows: 'sad', mouth: 'frown', eyes: { px: 6 } })}${G.brutus({ x: 670, y: 740, arms: 'hold', hold: poster('L’intelligence qui s’amuse.', { w: 240, h: 270 }), mouth: 'smirk', eyes: { px: -6, lid: 0.2 }, brows: 'sly' })}`)}
      ${bubble({ x: 40, y: 140, w: 480, size: 38, tail: { at: 0.35, dir: -1 }, text: `Moi, je suis pas créatif. C'est réservé aux génies.` })}
      ${bubble({ x: 560, y: 610, w: 480, size: 34, tail: { at: 0.5, dir: 0 }, text: `Exact. Einstein l'a dit. Y a <b>un coucher de soleil</b> derrière, c'est prouvé.` })}`),

    s(3, 'Il parle →', `${G.cuisine()}
      ${S(`${frigo}${G.einstein({ x: 400, y: 520, s: 0.72, arms: 'hold', mouth: 'flat', brows: 'angry', eyes: { px: -10 }, extra: jarre })}
        ${G.quentin({ x: 20, y: 600, s: 0.66, outfit: 'chemise', arms: 'phone', brows: 'up', mouth: 'open', eyes: { mode: 'wide' } })}
        <g transform="translate(760 820) rotate(-20)">${poster('L’intelligence…', { w: 150, h: 170 })}</g>
        ${G.brutus({ x: 820, y: 820, s: 0.56, arms: 'down', mouth: 'wobble', eyes: { px: -12, py: -4 }, brows: 'worried', sweat: true })}`)}
      ${ono('POUF&nbsp;!', { x: 560, y: 190, size: 96, rot: 8, fill: C.soleil })}
      ${bubble({ x: 40, y: 140, w: 480, size: 36, tail: { at: 0.85, dir: 1 }, text: `Qui me fait encore dire <b>n'importe quoi</b>${nb}?` })}
      ${bubble({ x: 840, y: 600, w: 200, size: 36, tail: { at: 0.4, dir: 0 }, text: `…Personne.` })}`),

    s(4, 'La vraie phrase →', `${G.cuisine()}
      ${S(`${G.einstein({ x: 60, y: 520, s: 0.8, arms: { l: 'hip', r: 'point' }, mouth: 'flat', brows: 'sly', eyes: { px: 10 } })}${G.brutus({ x: 670, y: 720, arms: 'hold', hold: poster('L’intelligence qui s’amuse.', { w: 240, h: 270 }), mouth: 'open', eyes: { mode: 'wide' }, brows: 'up', sweat: true })}`)}
      ${bubble({ x: 40, y: 130, w: 520, h: 110, size: 42, tail: null, text: `Je n'ai jamais dit ça.` })}
      ${link({ x: 300, y: 233, h: 74 })}
      ${bubble({ x: 40, y: 300, w: 560, size: 34, tail: { at: 0.4, dir: 0 }, text: `Ça date de 1984. <b>J'étais mort depuis 29 ans.</b>` })}
      ${bubble({ x: 640, y: 470, w: 390, size: 36, tail: { at: 0.5, dir: 0 }, text: `Mais… y avait un coucher de soleil.` })}`, { source: 'Quote Investigator (2017). Einstein est mort en 1955.' }),

    s(5, 'La morale →', `${G.cuisine()}<div class="abs" style="left:24px;right:24px;top:120px;height:470px;background:rgba(255,246,234,.94);border:6px solid #14121F;border-radius:24px"></div>
      ${tag('La vraie phrase', { bg: C.soleil, color: '#14121F' })}
      ${big(`«${nb}L’imagination n’est peut-être que l’intelligence qui s’amuse.${nb}»`, 50, 230)}
      ${caption({ x: 48, y: 420, size: 24, bg: C.creme, rot: 0, text: `— George Scialabba, Harvard Magazine, 1984` })}
      ${big(fl('Qui s’amuse. Pas qui réussit.'), 44, 500)}
      ${S(`${G.quentin({ x: 40, y: 600, outfit: 'chemise', arms: { l: 'hip', r: 'point' }, mouth: 'grin', eyes: { px: 10 } })}<g transform="translate(560 620) scale(0.66)">${frigo}</g>${G.einstein({ x: 640, y: 760, s: 0.48, arms: { l: 'hold', r: 'wave' }, mouth: 'smirk', eyes: { mode: 'happy' }, extra: jarre })}`)}
      ${bubble({ x: 600, y: 600, w: 440, size: 32, tail: { at: 0.3, dir: 0 }, text: `Je retourne au frais. <b>Et ne me citez pas.</b>` })}`),

    s(6, 'Ton défi →', `${G.saleve2({ mood: 'matin' })}
      ${tag('Morale de l’histoire')}
      ${big(`La créativité n’est pas réservée aux génies. ${fl('Elle se réveille quand tu joues.')}`, 58, 230)}
      ${S(`${G.quentin({ x: 40, y: 540, arms: { l: 'hip', r: 'wave' }, mouth: 'grin', eyes: { px: 6 } })}${G.brutus({ x: 670, y: 740, arms: 'hold', hold: poster('Joue d’abord.', { sign: '— Brutus (vérifié)', w: 240, h: 270 }), mouth: 'smile', eyes: { px: -4 } })}`)}
      ${G.avantPlan()}
      ${bubble({ x: 590, y: 500, w: 440, size: 34, tail: { at: 0.5, dir: 0 }, text: `J'ai corrigé le poster. <b>J'ai gardé le coucher de soleil.</b>` })}`),

    s(7, 'Envoie-le à un « pas créatif » ↗', `${G.saleve2({ mood: 'or' })}
      ${tag('Ton défi')}
      ${big('Dix minutes de jeu sans but aujourd’hui : dessine, chante, bricole.', 50, 230)}
      ${big(fl('Puis écris JEU en commentaire.'), 40, 410)}
      ${S(`${G.quentin({ x: 40, y: 540, arms: 'up', mouth: 'grin', eyes: { mode: 'happy' } })}${G.brutus({ x: 670, y: 740, arms: 'up', mouth: 'grin', eyes: { px: -4, py: -14 } })}${cornichon(720, 700, -30)}${cornichon(810, 650, 20)}${cornichon(900, 700, 60)}`)}
      ${G.avantPlan()}
      ${bubble({ x: 560, y: 440, w: 470, size: 32, tail: { at: 0.6, dir: 0 }, text: `Je jongle avec des cornichons. <b>C'est de l'art contemporain.</b>` })}
`, { source: 'Quote Investigator (2017) ; G. Scialabba, « Mindplay », Harvard Magazine (1984).' }),
  ],
};
