export const getDataset = (id: string) => {
  return `{
  "@graph": [
    {
      "@id": "https://data.dfo.no/distributions/84189fc8-de97-475e-bfd7-c34c761ceb9b",
      "dcat:downloadURL": {
        "@id": "https://adaapnedataprodst.blob.core.windows.net/klimaintensitet/2019/Klimaintensitet_2019.csv"
      },
      "dcat:accessURL": {
        "@id": "https://dfo.no/nokkeltall-og-statistikk/utslippsfaktorer-statlige-innkjop#anchorTOC_Tabell_med_utslippsfaktorer_2"
      },
      "dct:title": {
        "@language": "nb",
        "@value": "CSV-fil om klimaintensitet"
      },
      "dct:license": {
        "@id": "https://creativecommons.org/licenses/by/4.0/deed.no"
      },
      "dct:format": {
        "@id": "http://publications.europa.eu/resource/authority/file-type/CSV"
      },
      "dct:description": {
        "@language": "nb",
        "@value": "<div><span style=\"display:inline !important\">CSV-fil med klimaintensiteter.</span></div>"
      },
      "@type": "dcat:Distribution"
    },
    {
      "@id": "https://data.dfo.no/datasets/c52f7edf-98b3-404b-a4d2-e2677fb0572d/.well-known/skolem/8ecf70df-6694-3b06-bcb5-1043d5dbbb08",
      "ns1:hasOrganizationName": {
        "@language": "nb",
        "@value": "Direktoratet for forvaltning og økonomistyring"
      },
      "ns1:hasEmail": {
        "@id": "mailto:data@dfo.no"
      },
      "@type": "ns1:Organization"
    },
    {
      "@id": "https://data.dfo.no/datasets/c52f7edf-98b3-404b-a4d2-e2677fb0572d",
      "dcat:distribution": {
        "@id": "https://data.dfo.no/distributions/84189fc8-de97-475e-bfd7-c34c761ceb9b"
      },
      "dct:title": {
        "@language": "nb",
        "@value": "Utslippsintensiteter"
      },
      "dct:description": {
        "@language": "nb",
        "@value": "Dataene består av utslipp (CO2-ekvivalenter) per krone fordelt på innkjøpsrelevante artskontoer i henhold til statsregnskapet. Dataene gir utslippsintensiteter fordelt på scope 1, 2 og 3, samt innland og utland."
      },
      "dct:accrualPeriodicity": {
        "@id": "http://publications.europa.eu/resource/authority/frequency/IRREG"
      },
      "dcat:keyword": {
        "@language": "nb",
        "@value": "Anskaffelser"
      },
      "dct:publisher": {
        "@id": "https://organization-catalogue.fellesdatakatalog.digdir.no/organizations/986252932"
      },
      "@type": "dcat:Dataset",
      "dcat:contactPoint": {
        "@id": "https://data.dfo.no/datasets/c52f7edf-98b3-404b-a4d2-e2677fb0572d/.well-known/skolem/8ecf70df-6694-3b06-bcb5-1043d5dbbb08"
      },
      "dct:accessRights": {
        "@id": "http://publications.europa.eu/resource/authority/access-right/PUBLIC"
      },
      "dcat:theme": {
        "@id": "https://psi.norge.no/los/ord/natur-klima-og-miljo"
      }
    }
  ],
  "@context": {
    "dct": "http://purl.org/dc/terms/",
    "dcat": "http://www.w3.org/ns/dcat#",
    "ns1": "http://www.w3.org/2006/vcard/ns#"
  }
}`;
};
