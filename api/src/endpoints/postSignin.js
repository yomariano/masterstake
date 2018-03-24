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
    let signingUser = {};
    const mp = request.multipart(
      (field, file, filename, encoding, mimetype) => {},
      function(err) {
        if (
          !signingUser.u ||
          !signingUser.a ||
          !signingUser.a.t ||
          !signingUser.a.te ||
          !signingUser.a.o
        ) {
          reply.code(400).send("Invalid data");
          return;
        }

        if (err) {
          reply.code(500).send(err);
        }
        const user = new users({
          u: signingUser.u,
          a: {
            t: signingUser.t,
            te: signingUser.te,
            o: signingUser.o
          }
        });

        user.save((err, savedUser) => {
          if (err) {
            reply.code(500).send(err);
            return;
          }

          reply.code(200).send(savedUser._id);
        });
      }
    );

    mp.on("field", function(key, value) {
      signingUser[key] = value;
    });
  }
};

module.exports = postSignin;
