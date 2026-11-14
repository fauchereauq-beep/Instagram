// Dossier impossible 5/5 — « Il fallait commencer petit. » (Grandma Moses)
const { dossier, nb, fl, so } = require('../src/dossier.js');
module.exports = dossier({
  slug: '15-dossier-moses', series: 'Dossier impossible · 5/5', prop: 'chevalet', bg: '#7A2E12',
  sky1: { sky: ['#FFF6EA', '#FFD98A'] },
  wish: `«${nb}J’aimerais ${fl('apprendre à peindre.')}${nb}»`, wishSize: 90,
  verdict: `Fallait commencer à 6 ans.`,
  argument: `Mozart composait à 5 ans. Toi, à 5 ans, tu <b>mangeais de la colle</b>.`,
  reply: `Elle était bonne, la colle.`,
  f1: { year: '1860', text: `Une fille de fermiers naît dans l'État de New York. Elle travaille à la ferme toute sa vie.`, quip: `Une vie sans pinceau. Classé.`, cta: 'Soixante-quinze ans plus tard →', mouth: 'smirk', arms: 'finger' },
  f2: { year: '1936', text: `Elle a plus de 75 ans. L'arthrite l'empêche de broder. Sa sœur lui dit${nb}: «${nb}Essaie la peinture.${nb}»`, quip: `À 76 ans. Soyons sérieux.`, cta: 'Elle essaie →', mouth: 'grin', arms: 'up' },
  f3: { year: '1940', text: `Un collectionneur voit ses tableaux dans une vitrine de pharmacie. À ${so('80 ans,')} première exposition à New York.`, quip: `…À 80 ans${nb}?`, cta: 'C’était →', mouth: 'open', arms: 'head', brows: [-16, 16] },
  ref: 'Encyclopædia Britannica, « Grandma Moses » ; Smithsonian Magazine.',
  name: 'Grandma Moses', after: `Elle a peint jusqu'à 101${nb}ans. Ses tableaux sont dans les musées.`,
  reaction: `Elle a commencé après ma retraite${nb}!`,
  morale: `Tu n’es pas en retard. Tu es pile à l’âge où ${fl('tu commences.')}`,
  last: `Bon. Je ferme le bureau.`,
  question: `Lequel des cinq dossiers t'a le plus parlé${nb}?`,
  teaser: `Fin de la série. Prochaine série${nb}: les émotions qui bloquent la création.`,
  sources: ['Anna Mary Robertson Moses (1860–1961), première exposition personnelle en 1940&nbsp;: <i>Encyclopædia Britannica</i>, <i>Smithsonian Magazine</i>.'],
});
