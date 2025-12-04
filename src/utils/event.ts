import { generateIds } from "./string";

export const getEvent = () => {
  const ids = generateIds();

  const event = ids
    .map(
      (id) => `{
    "@id": "https://testdirektoratet.no/event/${id}",
    "dct:description": [{
      "@language": "nb",
      "@value": "Beskrivelse ${id}: Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus nunc in felis pellentesque, ac gravida massa cursus. Maecenas viverra viverra justo eget facilisis."
    }],
    "dct:title": [{
      "@language": "nb",
      "@value": "Tittel ${id}"
    }],
    "dct:identifier": {
      "@value": "https://testdirektoratet.no/event/${id}",
      "@type": "xsd:anyURI"
    },
    "dct:subject": {
      "@id": "https://testdirektoratet.no/event/${id}/subject"
    },
    "dct:type": {
      "@id": "https://data.norge.no/vocabulary/event-type#data-changed"
    },
    "@type": "cv:Event",
    "cpsvno:mayTrigger": {
      "@id": "https://testdirektoratet.no/service/relation"
    }
  }`,
    )
    .join(",");

  const concept = ids
    .map(
      (id) => `{
    "@id": "https://testdirektoratet.no/event/${id}/subject",
    "skos:prefLabel": {
      "@language": "nb",
      "@value": "Begrepstittel ${id}"
    },
    "@type": "skos:Concept"
  }`,
    )
    .join(",");

  return `{
  "@graph": [${event}, ${concept}],
  "@context": {
    "schema": "http://schema.org/",
    "cpsvno": "https://data.norge.no/vocabulary/cpsvno#",
    "eli": "http://data.europa.eu/eli/ontology#",
    "adms": "http://www.w3.org/ns/adms#",
    "org": "http://www.w3.org/ns/org#",
    "xsd": "http://www.w3.org/2001/XMLSchema#",
    "skos": "http://www.w3.org/2004/02/skos/core#",
    "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
    "vcard": "http://www.w3.org/2006/vcard/ns#",
    "xkos": "http://rdf-vocabulary.ddialliance.org/xkos#",
    "cv": "http://data.europa.eu/m8g/",
    "dct": "http://purl.org/dc/terms/",
    "cccev": "http://data.europa.eu/m8g/cccev/",
    "rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
    "dcatno": "https://data.norge.no/vocabulary/dcatno#",
    "time": "ttp://www.w3.org/2006/time#",
    "dcat": "http://www.w3.org/ns/dcat#",
    "locn": "http://www.w3.org/ns/locn#",
    "odrl": "http://www.w3.org/ns/odrl/2/",
    "cpsv": "http://purl.org/vocab/cpsv#",
    "foaf": "http://xmlns.com/foaf/0.1/"
  }}`;
};
