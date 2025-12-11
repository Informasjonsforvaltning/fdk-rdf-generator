import { generateIds } from "./string";

export const getDataset = (catalogCount: number, count: number) => {
  const catalogIds = generateIds(catalogCount);

  const nodes = catalogIds
    .map((catalogId) => {
      const ids = generateIds(count);

      const catalogs = catalog(ids);
      const datasets = ids.map(dataset).join(",");
      const contactpoints = ids.map(contactpoint).join(",");
      const distributions = ids.map(distribution).join(",");

      return [catalogs, datasets, contactpoints, distributions].join(",");
    })
    .join(",");

  return `{
  "@graph": [${nodes}],
  "@context": {
    "schema": "http://schema.org/",
    "cpsvno": "https://data.norge.no/vocabulary/cpsvno#",
    "eli": "http://data.europa.eu/eli/ontology#",
    "adms": "http://www.w3.org/ns/adms#",
    "iso": "http://iso.org/25012/2008/dataquality/",
    "dqv": "http://www.w3.org/ns/dqv#",
    "xsd": "http://www.w3.org/2001/XMLSchema#",
    "skos": "http://www.w3.org/2004/02/skos/core#",
    "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
    "vcard": "http://www.w3.org/2006/vcard/ns#",
    "oa": "http://www.w3.org/ns/oa#",
    "dct": "http://purl.org/dc/terms/",
    "rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
    "dcat": "http://www.w3.org/ns/dcat#",
    "prov": "http://www.w3.org/ns/prov#",
    "cpsv": "http://purl.org/vocab/cpsv#",
    "foaf": "http://xmlns.com/foaf/0.1/"
  }}`;
};

const catalog = (ids: string[]) => `{
  "@id": "https://testdirektoratet.no/dataset-catalog",
  "dcat:dataset": [${ids
    .map((id) => `{"@id": "https://testdirektoratet.no/datasets/${id}"}`)
    .join(",")}],
  "dct:publisher": {
    "@id": "https://organization-catalog.staging.fellesdatakatalog.digdir.no/organizations/312460726"
  },
  "dct:title": {
    "@language": "en",
    "@value": "Dataset catalog belonging to 312460726"
  },
  "@type": "dcat:Catalog"
}`;

const dataset = (id: string) => `{
  "@id": "https://testdirektoratet.no/datasets/${id}",
  "dct:title": {
    "@language": "nb",
    "@value": "Tittel ${id}"
  },
  "dct:publisher": {
    "@id": "https://organization-catalog.staging.fellesdatakatalog.digdir.no/organizations/312460726"
  },
  "dct:description": {
    "@language": "nb",
    "@value": "Beskrivelse ${id}: Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus nunc in felis pellentesque, ac gravida massa cursus. Maecenas viverra viverra justo eget facilisis."
  },
  "@type": "dcat:Dataset",
  "dcat:contactPoint": {
    "@id": "https://testdirektoratet.no/datasets/${id}/contactpoint"
  },
  "http://www.w3.org/ns/dcat#theme": {
    "@id": "http://publications.europa.eu/resource/authority/data-theme/ENVI"
  },
  "dct:accessRights": {
    "@id": "http://publications.europa.eu/resource/authority/access-right/PUBLIC"
  },
  "dct:subject": {
    "@id": "https://testdirektoratet.no/concepts/relation"
  },
  "dct:relation": {
    "@id": "https://testdirektoratet.no/datasets/relation"
  },
  "dcat:distribution": {
    "@id": "https://testdirektoratet.no/dataset/${id}/distribution"
  }
}`;

const contactpoint = (id: string) => `{
  "@id": "https://testdirektoratet.no/dataset/${id}/contactpoint",
  "vcard:hasTelephone": {
    "@id": "tel:+4700000000"
  },
  "vcard:hasEmail": {
    "@id": "mailto:test@digdir.no"
  }
}`;

const distribution = (id: string) => `{
  "@id": "https://testdirektoratet.no/dataset/${id}/distribution",
  "dcat:accessURL": {
    "@id": "https://testdirektoratet.no/dataset/${id}/distribution/access"
  },
  "dct:title": [
    {
     "@language": "nb",
       "@value": "Distribusjon ${id}"
    }
  ],
  "dct:format": {
    "@id": "http://publications.europa.eu/resource/authority/file-type/JSON"
  },
  "foaf:page": {
    "@id": "https://testdirektoratet.no/dataset/${id}/distribution/page"
  },
  "dct:conformsTo": {
    "@id": "https://testdirektoratet.no/dataset/${id}/distribution/conforms-to"
  },
  "dcat:mediaType": {
    "@id": "https://www.iana.org/assignments/media-types/application/json"
  },
  "dct:description": [
    {
      "@language": "nb",
      "@value": "Beskrivelse distribusjon ${id}"
    }
  ],
  "dcat:downloadURL": {
    "@id": "https://testdirektoratet.no/dataset/${id}/distribution/download"
  },
  "@type": "dcat:Distribution"
}`;
