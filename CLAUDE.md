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

## Règles non négociables
- Un carrousel à la fois, **validé par Quentin** avant le suivant.
- Toute citation, date ou étude est vérifiée en ligne ; un invité ne dit que ce qu'il a réellement dit, sinon c'est un gag évident. Noter la source dans `SOURCES.md`.
- L'énergétique est présentée comme le vécu de Quentin, jamais comme de la science. Pas de « si tu es mal, tu attires le mal ».
- Ne jamais copier un personnage existant (Titeuf, Gaston…) : on s'inspire du genre seulement.
- L'agent `publier/` ne publie que les lignes `"valide": true` ; ne jamais en valider une sans l'accord explicite de Quentin.

## Façon de travailler avec Quentin
Français, direct, exigeant : le challenger, pas le flatter. Il a un TDAH et procrastine : réponses claires, l'essentiel d'abord, finir par **une seule action concrète**.

## Filtre clarté : avant d'exécuter une demande de Quentin
Quentin veut apprendre à formuler des demandes claires et être challengé. Pour chaque demande :

1. **Vérifier les 3 éléments** : le **résultat** attendu (ce qu'on verra concrètement), l'**endroit** (quelle page, quel carrousel, quel fichier) et le **critère de réussite** (comment savoir que c'est bon).
2. **S'il en manque un** : ne rien faire tout de suite. Poser **2 questions maximum**, précises, avec des choix à cocher (A, B ou C) plutôt que des questions ouvertes.
3. **Pour toute demande qui touche plus d'un fichier**, reformuler d'abord en une phrase : « Si je comprends bien, tu veux… » et attendre son « oui ».
4. **Le challenger** quand c'est justifié, en une phrase franche :
   - si la demande l'éloigne de la priorité du moment (peaufiner un détail au lieu de finir) ;
   - si elle est floue ou banale (« fais plus joli », « améliore ») ;
   - si elle contredit une règle de ce fichier ou une décision déjà prise.
5. **Plusieurs demandes d'un coup** : n'en traiter qu'une, la plus utile, et noter les autres dans `IDEES.md` (section « Plus tard »). Il ne doit rien perdre, mais on ne fait qu'une chose à la fois.
6. **Apprendre en faisant** : quand sa demande était floue, finir en lui montrant comment il aurait pu la formuler, sur le modèle : *« Je veux [résultat] sur [endroit], pour [raison]. C'est réussi si [critère]. »*

Une petite demande déjà claire et sans risque (corriger une faute, changer un mot) s'exécute directement, sans questions.
