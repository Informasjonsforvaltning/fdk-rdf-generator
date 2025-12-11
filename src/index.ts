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

    "/concept/:count": (request) => {
      const count = Number(request.params.count);
      return new Response(getConcept(count), {
        headers: {
          "Content-Type": "application/json",
        },
      });
    },

    "/data-service/:count": (request) => {
      const count = Number(request.params.count);
      return new Response(getDataservice(count), {
        headers: {
          "Content-Type": "application/json",
        },
      });
    },

    "/dataset/:count": (request) => {
      const count = Number(request.params.count);
      return new Response(getDataset(count), {
        headers: {
          "Content-Type": "application/json",
        },
      });
    },

    "/event/:count": (request) => {
      const count = Number(request.params.count);
      return new Response(getEvent(count), {
        headers: {
          "Content-Type": "application/json",
        },
      });
    },

    "/information-model/:count": (request) => {
      const count = Number(request.params.count);
      return new Response(getInformationmodel(count), {
        headers: {
          "Content-Type": "application/json",
        },
      });
    },

    "/service/:count": (request) => {
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
