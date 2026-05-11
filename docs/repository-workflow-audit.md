# Audit Workflow Dépôt

Audit réalisé pour préparer la reprise du développement.

## État observé

- Branche courante: `main`.
- Branches distantes observées: `origin/main`, `upstream/main`.
- Branche `develop`: absente.
- Tags SemVer: aucun tag présent.
- CI/CD: aucun dossier `.github` ni workflow détecté.
- Documentation de contribution: absente avant cet audit.
- Fichiers générés: `output/` est ignoré par Git.
- Dépendances installées: `node_modules/` est ignoré par Git.

## Écarts par rapport au workflow cible

- Le développement se fait encore depuis `main`; la reprise devrait passer par `develop` puis `feature/*`.
- L'historique existant ne suit pas Conventional Commits.
- Aucune convention de PR, version ou release n'était documentée.
- Aucune protection de branche ou CI/CD n'est documentée dans le dépôt.

## Recommandations sûres déjà documentées

- Ajouter `CONTRIBUTING.md` avec le modèle de branches, commits, PR et releases.
- Documenter que `npm run upsert-metaobjects` modifie Shopify et doit être lancé avec prudence.
- Garder les fichiers générés dans `output/` hors versionnement.
- Garder les secrets Shopify dans `.env`, jamais dans le code.

## Décisions à valider avant modification

Ces sujets ne doivent pas être modifiés sans validation explicite:

- Création de la branche `develop`.
- Ajout ou modification de workflows CI/CD.
- Configuration des protections de branches.
- Définition d'une stratégie de déploiement automatique.
- Création de tags de release ou publication d'une version.
