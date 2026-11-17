// Dossier impossible 4/5 — « On m'a dit non. » (J.K. Rowling)
const { dossier, nb, fl, so } = require('../src/dossier.js');
module.exports = dossier({
  slug: '14-dossier-rowling', series: 'Dossier impossible · 4/5', prop: 'lettres', bg: '#3A2B24',
  sky1: { sky: ['#FFE9D2', '#FFC9A8'] },
  wish: `«${nb}J’ai montré mon projet. ${fl('On m’a dit non.')}${nb}»`, wishSize: 84,
  verdict: `Voilà. C'est tranché.`,
  argument: `Un «${nb}non${nb}», c'est un avis. Deux, c'est une <b>tendance</b>. Trois, c'est la science.`,
  reply: `C'était ma tante, le non.`,
  f1: { year: '1995', text: `Une inconnue termine un roman pour enfants. Son agent l'envoie à un éditeur. Refusé.`, quip: `Un avis de professionnel.`, cta: 'Deuxième envoi →', mouth: 'smirk', arms: 'finger' },
  f2: { year: '1996', text: `Deuxième éditeur${nb}: non. Troisième${nb}: non. Elle en reçoit ${so('douze.')}`, quip: `Douze. C'est la loi, là.`, cta: 'Le treizième →', mouth: 'grin', arms: 'up' },
  f3: { year: '1997', text: `Un petit éditeur dit oui. Sa fille de 8 ans a lu le début et réclame la suite. Tirage${nb}: 500 exemplaires.`, quip: `500. Bon. Ça va, ça.`, cta: 'C’était →', mouth: 'smile', arms: 'calm' },
  ref: 'Éditions Bloomsbury ; témoignage de l’éditeur Barry Cunningham.',
  name: 'Harry Potter', after: `J.${nb}K. Rowling. Son éditeur lui avait conseillé de garder un travail à côté.`,
  reaction: `Les douze, ils dorment bien${nb}?`,
  morale: `Un «${nb}non${nb}», c’est l’avis d’une personne, un mardi. ${fl('Pas un verdict.')}`,
  last: `Et treize «${nb}non${nb}»${nb}? Je demande.`,
  question: `Le «${nb}non${nb}» que tu as pris pour un verdict${nb}?`,
  teaser: `Demain, dossier 5${nb}: son tout premier tableau. Elle a plus de 75 ans.`,
  sources: ['Douze refus, publication par Bloomsbury en juin 1997, premier tirage de 500 exemplaires&nbsp;: récits de l’éditeur et de la presse.'],
});
