const Fastify = require("fastify");
const nconf = require("nconf");
const mongoose = require("mongoose");

const usersSchema = mongoose.Schema({
  u: String,
  a: {
    t: String,
    te: Date,
    o: String
  }
});
const users = mongoose.model("users", usersSchema);

const userInvestmentSchema = mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  a: mongoose.Schema.Types.Decimal128
});

const nodesSchema = mongoose.Schema({
  _id: String,
  n: String,
  d: String,
  f: Date,
  u: [userInvestmentSchema]
});
const nodes = mongoose.model("nodes", nodesSchema);

nconf
  .argv()
  .env()
  .file({ file: `${__dirname}/app.json` });

function buildFastify() {
  const fastify = Fastify();

  fastify.register(require("fastify-multipart"));

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

  fastify.addContentTypeParser(
    "application/json",
    { parseAs: "string" },
    function(req, body, done) {
      try {
        var json = JSON.parse(body);
        done(null, json);
      } catch (err) {
        err.statusCode = 400;
        done(err, undefined);
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

  fastify.get("/api/mymns", async (request, reply) => {
    if (!request.query.u) {
      console.error("User not speified");
      reply.code(400).send();
      return;
    }
    try {
      reply.type("application/json").code(200);
      const user = await users.findById(request.query.u);
      if (user.ok && !user.ok) {
        console.error(`User with id '${request.query.u}' not found.`);
        reply.code(400).send();
        return;
      }
      const joinedNodes = await nodes.find({ u: user._id });

      reply
        .type("application/json")
        .code(200)
        .send(joinedNodes);
    } catch (e) {
      console.error(e);
      reply.code(500).send();
      return;
    }
  });

  fastify.post("/api/signup", async (request, reply) => {
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
        delete signingUser;

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
  });

  fastify.post("/api/join", async (request, reply) => {
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
  });

  return fastify;
}

module.exports = buildFastify;
