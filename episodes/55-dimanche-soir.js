// Le radar du corps n°2 — La boule du dimanche soir. Outil : nommer l'émotion (Lieberman et al., 2007).
const { vrai, nb, fl } = require('../src/vrai.js');
module.exports = vrai({
  slug: '55-dimanche-soir', series: 'Le radar du corps · n°2', sign: 'CELLULE DIMANCHE', bg: '#1E1B3A',
  envoie: 'l’ami qui a la boule tous les dimanches', enregistre: 'pour dimanche, 18 h',
  slides: [
    { type: 'hook', text: `Dimanche, 18 h. ${fl('La boule arrive.')}`, size: 88, c: `Livraison <b>hebdomadaire.</b>`, cta: 'Son programme →' },
    { type: 'doc', title: 'Programme de Brutus · dimanche', lines: ['18 h&nbsp;: penser à lundi', '19 h&nbsp;: penser à tout lundi', '20 h&nbsp;: imaginer le pire de lundi', '23 h&nbsp;: scroller pour oublier lundi', '2 h&nbsp;: lundi'], c: `Je suis <b>très organisé.</b>`, cta: 'Dans le corps →' },
    { type: 'talk', first: 'q', q: `Je sais pas ce que je ressens. C'est flou.`, c: `Flou, c'est <b>mon brouillard préféré.</b>`, qm: 'wobble', cta: 'Le pire →' },
    { type: 'low', c: `Résumé${nb}: <b>tout va mal</b>, sans précision.`, q: `C'est un peu ça.`, sign: 'BROUILLARD', cta: 'L’exercice →' },
    { type: 'turn', text: 'Alors j’ai nommé ce que je ressens.', cap: `Main sur le ventre. Où ça serre${nb}? Quel mot exact${nb}? «${nb}J'ai peur de ne pas être à la hauteur demain.${nb}»`, cta: 'Ce que dit la science →' },
    { type: 'insight', tag: 'Ce que dit la science', text: `Mettre un mot précis sur une émotion ${fl('calme l’alarme')} dans le cerveau.`, size: 60, c: `Un mot. Et je baisse <b>la sirène</b>${nb}?`, cta: 'La morale →', source: 'Lieberman et al., « Putting feelings into words », Psychological Science, 2007.' },
    { type: 'morale', text: `Une boule sans nom grossit. ${fl('Une boule nommée rétrécit.')}`, size: 66, c: `Lundi passe en <b>alerte jaune.</b>`, sign: 'ALERTE JAUNE' },
    { type: 'fin', question: `Ta boule du dimanche soir, tu l'appellerais comment${nb}?`, teaser: `Bientôt${nb}: la série «${nb}Les émotions qui bloquent la création${nb}».` },
  ],
});
