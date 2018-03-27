const mongoose = require("mongoose");
const { nodesSchema, usersSchema } = require("../mongooseSchemas");
const nodes = mongoose.model("nodes", nodesSchema);
const users = mongoose.model("users", usersSchema);

const postJoin = {
  method: "POST",
  url: "/api/join/:userId",
  schema: {
    body: {
      type: "object",
      properties: {
        id: { type: "string" },
        a: { type: "number", minimum: 10 }
      }
    }
  },
  handler: async (request, reply) => {
    const joiningNode = request.body;
    try {
      if (!joiningNode.id || !request.params.userId || !joiningNode.a) {
        reply.code(400).send("Invalid data");
        return;
      }

      const node = await nodes.findById(joiningNode.id);

      if (!node) {
        console.error(`Node ${joiningNode.id} doesn't exists.`);
        reply.code(400).send("Invalid Data");
        return;
      }

      if (!node.u) {
        node.u = [];
      }

      const user = await users.findById(request.params.userId);
      if (!user) {
        console.error(`User ${request.params.userId} doesn't exists.`);
        reply.code(400).send("Invalid Data");
        return;
      }

      if (
        node.u.filter(u => u._id.toString() === user._id.toString()).length > 0
      ) {
        reply.code(400).send("You joined this masternode already!");
        return;
      }
      node.u.push({ _id: user._id, a: joiningNode.a });

      const savedNode = await nodes.update(
        { _id: node._id },
        { $set: { u: node.u } }
      );

      if (!savedNode.ok) {
        reply.code(500).send("Ups, something happened.");
        return;
      }
      reply.code(200).send();
    } catch (e) {
      console.log(e);
      reply.code(500).send("Ups, something happened.");
    }
  }
};

module.exports = postJoin;
