// Spécial fêtes 2/3 — Le bilan de l'année, version Brutus.
const { vrai, nb, fl } = require('../src/vrai.js');
module.exports = vrai({
  slug: '52-bilan-annee', series: 'Spécial fêtes · 2/3', sign: 'SERVICE COMPTABILITÉ', bg: '#1E1B3A',
  envoie: 'l’ami qui trouve son année « ratée »', enregistre: 'pour ton bilan du 31',
  slides: [
    { type: 'hook', text: `Brutus a fait le bilan de mon année. ${fl('Il est fier de lui.')}`, c: `Une année exceptionnelle. <b>Pour moi.</b>`, cta: 'Les chiffres →' },
    { type: 'doc', title: 'Rapport annuel de Brutus', lines: ['Projets lancés&nbsp;: 0', 'Formations achetées&nbsp;: 4', '«&nbsp;Je commence lundi&nbsp;»&nbsp;: 46', 'Excuses inédites&nbsp;: 37', 'Onglets ouverts&nbsp;: 212'], c: `Record battu <b>sur les onglets</b>.`, cta: 'Les détails →' },
    { type: 'talk', first: 'q', q: `Et les 46 «${nb}je commence lundi${nb}»${nb}?`, c: `52 lundis dans l'année. <b>On a de la marge.</b>`, qm: 'flat', cta: 'Le pire →' },
    { type: 'low', c: `Objectif de l'an prochain${nb}: <b>zéro risque.</b> Comme cette année.`, q: `Donc zéro projet.`, sign: 'OBJECTIFS 2027', cta: 'Sauf que →' },
    { type: 'turn', text: 'Alors j’ai fait mon propre bilan.', cap: `Pas ce que je n'ai pas fait. Ce que j'ai osé, même un peu${nb}: un message, une première balade, ces BD.`, cta: 'Le vrai chiffre →' },
    { type: 'insight', tag: 'Le vrai bilan', text: `On compte toujours ce qu’on n’a pas fait. ${fl('Jamais ce qu’on a osé.')}`, size: 62, c: `…Il y a un tableur <b>pour ça</b>${nb}?`, cta: 'La morale →' },
    { type: 'morale', text: `Ton année n’est pas un échec. C’est ${fl('un brouillon.')}`, size: 72, c: `Un brouillon de <b>212 onglets</b>.`, sign: 'BILAN RECTIFIÉ' },
    { type: 'fin', question: `Une chose que tu as osée cette année, même minuscule${nb}?`, teaser: `Le 31${nb}: les résolutions. Brutus a lu les petits caractères.` },
  ],
});
