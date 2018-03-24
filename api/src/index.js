const buildFastify = require("./app");

const fastify = buildFastify();
if (require.main === module) {
  fastify.listen(3000, err => {
    if (err) console.error(err);
    console.log(`server listening on ${fastify.server.address().port}`);
  });
} else {
  // required as a module => executed on aws lambda
  module.exports = fastify;
}
