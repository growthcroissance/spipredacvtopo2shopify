import fs from "node:fs";
import path from "node:path";

import metaobjects from "../../data/metaobjects.js";
import { buildTableJson } from "../lib/table-json.js";

const outputPath = path.resolve("output/metaobjects-json.txt");
const tableJson = buildTableJson(metaobjects);

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, JSON.stringify(tableJson));

console.log(`Wrote ${tableJson.length} rows to ${outputPath}`);
