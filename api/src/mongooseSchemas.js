const mongoose = require("mongoose");

const usersSchema = mongoose.Schema({
  u: String,
  a: {
    t: String,
    te: Date,
    o: String
  }
});

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

module.exports = { usersSchema, nodesSchema };
