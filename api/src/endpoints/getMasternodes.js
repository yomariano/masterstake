const mongoose = require("mongoose");
const { nodesSchema } = require("../mongooseSchemas");
const nodes = mongoose.model("nodes", nodesSchema);

const getMasternodes = {
  method: "GET",
  url: "/api/mns",
  handler: async (request, reply) => {
    reply.type("application/json").code(200);
    return await nodes.find({}).select({ _id: 1, n: 1, d: 1, f: 1 });
  }
};

module.exports = getMasternodes;
