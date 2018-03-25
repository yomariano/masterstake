const mongoose = require("mongoose");
const { usersSchema } = require("../mongooseSchemas");
const users = mongoose.model("users", usersSchema);

const postSignin = {
  method: "POST",
  url: "/api/signin",
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
    }
  },
  handler: async (request, reply) => {
    const signingUser = request.body;
    if (
      !signingUser.u ||
      !signingUser.a ||
      !signingUser.a.t ||
      !signingUser.a.te ||
      !signingUser.a.o
    ) {
      console.log(signingUser);
      reply.code(400).send("Invalid data");
      return;
    }

    if (await users.findOne({ u: signingUser.u })) {
      console.error("Username already used.");
      reply.code(400);
      return;
    }

    const user = new users({
      u: signingUser.u,
      a: {
        t: signingUser.t,
        te: signingUser.te,
        o: signingUser.o
      }
    });

    try {
      const savedUser = await user.save();
      reply.code(200).send(savedUser._id);
    } catch (e) {
      console.log(e);
      reply.code(500).send("Ups, something happened.");
    }
  }
};

module.exports = postSignin;
