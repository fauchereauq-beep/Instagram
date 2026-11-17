// Appel à un ami n°1 — Einstein et la fausse citation. On ose : se croire créatif.
const { C, G, nb, fl, so, big, S, tag, ep, bubble, caption, link, ono, sources } = require('../src/ep.js');
const s = ep('Appel à un ami · n°1', 7);
const I = G.I, st = G.st;

const poster = (t) => `<g transform="translate(0 70)">${G.P.poster(t)}</g>`;
const cuisine = G.bgRoom({ wall: '#CDE8F7', floor: '#E8E4EE', window: false });
const frigo = `<rect x="380" y="320" width="330" height="830" rx="30" fill="#E9F4FF" ${st(8)}/>
  <rect x="400" y="350" width="290" height="770" rx="16" fill="#BFE3FF"/><circle cx="545" cy="420" r="160" fill="#fff" opacity=".6"/>
  <path d="M 400 560 H 690 M 400 780 H 690 M 400 980 H 690" ${st(5)}/>
  <rect x="700" y="320" width="120" height="830" rx="24" fill="#DCE9F5" ${st(8)}/><rect x="720" y="560" width="20" height="160" rx="10" fill="#9C98AE" ${st(4)}/>
  ${[[430, 330], [600, 300], [520, 280], [680, 340]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="38" fill="#fff" ${st(5)}/>`).join('')}`;

module.exports = {
  slug: '44-appel-einstein',
  slides: [
    s(1, 'Vérifions →', `${G.bgRays('#3E6FB5', '#4F80C6', 820, 900)}
      ${big(`«${nb}La créativité, c’est l’intelligence qui s’amuse.${nb}»`, 60, 130, { color: C.creme })}
      ${big(`— Einstein. ${so('Vraiment ?')}`, 52, 330, { color: C.creme })}
      ${caption({ x: 48, y: 420, w: 560, size: 24, bg: C.creme, rot: -1.5, text: `Brutus, mon chimpanzé intérieur, collectionne les posters.` })}
      ${S(`<rect x="0" y="1130" width="1080" height="220" fill="#2F5A99"/><path d="M 0 1130 H 1080" ${st(8)}/>${G.quentin({ x: 60, y: 520, arms: { l: 'hip', r: 'chin' }, brows: 'sly', mouth: 'smirk', eyes: { px: 10, lid: 0.25 } })}${G.brutus({ x: 670, y: 680, arms: 'hold', hold: poster('L’intelligence qui s’amuse'), mouth: 'grin', eyes: { px: -4 }, brows: 'up' })}`)}`),

    s(2, 'J’appelle un ami →', `${cuisine}
      ${S(`${G.quentin({ x: 60, y: 560, outfit: 'chemise', arms: { l: 'hip', r: 'chin' }, brows: 'sad', mouth: 'frown', eyes: { px: 6 } })}${G.brutus({ x: 670, y: 700, arms: 'hold', hold: poster('L’intelligence qui s’amuse'), mouth: 'smirk', eyes: { px: -6, lid: 0.2 }, brows: 'sly' })}`)}
      ${bubble({ x: 40, y: 260, w: 520, size: 40, tail: { at: 0.35, dir: -1 }, text: `Moi, je suis pas créatif. C'est réservé aux génies.` })}
      ${bubble({ x: 560, y: 440, w: 470, size: 40, tail: { at: 0.5, dir: 0 }, text: `Exact. Einstein l'a dit. <b>C'est sur un poster.</b>` })}`),

    s(3, 'Il parle →', `${cuisine}
      ${S(`${frigo}${G.einstein({ x: 400, y: 520, s: 0.72, arms: 'hold', mouth: 'smile', eyes: { px: -8 }, extra: `<g transform="translate(200 600)">${G.P.cornichons}</g>` })}
        ${G.quentin({ x: 20, y: 600, s: 0.66, outfit: 'chemise', arms: 'phone', brows: 'up', mouth: 'open', eyes: { mode: 'wide' } })}
        ${G.brutus({ x: 820, y: 820, s: 0.56, arms: { l: 'point', r: 'hip' }, mouth: 'smile', eyes: { px: -12, py: 6 }, brows: 'up' })}`)}
      ${ono('POUF&nbsp;!', { x: 560, y: 190, size: 96, rot: 8, fill: C.soleil })}
      ${bubble({ x: 40, y: 140, w: 470, size: 36, tail: { at: 0.85, dir: 1 }, text: `Vous m'avez appelé${nb}? Il fait froid, là-dedans.` })}
      ${bubble({ x: 780, y: 560, w: 260, size: 34, tail: { at: 0.4, dir: 0 }, text: `Il a des cornichons.` })}`),

    s(4, 'La vraie phrase →', `${cuisine}
      ${S(`${G.einstein({ x: 80, y: 520, s: 0.8, arms: { l: 'hip', r: 'point' }, mouth: 'flat', brows: 'sly', eyes: { px: 10 } })}${G.brutus({ x: 670, y: 700, arms: 'hold', hold: poster('L’intelligence qui s’amuse'), mouth: 'open', eyes: { mode: 'wide' }, brows: 'up', sweat: true })}`)}
      ${bubble({ x: 40, y: 130, w: 520, h: 110, size: 42, tail: null, text: `Je n'ai jamais dit ça.` })}
      ${link({ x: 300, y: 233, h: 74 })}
      ${bubble({ x: 40, y: 300, w: 560, size: 34, tail: { at: 0.4, dir: 0 }, text: `Ça vient d'un article de 1984. J'étais mort depuis 29 ans.` })}
      ${bubble({ x: 640, y: 470, w: 390, size: 40, tail: { at: 0.5, dir: 0 }, text: `Mais… c'est <b>imprimé</b>${nb}!` })}`, { source: 'Quote Investigator (2017). Einstein est mort en 1955.' }),

    s(5, 'La morale →', `${cuisine}
      ${tag('La vraie phrase (Harvard Magazine)', { bg: C.soleil, color: '#14121F' })}
      ${big(`«${nb}L’imagination n’est peut-être que l’intelligence qui s’amuse.${nb}»`, 52, 230)}
      ${big(fl('Qui s’amuse. Pas qui réussit.'), 46, 440)}
      ${S(`${G.quentin({ x: 60, y: 560, outfit: 'chemise', arms: { l: 'hip', r: 'point' }, mouth: 'grin', eyes: { px: 10 } })}${G.einstein({ x: 680, y: 600, s: 0.62, arms: { l: 'hold', r: 'wave' }, mouth: 'smile', eyes: { mode: 'happy' }, extra: `<g transform="translate(200 600)">${G.P.cornichons}</g>` })}`)}
      ${bubble({ x: 640, y: 520, w: 380, size: 34, tail: { at: 0.4, dir: 0 }, text: `Bon. Je retourne au frais.` })}`),

    s(6, 'Ton défi →', `${G.bgSaleve({ sky: ['#FFF6EA', '#FFD98A'] })}
      ${tag('Morale de l’histoire')}
      ${big(`La créativité n’est pas réservée aux génies. ${fl('Elle se réveille quand tu joues.')}`, 60, 230)}
      ${S(`${G.quentin({ x: 60, y: 540, arms: { l: 'hip', r: 'wave' }, mouth: 'grin', eyes: { px: 6 } })}${G.brutus({ x: 670, y: 680, arms: 'hold', hold: poster('Jouer d’abord'), mouth: 'smile', eyes: { px: -4 } })}`)}
      ${bubble({ x: 600, y: 470, w: 430, size: 38, tail: { at: 0.5, dir: 0 }, text: `J'ai corrigé le poster.` })}`),

    s(7, 'Envoie-le à un « pas créatif » ↗', `${G.bgRays(C.soleil, '#FFD45E', 540, 900)}
      ${tag('Ton défi')}
      ${big('Dix minutes de jeu sans but aujourd’hui : dessine, chante, bricole.', 52, 230)}
      ${big(fl('Puis écris JEU en commentaire.'), 40, 420)}
      ${S(`<rect x="0" y="1130" width="1080" height="220" fill="${C.jungle}"/><path d="M 0 1130 H 1080" ${st(8)}/>${G.quentin({ x: 60, y: 520, arms: 'up', mouth: 'grin', eyes: { mode: 'happy' } })}${G.brutus({ x: 670, y: 720, arms: 'hold', hold: G.P.cornichons, mouth: 'grin', eyes: { px: -4, py: 8 } })}`)}
      ${bubble({ x: 560, y: 520, w: 470, size: 36, tail: { at: 0.5, dir: 0 }, text: `Je peux jouer avec les cornichons${nb}?` })}`),
  ],
};
