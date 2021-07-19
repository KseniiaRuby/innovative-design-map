require("./db");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const classificationSchema = new Schema({
  classifications: String,
  classificationId: Number,
  unique: true,
  gatewayWords: [String],
  featureWords: [String],
  longDescription: String,
  shortDescription: String,
});

module.exports = mongoose.model(
  "Classifications",
  classificationSchema,
  "Classifications"
);
