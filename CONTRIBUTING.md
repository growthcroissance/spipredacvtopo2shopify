# Contribution

Ce dépôt suit un workflow inspiré de Git Flow pour éviter de reprendre le développement directement sur `main`.

## Branches

- `main`: code prêt pour production uniquement.
- `develop`: branche d'intégration pour les prochains développements.
- `feature/<description>`: nouvelle fonctionnalité ou chantier de reprise, depuis `develop`.
- `release/<version>`: stabilisation avant livraison, depuis `develop`.
- `hotfix/<description>`: correctif urgent de production, depuis `main`.

Le dépôt ne contient actuellement que `main`. Avant de reprendre les développements, créer `develop` depuis `main`, puis travailler depuis des branches `feature/*`.

## Commits

Utiliser Conventional Commits:

```text
feat: add spip import parser
fix: keep empty metaobject fields stable
docs: document repository workflow
refactor: split Shopify upload client
chore: update repository structure
```

Garder les commits petits, relisibles et centrés sur un seul sujet.

## Pull requests

- Ouvrir les PR de fonctionnalités vers `develop`.
- Lancer les vérifications pertinentes avant revue.
- Ne pas fusionner directement dans `main` ou `develop`.
- Les releases partent de `release/<version>`, puis sont fusionnées dans `main` et `develop`.
- Chaque fusion vers `main` doit correspondre à une version SemVer taguée.

## Versions

Utiliser Semantic Versioning avec des tags `vMAJOR.MINOR.PATCH`.

Exemples:

- `v1.0.0`
- `v1.1.0`
- `v1.1.1`

## Vérifications locales

```shell
npm run check
npm run create-json
```

Ne pas lancer `npm run upsert-metaobjects` sans vérifier le `.env` local et l'impact attendu sur Shopify.
