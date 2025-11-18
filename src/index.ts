import { getService } from "./utils/service.ts";
import { getDataset } from "./utils/dataset.ts";

const server = Bun.serve({
  routes: {
    "/": new Response("OK"),
    "/health": new Response("OK"),

    "/dataset/:id": (req) => {
      return new Response(`${getDataset(req.params.id)}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
    },

    "/service/:id": (req) => {
      return new Response(`${getService(req.params.id)}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
  },
});

console.log(`Server running at ${server.url}`);
