import fs from "node:fs";
import path from "node:path";

export function loadEnvFile(filePath = ".env") {
  const resolvedPath = path.resolve(filePath);

  if (!fs.existsSync(resolvedPath)) {
    return;
  }

  const lines = fs.readFileSync(resolvedPath, "utf8").split(/\r?\n/);

  for (const line of lines) {
    const trimmedLine = line.trim();

    if (!trimmedLine || trimmedLine.startsWith("#")) {
      continue;
    }

    const separatorIndex = trimmedLine.indexOf("=");

    if (separatorIndex === -1) {
      continue;
    }

    const key = trimmedLine.slice(0, separatorIndex).trim();
    const value = trimmedLine.slice(separatorIndex + 1).trim().replace(/^["']|["']$/g, "");

    if (key && process.env[key] === undefined) {
      process.env[key] = value;
    }
  }
}

export function getShopifyConfig() {
  loadEnvFile();

  const storeDomain = process.env.SHOPIFY_STORE_DOMAIN;
  const accessToken = process.env.SHOPIFY_ADMIN_ACCESS_TOKEN;
  const apiVersion = process.env.SHOPIFY_API_VERSION || "2023-01";

  if (!storeDomain) {
    throw new Error("SHOPIFY_STORE_DOMAIN is required.");
  }

  if (!accessToken) {
    throw new Error("SHOPIFY_ADMIN_ACCESS_TOKEN is required.");
  }

  return {
    accessToken,
    endpoint: `https://${storeDomain}/admin/api/${apiVersion}/graphql.json`,
  };
}
