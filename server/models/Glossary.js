require("./db")
const mongoose = require("mongoose")
const Schema = mongoose.Schema


//We need Schema for Glossary here
const glossarySchema = new Schema({
   glossaryName: String,
   glossaryDescription: String,
})

module.exports = mongoose.model(
   "Glossary",
   glossarySchema,
   "Glossary"
 );
