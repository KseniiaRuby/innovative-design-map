require("./db");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  projectName: String,
  dateOfCompletion: String,
  projectDescription: String,
  atAGlance: [String],

  phoneNumber: String,
  hours: {
    sunday: String,
    monday: String,
    tuesday: String,
    wednesday: String,
    thursday: String,
    friday: String,
    saturday: String,
  },
  contactInformation: {
    companyName: String,
    firstName: String,
    lastName: String,
    email: String,
    phoneNumber: String,
    projectWebsite: String,
  },
  Neighbourhood: String,
  projectOwnersAndClients: [String],
  projectDesigners: String,
  projectCollaborations: [String],
  projectTypology: String,
  projectProfile: String,
  keyFactsAboutTheProject: String,

  vistorsInformation: {
    openToPublic: String,
    reception: String,
    otherComments: String,
  },
  innovationDescriptions: {
    featureWords: [String],

    primaryTypeOfInnovation: {
      classificationId: String,
      projectDescription: String,
      gatewayWord: String,
    },
    secondaryTypeOfInnovation: {
      classificationId: String,
      projectDescription: String,
      gatewayWord: String,
    },
    tertiaryTypeOfInnovation: {
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
