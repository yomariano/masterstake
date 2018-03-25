const Fastify = require("fastify");
const nconf = require("nconf");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");

const postSignin = require("./endpoints/postSignin");
const postJoin = require("./endpoints/postJoin");
const getMasternodes = require("./endpoints/getMasternodes");
const getMyMasternodes = require("./endpoints/getMyMasternodes");
const { usersSchema, nodesSchema } = require("./mongooseSchemas");
const passport = require("passport");
const auth = require("./googleOAuth");

const users = mongoose.model("users", usersSchema);
const nodes = mongoose.model("nodes", nodesSchema);

function buildFastify() {
  const fastify = Fastify();

  fastify.register(require("fastify-cookie"), err => {
    if (err) throw err;
  });

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

  fastify.use(
    cookieSession({
      name: "session",
      keys: ["123"]
    })
  );
  fastify.use(cookieParser());

  auth(passport, nconf.get("oauth:google"));
  fastify.use(passport.initialize());

  fastify.get(
    "/auth/g",
    passport.authenticate("google", {
      scope: "https://www.googleapis.com/auth/userinfo.email"
    })
  );

  fastify.get("/auth/g/back", (req, res) => {
    console.log(req.body);
    console.log(req.params);
    console.log(req.headers);
    passport.authenticate("google", { failureRedirect: "/" }),
      (req, res) => {
        req.raw.session.token = req.user.token;
        res.code(302).header("Location", "/");
      };
  });

  fastify.get("/", (req, res) => {
    const { session } = req.raw;
    if (session.token) {
      res.setCookie("token", session.token, {
        domain: req.headers.host,
        path: "/"
      });
      res.send({
        status: "session cookie set"
      });
    } else {
      res.setCookie("token", null, {
        domain: req.headers.host,
        path: "/"
      });
      res.send({
        status: "session cookie not set"
      });
    }
  });

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

  fastify.get("/logout", (req, res) => {
    req.logout();
    req.session = null;
    res.redirect("/");
  });

  fastify.route(getMasternodes);
  fastify.route(getMyMasternodes);
  fastify.route(postSignin);
  fastify.route(postJoin);

  return fastify;
}

module.exports = buildFastify;
