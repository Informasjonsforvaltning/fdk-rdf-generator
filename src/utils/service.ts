import { generateIds } from "./id";

export const getService = () => {
  const ids = generateIds();

  const output = ids
    .map(
      (id) => `{
    "@id": "https://testdirektoratet.no/service/${id}/output",
    "dct:title": {
      "@language": "nb",
      "@value": "Tjenesteresultat ${id}"
    },
    "@type": "cv:Output"
  }`,
    )
    .join(",");

  const service = ids
    .map(
      (id) => `{
    "@id": "https://testdirektoratet.no/service/${id}",
    "dct:title": {
      "@language": "nb",
      "@value": "Tittel ${id}"
    },
    "cpsv:hasCompetentAuthority": {
      "@id": "https://organization-catalog.staging.fellesdatakatalog.digdir.no/organizations/312460726"
    },
    "@type": "cpsv:PublicService",
    "dct:description": {
      "@language": "nb",
      "@value": "Beskrivelse ${id}"
    },
    "cv:processingTime": "P4W",
    "cpsv:produces": {
      "@id": "https://testdirektoratet.no/service/${id}/output"
    },
    "dct:identifier": "${id}"
  }`,
    )
    .join(",");

  return `{
  "@graph": [${output}, ${service}],
  "@context": {
    "cv": "http://data.europa.eu/m8g/",
    "dct": "http://purl.org/dc/terms/",
    "cpsv": "http://purl.org/vocab/cpsv#",
    "foaf": "http://xmlns.com/foaf/0.1/"
  }}`;
};
