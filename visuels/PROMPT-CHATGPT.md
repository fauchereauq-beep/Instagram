# Images ChatGPT → visuel Instagram

## 1. Dans ChatGPT : copie ce prompt et remplace [SUJET]

> Photo ultra réaliste, format portrait 4:5. [SUJET]. Lumière dorée et chaude, ambiance calme et pleine d'élan. Couleurs dominantes : jaune doré #FFC233, orange #FF5A1F, bleu nuit #1E1B3A dans les ombres, touches de crème #FFF6EA. Garde le tiers inférieur de l'image simple et assez sombre pour y poser du texte. Aucun texte, aucun logo, aucun visage reconnaissable.

Pourquoi « aucun visage reconnaissable » : une personne inventée pourrait passer pour un client. Pour un visage, on prend tes vraies photos.

## Ou : une vraie photo Pexels (gratuite, sans clé)
Sur pexels.com, choisis une photo, copie son lien (« https://www.pexels.com/fr-fr/photo/...-123456/ ») et envoie-le à Claude avec la phrase. L'outil télécharge la photo tout seul. Licence Pexels : usage commercial libre, sans citer l'auteur.

## 2. Envoie l'image à Claude
Dans la conversation, ou sur ton Drive (dossier « Instagram BD › Photos »), avec la phrase à écrire dessus.

## 3. Claude lance l'outil
`node outils/photo.js <image ou lien Pexels> "<phrase>" --accent "<mots en jaune>" --slug <numéro-nom>`
→ `visuels/<slug>/post.png` (1080 × 1350) et `story.png` (1080 × 1920), dans la charte du site.

## Sujets prêts à l'emploi (phrases tirées du site)
| Phrase | [SUJET] pour ChatGPT |
|---|---|
| « Dans un an, tu seras au même endroit, ou un an plus loin. » | Le départ d'un sentier de randonnée au pied d'une montagne des Préalpes, au lever du soleil, avec une légère brume dans la vallée. Au premier plan, une paire de chaussures de marche posée sur le chemin, prête à partir. |
| « Le plus dur, c'est ce clic. Après, on marche. » | Gros plan d'un doigt qui s'approche d'un bouton lumineux, sur fond flou d'un chemin de forêt au soleil couchant. |
| « Ce n'est pas un manque de volonté. Ton corps freine. » | Une vieille voiture de collection arrêtée sur une route de montagne au crépuscule, frein à main serré, lumière dorée sur la carrosserie. |
