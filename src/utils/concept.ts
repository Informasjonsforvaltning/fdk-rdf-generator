import { generateIds } from "./string";

export const getConcept = () => {
  const ids = generateIds();

  const resource = ids
    .map(
      (id) => `{
    "@id": "https://testdirektoratet.no/concept/${id}/definition/source",
    "rdfs:label": {
      "@language": "nb",
      "@value": "Verdi ${id}"
    },
    "@type": "rdfs:Resource"
  }`,
    )
    .join(",");

  const definition = ids
    .map(
      (id) => `{
    "@id": "https://testdirektoratet.no/concept/${id}/definition",
    "skosno:relationshipWithSource": {
      "@id": "https://data.norge.no/vocabulary/relationship-with-source-type#derived-from-source"
    },
    "dct:source": {
      "@id": "https://testdirektoratet.no/concept/${id}/definition/source"
    },
    "rdf:value": {
      "@language": "nb",
      "@value": "Verdi ${id}: Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus nunc in felis pellentesque, ac gravida massa cursus. Maecenas viverra viverra justo eget facilisis."
    },
    "@type": "http://publications.europa.eu/ontology/euvoc#XlNote"
  }`,
    )
    .join(",");

  const concept = ids
    .map(
      (id) => `{
    "@id": "https://testdirektoratet.no/concept/${id}",
    "http://publications.europa.eu/ontology/euvoc#startDate": {
      "@value": "2000-01-01",
      "@type": "xsd:date"
    },
    "http://publications.europa.eu/ontology/euvoc#endDate": {
      "@value": "2002-01-01",
      "@type": "xsd:date"
    },
    "@type": "skos:Concept",
    "dct:modified": {
      "@value": "2001-01-01",
      "@type": "xsd:date"
    },
    "dct:issued": {
      "@value": "1999-01-01",
      "@type": "xsd:date"
    },
    "http://publications.europa.eu/ontology/euvoc#status": {
      "@id": "http://publications.europa.eu/resource/authority/concept-status/CURRENT"
    },
    "skos:prefLabel": [{
      "@language": "nb",
      "@value": "Tittel ${id}"
    }],
    "skos:scopeNote": {
      "@language": "nb",
      "@value": "Verdi ${id}"
    },
    "dct:publisher": {
      "@id": "https://data.brreg.no/enhetsregisteret/api/enheter/974761076"
    },
    "http://publications.europa.eu/ontology/euvoc#xlDefinition": {
      "@id": "https://testdirektoratet.no/concept/${id}/definition/source"
    },
    "dcat:contactPoint": {
      "@id": "https://testdirektoratet.no/concept/${id}/contactpoint"
    },
    "rdfs:seeAlso": {
      "@id": "https://testdirektoratet.no/concept/relation"
    }
  }`,
    )
    .join(",");

  const contactpoint = ids
    .map(
      (id) => `{
    "@id": "https://testdirektoratet.no/concept/${id}/contactpoint",
    "vcard:hasTelephone": {
      "@id": "tel:+4700000000"
    },
    "vcard:hasEmail": {
      "@id": "mailto:test@digdir.no"
    }
  }`,
    )
    .join(",");

  return `{
  "@graph": [${resource}, ${definition}, ${concept}, ${contactpoint}],
  "@context": {
    "schema": "http://schema.org/",
    "adms": "http://www.w3.org/ns/adms#",
    "iso": "http://iso.org/25012/2008/dataquality/",
    "spdx": "http://spdx.org/rdf/terms#",
    "owl": "http://www.w3.org/2002/07/owl#",
    "dqv": "http://www.w3.org/ns/dqv#",
    "skosno": "https://data.norge.no/vocabulary/skosno#",
    "xsd": "http://www.w3.org/2001/XMLSchema#",
    "skos": "http://www.w3.org/2004/02/skos/core#",
    "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
    "vcard": "http://www.w3.org/2006/vcard/ns#",
    "oa": "http://www.w3.org/ns/prov#",
    "dct": "http://purl.org/dc/terms/",
    "rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
    "dcat": "http://www.w3.org/ns/dcat#",
    "foaf": "http://xmlns.com/foaf/0.1/"
  }}`;
};
