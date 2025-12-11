import { mkdir, writeFile } from "fs/promises";
import path from "path";
import { getDataset } from "./utils/dataset";
import { getDataservice } from "./utils/data-service";
import { getService } from "./utils/service";
import { getEvent } from "./utils/event";
import { getConcept } from "./utils/concept";
import { getInformationmodel } from "./utils/information-model";
import { generateIds } from "./utils/string";

const outDir = path.resolve("file");
const generators: Record<string, (catalogId: string, count: number) => string> =
  {
    "dataset.json": getDataset,
    "data-service.json": getDataservice,
    "service.json": getService,
    "event.json": getEvent,
    "concept.json": getConcept,
    "information-model.json": getInformationmodel,
  };
const variations: Array<[number, number]> = [
  [10, 5],
  [10, 100],
  [10, 1000],
  [100, 5],
  [100, 100],
  [100, 1000],
];

async function run() {
  await mkdir(outDir, { recursive: true });

  for (const [filesToGenerate, count] of variations) {
    const variantDir = path.join(outDir, `${filesToGenerate}-${count}`);
    await mkdir(variantDir, { recursive: true });

    const ids = generateIds(filesToGenerate);

    for (const [fileName, gen] of Object.entries(generators)) {
      for (const id of ids) {
        const dest = path.join(variantDir, `${id}-${fileName}`);
        try {
          const raw = gen(id, count);
          let output = raw;

          try {
            const parsed = JSON.parse(raw);
            output = JSON.stringify(parsed);
          } catch (err) {
            console.warn(
              `${fileName} (${filesToGenerate}-${count}-${id}): generated content is not valid JSON — writing raw output`,
            );
          }

          await writeFile(dest, output, "utf8");
          console.log(`Wrote ${dest}`);
        } catch (err) {
          console.error(`Failed to write ${dest}:`, err);
        }
      }
    }
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
