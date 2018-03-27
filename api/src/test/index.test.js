const tap = require("tap");
const buildFastify = require("./../app");

tap.test("GET `/` route", t => {
  t.plan(1);

  const fastify = buildFastify();

  // At the end of your tests it is highly recommended to call `.close()`
  // to ensure that all connections to external services get closed.
  t.tearDown(() => fastify.close());

  fastify.inject(
    {
      method: "GET",
      url: "/"
    },
    (err, response) => {
      t.deepEqual(JSON.parse(response.payload), { master: "stake" });
    }
  );
});
