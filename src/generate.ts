import { mkdir, writeFile } from "fs/promises";
import path from "path";
import { getDataset } from "./utils/dataset";
import { getDataservice } from "./utils/data-service";
import { getService } from "./utils/service";
import { getEvent } from "./utils/event";
import { getConcept } from "./utils/concept";
import { getInformationmodel } from "./utils/information-model";

const outDir = path.resolve("file");

const generators: Record<string, () => string> = {
  "dataset.json": getDataset,
  "data-service.json": getDataservice,
  "service.json": getService,
  "event.json": getEvent,
  "concept.json": getConcept,
  "information-model.json": getInformationmodel,
};

async function run() {
  await mkdir(outDir, { recursive: true });

  for (const [fileName, gen] of Object.entries(generators)) {
    const dest = path.join(outDir, fileName);
    try {
      const raw = gen();
      let output = raw;

      try {
        const parsed = JSON.parse(raw);
        output = JSON.stringify(parsed);
      } catch (err) {
        console.warn(
          `${fileName}: generated content is not valid JSON — writing raw output`,
        );
      }

      await writeFile(dest, output, "utf8");
      console.log(`Wrote ${dest}`);
    } catch (err) {
      console.error(`Failed to write ${dest}:`, err);
    }
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
