# Agent de publication Instagram

L'agent publie chaque jour le carrousel prévu dans `calendrier.json`, à l'heure prévue, sans intervention.
Il ne publie **que** les lignes marquées `"valide": true`. Tout le reste est simulé.

## Ce que fait l'agent

1. Une tâche planifiée lance une session Claude chaque jour prévu, à l'heure prévue.
2. La session exécute `node publier/publier.js --publier`.
3. Le script envoie les 7 planches (en JPEG, hébergées sur ce dépôt GitHub public) et la légende (`carrousels/<carrousel>/legende.md`) à l'API officielle d'Instagram.
4. Il note la publication dans `journal.json` et passe la ligne du calendrier en `"statut": "publié"`.

## Ce que Quentin doit faire, une seule fois (environ 30 minutes)

1. **Compte professionnel** : dans Instagram, Paramètres → Type de compte → passer en compte *Créateur* ou *Professionnel* (gratuit).
2. **Application Meta** : sur developers.facebook.com, créer une application, ajouter le produit *Instagram* (« API Instagram avec connexion Instagram »), puis ajouter son propre compte Instagram comme testeur.
3. **Jeton d'accès** : dans l'application, générer un jeton pour son compte avec les autorisations `instagram_business_basic` et `instagram_business_content_publish`. Noter aussi l'**identifiant du compte Instagram** (un nombre).
4. **Donner le jeton à Claude par le formulaire sécurisé** (jamais dans la conversation) : Claude le demande pour l'hôte `graph.instagram.com` ; il est ensuite injecté automatiquement dans les requêtes.
5. **Valider le calendrier** : dire à Claude quelles dates passer en `"valide": true`.

## Limites connues

- **Jeton de 60 jours** : le jeton longue durée expire au bout de 60 jours ; il faudra en générer un nouveau. L'agent signale l'erreur s'il a expiré.
- **50 publications par 24 h** au maximum par l'API ; un carrousel compte pour une.
- **Images publiques** : elles sont servies depuis `raw.githubusercontent.com`, donc le dépôt doit rester public. Tout ce qui est dans le dépôt est lisible par tous, y compris `QUENTIN.md`.
- **Pas encore testé en réel** : le format JPEG, l'en-tête d'authentification injecté par le proxy et la version de l'API (`v24.0` par défaut) sont à confirmer au premier essai.
