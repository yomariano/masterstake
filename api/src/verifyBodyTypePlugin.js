const verifyBodyTypePlugin = fastify => {
  fastify.addHook("preHandler", (req, reply) => {
    if (req.method === "GET") {
      return;
    }
    const accept = req.accepts();
    switch (accept.type(["json"])) {
      case "json":
        break;
      default:
        reply.code(400);
        break;
    }
  });
};

module.exports = verifyBodyTypePlugin;
