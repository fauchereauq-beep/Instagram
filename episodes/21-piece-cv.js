// Pièces à conviction 1/5 — Le CV. On ose : assumer d'avoir fait mille choses.
const { vrai, nb, fl } = require('../src/vrai.js');
module.exports = vrai({
  slug: '21-piece-cv', series: 'Pièces à conviction · 1/5', sign: 'TRIBUNAL DU SÉRIEUX', bg: '#1E1B3A', envoie: `l’ami qui «${nb}change tout le temps de voie${nb}»`,
  slides: [
    { type: 'hook', text: `Dix métiers. Mon chimpanzé appelle ça ${fl('un casier.')}`, size: 84, c: `Moi, c’est Brutus. <b>Je tiens le casier.</b>`, cta: 'Lecture du casier →' },
    { type: 'doc', title: 'Casier professionnel', lines: ['Serveur', 'Majordome', 'Commercial', 'Horloger', 'Ramasseur de pommes', 'Menuisier', 'Couvreur', 'Opérateur d’outils dentaires', 'Patron au Panama (faillite)'], lineSize: 42, c: `Neuf. Et j'ai gardé le pire.`, cta: 'Le pire →' },
    { type: 'talk', c: `«${nb}Mettait des boîtes de café <b>dans une autre boîte</b>.${nb}»`, q: `C'était un vrai poste. J'étais bon.`, qm: 'smirk', cta: 'Le verdict →' },
    { type: 'low', c: `Verdict${nb}: <b>tu t'éparpilles</b>. Tu ne vas jamais au bout.`, q: `On me le dit depuis l'école.`, cta: 'Sauf que →' },
    { type: 'turn', text: 'Alors j’ai relu le casier. Lentement.', cap: `Serveur${nb}: j’écoute. Horloger${nb}: je patiente. Couvreur${nb}: pas peur du vide.`, cta: 'Et les boîtes ? →' },
    { type: 'talk', first: 'q', q: `Les boîtes${nb}? Je repère l’absurde <b>à dix mètres</b>.`, c: `…C'est une compétence, ça${nb}?`, qm: 'smile', cm: 'small', ca: 'rub', arms: 'point', cta: 'La morale →' },
    { type: 'morale', text: `Je ne m’éparpille pas. Je ${fl('rassemble.')}`, size: 84, c: `Le onzième${nb}? <b>Raconter les dix en BD.</b>`, cta: 'Et toi ? →' },
    { type: 'fin', question: `Ton métier le plus improbable${nb}? Je veux tout savoir.`, teaser: `Demain, pièce n°${nb}2${nb}: «${nb}Vous avez 9 anciens messages.${nb}»` },
  ],
});
