import { getConcept } from "./utils/concept.ts";
import { getDataservice } from "./utils/data-service.ts";
import { getDataset } from "./utils/dataset.ts";
import { getEvent } from "./utils/event.ts";
import { getInformationmodel } from "./utils/information-model.ts";
import { getService } from "./utils/service.ts";

const server = Bun.serve({
  routes: {
    "/": new Response("OK"),
    "/health": new Response("OK"),

    "/concept": () => {
      return new Response(getConcept(), {
        headers: {
          "Content-Type": "application/json",
        },
      });
    },

    "/data-service": () => {
      return new Response(getDataservice(), {
        headers: {
          "Content-Type": "application/json",
        },
      });
    },

    "/dataset": () => {
      return new Response(getDataset(), {
        headers: {
          "Content-Type": "application/json",
        },
      });
    },

    "/event": () => {
      return new Response(getEvent(), {
        headers: {
          "Content-Type": "application/json",
        },
      });
    },

    "/information-model": () => {
      return new Response(getInformationmodel(), {
        headers: {
          "Content-Type": "application/json",
        },
      });
    },

    "/service": () => {
      return new Response(getService(), {
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
  },
});

console.log(`Server running at ${server.url}`);
