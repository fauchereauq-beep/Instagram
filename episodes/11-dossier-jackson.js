// Dossier impossible 1/5 — « C'est trop tard pour percer. » (Samuel L. Jackson)
const { dossier, nb, fl, so } = require('../src/dossier.js');
module.exports = dossier({
  slug: '11-dossier-jackson', series: 'Dossier impossible · 1/5', prop: 'clap', bg: '#1E1B3A',
  wish: `«${nb}J’aimerais percer. Bon, je sais, ${fl('à mon âge…')}${nb}»`,
  verdict: `Trop tard. Dossier classé.`,
  argument: `Passé 30 ans, on ne perce plus. On <b>s'assoit</b> et on critique ceux qui percent.`,
  reply: `Tu me décris, là.`,
  f1: { year: '1988', text: `Il a 39 ans. Vingt ans de petits rôles. Dans un film, son personnage s'appelle «${nb}le braqueur${nb}».`, quip: `Tu vois. À 39, c'est plié.`, cta: 'Ça empire →', mouth: 'smirk', arms: 'finger' },
  f2: { year: '1991', text: `42 ans. Il sort d'une cure de désintoxication. Deux semaines après, il tourne.`, quip: `Ah. Lui, il a une excuse.`, cta: 'Et alors ? →', mouth: 'wobble' },
  f3: { year: '1994', text: `45 ans. Un réalisateur lui écrit un rôle. Le film s'appelle ${so('Pulp Fiction.')}`, quip: `Attends. C'est…`, cta: 'C’était →', mouth: 'open', arms: 'head', brows: [-16, 16] },
  ref: 'Encyclopedia.com, biographie de Samuel L. Jackson.',
  name: 'Samuel L. Jackson', after: `Né en 1948. Star mondiale à 45${nb}ans. Il tourne encore.`,
  reaction: `45 ans${nb}?! Il avait le droit${nb}?`,
  morale: `Il n’y a pas d’heure limite. Il y a le jour où tu arrêtes de ${fl('te présenter.')}`,
  last: `Je rouvre le dossier. Sans garantie.`,
  question: `Ton «${nb}trop tard${nb}» à toi, c'est pour quoi${nb}?`,
  teaser: `Demain, dossier 2${nb}: elle a raté les Jeux olympiques. Tant mieux.`,
  sources: ['Naissance, cure en 1991, <i>Jungle Fever</i>, <i>Pulp Fiction</i> (1994)&nbsp;: Encyclopedia.com&nbsp;; entretiens de l’acteur.'],
});
