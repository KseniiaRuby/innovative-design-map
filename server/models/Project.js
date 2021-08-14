require("./db");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  projectName: String,
  dateOfCompletion: String,
  projectDescription: String,
  phoneNumber: String,
  Neighbourhood: String,
  projectOwnersAndClients: [String],
  projectDesigners: String,
  projectCollaborations: [String],
  projectTypology: String,
  projectProfile: String,
  keyFactsAboutTheProject: String,

  innovationDescriptions: {
    featureWords: [String],

    primaryTypeOfInnovation: {
      classificationName: String,
      classificationId: String,
      projectDescription: String,
      gatewayWord: String,
    },
    secondaryTypeOfInnovation: {
      classificationName: String,
      classificationId: String,
      projectDescription: String,
      gatewayWord: String,
    },
    tertiaryTypeOfInnovation: {
      classificationName: String,
      classificationId: String,
      projectDescription: String,
      gatewayWord: String,
    },
    generalProfile: String,
    keyFacts: [String],
    relatedProjects: [String],
  },
  location: {
    type: {
      type: String,
      enum: ["Point"],
    },
    coordinates: {
      type: [Number],
    },
    address: String,
    city: String,
    province: String,
    postalCode: String,
  },
  imageUrls: {
    image1: {
      image: String,
      alt: String,
    },
    image2: {
      image: String,
      alt: String,
    },
    image3: {
      image: String,
      alt: String,
    },
    image4: {
      image: String,
      alt: String,
    },
    image5: {
      image: String,
      alt: String,
    },
  },
});
module.exports = mongoose.model("Projects", projectSchema, "Projects");
