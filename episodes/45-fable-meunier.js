// Les fables du Salève n°1 — Le Meunier, son Fils et l'Âne (La Fontaine, 1668), version commentaires.
// Pseudos fictifs ; les commentaires paraphrasent la fable ; seule la morale finale est citée.
const { C, G, nb, fl, so, big, S, tag, bulle, tq, tb, narr, hook, fleche, actions, ep3, ono } = require('../src/v3.js');
const s = ep3('Les fables du Salève · n°1', 8);
const I = G.I, st = G.st;
const ane = (o = {}) => G.ane({ x: 330, y: 830, s: 0.9, ...o });
const com = (o) => G.commentaire({ x: 40, w: 640, ...o });
const Q = { x: 30, y: 500 }, B = { x: 790, y: 720, s: 0.68 };
const porter = (dy = 0) => `<g transform="translate(0 ${dy})"><path d="M 300 780 L 760 880" stroke="#8A5A2B" stroke-width="22" stroke-linecap="round"/>
  ${G.ane({ x: 380, y: 780, s: 0.6, rot: 180 })}
  ${G.quentin({ x: 30, y: 560, s: 0.76, arms: { l: 'down', r: 'up' }, mouth: 'wobble', brows: 'sad', eyes: { px: 6 }, sweat: true })}${G.brutus({ x: 700, y: 680, s: 0.68, arms: { l: 'up', r: 'down' }, mouth: 'wobble', brows: 'sad', eyes: { px: -6 }, sweat: true })}</g>`;

module.exports = {
  slug: '45-fable-meunier',
  slides: [
    // 1 — HOOK : l'image la plus absurde, sans contexte
    s(1, 'Comment on en est là ? →', `${G.saleve2({ mood: 'gris' })}
      ${S(porter(120))}
      ${com({ x: 600, y: 500, w: 450, pseudo: '@passant_1668', text: 'HA HA HA.', likes: '9 k', color: '#3E6FB5', rot: 4, size: 28 })}
      ${com({ x: 30, y: 470, w: 470, pseudo: '@tata_monique', text: 'Je l’avais dit.', likes: '2 k', color: '#D9668D', rot: -4, size: 28 })}
      <div class="abs" style="left:0;right:0;top:0;height:470px;background:linear-gradient(rgba(20,18,31,.85) 70%, rgba(20,18,31,0))"></div>
      ${hook('On a fini par porter l’âne.', { y: 138, size: 78 })}
      ${hook('À cause des commentaires.', { y: 320, size: 58, w: 900 })}`),

    // 2 — Le départ
    s(2, 'Le premier commentaire →', `${G.saleve2()}
      ${narr('En 1668, La Fontaine avait déjà prévu les commentaires.', { size: 32, w: 900 })}
      ${narr('Une fable rejouée par moi, Brutus (mon chimpanzé intérieur) et un âne qui n’a rien demandé.', { y: 270, w: 620, size: 24, bg: C.creme, rot: 1 })}
      ${S(`${G.quentin({ ...Q, arms: { l: 'down', r: 'phone' }, mouth: 'grin', eyes: { px: 8, py: 10 } })}${ane()}${G.brutus({ ...B, arms: 'hip', mouth: 'wobble', brows: 'sad', eyes: { px: -8 } })}`)}
      ${G.avantPlan()}
      ${bulle({ x: 260, yb: 520, w: 440, size: 38, to: tq(Q, 40), text: 'On vend l’âne. <b>Et je poste une story.</b>' })}
      ${bulle({ x: 740, yb: 650, w: 290, who: 'b', size: 38, to: tb(B), text: 'Je le sens mal.' })}`),

    // 3
    s(3, 'Brutus monte →', `${G.saleve2()}
      ${com({ y: 140, pseudo: '@passant_1668', text: `Ils ont un âne et ils marchent à pied${nb}? Nigauds.`, likes: '214', color: '#3E6FB5' })}
      ${S(`${G.quentin({ ...Q, arms: 'phone', mouth: 'flat', eyes: { px: 0, py: 12 } })}${ane()}${G.brutus({ ...B, arms: 'point', mouth: 'smirk', eyes: { px: -12, py: -10 }, brows: 'sly' })}`)}
      ${G.avantPlan()}
      ${bulle({ x: 700, yb: 640, w: 330, who: 'b', to: tb(B), text: 'Il a raison. <b>Je monte.</b>' })}`),

    // 4
    s(4, 'Changement →', `${G.saleve2()}
      ${com({ y: 140, pseudo: '@tata_monique', text: `Le petit sur l'âne, et son vieux père à pied${nb}? Ingrat${nb}!`, likes: '1,2 k', color: '#D9668D' })}
      ${S(`${ane()}${G.brutus({ x: 390, y: 610, s: 0.6, arms: 'hip', mouth: 'grin', eyes: { px: 6 } })}${G.quentin({ x: 760, y: 500, s: 0.78, arms: 'hip', brows: 'angry', mouth: 'open', eyes: { px: -10 } })}${G.fx.veine(1010, 520, 1.1)}`)}
      ${G.avantPlan()}
      ${bulle({ x: 700, yb: 440, w: 300, size: 54, to: tq({ x: 760, y: 500, s: 0.78 }), text: 'Vieux ?!' })}`),

    // 5
    s(5, 'Encore →', `${G.saleve2()}
      ${com({ y: 130, pseudo: '@maman_inquiete_74', text: `Et le pauvre petit qui trotte${nb}!!!`, likes: '88', color: '#7B5EA7' })}
      ${com({ x: 360, y: 300, w: 680, pseudo: '@coach_millionnaire', text: `Ton singe marche${nb}? Tu n'es pas aligné. Mon programme${nb}: 997${nb}€.`, likes: '3', color: C.soleil, size: 30 })}
      ${S(`${ane({ eyes: 'tired' })}${G.quentin({ x: 380, y: 520, s: 0.56, arms: 'hip', mouth: 'smirk', eyes: { px: 8 } })}${G.brutus({ ...B, arms: 'down', mouth: 'flat', eyes: { px: -10, py: -12, lid: 0.3 }, brows: 'flat' })}`)}
      ${G.avantPlan()}
      ${bulle({ x: 740, yb: 660, w: 300, who: 'b', size: 36, to: tb(B), text: '997 € ? <b>Je marche.</b>' })}`),

    // 6
    s(6, 'Et maintenant ? →', `${G.saleve2()}
      ${com({ y: 130, pseudo: '@defenseur_des_anes', text: `Deux sur cette pauvre bête${nb}? Signalé.`, likes: '540', color: C.jungle })}
      ${com({ x: 360, y: 300, w: 560, pseudo: '@l_ane', text: `Moi, on m'a pas demandé.`, likes: '12 k', color: '#A7A3B6' })}
      ${S(`${ane()}${G.quentin({ x: 350, y: 520, s: 0.56, arms: { l: 'down', r: 'up' }, mouth: 'grin', eyes: { mode: 'happy' } })}${G.brutus({ x: 480, y: 640, s: 0.5, arms: 'up', mouth: 'grin', eyes: { mode: 'happy' } })}`)}
      ${G.avantPlan()}
      ${bulle({ x: 740, yb: 640, w: 290, who: 'b', size: 36, to: tb({ x: 480, y: 640, s: 0.5 }, 30, 20), text: 'Même l’âne a un compte.' })}`),

    // 7 — L'image du début, avec son contexte
    s(7, 'La morale →', `${G.saleve2({ mood: 'gris' })}
      ${com({ y: 120, w: 600, pseudo: '@passant_1668', text: `Ils PORTENT l'âne. HA HA HA.`, likes: '9 k', color: '#3E6FB5', rot: -2, size: 28 })}
      ${com({ x: 440, y: 260, w: 600, pseudo: '@tata_monique', text: `Je l'avais dit.`, likes: '2 k', color: '#D9668D', rot: 2, size: 28 })}
      ${com({ y: 390, w: 600, pseudo: '@coach_millionnaire', text: `Mon programme règle ça aussi.`, likes: '1', color: C.soleil, rot: -1, size: 28 })}
      ${S(porter())}
      ${G.avantPlan()}
      ${bulle({ x: 690, yb: 660, w: 350, who: 'b', size: 34, to: tb({ x: 700, y: 680, s: 0.68 }), text: 'On aurait dû rester <b>sans réseau.</b>' })}`),

    // 8 — Action
    s(8, 'Partage-le ↗', `${G.saleve2({ mood: 'or' })}
      ${tag('La morale de La Fontaine')}
      ${big(`«${nb}Les gens en parleront, n’en doutez nullement.${nb}» ${fl('Alors crée pour toi.')}`, 50, 222)}
      ${actions({ y: 430, mot: 'MONTRÉ', pourquoi: 'quand tu as montré une création sans demander l’avis de personne', envoie: 'l’ami qui attend que tout le monde soit d’accord', enregistre: 'pour le prochain commentaire de tata Monique' })}
      ${S(`${G.quentin({ x: 30, y: 930, s: 0.48, arms: { l: 'down', r: 'wave' }, mouth: 'grin', eyes: { px: 6 } })}${G.brutus({ x: 820, y: 1000, s: 0.5, arms: 'hold', hold: `<rect x="-60" y="-110" width="120" height="200" rx="18" fill="#2B2B33" ${st(6)}/><rect x="-46" y="-94" width="92" height="160" rx="6" fill="#EAF3FF"/><path d="M -30 -40 l 60 60 M 30 -40 l -60 60" stroke="#E5322D" stroke-width="10" stroke-linecap="round"/>`, mouth: 'smirk', eyes: { px: -6, lid: 0.25 }, brows: 'sly' })}`)}
      ${bulle({ x: 330, yb: 1110, w: 440, who: 'b', size: 32, to: tb({ x: 820, y: 1000, s: 0.5 }), text: 'J’ai bloqué tata Monique. <b>C’est créatif ?</b>' })}`, { source: 'Jean de La Fontaine, « Le Meunier, son Fils et l’Âne », Fables, livre III, 1 (1668).' }),
  ],
};
