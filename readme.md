## SPIP Redac VTOPO vers Shopify

Ce dépôt contient les outils de reprise des itinéraires VTOPO exportés depuis SPIP vers Shopify.

## Installation

```shell
npm install
```

Copier `.env.example` en `.env`, puis renseigner le token Shopify Admin avec les droits metaobjects nécessaires.

```shell
SHOPIFY_STORE_DOMAIN=vtopo.myshopify.com
SHOPIFY_ADMIN_ACCESS_TOKEN=shpat_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
SHOPIFY_API_VERSION=2023-01
```

## Commandes

Générer le JSON consommé par le tableau d'itinéraires:

```shell
npm run create-json
```

Le fichier est généré dans `output/metaobjects-json.txt`.

Créer ou mettre à jour les metaobjects Shopify:

```shell
npm run upsert-metaobjects
```

Les erreurs éventuelles sont écrites dans `output/log.txt`.

Vérifier la syntaxe des scripts:

```shell
npm run check
```

## Structure

Voir `docs/structure.md`.

## Contribution

Voir `CONTRIBUTING.md` pour le workflow de branches, commits, PR et releases.

Voir `docs/repository-workflow-audit.md` pour l'audit de reprise du dépôt.
