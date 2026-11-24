// Spécial fêtes 1/3 — Le repas de Noël : « Alors, ton projet ? »
const { vrai, nb, fl } = require('../src/vrai.js');
module.exports = vrai({
  slug: '51-noel-ton-projet', series: 'Spécial fêtes · 1/3', sign: 'CELLULE RÉPONSES', bg: '#7A2E12',
  envoie: 'l’ami qui redoute le repas de famille', enregistre: 'pour le prochain « alors, ce projet ? »',
  slides: [
    { type: 'hook', text: `Noël. Tonton va me demander ${fl('où en est mon projet.')}`, c: `J'ai préparé des fiches.`, cta: 'Les fiches →' },
    { type: 'doc', title: 'Réponses validées par Brutus', lines: ['«&nbsp;Ça mûrit.&nbsp;»', '«&nbsp;Je suis en phase de réflexion.&nbsp;»', '«&nbsp;C’est compliqué à expliquer.&nbsp;»', '«&nbsp;Et toi, la retraite&nbsp;?&nbsp;»'], c: `La 4e, c'est l'arme <b>nucléaire</b>.`, cta: 'Le repas →' },
    { type: 'talk', c: `Règle n°1${nb}: ne jamais dire <b>«${nb}j'ai pas commencé${nb}»</b>.`, q: `Mais j'ai pas commencé.`, qm: 'wobble', cta: 'Le dessert →' },
    { type: 'low', c: `Plan B${nb}: <b>on s'étouffe avec la bûche.</b>`, q: `Brutus, non.`, sign: 'ALERTE BÛCHE', cta: 'Alors →' },
    { type: 'turn', text: 'Alors j’ai posé ma fourchette.', cap: `Et j'ai dit la vérité${nb}: «${nb}Pas encore. Je commence le 4 janvier.${nb}» Tonton${nb}: «${nb}Ah, super.${nb}»`, cta: 'Le choc →' },
    { type: 'insight', text: `Tout le monde s’en fichait. ${fl('Sauf moi.')}`, size: 72, c: `Il a juste repris <b>de la dinde</b>.`, cta: 'La morale →' },
    { type: 'morale', text: `La question de tonton ne fait pas peur. C’est ${fl('ta réponse')} qui te fait peur.`, size: 60, c: `On garde les fiches <b>pour l'an prochain</b>.` },
    { type: 'fin', question: `Ta pire question de repas de famille${nb}?`, teaser: `Le 28${nb}: le bilan de l'année de Brutus. Il a des chiffres.` },
  ],
});
