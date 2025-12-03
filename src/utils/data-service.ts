import { generateIds } from "./id";

export const getDataservice = () => {
  const ids = generateIds();

  const apis = ids
    .map(
      (id) => `{
    "@id": "https://testdirektoratet.no/data-services/${id}",
    "dcat:endpointURL": {
      "@id": "https://example.com"
    },
    "dct:title": {
      "@language": "nb",
      "@value": "Tittel ${id}"
    },
    "dct:publisher": {
      "@id": "https://organization-catalog.staging.fellesdatakatalog.digdir.no/organizations/312460726"
    },
    "dct:license": {
      "@id": "http://data.norge.no/nlod/no/2.0"
    },
    "dct:description": {
      "@language": "nb",
      "@value": "Beskrivelse ${id}"
    },
    "dct:accessRights": {
      "@id": "http://publications.europa.eu/resource/authority/access-right/PUBLIC"
    },
    "@type": "dcat:DataService"
    }`,
    )
    .join(",");

  const catalog = ids
    .map(
      (id) => `{
    "@id": "https://dataservice-catalog.staging.fellesdatakatalog.digdir.no/catalogs/312460726",

    "dcat:service": [
      {
        "@id": "https://testdirektoratet.no/data-services/${id}"
      },
      {
        "@id": "https://testdirektoratet.no/data-services/6290a62ee8ed2c5c6d2adda7"
      }
    ],
    "dct:title": {
        "@language": "nb",
        "@value": "Tittel ${id}"
    },
    "dct:publisher": {
      "@id": "https://organization-catalog.staging.fellesdatakatalog.digdir.no/organizations/312460726"
    },
    "@type": "dcat:Catalog"
  }`,
    )
    .join(",");

  return `{
  "@graph": [${apis}, ${catalog}],
  "@context": {
    "dct": "http://purl.org/dc/terms/",
    "rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
    "xsd": "http://www.w3.org/2001/XMLSchema#",
    "vcard": "http://www.w3.org/2006/vcard/ns#",
    "dcat": "http://www.w3.org/ns/dcat#",
    "foaf": "http://xmlns.com/foaf/0.1/"
  }}`;
};
