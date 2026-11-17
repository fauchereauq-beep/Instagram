// Les fables du Salève n°1 — Le Meunier, son Fils et l'Âne (La Fontaine, 1668). On ose : créer sans attendre l'approbation.
const { C, G, nb, fl, so, big, S, tag, ep, bubble, caption, ono } = require('../src/ep.js');
const s = ep('Les fables du Salève · n°1', 7);
const I = G.I, st = G.st;

const passant = (text, y = 180, w = 640) => `${bubble({ x: 40, y, w, size: 38, tail: { at: 0.04, dir: -1 }, text })}<div class="abs" style="left:60px;top:${y - 62}px;z-index:4;white-space:nowrap">${caption({ x: 0, y: 0, size: 22, bg: C.nuit, color: C.creme, rot: -2, text: 'UN PASSANT' })}</div>`;
const ane = (o = {}) => G.ane({ x: 330, y: 830, s: 0.9, ...o });

module.exports = {
  slug: '45-fable-meunier',
  slides: [
    s(1, 'Ça commence bien →', `${G.bgSaleve()}
      ${big('Quoi que tu fasses, quelqu’un aura un avis.', 64, 130, { w: 900 })}
      ${big(fl('La preuve, en 1668.'), 50, 320)}
      ${caption({ x: 48, y: 410, w: 600, size: 24, bg: C.creme, rot: -1.5, text: `Une fable de La Fontaine, rejouée par moi et Brutus, mon chimpanzé intérieur.` })}
      ${S(`${G.quentin({ x: 30, y: 500, arms: { l: 'down', r: 'hold' }, mouth: 'grin', eyes: { px: 8 } })}${ane()}${G.brutus({ x: 790, y: 720, s: 0.68, arms: 'hip', mouth: 'smile', eyes: { px: -8 } })}`)}
      ${bubble({ x: 660, y: 520, w: 380, size: 36, tail: { at: 0.55, dir: 0 }, text: `On va vendre l'âne au marché.` })}`),

    s(2, 'Brutus monte →', `${G.bgSaleve()}
      ${S(`${G.quentin({ x: 30, y: 500, arms: 'down', mouth: 'flat', eyes: { px: -10 } })}${ane()}${G.brutus({ x: 790, y: 720, s: 0.68, arms: 'down', mouth: 'small', eyes: { px: -12 }, brows: 'worried' })}`)}
      ${passant(`Ils ont un âne et ils marchent à pied${nb}? Quels nigauds${nb}!`)}
      ${bubble({ x: 640, y: 470, w: 400, size: 38, tail: { at: 0.6, dir: 0 }, text: `Il a raison. Je monte.` })}`),

    s(3, 'Changement →', `${G.bgSaleve()}
      ${S(`${ane()}${G.brutus({ x: 390, y: 610, s: 0.6, arms: 'hip', mouth: 'grin', eyes: { px: 6 } })}${G.quentin({ x: 760, y: 500, s: 0.78, arms: 'hip', brows: 'angry', mouth: 'open', eyes: { px: -10 } })}`)}
      ${passant(`Le jeune à dos d'âne, et son vieux père à pied${nb}? Quel ingrat${nb}!`)}
      ${bubble({ x: 700, y: 380, w: 300, size: 48, tail: { at: 0.6, dir: 0 }, text: `Vieux${nb}?!` })}`),

    s(4, 'Encore →', `${G.bgSaleve()}
      ${S(`${ane({ eyes: 'tired' })}${G.quentin({ x: 380, y: 520, s: 0.56, arms: 'hip', mouth: 'smirk', eyes: { px: 8 } })}${G.brutus({ x: 790, y: 720, s: 0.68, arms: 'down', mouth: 'wobble', eyes: { px: -10, py: -6 }, brows: 'worried' })}`)}
      ${passant(`Le père sur l'âne, le petit qui trotte${nb}? Pauvre enfant${nb}!`)}
      ${bubble({ x: 660, y: 480, w: 370, size: 38, tail: { at: 0.6, dir: 0 }, text: `Oui. Pauvre enfant.` })}`),

    s(5, 'Et maintenant ? →', `${G.bgSaleve()}
      ${S(`${ane()}${G.quentin({ x: 350, y: 520, s: 0.56, arms: { l: 'down', r: 'up' }, mouth: 'grin', eyes: { mode: 'happy' } })}${G.brutus({ x: 480, y: 640, s: 0.5, arms: 'up', mouth: 'grin', eyes: { mode: 'happy' } })}`)}
      ${passant(`Deux sur cette pauvre bête${nb}? Bourreaux${nb}!`)}
      ${bubble({ x: 760, y: 560, w: 280, size: 36, tail: { at: 0.2, dir: -1 }, text: `Enfin quelqu'un.` })}`),

    s(6, 'La morale →', `${G.bgSaleve()}
      ${S(`<path d="M 300 760 L 760 860" stroke="#8A5A2B" stroke-width="22" stroke-linecap="round"/><path d="M 300 760 L 760 860" ${st(4)} fill="none"/>
        ${G.ane({ x: 380, y: 760, s: 0.6, rot: 180 })}
        ${G.quentin({ x: 30, y: 520, s: 0.78, arms: { l: 'down', r: 'up' }, mouth: 'wobble', brows: 'sad', eyes: { px: 6 }, sweat: true })}${G.brutus({ x: 700, y: 660, s: 0.7, arms: { l: 'up', r: 'down' }, mouth: 'wobble', brows: 'worried', eyes: { px: -6 }, sweat: true })}`)}
      ${passant(`Ils PORTENT l'âne${nb}! HA HA HA${nb}!`, 180, 600)}
      ${ono('HA HA HA', { x: 520, y: 350, size: 80, rot: 6, fill: C.flamme })}
      ${bubble({ x: 620, y: 450, w: 420, size: 34, tail: { at: 0.5, dir: 0 }, text: `On aurait dû rester à la maison.` })}`),

    s(7, 'Envoie-le à quelqu’un qui doute ↗', `${G.bgSaleve({ sky: ['#FFF6EA', '#FFD98A'] })}
      ${tag('La morale de La Fontaine')}
      ${big(`«${nb}Les gens en parleront, n’en doutez nullement.${nb}»`, 54, 230)}
      ${big(fl('Alors crée pour toi.'), 60, 420)}
      ${caption({ x: 48, y: 510, w: 640, size: 26, bg: C.soleil, rot: -1, text: `Défi${nb}: montre aujourd'hui une de tes créations, sans demander d'avis. Écris MONTRÉ en commentaire.` })}
      ${S(`${G.quentin({ x: 30, y: 680, s: 0.66, arms: { l: 'down', r: 'wave' }, mouth: 'grin', eyes: { px: 6 } })}${G.ane({ x: 330, y: 900, s: 0.7, eyes: 'happy' })}${G.brutus({ x: 790, y: 760, s: 0.62, arms: 'hip', mouth: 'smile', eyes: { px: -6 } })}`)}`, { source: 'Jean de La Fontaine, « Le Meunier, son Fils et l’Âne », Fables, livre III, 1 (1668).' }),
  ],
};
