const server = require("../../dist/server/server.js");

exports.handler = async (event, context) => {
  if (server.handler) return server.handler(event, context);
  if (server.default) return server.default(event, context);

  throw new Error("No valid handler exported from server.js");
};