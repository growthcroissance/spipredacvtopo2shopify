import { toExportItinerary } from "./metaobjects.js";

export function buildTableJson(metaobjects) {
  return metaobjects.map(toExportItinerary).map(toTableRow);
}

function toTableRow(itineraire) {
  return [
    {
      html: `<a class="niveau niveau-${badgeColor(itineraire.niveau)}" href='/pages/itineraire/${itineraire.handle}'>${itineraire.titre}</a>`,
      value: `${itineraire.titre}`,
    },
    {
      html: `${itineraire.departement}`,
      value: `${itineraire.departement}`,
    },
    {
      html: `${itineraire.difficulte}`,
      value: `${itineraire.difficulte}`,
    },
    {
      html: `${itineraire.distance ? itineraire.distance + "km" : "0km"}`,
      value: `${itineraire.distance}`,
    },
    {
      html: `${itineraire.denivelee_positive ? itineraire.denivelee_positive + "m" : "0m"}`,
      value: `${itineraire.denivelee_positive}`,
    },
    {
      html: `${itineraire.denivelee_negative ? itineraire.denivelee_negative + "m" : "0m"}`,
      value: `${itineraire.denivelee_negative}`,
    },
    {
      html: `${itineraire.horaire === "00:00" ? "00:00" : itineraire.horaire}`,
      value: `${countDurationMinutes((itineraire.horaire === "00:00" ? "" : itineraire.horaire).replace(":", ""))}`,
    },
    {
      html: "",
      value: `${itineraire.niveau}`,
    },
    {
      html: "",
      value: itineraire.profil,
    },
    {
      html: `${itineraire.discipline}`,
      value: `${itineraire.discipline}`,
    },
    {
      html: "",
      value: `${itineraire.pays}`,
    },
    {
      html: "",
      value: `${itineraire.region}`,
    },
    {
      html: "",
      value: `${itineraire.latitude_du_point_de_depart}`,
    },
    {
      html: "",
      value: `${itineraire.longitude_du_point_de_depart}`,
    },
    {
      html: "",
      value: `${itineraire.description}`,
    },
    {
      html: "",
      value: itineraire.photo,
    },
  ];
}

function countDurationMinutes(value) {
  const paddedValue = String(value).padStart(4, "0");
  const hours = Number.parseInt(paddedValue.slice(0, 2), 10);
  const minutes = Number.parseInt(paddedValue.slice(2, 4), 10);

  return minutes + hours * 60;
}

function badgeColor(value) {
  switch (value) {
    case "Initiés":
      return "init";
    case "Famille et Initiation":
      return "famille";
    default:
      return "expert";
  }
}
