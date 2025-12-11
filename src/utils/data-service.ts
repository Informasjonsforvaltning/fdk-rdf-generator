import { generateIds } from "./string";

export const getDataservice = (catalogId: string, count: number) => {
  const ids = generateIds(count);
  const dataservices = ids.map(dataservice).join(",");
  const catalogs = ids.map((id) => catalog(id, catalogId)).join(",");
  const nodes = [dataservices, catalogs].join(",");

  return `{
  "@graph": [${nodes}],
  "@context": {
    "dct": "http://purl.org/dc/terms/",
    "rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
    "xsd": "http://www.w3.org/2001/XMLSchema#",
    "vcard": "http://www.w3.org/2006/vcard/ns#",
    "dcat": "http://www.w3.org/ns/dcat#",
    "foaf": "http://xmlns.com/foaf/0.1/"
  }}`;
};

const dataservice = (id: string) => `{
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
    "@value": "Beskrivelse ${id}: Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus nunc in felis pellentesque, ac gravida massa cursus. Maecenas viverra viverra justo eget facilisis."
  },
  "dct:accessRights": {
    "@id": "http://publications.europa.eu/resource/authority/access-right/PUBLIC"
  },
  "@type": "dcat:DataService"
  ,
  "http://www.w3.org/ns/dcat#keyword": {
    "@language": "en",
    "@value": "Keyword ${id}"
  },
  "http://xmlns.com/foaf/0.1/page": {
    "@id": "https://testdirektoratet.no/data-services/${id}/documentation"
  },
  "http://www.w3.org/ns/dcat#theme": {
    "@id": "http://publications.europa.eu/resource/authority/data-theme/ENVI"
  },
  "http://www.w3.org/ns/dcat#endpointDescription": {
    "@id": "https://testdirektoratet.no/data-services/${id}/endpoint-description"
  },
  "http://purl.org/dc/terms/format": [
    {
      "@id": "https://publications.europa.eu/resource/authority/file-type/XML"
    },
    {
      "@id": "https://publications.europa.eu/resource/authority/file-type/TXT"
    }
  ],
  "dcat:servesDataset": {
    "@id": "https://testdirektoratet.no/dataset/relation"
  }
}`;

const catalog = (id: string, catalogId: string) => `{
  "@id": "https://testdirektoratet.no/api-catalog/${catalogId}",
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
}`;
