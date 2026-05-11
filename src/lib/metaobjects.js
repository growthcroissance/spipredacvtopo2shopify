const EMPTY_SOURCE_VALUES = new Set(["NC", "NS", "."]);
const SPLIT_FIRST_VALUE_KEYS = new Set(["distance", "denivelee_positive"]);
const JSON_LIST_EXPORT_KEYS = new Set(["profil", "photo"]);

export function normalizeMetaobjectsForShopify(metaobjects) {
  return metaobjects.map((item) => ({
    ...item,
    metaobject: {
      ...item.metaobject,
      fields: item.metaobject.fields.map(normalizeFieldForShopify),
    },
  }));
}

export function normalizeFieldForShopify(field) {
  let value = field.value;

  if (EMPTY_SOURCE_VALUES.has(value)) {
    value = "";
  }

  if (SPLIT_FIRST_VALUE_KEYS.has(field.key)) {
    value = getFirstSlashValue(value);
  }

  return {
    ...field,
    value,
  };
}

export function toExportItinerary(item) {
  const fields = new Map();

  for (const field of item.metaobject.fields.map(normalizeFieldForShopify)) {
    fields.set(field.key, getExportValue(field));
  }

  return {
    handle: item.handle.handle,
    titre: fields.get("titre"),
    departement: fields.get("departement"),
    difficulte: fields.get("difficulte"),
    distance: fields.get("distance"),
    denivelee_positive: fields.get("denivelee_positive"),
    denivelee_negative: fields.get("denivelee_negative"),
    horaire: fields.get("horaire"),
    niveau: fields.get("niveau"),
    profil: fields.get("profil"),
    discipline: fields.get("discipline"),
    pays: fields.get("pays"),
    region: fields.get("region"),
    longitude_du_point_de_depart: fields.get("longitude_du_point_de_depart"),
    latitude_du_point_de_depart: fields.get("latitude_du_point_de_depart"),
    description: fields.get("description"),
    photo: fields.get("photo"),
  };
}

function getExportValue(field) {
  if (JSON_LIST_EXPORT_KEYS.has(field.key)) {
    return parseJsonList(field.value);
  }

  const list = parseJsonList(field.value);

  if (list.length > 0) {
    return list.join(", ");
  }

  return String(field.value ?? "").replace(/\[\\"|\\"\]/g, "").replace(/\[\]|\["|"\]/g, "");
}

function getFirstSlashValue(value) {
  return String(value ?? "").split("/")[0];
}

function parseJsonList(value) {
  if (!value) {
    return [];
  }

  if (Array.isArray(value)) {
    return value;
  }

  try {
    const parsedValue = JSON.parse(value);
    return Array.isArray(parsedValue) ? parsedValue : [];
  } catch {
    return [];
  }
}
