// Dossier impossible 2/5 — « On ne change pas de voie. » (Vera Wang)
const { dossier, nb, fl, so } = require('../src/dossier.js');
module.exports = dossier({
  slug: '12-dossier-wang', series: 'Dossier impossible · 2/5', prop: 'robe', bg: '#175E47',
  sky1: { sky: ['#FFE9D2', '#FFC9A8'] },
  wish: `«${nb}J’aimerais ${fl('changer de métier.')}${nb}»`, wishSize: 92,
  verdict: `Impossible. T'as déjà choisi.`,
  argument: `Une vie, c'est une autoroute. Si tu sors, tu perds <b>ta place dans le bouchon</b>.`,
  reply: `Tu tiens au bouchon${nb}?`,
  f1: { year: '1968', text: `Elle patine depuis l'enfance. Objectif${nb}: les Jeux olympiques. Elle finit cinquième. Pas qualifiée.`, quip: `Premier rêve${nb}: raté. Classé.`, cta: 'Deuxième vie →', mouth: 'smirk', arms: 'finger' },
  f2: { year: '1971', text: `Elle entre dans un magazine de mode. Elle y reste plus de quinze ans.`, quip: `Voilà. Un bouchon stable.`, cta: 'Puis →', mouth: 'smile', arms: 'calm' },
  f3: { year: '1989', text: `À 40 ans, elle cherche sa robe de mariée. Aucune ne lui plaît. Elle la ${so('dessine elle-même.')}`, quip: `Elle n'a pas le diplôme${nb}!`, cta: 'C’était →', mouth: 'open', arms: 'head', brows: [-16, 16] },
  ref: 'Encyclopædia Britannica, « Vera Wang ».',
  name: 'Vera Wang', after: `Première boutique en 1990. Créatrice de robes de mariée la plus connue au monde.`,
  reaction: `Patineuse, puis journaliste, puis ça${nb}?`,
  morale: `Tes années «${nb}à côté${nb}» ne sont pas perdues. C’est ${fl('ta formation.')}`,
  last: `Donc le bouchon, c'était un stage.`,
  question: `Tu changerais pour quoi, si personne ne jugeait${nb}?`,
  teaser: `Demain, dossier 3${nb}: un facteur trébuche sur un caillou. Ça dure 33 ans.`,
  sources: ['Championnats des États-Unis 1968, Vogue (1971–1987), boutique en 1990&nbsp;: <i>Encyclopædia Britannica</i>.'],
});
