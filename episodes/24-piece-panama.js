// Pièces à conviction 4/5 — Le Panama. On ose : retenter après s'être planté.
const { vrai, nb, fl } = require('../src/vrai.js');
module.exports = vrai({
  slug: '24-piece-panama', series: 'Pièces à conviction · 4/5', sign: 'ARCHIVES DES ÉCHECS', bg: '#7A2E12',
  slides: [
    { type: 'hook', text: `J’ai monté une boîte au Panama. Elle s’est ${fl('cassé la gueule.')}`, size: 80, c: `Pièce n°${nb}4. Ma préférée.`, cta: 'Il la ressort →' },
    { type: 'talk', c: `Je la ressors à chaque nouvelle idée. <b>Ça calme tout le monde.</b>`, q: `Surtout moi.`, cta: 'Les faits →' },
    { type: 'talk', first: 'q', q: `J'étais parti à l'arrache. Sans plan.`, c: `Sans plan, sans filet, <b>sans m'écouter</b>.`, qm: 'small', cta: 'Sa conclusion →' },
    { type: 'low', c: `Conclusion${nb}: ne tente <b>plus jamais rien</b>. Reste assis.`, q: `Tu plaides ça à chaque fois.`, cta: 'Contre-enquête →' },
    { type: 'turn', text: 'Alors j’ai rouvert le dossier moi-même.', cap: `Ce qui a raté${nb}: la préparation. Ce qui a marché${nb}: j'ai osé partir.`, capY: 400, sign: 'CONTRE-ENQUÊTE', cta: 'Ce que j’ai compris →' },
    { type: 'insight', text: `Mon chimpanzé avait rangé «${nb}partir${nb}» avec «${nb}rater${nb}». Ce sont ${fl('deux dossiers.')}`, c: `…Ils étaient agrafés.`, cta: 'La morale →' },
    { type: 'morale', text: `Un échec ne dit pas «${nb}ne tente plus${nb}». Il dit ${fl('«' + nb + 'prépare mieux' + nb + '».')}`, size: 64, c: `Je garde les photos, par contre.`, cta: 'Et toi ? →' },
    { type: 'fin', question: `C'est quoi, ton Panama à toi${nb}?`, teaser: `Demain, dernière pièce${nb}: le cabinet avec la plante verte.` },
  ],
});
