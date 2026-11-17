// Dossier impossible 3/5 — « Je n'ai pas le temps. » (le facteur Cheval)
const { dossier, nb, fl, so } = require('../src/dossier.js');
module.exports = dossier({
  slug: '13-dossier-cheval', series: 'Dossier impossible · 3/5', prop: 'palais', bg: '#5B5675',
  sky1: { sky: ['#D9D4EA', '#F6E6D2'], mist: 0.95 },
  wish: `«${nb}J’aimerais créer un truc immense. Mais ${fl('j’ai un boulot.')}${nb}»`, wishSize: 70,
  verdict: `Impossible. Pas le temps.`,
  argument: `T'as même pas fini <b>ta lessive de mardi</b>. Et tu veux bâtir une œuvre${nb}?`,
  reply: `Elle sèche. C'est un processus.`,
  f1: { year: '1879', text: `Un facteur de la Drôme. 43 ans. Trente kilomètres à pied par jour. Il trébuche sur un caillou.`, quip: `Il porte plainte, j'espère.`, cta: 'Non →', mouth: 'smirk', arms: 'finger' },
  f2: { year: '1880', text: `Il trouve le caillou beau. Il le met dans sa poche. Le lendemain, il en ramasse un autre.`, quip: `Tout le village rigole.`, cta: 'Et il continue →', mouth: 'grin', arms: 'up' },
  f3: { year: '1912', text: `Un caillou par tournée, le soir à la lampe, ${so('pendant 33 ans.')} Seul. Sans architecte.`, quip: `33 ans${nb}? De cailloux${nb}?`, cta: 'C’était →', mouth: 'open', arms: 'head', brows: [-16, 16] },
  ref: 'Palais idéal du facteur Cheval, Hauterives (facteurcheval.com).',
  name: 'Le facteur Cheval', nameSize: 96, after: `Son Palais idéal est classé monument historique depuis 1969. On le visite encore.`,
  reaction: `Il avait un boulot à plein temps${nb}!`,
  morale: `Tu n’as pas besoin de temps libre. Tu as besoin d’${fl('un caillou par jour.')}`,
  last: `J'ai un gravier. Ça compte${nb}?`,
  question: `Ce serait quoi, ton caillou d'aujourd'hui${nb}?`,
  teaser: `Demain, dossier 4${nb}: douze lettres. Douze fois «${nb}non${nb}».`,
  sources: ['Ferdinand Cheval, construction de 1879 à 1912 à Hauterives, classement en 1969&nbsp;: site officiel du Palais idéal.'],
});
