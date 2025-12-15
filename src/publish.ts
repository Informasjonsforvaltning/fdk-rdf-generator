import { promises as fs } from "fs";
import * as path from "path";

const branch = "generated";

async function run() {
  const fileRoot = path.join(process.cwd(), "file");

  async function collectFiles(dir: string): Promise<string[]> {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    const results: string[] = [];
    for (const entry of entries) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        results.push(...(await collectFiles(full)));
      } else if (entry.isFile() && entry.name.endsWith(".json")) {
        const rel = path.relative(fileRoot, full).split(path.sep).join("/");
        results.push(rel);
      }
    }
    return results;
  }

  const files = await collectFiles(fileRoot);

  for (const file of files) {
    try {
      const base = path.basename(file);
      const parts = base.split("-");
      const folder = path.dirname(file);
      const count = folder.split("-")[1] as string;
      const type = parts
        .slice(5)
        .join("-")
        .replace(/\.json$/, "") as keyof typeof typeMap;
      const catalogId = parts.slice(0, 5).join("-");
      const url = `https://raw.githubusercontent.com/Informasjonsforvaltning/fdk-rdf-generator/${branch}/file/${folder}/${catalogId}-${type}.json`;
      const payload = typeMap[type](catalogId, url, count);

      console.log(`Publishing ${file} as ${type} (${url})`);
      fetch(
        `https://harvest-admin.api.test.fellesdatakatalog.digdir.no/organizations/312460726/datasources`,
        {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            "Content-Type": "application/json",
            "X-API-Key": process.env.API_KEY || "Missing API Key",
          },
        },
      );
    } catch (error) {
      console.error(`Error processing file ${file}:`, error);
    } finally {
      // rate limit 10 requests/second
      await sleep(100);
    }
  }
}

const concept = (id: string, url: string, count: string) => ({
  dataSourceType: "SKOS-AP-NO",
  dataType: "concept",
  url: url,
  acceptHeaderValue: "application/ld+json",
  publisherId: "312460726",
  description: `${count} concepts, basic metadata, json-ld, ${id}`,
});

const dataservice = (id: string, url: string, count: string) => ({
  dataSourceType: "DCAT-AP-NO",
  dataType: "dataservice",
  url: url,
  acceptHeaderValue: "application/ld+json",
  publisherId: "312460726",
  description: `${count} data services, basic metadata, json-ld, ${id}`,
});

const dataset = (id: string, url: string, count: string) => ({
  dataSourceType: "DCAT-AP-NO",
  dataType: "dataset",
  url: url,
  acceptHeaderValue: "application/ld+json",
  publisherId: "312460726",
  description: `${count} datasets, basic metadata, json-ld, ${id}`,
});

const event = (id: string, url: string, count: string) => ({
  dataSourceType: "CPSV-AP-NO",
  dataType: "event",
  url: url,
  acceptHeaderValue: "application/ld+json",
  publisherId: "312460726",
  description: `${count} events, basic metadata, json-ld, ${id}`,
});

const informationModel = (id: string, url: string, count: string) => ({
  dataSourceType: "ModellDCAT-AP-NO",
  dataType: "informationmodel",
  url: url,
  acceptHeaderValue: "application/ld+json",
  publisherId: "312460726",
  description: `${count} information models, basic metadata, json-ld, ${id}`,
});

const service = (id: string, url: string, count: string) => ({
  dataSourceType: "CPSV-AP-NO",
  dataType: "publicService",
  url: url,
  acceptHeaderValue: "application/ld+json",
  publisherId: "312460726",
  description: `${count} services, basic metadata, json-ld, ${id}`,
});

const typeMap = {
  concept: concept,
  "data-service": dataservice,
  dataset: dataset,
  event: event,
  "information-model": informationModel,
  service: service,
};

const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
