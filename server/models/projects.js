require("./db");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectsSchema = new Schema({
  projectName: String,
  calssificationId: Number,
  dateOfCompletion: Number,
  projectDescription: String,

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
  projectDesignersCollaborations: [String],
  completionDate: Number,
  projectTypology: String,
  projectProfile: String,
  keyFactsAboutTheProject: String,

  vistorsInformation: {
    openToPublic: Boolean,
    reception: String,
    otherComments: String,
  },
  innovationDescriptions: {
    featureWords: [String],

    primaryTypeofInnovation: {
      classificationId: Number,
    },
    secondaryTypeOfInnovation: {
      classificationId: Number,
    },
    tertiaryTypeofInnovation: {
      classificationId: Number,
    },
    generalProfile: String,
    keyFacts: [String],
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
  Image_Url: String,
});
