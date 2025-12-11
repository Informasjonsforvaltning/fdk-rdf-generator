import { generateIds } from "./string";

export const getInformationmodel = (catalogCount: number, count: number) => {
  const catalogIds = generateIds(catalogCount);

  const nodes = catalogIds
    .map((catalogId) => {
      const ids = generateIds(count);

      const models = ids.map(model).join(",");
      const catalogs = ids.map(catalog).join(",");

      return [models, catalogs].join(",");
    })
    .join(",");

  return `{
  "@graph": [${nodes}],
  "@context": {
    "adms": "http://www.w3.org/ns/adms#",
    "owl": "http://www.w3.org/2002/07/owl#",
    "xsd": "http://www.w3.org/2001/XMLSchema#",
    "skos": "http://www.w3.org/2004/02/skos/core#",
    "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
    "vcard": "http://www.w3.org/2006/vcard/ns#",
    "xkos": "https://rdf-vocabulary.ddialliance.org/xkos/",
    "dct": "http://purl.org/dc/terms/",
    "modelldcatno": "https://data.norge.no/vocabulary/modelldcatno#",
    "digdir": "https://raw.githubusercontent.com/Informasjonsforvaltning/fdk-testdata/master/testdata/SkatvalModellkatalog.ttl#",
    "dcat": "http://www.w3.org/ns/dcat#",
    "locn": "http://www.w3.org/ns/locn#",
    "foaf": "http://xmlns.com/foaf/0.1/"
  }}`;
};

const model = (id: string) => `{
  "@id": "https://testdirektoratet.no/information-model/${id}",
  "dct:issued": {
    "@value": "2012-01-01T00:00:00+01:00",
    "@type": "xsd:dateTime"
  },
  "dct:license": {
    "@id": "http://creativecommons.org/licenses/by/4.0/deed.no"
  },
  "dcat:theme": {
    "@id": "https://psi.norge.no/los/tema/eiendom"
  },
  "@type": [
    "owl:NamedIndividual",
    "modelldcatno:InformationModel"
  ],
  "dct:publisher": {
    "@id": "https://organization-catalog.staging.fellesdatakatalog.digdir.no/organizations/312460726"
  },
  "dct:language": {
    "@id": "http://publications.europa.eu/resource/authority/language/NOB"
  },
  "owl:versionInfo": "1.0",
  "dct:title": {
    "@language": "nb",
    "@value": "Tittel ${id}"
  },
  "foaf:homepage": {
    "@id": "https://testdirektoratet.no/information-model/${id}"
  },
  "adms:status": {
    "@id": "http://purl.org/adms/status/Completed"
  },
  "dct:description": {
    "@language": "nb",
    "@value": "Beskrivelse ${id}: Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus nunc in felis pellentesque, ac gravida massa cursus. Maecenas viverra viverra justo eget facilisis."
  },
  "dct:spatial": {
    "@id": "http://publications.europa.eu/resource/authority/country/NOR"
  },
  "dcat:keyword": {
    "@language": "nb",
    "@value": "Adresse"
  }
}`;

const catalog = (id: string) => `{
  "@id": "digdir:Katalog",
  "modelldcatno:model": [{
    "@id": "https://testdirektoratet.no/information-model/${id}"
  }],
  "dct:title": {
    "@language": "nb",
    "@value": "Digitaliseringsdirektoratets modellkatalog"
  },
  "dct:publisher": {
    "@id": "https://organization-catalogue.staging.fellesdatakatalog.digdir.no/organizations/312460726"
  },
  "dct:license": {
    "@id": "http://creativecommons.org/licenses/by/4.0/deed.no"
  },
  "dct:description": {
    "@language": "nb",
    "@value": "Katalog med oversikt over Digitaliseringsdirektoratets modeller"
  },
  "@type": [
    "dcat:Catalog",
    "owl:NamedIndividual"
  ]
}`;
