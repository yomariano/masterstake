const mongoose = require("mongoose");
const { nodesSchema, usersSchema } = require("../mongooseSchemas");
const nodes = mongoose.model("nodes", nodesSchema);
const users = mongoose.model("users", usersSchema);

const getMyMasternodes = {
  method: "GET",
  url: "/api/mymns/:userId",
  handler: async (request, reply) => {
    try {
      reply.type("application/json").code(200);
      const user = await users.findById(request.params.userId);
      if (!user || (user.ok && !user.ok)) {
        console.error(`User with id '${request.params.userId}' not found.`);
        reply.code(400).send();
        return;
      }
      const joinedNodes = await nodes
        .find({ "u._id": user._id })
        .select({ _id: 1, n: 1, d: 1, f: 1 });

      reply
        .type("application/json")
        .code(200)
        .send(joinedNodes);
    } catch (e) {
      console.error(e);
      reply.code(500).send();
      return;
    }
  }
};

module.exports = getMyMasternodes;
