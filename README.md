# Instagram — « Mon chimpanzé et moi »

Sitcom en BD pour Instagram (planches 1080 × 1350), dessinée en vectoriel et générée par script.
Toujours les mêmes personnages (Quentin, le Chimpanzé), toujours le même décor (le Salève),
aux couleurs, polices de titre et logo de quentinfauchereau.com.

- `carrousels/<épisode>/` : les planches PNG prêtes à publier.
- `episodes/NN-nom.js` : le scénario et la mise en page d'un épisode. `00-univers.js` est la planche de référence.
- `src/avatar.config.js` : l'apparence de Quentin et l'identifiant Instagram affiché.
- `src/kit.js` : personnages, décor, bulles, cadre, palette.
- `archives/` : le pilote « Moi vs mon cerveau », antérieur à l'univers actuel.

Régénérer les planches (Node et Playwright requis) :

    node build.js          # tous les épisodes
    node build.js 01       # un seul
