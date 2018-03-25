const mongoose = require("mongoose");
const fp = require("fastify-plugin");

const dbPlugin = function(fastify, opts, next) {
  const config = opts.store;
  mongoose.connect(
    `mongodb://${config.user}:${config.passwd}@${config.host}:${config.port}/${
      config.dbName
    }`
  );
  delete opts.store;

  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", function() {
    fastify
      .decorateRequest("db", db)
      .addHook("onClose", function(fastify, done) {
        fastify.request.db.close(done);
      });
    next();
  });
};

module.exports = fp(dbPlugin);
