# Boîte à idées

Rien ne se perd, mais on ne fait qu'une chose à la fois.

## En cours
- **Référence : le site quentinfauchereau.com** (vérifié le 27/11/2026). Design : crème, Poppins / Inter, surlignage soleil, cartes arrondies, ombre douce. Fond : balade 1 h à plat (40 min de soin + 20 min de jeu, déroulé 0′ → 60′), deux balises (« J'ai peur de me lancer », « Je suis à bout »), trois vitesses du système nerveux, carte défi, garantie premier pas, 90 € / 590 €. `BRIEF.md` du site (dépôt test-site) est en retard sur le site en ligne.
- **Visuel unique n°3 « Ton système nerveux a trois vitesses »** (27/11/2026), style du site : `visuels/03-trois-vitesses/`. Attend la validation de Quentin.
- **Visuels uniques n°4, 5, 6** (27/11/2026), style du site, 3 formats : frise « Une heure pour faire ton premier pas » (`04-balade-minute`, à épingler, remplace le visuel 1), comparaison « Lis les balises » (`05-balises`), citation « Dans une montre… » (`06-citation-mouvement`). Outils : `src/site.js`. Attendent la validation de Quentin.
- **À refaire au style du site** : visuel 1 (ancien déroulé de la balade → refaire avec la frise 0′ → 60′ du site) et visuel 2 (« frein » positif, contraire au site où le frein = veille). Ne pas les publier en l'état.
- **Visuel unique n°1 « La balade déclic en 6 étapes »** (27/11/2026) : `visuels/01-balade-6-etapes/` (post + story + légende). Remplace l'idée du carrousel épinglé : c'est ce post qu'on épingle. Attend la validation de Quentin.
- **Visuel unique n°2 « L'accélérateur et le frein »** (27/11/2026) : nouveau style « schéma + vraie photo » (choix de Quentin : mélange A et B). `visuels/02-accelerateur-frein/`. Photo : `photos/moi.jpg` (Drive, 600 × 600 : il en faut de plus grandes). Attend la validation de Quentin.
- **Fait** : balade = 1 h (confirmé par Quentin et le site) dans `QUENTIN.md`, `SAISON.md`, légende du carrousel 25. Reste `BRIEF.md` du site.

## Inspirations envoyées par Quentin (27/11/2026)
16 captures de posts. Ce qui marche le mieux (j'aime, à nuancer selon la taille des comptes) :
- Une image forte + une phrase courte : tarte brûlée / tarte dorée (camilletomat, 11,8 K).
- Métaphore photoréaliste + phrase : lion, diamant, parapluie (davfit, 34,3 K).
- Citation sourcée + photo : Louis de Funès (les.infosinvisibles, 19,4 K). Attention : pas de photo de célébrité (droits).
- Grille d'icônes simples : « Le burnout, c'est ça » (elie_holistic, 5 K).
- Le moins bon : infographies surchargées (« 9 effets positifs », 98).
Règle retenue : **le style, c'est la charte** (flamme, soleil, nuit, crème, jungle ; Poppins + Inter). Seul le type d'image change.

## Plus tard
- **Images réalistes et vidéos** (27/11/2026) : recommandation = vraies photos gratuites **Pexels** (usage commercial libre, sans attribution) + mise en page par code dans la charte (`outils/photo.js`, à coder). Besoin : clé Pexels gratuite + ouvrir `api.pexels.com` et `images.pexels.com` dans le réseau de la session (testé : bloqués ; seul `generativelanguage.googleapis.com` passe). Pas rentable : modèle d'IA local (pas de carte graphique), vidéo IA (payante). Plus tard : animer les visuels en Reels (gratuit, par code). ChatGPT reste possible pour les images impossibles à photographier.
- **Autres visuels uniques** (demandé le 27/11/2026), un à la fois, même outil (`node outils/visuel.js <nom>`) :
  - une **explication** en une image : la « fenêtre de tolérance » (Siegel, 1999), à vérifier à la source ;
  - un **avis** tranché de Quentin (à tirer de ses vraies convictions, skill `interview-convictions`) ;
  - une **citation** vérifiée en ligne, source notée dans `carrousels/SOURCES.md`.
- **Routine de publication** (demandé le 27/11/2026) : la fabrication est déjà décrite (`CLAUDE.md`, `PROMPT.md`). Ce qui manque, c'est l'étape « valider et programmer ». Idée : 30 min fixes par semaine pour programmer les 3 carrousels de la semaine.
- **Stratégie reliée à l'offre** (demandé le 27/11/2026) : ajouter à `SAISON.md` un pilier « corps, système nerveux, prises de conscience ». Constat sur les 21 légendes existantes : système nerveux 1 fois, corps 2, magnétisme 1. Les abonnés vont connaître Brutus, pas la méthode de Quentin. À faire une fois les premiers carrousels publiés.
- **Couvertures de stories à la une** (option B du 27/11/2026) : Balade · Qui suis-je · Retours · Réserver.
