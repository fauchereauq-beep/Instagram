// Pièces à conviction 2/5 — Le répondeur. On ose : effacer les phrases des autres.
const { vrai, nb, fl } = require('../src/vrai.js');
module.exports = vrai({
  slug: '22-piece-repondeur', series: 'Pièces à conviction · 2/5', sign: 'RÉPONDEUR', bg: '#175E47',
  slides: [
    { type: 'hook', text: `«${nb}Tu rêves trop.${nb}» Mon chimpanzé a ${fl('gardé le message.')}`, size: 80, c: `Je les garde tous.`, arms: 'think', cta: 'Écouter →' },
    { type: 'doc', title: 'Vous avez 9 anciens messages', lines: ['«&nbsp;Tu rêves trop.&nbsp;»', '«&nbsp;Tu t’éparpilles.&nbsp;»', '«&nbsp;Tu ne vas pas au bout.&nbsp;»', '«&nbsp;Tu n’as pas les diplômes.&nbsp;»', '«&nbsp;Tu n’as pas l’expérience.&nbsp;»', '«&nbsp;C’est nouveau, ça ne marchera pas.&nbsp;»'], lineSize: 40, c: `Je les repasse à 3${nb}heures du matin.`, cta: 'De qui ? →' },
    { type: 'talk', first: 'q', q: `Le «${nb}tu rêves trop${nb}», il date de quand${nb}?`, c: `Un prof. T'avais 9${nb}ans. <b>Qualité audio excellente.</b>`, cta: 'Le dernier →' },
    { type: 'low', c: `Message 9${nb}: «${nb}T'es pas parfait, <b>donc tu peux pas</b>.${nb}»`, q: `Celui-là… c'est ma voix.`, cta: 'Silence →' },
    { type: 'turn', text: 'Alors j’ai écouté autre chose.', cap: `Le vent dans les sapins. Mon souffle. Trente secondes sans aucun message.`, sign: '…SILENCE', cta: 'Ce que j’ai compris →' },
    { type: 'insight', text: `Ces phrases parlaient de ${fl('leurs peurs.')} Pas de mes capacités.`, size: 68, c: `Je peux en effacer un. Un seul.`, cta: 'La morale →' },
    { type: 'morale', text: `Un avis reçu à 9${nb}ans n’est pas un contrat à vie. Tu peux ${fl('effacer.')}`, size: 64, c: `Message supprimé. …J'ai une sauvegarde.`, sign: 'BOÎTE VIDE', cta: 'Et toi ? →' },
    { type: 'fin', question: `La phrase que tu te repasses encore${nb}?`, teaser: `Demain, pièce n°${nb}3${nb}: tout ce que je dois faire avant de commencer.` },
  ],
});
