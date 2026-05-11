import upsertMetaobjectMutation from "./metaobject-upsert.mutation.js";

export async function upsertMetaobject({ endpoint, accessToken, variables }) {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
      "X-Shopify-Access-Token": accessToken,
    },
    body: JSON.stringify({
      query: upsertMetaobjectMutation,
      variables,
    }),
  });

  const payload = await response.json();

  if (!response.ok) {
    throw new Error(`Shopify request failed (${response.status}): ${JSON.stringify(payload)}`);
  }

  return payload;
}
