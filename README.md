# Instagram — « Moi vs mon cerveau »

Carrousels BD (1080 × 1350) dessinés en vectoriel et générés par script.

- `carrousels/<épisode>/` : les planches PNG prêtes à publier, et `legende.md` (texte du post).
- `episodes/epXX.js` : le scénario et la mise en page d'un épisode.
- `src/avatar.config.js` : l'apparence de l'avatar et l'identifiant Instagram affiché.
- `src/kit.js` : personnages, bulles, cadre.

Régénérer les planches (Node et Playwright requis) :

    node build.js          # tous les épisodes
    node build.js ep01     # un seul
