// Spécial fêtes 3/3 — Les résolutions, avec les petits caractères de Brutus.
const { vrai, nb, fl } = require('../src/vrai.js');
module.exports = vrai({
  slug: '53-resolutions', series: 'Spécial fêtes · 3/3', sign: 'SERVICE JURIDIQUE', bg: '#175E47',
  envoie: 'l’ami qui prend 12 résolutions chaque année', enregistre: 'pour le 1er janvier',
  slides: [
    { type: 'hook', text: `Mes résolutions. Brutus a ajouté ${fl('des petits caractères.')}`, c: `Lis bien <b>avant de signer.</b>`, cta: 'Le contrat →' },
    { type: 'doc', title: 'Résolutions de l’année *', lines: ['Je lance mon projet *', 'Je fais du sport **', 'Je publie chaque semaine ***', '<span style="font-size:30px;color:#77738A">* sauf si pas prêt · ** sauf s’il pleut · *** sauf si personne ne like</span>'], c: `Juridiquement, <b>tu ne risques rien</b>.`, cta: 'La signature →' },
    { type: 'talk', c: `Article 12${nb}: en cas de doute, <b>on repousse.</b>`, q: `Il y a combien d'articles${nb}?`, qm: 'smirk', cta: 'Février →' },
    { type: 'low', c: `Prévision${nb}: <b>abandon mi-janvier.</b> Comme d'habitude.`, q: `Comment tu sais${nb}?`, sign: 'ARCHIVES', cta: 'Sauf que →' },
    { type: 'turn', text: 'Alors j’ai déchiré le contrat.', cap: `Et j'ai gardé une seule ligne, sans astérisque${nb}: «${nb}Dix minutes par jour sur mon projet.${nb}»`, cta: 'Pourquoi ça marche →' },
    { type: 'insight', text: `Une grande résolution réveille Brutus. ${fl('Une petite, il ne la voit même pas.')}`, size: 60, c: `Dix minutes${nb}? <b>Je dormais.</b>`, cta: 'La morale →' },
    { type: 'morale', text: `Ne promets pas une nouvelle vie. Promets ${fl('dix minutes.')}`, size: 68, c: `J'ajoute <b>un astérisque</b>${nb}?`, sign: 'CONTRAT DÉCHIRÉ' },
    { type: 'fin', question: `Ta résolution en dix minutes par jour${nb}?`, teaser: `Le 4 janvier${nb}: le fameux lundi. Brutus a des nouvelles.` },
  ],
});
