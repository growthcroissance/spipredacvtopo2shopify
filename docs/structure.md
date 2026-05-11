# Structure du dépôt

Ce dépôt transforme des itinéraires SPIP/VTOPO exportés en metaobjects Shopify, puis génère aussi le JSON utilisé par le tableau d'itinéraires.

## Arborescence

- `data/metaobjects.js`: données source des itinéraires au format attendu par Shopify.
- `src/commands/create-json.js`: commande de génération du JSON de tableau.
- `src/commands/upsert-metaobjects.js`: commande d'upload/upsert des metaobjects Shopify.
- `src/lib/`: transformation et normalisation des données.
- `src/shopify/`: requêtes et client Shopify GraphQL.
- `output/`: fichiers générés localement, ignorés par Git.

## Configuration

Les identifiants Shopify ne doivent pas être versionnés. Créer un fichier `.env` local en partant de `.env.example`.
