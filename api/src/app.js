const Fastify = require("fastify");
const nconf = require("nconf");
const mongoose = require("mongoose");

const postSignin = require("./endpoints/postSignin");
const postJoin = require("./endpoints/postJoin");
const getMasternodes = require("./endpoints/getMasternodes");
const getMyMasternodes = require("./endpoints/getMyMasternodes");
const { usersSchema, nodesSchema } = require("./mongooseSchemas");

const users = mongoose.model("users", usersSchema);
const nodes = mongoose.model("nodes", nodesSchema);

function buildFastify() {
  const fastify = Fastify();

  fastify.register(require("fastify-multipart"));
  fastify.register(require("fastify-accepts"));

  nconf
    .argv()
    .env()
    .file({ file: `${__dirname}/app.json` });
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

  fastify.route(getMasternodes);
  fastify.route(getMyMasternodes);
  fastify.route(postSignin);
  fastify.route(postJoin);

  return fastify;
}

module.exports = buildFastify;
