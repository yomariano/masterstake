const Fastify = require("fastify");

function buildFastify() {
  const fastify = Fastify();

  fastify.get("/", async (request, reply) => {
    reply.type("application/json").code(200);
    return { hello: "world" };
  });

  return fastify;
}

module.exports = buildFastify;
