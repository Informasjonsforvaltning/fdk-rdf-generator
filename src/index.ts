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

    "/concept/:catalogs/:count": (request) => {
      const catalogs = Number(request.params.catalogs);
      const count = Number(request.params.count);
      return new Response(getConcept(catalogs, count), {
        headers: {
          "Content-Type": "application/json",
        },
      });
    },

    "/data-service/:catalogs/:count": (request) => {
      const catalogs = Number(request.params.catalogs);
      const count = Number(request.params.count);
      return new Response(getDataservice(catalogs, count), {
        headers: {
          "Content-Type": "application/json",
        },
      });
    },

    "/dataset/:catalogs/:count": (request) => {
      const catalogs = Number(request.params.catalogs);
      const count = Number(request.params.count);
      return new Response(getDataset(catalogs, count), {
        headers: {
          "Content-Type": "application/json",
        },
      });
    },

    "/event/:catalogs/:count": (request) => {
      const catalogs = Number(request.params.catalogs);
      const count = Number(request.params.count);
      return new Response(getEvent(catalogs, count), {
        headers: {
          "Content-Type": "application/json",
        },
      });
    },

    "/information-model/:catalogs/:count": (request) => {
      const catalogs = Number(request.params.catalogs);
      const count = Number(request.params.count);
      return new Response(getInformationmodel(catalogs, count), {
        headers: {
          "Content-Type": "application/json",
        },
      });
    },

    "/service/:catalogs/:count": (request) => {
      const catalogs = Number(request.params.catalogs);
      const count = Number(request.params.count);
      return new Response(getService(count), {
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
  },
});

console.log(`Server running at ${server.url}`);
