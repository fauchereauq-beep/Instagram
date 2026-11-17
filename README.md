# Instagram — « Mon chimpanzé et moi »

**Le plan de publication est dans `PLAN.md`.**

Sitcom en BD pour Instagram (planches 1080 × 1350), dessinée en vectoriel et générée par script.
Toujours les mêmes personnages (Quentin, le Chimpanzé), toujours le même décor (le Salève),
aux couleurs, polices de titre et logo de quentinfauchereau.com.

- `carrousels/<épisode>/` : les planches PNG prêtes à publier.
- `episodes/NN-nom.js` : le scénario et la mise en page d'un épisode. Les styles de dessin se choisissent avec
  `useStyle('cartoon' | 'claire' | 'roman' | 'carnet')`.
- `src/avatar.config.js` : l'apparence de Quentin et l'identifiant Instagram affiché.
- `src/kit.js` : personnages, décor, bulles, cadre, palette.
- `archives/` : ce qui ne sera pas publié (pilote, comparaison des styles, épisode Épictète).

Régénérer les planches (Node et Playwright requis) :

    node build.js          # tous les épisodes
    node build.js 01       # un seul
    node anim.js 01 5      # anime la planche de respiration (MP4, 20 s)
