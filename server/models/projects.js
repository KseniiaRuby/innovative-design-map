const mongoose = require("mongoose");

const projectsSchema = new mongoose({
  projectName: { String },
  calssificationId: { type: Number },
  dateOfCompletion: Number,
  projectDescription: { String },
  location: {
    address: { String },
    city: { String },
    province: { String },
    postalCode: {
      String,
      pattern:
        "^(\\[a-zA-Z]{1}[0-9]{1}[a-zA-Z]{1}\\)?^(\\[0-9]{1}[a-zA-Z]{1}[0-9]{1}\\)$",
    },
  },
  phoneNumber: {
    String,
    pattern: "^(\\([0-9]{3}\\))?[0-9]{3}-[0-9]{4}$",
  },
  hours: {
    sunday: { String },
    monday: { String },
    tuesday: { String },
    wednesday: { String },
    thursday: { String },
    friday: { String },
    saturday: { String },
  },
  contactInformation: {
    companyName: {
      String,
    },
    firstName: {
      String,
    },
    lastName: {
      String,
    },
    email: {
      String,
      pattern: "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$",
    },
    phoneNumber: {
      String,
      pattern: "^(\\([0-9]{3}\\))?[0-9]{3}-[0-9]{4}$",
    },
    projectWebsite: {
      String,
    },
  },
  Neighbourhood: {
    String,
  },
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
  geometry: {
    type: "Point",
    coordinates: [],
  },
  Image_Url: String,
});
