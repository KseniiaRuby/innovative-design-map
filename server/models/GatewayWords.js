require("./db");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gatewayWordSchema = new Schema({
  relatedGatewayWords: [String],
  classificationId: String,
  relatedClassification: String,
  classificationId: String,
});
module.exports = mongoose.model(
  "GatewayWords",
  gatewayWordSchema,
  "GatewayWords"
);
