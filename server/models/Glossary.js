require("./db")
const mongoose = require("mongoose")
const Schema = mongoose.Schema


//We need Schema for Glossary here
const glossarySchema = new Schema({
   // classificationName: String,
   // gatewayWords: [String],
   // featureWords: [String],
   // longDescription: String,
   // shortDescription: String,
})

module.exports = mongoose.model(
   // "Classifications",
   // classificationSchema,
   // "Classifications"
)
