# Projet : carrousels Instagram de Quentin Fauchereau (@quentinfauchereau)

Sitcom en BD « Quentin et Brutus », style gros nez franco-belge pop, 8 planches 1080 × 1350 par carrousel.
Fil conducteur : oser créer ce qui t'anime. Tout est généré par code (SVG + HTML rendus avec Playwright).

## À lire avant de travailler
- `BIBLE.md` : personnages (Brutus, chimpanzé intérieur parano), formats, codes visuels, **règles v3** (bulles, couverture, fin).
- `QUENTIN.md` : sa vraie vie (métiers, projets lâchés, excuses, Panama, balade déclic). L'humour vient de là.
- `PLAN.md` et `publier/calendrier.json` : calendrier. `carrousels/SOURCES.md` : sources vérifiées.

## Fabriquer un carrousel
1. Copier l'épisode le plus proche dans `episodes/` (modèles : `41` Crash-test, `42` Ils ont osé, `43` Radar du corps, `44` Appel à un ami, `45` Fables). Numéroter à la suite (46, 47…).
2. Outils : `src/v3.js` (bulle, hook, fleche, narr, actions, ep3), `src/gn.js` (quentin, brutus, einstein, ane, accessoires), `src/decors.js` (saleve2, salon, cuisine, cinema, choc, commentaire, fx).
3. Écrire `carrousels/<slug>/legende.md` : 1re ligne = phrase de couverture ; mot à commenter ; section « ## Commentaire à épingler » (non publiée).
4. `bash outils/livrer.sh <slug>` puis **regarder l'aperçu** `apercus/<slug>.png` et corriger les chevauchements.
5. Committer et pousser.

## Dessin animé (Reel 1080 × 1920)
- Moteur : `anim/moteur.js` (voix espeak-ng + MBROLA, bouche synchronisée sur l'audio, poses, sauts, caméra, bruitages synthétisés).
- Modèle à suivre : `anim/ep01-le-bouton.js` (méthode en 7 temps, 25-30 s, voir `BIBLE.md`) → `videos/ep01-le-bouton.mp4`. Voix en babil (`anim/babil.js`), légendes mot à mot, musique coupée sur le moment profond.
- Prérequis : `apt-get install -y espeak-ng mbrola mbrola-fr1 mbrola-fr4`.
- Vérifier avec une planche d'images extraites (ffmpeg `tile`), pas en regardant chaque image.

## Règles non négociables
- Un carrousel à la fois, **validé par Quentin** avant le suivant.
- Toute citation, date ou étude est vérifiée en ligne ; un invité ne dit que ce qu'il a réellement dit, sinon c'est un gag évident. Noter la source dans `SOURCES.md`.
- L'énergétique est présentée comme le vécu de Quentin, jamais comme de la science. Pas de « si tu es mal, tu attires le mal ».
- Ne jamais copier un personnage existant (Titeuf, Gaston…) : on s'inspire du genre seulement.
- L'agent `publier/` ne publie que les lignes `"valide": true` ; ne jamais en valider une sans l'accord explicite de Quentin.

## Façon de travailler avec Quentin
Français, direct, exigeant : le challenger, pas le flatter. Il a un TDAH et procrastine : réponses claires, l'essentiel d'abord, finir par **une seule action concrète**.
