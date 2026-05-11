import fs from "node:fs";
import path from "node:path";

import metaobjects from "../../data/metaobjects.js";
import { getShopifyConfig } from "../config.js";
import { normalizeMetaobjectsForShopify } from "../lib/metaobjects.js";
import { upsertMetaobject } from "../shopify/client.js";

const outputPath = path.resolve("output/log.txt");
const shopifyConfig = getShopifyConfig();
const normalizedMetaobjects = normalizeMetaobjectsForShopify(metaobjects);
const errors = [];

console.log("Total number:", normalizedMetaobjects.length);

for (const [index, variables] of normalizedMetaobjects.entries()) {
  console.log("index =>", index);

  try {
    const payload = await upsertMetaobject({
      ...shopifyConfig,
      variables,
    });

    console.log(payload.data);

    const userErrors = payload.data?.metaobjectUpsert?.userErrors ?? [];

    if (userErrors.length > 0) {
      errors.push({
        index,
        errorMessage: userErrors,
        object: variables,
      });
    }
  } catch (error) {
    errors.push({
      index,
      errorMessage: error.message,
      object: variables,
    });
    console.error(error);
  }
}

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, `${JSON.stringify(errors, null, 2)}\n`);

console.log(`Wrote ${errors.length} errors to ${outputPath}`);
