const Fastify = require("fastify");
const nconf = require("nconf");

nconf
  .argv()
  .env()
  .file({ file: `${__dirname}/app.json` });

function buildFastify() {
  const fastify = Fastify();

  fastify.register(
    require("./dbPlugin"),
    {
      store: nconf.get("store")
    },
    err => {
      if (err) {
        throw err;
      }
    }
  );

  fastify.get("/api/mns", async (request, reply) => {
    reply.type("application/json").code(200);
    return request.db
      .collection("nodes")
      .find({})
      .toArray();
  });

  fastify.post("/api/signin", async (request, reply) => {
    const user = null;

    reply.type("application/json").code(200);
    return request.db
      .collection("nodes")
      .find({})
      .toArray();
  });

  return fastify;
}

module.exports = buildFastify;
