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

    "/concept/:catalogId/:count": (request) => {
      const count = Number(request.params.count);
      return new Response(getConcept(request.params.catalogId, count), {
        headers: {
          "Content-Type": "application/json",
        },
      });
    },

    "/data-service/:catalogId/:count": (request) => {
      const count = Number(request.params.count);
      return new Response(getDataservice(request.params.catalogId, count), {
        headers: {
          "Content-Type": "application/json",
        },
      });
    },

    "/dataset/:catalogId/:count": (request) => {
      const count = Number(request.params.count);
      return new Response(getDataset(request.params.catalogId, count), {
        headers: {
          "Content-Type": "application/json",
        },
      });
    },

    "/event/:catalogId/:count": (request) => {
      const count = Number(request.params.count);
      return new Response(getEvent(request.params.catalogId, count), {
        headers: {
          "Content-Type": "application/json",
        },
      });
    },

    "/information-model/:catalogId/:count": (request) => {
      const count = Number(request.params.count);
      return new Response(
        getInformationmodel(request.params.catalogId, count),
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
    },

    "/service/:catalogId/:count": (request) => {
      const count = Number(request.params.count);
      return new Response(getService(request.params.catalogId, count), {
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
  },
});

console.log(`Server running at ${server.url}`);
