// Les fables du Salève n°1 — Le Meunier, son Fils et l'Âne (La Fontaine, 1668), version commentaires.
// Les pseudos sont fictifs. Seule la morale finale est citée ; les commentaires sont des paraphrases de la fable.
const { C, G, nb, fl, so, big, S, tag, ep, bubble, caption, ono } = require('../src/ep.js');
const s = ep('Les fables du Salève · n°1', 7);
const I = G.I, st = G.st;
const ane = (o = {}) => G.ane({ x: 330, y: 830, s: 0.9, ...o });
const com = (o) => G.commentaire({ x: 40, w: 640, ...o });

module.exports = {
  slug: '45-fable-meunier',
  slides: [
    s(1, 'Ça commence bien →', `${G.saleve2()}
      ${big(`En 1668, La Fontaine avait déjà prévu ${fl('les commentaires.')}`, 58, 130)}
      ${caption({ x: 48, y: 290, w: 620, size: 24, bg: C.creme, rot: -1.5, text: `Une fable rejouée par moi, Brutus (mon chimpanzé intérieur) et un âne qui n'a rien demandé.` })}
      ${S(`${G.quentin({ x: 30, y: 500, arms: { l: 'down', r: 'phone' }, mouth: 'grin', eyes: { px: 8, py: 10 } })}${ane()}${G.brutus({ x: 790, y: 720, s: 0.68, arms: 'hip', mouth: 'wobble', brows: 'worried', eyes: { px: -8 } })}`)}
      ${G.avantPlan()}
      ${bubble({ x: 360, y: 420, w: 360, size: 32, tail: { at: 0.1, dir: -1 }, text: `On vend l'âne au marché. <b>Et je poste une story.</b>` })}
      ${bubble({ x: 760, y: 560, w: 270, size: 34, tail: { at: 0.5, dir: 0 }, text: `Je le sens mal.` })}`),

    s(2, 'Brutus monte →', `${G.saleve2()}
      ${com({ y: 140, pseudo: '@passant_1668', text: `Ils ont un âne et ils marchent à pied${nb}? Nigauds.`, likes: '214', color: '#3E6FB5' })}
      ${S(`${G.quentin({ x: 30, y: 500, arms: 'phone', mouth: 'flat', eyes: { px: 0, py: 12 } })}${ane()}${G.brutus({ x: 790, y: 720, s: 0.68, arms: 'point', mouth: 'smirk', eyes: { px: -12, py: -10 }, brows: 'sly' })}`)}
      ${G.avantPlan()}
      ${bubble({ x: 700, y: 460, w: 330, size: 36, tail: { at: 0.5, dir: 0 }, text: `Il a raison. Je monte.` })}`),

    s(3, 'Changement →', `${G.saleve2()}
      ${com({ y: 140, pseudo: '@tata_monique', text: `Le petit sur l'âne, et son vieux père à pied${nb}? Ingrat${nb}!`, likes: '1,2 k', color: '#D9668D' })}
      ${S(`${ane()}${G.brutus({ x: 390, y: 610, s: 0.6, arms: 'hip', mouth: 'grin', eyes: { px: 6 } })}${G.quentin({ x: 760, y: 500, s: 0.78, arms: 'hip', brows: 'angry', mouth: 'open', eyes: { px: -10 } })}${G.fx.veine(1010, 520, 1.1)}`)}
      ${G.avantPlan()}
      ${bubble({ x: 720, y: 360, w: 280, size: 50, tail: { at: 0.6, dir: 0 }, text: `Vieux${nb}?!` })}`),

    s(4, 'Encore →', `${G.saleve2()}
      ${com({ y: 130, pseudo: '@maman_inquiete_74', text: `Et le pauvre petit qui trotte${nb}!!!`, likes: '88', color: '#7B5EA7' })}
      ${com({ x: 360, y: 300, w: 680, pseudo: '@coach_millionnaire', text: `Ton singe marche${nb}? Tu n'es pas aligné. Mon programme${nb}: 997${nb}€.`, likes: '3', color: C.soleil, size: 30 })}
      ${S(`${ane({ eyes: 'tired' })}${G.quentin({ x: 380, y: 520, s: 0.56, arms: 'hip', mouth: 'smirk', eyes: { px: 8 } })}${G.brutus({ x: 790, y: 720, s: 0.68, arms: 'down', mouth: 'flat', eyes: { px: -10, py: -12, lid: 0.3 }, brows: 'flat' })}`)}
      ${G.avantPlan()}
      ${bubble({ x: 760, y: 560, w: 270, size: 32, tail: { at: 0.5, dir: 0 }, text: `997${nb}€${nb}? Je préfère marcher.` })}`),

    s(5, 'Et maintenant ? →', `${G.saleve2()}
      ${com({ y: 130, pseudo: '@defenseur_des_anes', text: `Deux sur cette pauvre bête${nb}? Signalé.`, likes: '540', color: C.jungle })}
      ${com({ x: 360, y: 300, w: 560, pseudo: '@l_ane', text: `Moi, on m'a pas demandé.`, likes: '12 k', color: '#A7A3B6' })}
      ${S(`${ane()}${G.quentin({ x: 350, y: 520, s: 0.56, arms: { l: 'down', r: 'up' }, mouth: 'grin', eyes: { mode: 'happy' } })}${G.brutus({ x: 480, y: 640, s: 0.5, arms: 'up', mouth: 'grin', eyes: { mode: 'happy' } })}`)}
      ${G.avantPlan()}
      ${bubble({ x: 760, y: 560, w: 270, size: 34, tail: { at: 0.2, dir: -1 }, text: `Même l'âne a un compte.` })}`),

    s(6, 'La morale →', `${G.saleve2({ mood: 'gris' })}
      ${com({ y: 120, w: 600, pseudo: '@passant_1668', text: `Ils PORTENT l'âne. HA HA HA.`, likes: '9 k', color: '#3E6FB5', rot: -2, size: 28 })}
      ${com({ x: 440, y: 260, w: 600, pseudo: '@tata_monique', text: `Je l'avais dit.`, likes: '2 k', color: '#D9668D', rot: 2, size: 28 })}
      ${com({ y: 390, w: 600, pseudo: '@coach_millionnaire', text: `Mon programme règle ça aussi.`, likes: '1', color: C.soleil, rot: -1, size: 28 })}
      ${S(`<path d="M 300 780 L 760 880" stroke="#8A5A2B" stroke-width="22" stroke-linecap="round"/>
        ${G.ane({ x: 380, y: 780, s: 0.6, rot: 180 })}
        ${G.quentin({ x: 30, y: 560, s: 0.76, arms: { l: 'down', r: 'up' }, mouth: 'wobble', brows: 'sad', eyes: { px: 6 }, sweat: true })}${G.brutus({ x: 700, y: 680, s: 0.68, arms: { l: 'up', r: 'down' }, mouth: 'wobble', brows: 'worried', eyes: { px: -6 }, sweat: true })}`)}
      ${G.avantPlan()}
      ${bubble({ x: 680, y: 540, w: 360, size: 32, tail: { at: 0.5, dir: 0 }, text: `On aurait dû rester sans réseau.` })}`),

    s(7, 'Envoie-le à quelqu’un qui doute ↗', `${G.saleve2({ mood: 'or' })}
      ${tag('La morale de La Fontaine')}
      ${big(`«${nb}Les gens en parleront, n’en doutez nullement.${nb}»`, 52, 230)}
      ${big(fl('Alors crée pour toi.'), 58, 400)}
      ${caption({ x: 48, y: 490, w: 640, size: 25, bg: C.soleil, rot: -1, text: `Défi${nb}: montre aujourd'hui une de tes créations, sans demander d'avis. Écris MONTRÉ en commentaire.` })}
      ${S(`${G.quentin({ x: 30, y: 680, s: 0.66, arms: { l: 'down', r: 'wave' }, mouth: 'grin', eyes: { px: 6 } })}${G.ane({ x: 330, y: 900, s: 0.7, eyes: 'happy' })}${G.brutus({ x: 800, y: 780, s: 0.6, arms: 'hold', hold: `<rect x="-60" y="-110" width="120" height="200" rx="18" fill="#2B2B33" ${st(6)}/><rect x="-46" y="-94" width="92" height="160" rx="6" fill="#EAF3FF"/><path d="M -30 -40 l 60 60 M 30 -40 l -60 60" stroke="#E5322D" stroke-width="10" stroke-linecap="round"/>`, mouth: 'smirk', eyes: { px: -6, lid: 0.25 }, brows: 'sly' })}`)}
      ${G.avantPlan()}
      ${bubble({ x: 700, y: 610, w: 340, size: 30, tail: { at: 0.5, dir: 0 }, text: `J'ai bloqué tata Monique. <b>Ça compte comme création${nb}?</b>` })}`, { source: 'Jean de La Fontaine, « Le Meunier, son Fils et l’Âne », Fables, livre III, 1 (1668).' }),
  ],
};
