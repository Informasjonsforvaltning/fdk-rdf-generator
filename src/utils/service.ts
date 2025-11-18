export const getService = (id: string) => {
  return `{
  "@id": "https://platform.altinn.no/resourceRegistry/pol-anmeldelse-ressurs",
  "dct:keyword": [
    {
      "@language": "nb",
      "@value": "politiet"
    },
    {
      "@language": "nb",
      "@value": "anmeldelse"
    },
    {
      "@language": "nb",
      "@value": "reported offence"
    },
    {
      "@language": "nb",
      "@value": "offence"
    },
    {
      "@language": "nb",
      "@value": "melding"
    },
    {
      "@language": "nb",
      "@value": "police"
    }
  ],
  "dct:description": [
    {
      "@language": "nb",
      "@value": "Gir tilgang til å lese innsendte anmeldelser på vegne av virksomheten."
    },
    {
      "@language": "nn",
      "@value": "Gir tilgang til å lesa innsende anmeldelser på vegner av verksemda."
    },
    {
      "@language": "en",
      "@value": "Gives permission to read reported offences on behalf of the business."
    }
  ],
  "dct:title": [
    {
      "@language": "nb",
      "@value": "Anmeldelse"
    },
    {
      "@language": "en",
      "@value": "Reported offence"
    },
    {
      "@language": "nn",
      "@value": "Anmeldelse (melding)"
    }
  ],
  "cv:hasCompetentAuthority": {
    "@id": "https://organization-catalogue.fellesdatakatalog.digdir.no/organizations/915429785"
  },
  "dct:identifier": "pol-anmeldelse-ressurs",
  "@type": "cpsv:PublicService",
  "@context": {
    "schema": "http://schema.org/",
    "cv": "http://data.europa.eu/m8g/",
    "eli": "http://data.europa.eu/eli/ontology#",
    "dct": "http://purl.org/dc/terms/",
    "rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
    "xsd": "http://www.w3.org/2001/XMLSchema#",
    "skos": "http://www.w3.org/2004/02/skos/core#",
    "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
    "dcat": "http://www.w3.org/ns/dcat#",
    "cpsv": "http://purl.org/vocab/cpsv#",
    "foaf": "http://xmlns.com/foaf/0.1/"
  }
}`;
};
