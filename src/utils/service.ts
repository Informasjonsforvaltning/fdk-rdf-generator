import { generateIds } from "./string";

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
    "dct:isPartOf": {
      "@id": "https://testdirektoratet.no/datasets/relation"
    },
    "dct:description": {
      "@language": "nb",
      "@value": "Tjenesteresultat beskrivelse ${id}: Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus nunc in felis pellentesque, ac gravida massa cursus. Maecenas viverra viverra justo eget facilisis."
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
      "@value": "Beskrivelse ${id}: Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus nunc in felis pellentesque, ac gravida massa cursus. Maecenas viverra viverra justo eget facilisis."
    },
    "cv:processingTime": "P4W",
    "cpsv:produces": {
      "@id": "https://testdirektoratet.no/service/${id}/output"
    },
    "dct:identifier": "${id}",
    "cv:contactPoint": {
      "@id": "https://testdirektoratet.no/service/${id}/contactpoint"
    },
    "dct:subject": {
      "@id": "https://testdirektoratet.no/concepts/relation"
    },
    "adms:status": {
      "@id": "http://publications.europa.eu/resource/authority/distribution-status/COMPLETED"
    },
    "cv:thematicArea": [
      {
        "@id": "http://eurovoc.europa.eu/2663"
      },
      {
        "@id": "https://psi.norge.no/los/ord/parkering-og-hvileplasser"
      }
    ],
    "foaf:homepage": {
      "@id": "https://testdirektoratet.no/homepage"
    }
  }`,
    )
    .join(",");

  const contactpoint = ids
    .map(
      (id) => `{
    "@id": "https://testdirektoratet.no/service/${id}/contactpoint",
    "cv:telephone": "+4700000000",
    "cv:email": "test@digdir.no"
  }`,
    )
    .join(",");

  return `{
  "@graph": [${output}, ${service}, ${contactpoint}],
  "@context": {
    "cv": "http://data.europa.eu/m8g/",
    "dct": "http://purl.org/dc/terms/",
    "cpsv": "http://purl.org/vocab/cpsv#",
    "foaf": "http://xmlns.com/foaf/0.1/"
  }}`;
};
