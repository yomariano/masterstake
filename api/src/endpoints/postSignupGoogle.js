const request = require("request");

const postSignupGoogle = {
  method: "POST",
  url: "/api/signup",
  schema: {
    body: {
      type: "object",
      properties: {
        t: { type: "string" }
      }
    }
  },
  handler: async (req, reply) => {
    if (!req.body.t) {
      return reply.code(400).send("Invalid data");
    }
    try {
      request.get(
        `https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${req.body.t}`,
        function(e, r, body) {
          const response = JSON.parse(body);

          if (typeof response.error_description !== "undefined") {
            return reply.code(401).send(response.error_description);
          }
          console.log(response);
          return reply.code(200).send(response);
        }
      );
    } catch (e) {
      console.error(e);
      return reply.code(500).send("Ups, something happened.");
    }
  }
};

module.exports = postSignupGoogle;
