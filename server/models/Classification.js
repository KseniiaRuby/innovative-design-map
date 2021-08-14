require("./db");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const classificationSchema = new Schema({
  classificationName: String,
  gatewayWords: [String],
  featureWords: [String],
  longDescription: String,
});

module.exports = mongoose.model(
  "Classifications",
  classificationSchema,
  "Classifications"
);
