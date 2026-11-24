// Crash-test — « Je commence lundi ».
const { vrai, nb, fl } = require('../src/vrai.js');
module.exports = vrai({
  slug: '54-le-lundi', series: 'Crash-test · n°2', sign: 'BUREAU DES LUNDIS', bg: '#3A2B24',
  envoie: 'l’ami qui « commence lundi » depuis des années', enregistre: 'pour dimanche soir',
  slides: [
    { type: 'hook', text: `«${nb}Je commence lundi.${nb}» ${fl('Ça fait 3 ans.')}`, size: 84, c: `Lundi, <b>c'est sacré.</b>`, cta: 'Son agenda →' },
    { type: 'doc', title: 'Agenda de Brutus', lines: ['Lundi&nbsp;: trop tôt après le week-end', 'Mardi&nbsp;: on a raté lundi', 'Mercredi&nbsp;: milieu de semaine, bof', 'Jeudi&nbsp;: presque vendredi', 'Vendredi&nbsp;: on verra lundi'], lineSize: 40, c: `Cinq jours, zéro créneau. <b>Efficace.</b>`, cta: 'Le week-end →' },
    { type: 'talk', first: 'q', q: `Et le week-end${nb}?`, c: `Le week-end, on <b>prépare lundi.</b>`, qm: 'flat', cta: 'Le pire →' },
    { type: 'low', c: `Lundi 1er janvier${nb}? <b>Férié.</b> On décale au 8.`, q: `Le 8, il pleut.`, sign: 'REPORTÉ', cta: 'Et puis →' },
    { type: 'turn', text: 'Alors j’ai commencé un jeudi. À 16 h 12.', cap: `Sans plan, sans lundi, sans annonce. Dix minutes.`, cta: 'Sa réaction →' },
    { type: 'insight', text: `Lundi est le jour préféré de Brutus${nb}: ${fl('il n’arrive jamais.')}`, size: 64, c: `Un jeudi${nb}? <b>Personne ne commence un jeudi.</b>`, cta: 'La morale →' },
    { type: 'morale', text: `Le bon jour pour commencer, c’est ${fl('celui que tu es en train de vivre.')}`, size: 62, c: `Il est 16 h 13. <b>On a raté le créneau.</b>`, sign: 'COMMENCÉ (UN JEUDI)' },
    { type: 'fin', question: `Depuis combien de lundis tu repousses${nb}?`, teaser: `Dimanche${nb}: la boule au ventre du dimanche soir.` },
  ],
});
