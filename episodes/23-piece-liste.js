// Pièces à conviction 3/5 — La liste. On ose : commencer sans être prêt.
const { vrai, nb, fl } = require('../src/vrai.js');
module.exports = vrai({
  slug: '23-piece-liste', series: 'Pièces à conviction · 3/5', sign: 'CONDITIONS PRÉALABLES', bg: '#5B5675',
  slides: [
    { type: 'hook', text: `Je me lance. Juste après avoir ${fl('refait mon site.')}`, size: 84, c: `Et après la formation.`, arms: 'fist', cta: 'La liste →' },
    { type: 'doc', title: 'À faire avant de commencer', lines: ['☐ Refaire le site', '☐ Perdre du poids', '☐ Finir la formation', '☐ Lire le livre', '☐ Ranger', '☐ Regarder le match'], c: `J'en ajoute une par jour.`, cta: 'Une de faite →' },
    { type: 'talk', first: 'q', q: `C'est bon${nb}! J'ai fini la formation.`, c: `Bravo. Il en existe une autre, <b>plus complète</b>.`, qm: 'smile', arms: 'fist', cta: 'La 47 →' },
    { type: 'low', c: `Condition 47${nb}: <b>être parfait</b>. T'en es où${nb}?`, q: `Je prends l'apéro. Je réfléchis mieux.`, cta: 'Stop →' },
    { type: 'turn', text: 'Alors j’ai retourné la liste.', cap: `Au dos, une seule ligne${nb}: «${nb}Faire dix minutes. Mal. Aujourd'hui.${nb}»`, cta: 'Ce que j’ai compris →' },
    { type: 'insight', text: `Se préparer, c’est agréable${nb}: on a l’impression d’avancer ${fl('sans rien risquer.')}`, c: `C'est mon produit phare.`, cta: 'La morale →' },
    { type: 'morale', text: `On n’est jamais prêt. C’est ${fl('commencer')} qui prépare.`, size: 76, c: `Y a quand même match ce soir${nb}?`, sign: 'LISTE PERDUE', cta: 'Et toi ? →' },
    { type: 'fin', question: `Ta condition préalable préférée${nb}?`, teaser: `Demain, pièce n°${nb}4${nb}: le Panama. Oui, le pays.` },
  ],
});
