# Bible de la série — version 2 (en cours de validation avec Quentin)

Règle de travail : **un carrousel à la fois, validé par Quentin avant le suivant.**
Critère de validation : quand Quentin le relit, il rit et il apprend un truc, et il s'y reconnaît.

## Les personnages

**Quentin** : le héros. Plein d'élan, d'envies dans tous les sens, se fait saboter par Brutus et en rit.

**Brutus** (nom choisi par Quentin) : le chimpanzé, garde du corps parano.
- Intention positive : il veut garder Quentin en vie. Il a 2 millions d'années de retard et confond « lancer un projet » avec « se faire manger par un tigre à dents de sabre ».
- **Littéral** : « écouter ton cœur » → stéthoscope en plastique ; « vibrer haut » → il monte sur un escabeau. Ressort comique principal.
- **Drama-queen du système nerveux** : alarme incendie, casque de chantier, sac de survie (mode fuite ou combat) ; roulé en boule sous un plaid (mode figement).
- **Gourmand et terre-à-terre** : pendant que les invités parlent d'infini, il mange des chips ou leur pique leurs lunettes.
- Quentin l'appelle par son prénom dans les bulles.

**Les invités** (Einstein, Gandhi, Sénèque…) surgissent dans le quotidien de Quentin et interagissent physiquement avec lui et avec Brutus.
Règle non négociable : un invité ne dit que ce qu'il a réellement dit ou défendu. Sinon c'est présenté comme une blague évidente, jamais comme une citation.

## Priorité de Quentin (15 novembre)

On commence par **Crash-test** et **Ils ont osé**, en séries. Les deux autres formats viennent après.

**Ton** : la répartie courte de Baffie, le malaise qui dure de Damiens, les gags visuels et les onomatopées de la BD franco-belge (Titeuf, Gaston). On s'inspire du genre, jamais des personnages ni des dessins existants.

## Les quatre formats

1. **Appel à un ami** (concepts et citations) : Quentin et Brutus se disputent sur un concept, un invité apparaît, casse le mythe avec une image simple et repart.
2. **Le Radar du corps** (somatique et pratique) : Brutus panique, Quentin lui prend la main, montre ce qui se passe dans le corps, donne un exercice pour redescendre.
3. **Ils ont osé** (histoires vraies) : « Assieds-toi, je vais te raconter l'histoire vraie de… » ; Brutus commente comme au cinéma.
4. **Crash-test** (vécu et défis) : les vulnérabilités et passages à l'action de Quentin, plus un défi pour l'audience.

En plus : **les fables** (ex. *Le Meunier, son fils et l'âne*, La Fontaine : quoi que tu fasses, on te critiquera).

## Style retenu (16 novembre)

**Style 1, gros nez franco-belge pop** : grosse tête, petit corps, nez patate, yeux collés, traits épais, onomatopées. Code dans `src/gn.js` (personnages, invités, âne, décors, accessoires) et `src/ep.js` (raccourcis d'épisode). Premiers épisodes : 41 à 45.

## Règles v3 (17 novembre) — lisibilité et engagement

Code : `src/v3.js` (`bulle`, `hook`, `fleche`, `narr`, `actions`).

**Bulles**
- Minuscules, 40 à 44 px, 10 mots maximum.
- Une couleur par personnage : blanc = Quentin, violet clair = Brutus, bleu clair = Einstein et les invités.
- La queue pointe sur la tête de celui qui parle.
- Ordre de lecture : haut → bas, gauche → droite. Le narrateur (cartouche jaune) toujours en premier, en haut.

**Couverture (planche 1)**
- Le moment le plus absurde de l'histoire, sans l'expliquer.
- Une phrase de 5 à 7 mots en blanc à contour noir, qui ouvre une question : « Ce singe m'a fait perdre 6 mois. »
- Le bouton « suite » pose la question que le lecteur se pose : « Qui est ce singe ? »
- Titre à y ≥ 130 pour ne pas passer sous l'ombre de l'étiquette de série.

**Fin (planche 8)**
- Une seule morale, puis un bloc d'action : **un mot à commenter** (en gros), puis à qui l'envoyer, puis pourquoi l'enregistrer.
- La légende commence par la phrase de couverture ; le commentaire à épingler est noté dans `legende.md` (section « Commentaire à épingler », non publiée par l'agent).

## Méthode Reel « Brutus » (25-30 s)

Modèle : `anim/ep01-le-bouton.js`. Rendu : `node anim/<épisode>.js` → `videos/`.

| Temps | Durée | Rôle | Règle |
|---|---|---|---|
| 1. Accroche | 0-2 s | Arrêter le pouce | Texte du haut qui commence par « Moi, … » + une action en cours interrompue (Brutus qui plonge). Pas d'introduction. |
| 2. Conflit | 2-7 s | Installer la blague | Échange en 3 répliques ; la 3e est la **réplique culte** de Brutus, face caméra, zoom + « dun dun dun ». |
| 3. Escalade | 7-11 s | Règle de trois | Trois excuses en cartons géants, une par seconde, de la plus banale à la plus absurde. |
| 4. Ellipse | 11-14 s | Accélérer | Carton « 6 MOIS PLUS TARD » + la conséquence en une image. |
| 5. Retournement | 14-18 s | Le « mais c'est moi ça » | La peur se réalise autrement que prévu (quelqu'un d'autre a osé). |
| 6. Le fond | 18-23 s | La profondeur | **Musique coupée**, fond sombre, deux phrases simples. Image tendre (Brutus dans les mains). |
| 7. Victoire + rechute | 23-28 s | Rire final et boucle | L'action réussit, puis Brutus rechute avec la phrase du début : la vidéo boucle. Texte du haut : mot à commenter, puis titre de l'épisode suivant. |

Règles de lisibilité vidéo : légendes géantes au même endroit, mot par mot ; **aucun petit texte dans le décor** ; un plan ne dure pas plus de 3 s sans zoom, coupe ou geste ; Brutus a une couleur de légende à lui (lavande).

Voix : babil de dessin animé synthétisé (`anim/babil.js`). Version supérieure : les répliques enregistrées par Quentin (voix de Brutus = la sienne, montée dans les aigus).

## Catalogue des formats (7 planches chacun, style pop franco-belge)

| Format | Planches | Statut |
|---|---|---|
| **Crash-test** | Couverture-aveu · Brutus argumente · Brutus en mode survie · le fond du trou · la bascule (un vrai événement) · le radar du corps · le défi | n°1 « La balade fantôme » fait (épisode 31) |
| **Ils ont osé** | « C'est impossible » · « Assieds-toi » · trois flashbacks commentés par Brutus comme au cinéma · la révélation · la morale | à refaire en pop à partir de la série « Dossier impossible » |
| **Le radar du corps** | Brutus panique · rayon X du corps · ce qui se passe vraiment · l'exercice en 3 étapes · Brutus redescend · la planche-fiche à enregistrer | après validation des deux premiers |
| **Appel à un ami** | Dispute sur un concept · l'invité surgit du quotidien · l'image simple · ce qui est prouvé / ce qui est vécu · la morale | idem ; citations réelles uniquement |
| **Les fables du Salève** | Une fable classique rejouée par Quentin et Brutus, avec la morale | ponctuel |
| **L'énigme du Salève** | Énigme · indices trompeurs · réponse · morale ; reprise en story avec l'autocollant quiz | ponctuel |

## Codes visuels récurrents

| Thème | Image |
|---|---|
| Système nerveux en alerte | Salle des machines dans le ventre ou la tête, Brutus tire sur des leviers rouges, fumée |
| Écoute du corps | Effet rayon X : boule orange au plexus, nœud marin à la gorge, racines sous les pieds |
| Énergie, attraction | Gros aimant de cartoon, radio FM à régler (« Peur de manquer FM » / « Création pure FM ») |
| Mental en boucle | Brutus dans une roue de hamster au-dessus du crâne, qui crie des scénarios catastrophes |

## Règles héritées de la critique (voir l'échange du 14 novembre)

Couverture qui tranche ; Brutus présenté en une ligne ; bascule différente à chaque fois ; 7 planches ; questions qui se répondent en un mot ; partage ciblé ; une planche « geste » qui tient seule ; détails concrets ; mot-clé en message privé ; cadrages variés.

## Concours

Cadeaux à gagner en commentant (soin, balade déclic). Modalités à définir avec Quentin.
