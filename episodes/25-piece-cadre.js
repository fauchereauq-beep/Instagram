// Pièces à conviction 5/5 — Le cadre. On ose : sortir du cadre qui ne nous va pas.
const { vrai, nb, fl } = require('../src/vrai.js');
module.exports = vrai({
  slug: '25-piece-cadre', series: 'Pièces à conviction · 5/5', sign: 'ACCUEIL', bg: '#1E1B3A',
  slides: [
    { type: 'hook', text: `J’ai ouvert un cabinet. Une porte, une plaque, ${fl('une plante verte.')}`, size: 76, c: `Enfin un vrai métier${nb}!`, arms: 'fist', cta: 'Visite guidée →' },
    { type: 'talk', c: `Les gens sérieux ont une salle d'attente. Avec des <b>magazines de 2019</b>.`, q: `J'étouffe, là.`, qm: 'wobble', cta: 'Le problème →' },
    { type: 'talk', first: 'q', q: `Je sais magnétiser. Mais entre quatre murs, <b>je m'éteins</b>.`, c: `Normal. Ça s'appelle le travail.`, qm: 'frown', cm: 'flat', ca: 'hips', cta: 'Sa menace →' },
    { type: 'low', c: `Si tu sors du cadre, t'es plus rien. <b>Un type dans un pré.</b>`, q: `…Redis-le, pour voir.`, cta: 'Un type dans un pré →' },
    { type: 'turn', text: 'Un type dans un pré.', cap: `J'ai fermé le cabinet. J'ai gardé le magnétisme. J'ai changé les murs.`, capY: 260, sign: 'FERMÉ', cta: 'Le nouveau cabinet →' },
    { type: 'insight', tag: 'Depuis', text: `Mon cabinet n’a plus de plafond. On marche, on respire, ${fl('on rit.')}`, size: 68, c: `Y a même pas de salle d'attente.`, cta: 'La morale →' },
    { type: 'morale', text: `Tu n’es pas «${nb}trop${nb}». C’est le cadre qui est ${fl('trop petit.')}`, size: 72, c: `J'ai gardé la plante.`, sign: 'OUVERT (DEHORS)', cta: 'Tu viens ? →' },
    { type: 'fin', question: `Ceux qui ont marché repartent détendus, plus clairs. Tu viens${nb}?`, teaser: `Écris «${nb}balade${nb}» en commentaire. Je t'explique tout.` },
  ],
});
