import { createRequestHandler } from "@tanstack/start/server";
import manifest from "../../dist/server/manifest.js";

const handler = createRequestHandler({
  manifest,
});

export const handler = async (event, context) => {
  return handler(event, context);
};