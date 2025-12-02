export const getDataset = (id: string) => {
  const [catalog, datasets] = getCatalog(100000);

  return `{
  "@graph": [${catalog}, ${datasets}],
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

const getCatalog = (length: number = 3): [string, string] => {
  const ids = Array(length)
    .fill(0)
    .map(() => Bun.randomUUIDv7());

  const datasets = ids
    .map(
      (id) => `{
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
      "@value": "Beskrivelse ${id}"
    },
    "@type": "dcat:Dataset"
    }`,
    )
    .join(",");

  const catalog = `{
    "@id": "https://testdirektoratet.no/dataset-catalog",
    "dcat:dataset": [${ids
      .map((id) => `{"@id": "https://testdirektoratet.no/datasets/${id}"}`)
      .join(", ")}],
    "dct:publisher": {
        "@id": "https://organization-catalog.staging.fellesdatakatalog.digdir.no/organizations/312460726"
    },
    "dct:title": {
        "@language": "en",
        "@value": "Dataset catalog belonging to 312460726"
    },
    "@type": "dcat:Catalog"
  }`;

  return [catalog, datasets];
};
