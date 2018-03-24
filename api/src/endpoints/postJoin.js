const postJoin = {
  method: "POST",
  url: "/api/join",
  schema: {
    body: {
      type: "object",
      properties: {
        u: { type: "string" },
        a: {
          type: "object",
          properties: {
            o: { type: "string" },
            te: { type: "string" },
            t: { type: "string" }
          }
        }
      }
    },
    headers: {
      type: "object",
      properties: {
        "Content-Type": { type: "string" }
      },
      required: ["Content-Type"]
    }
  },
  handler: async (request, reply) => {
    let joiningNode = {};
    const mp = request.multipart(
      (field, file, filename, encoding, mimetype) => {},
      async err => {
        try {
          if (err) {
            console.error(err.message);
            reply.code(500).send("Ups, something happened.");
          }

          if (!joiningNode.id || !joiningNode.uId || !joiningNode.uA) {
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

          const ju = await users.findById(joiningNode.uId);
          if (!ju) {
            console.error(`User ${joiningNode.uId} doesn't exists.`);
            reply.code(400).send("Invalid Data");
            return;
          }

          if (
            node.u.filter(u => u._id.toString() === ju._id.toString()).length >
            0
          ) {
            reply.code(400).send("You joined this masternode already!");
            return;
          }
          node.u.push({ _id: ju._id, a: joiningNode.uA });

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
    );

    mp.on("field", function(key, value) {
      joiningNode[key] = value;
    });
  }
};

module.exports = postJoin;
