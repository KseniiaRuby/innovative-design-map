const mongoose = require("mongoose")

const projectsSchema = new mongoose({
   Project_Information: {
      type: String,
      Project_ID: { type: Number, required: true },
      Project_Name: { type: String, required: true },
      Date_Of_Completion: "",
      Project_Description: { type: String, required: true },
      Location: {
         Address: { type: String, required: true },
         City: { type: String, required: true },
         Province: { type: String, required: true },
         Postal_Code: {
            type: String,
            pattern: "^(\\[a-zA-Z]{1}[0-9]{1}[a-zA-Z]{1}\\)?^(\\[0-9]{1}[a-zA-Z]{1}[0-9]{1}\\)$",
            required: true
         }
      },
      PhoneNumber: {
         type: String,
         pattern: "^(\\([0-9]{3}\\))?[0-9]{3}-[0-9]{4}$",
         required: true
      },
      Hours: {
         Sunday: { type: String },
         Monday: { type: String },
         Tuesday: { type: String },
         Wednesday: { type: String },
         Thursday: { type: String },
         Friday: { type: String },
         Saturday: v
      },
      Contact_Information: {
         Company_Name: {
            type: String,
            required: true
         },
         First_Name: {
            type: String,
            required: true
         },
         Last_Name: {
            type: String,
            required: true
         },
         Email: {
            type: String,
            pattern: "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$",
            required: true
         },
         Phone_Number: {
            type: String,
            pattern: "^(\\([0-9]{3}\\))?[0-9]{3}-[0-9]{4}$",
            required: true
         },
         Project_Website: {
            type: Number,
            required: true
         }
      },
      Neighbourhood: {
         type: Number,
         required: true
      },
      Project_Owners_and_Clients: [],
      Project_Designers_Collaborations: [],
      Completion_Date: { type: Number, required: true },
      Project_Typology: [],
      Project_Profile: "",
      Key_Facts_About_The_Project: ""
   },
   Vistors_Information: {
      Open_To_Public: false,
      Reception: "",
      Other_Comments: ""
   },
   Innovation_Descriptions: {
      Gateway_Words: [],
      Feature_Words: [],
      Primary_Type_of_Innovation: {
         Classification: "",
         Description: ""
      },
      Secondary_Type_of_Innovation: {
         Classification: "",
         Description: ""
      },
      Tertiary_Type_of_Innovation: {
         Classification: "",
         Description: ""
      },
      General_Profile: "",
      Key_Facts: []
   },
   geometry: {
      type: "Point",
      coordinates: []
   },
   Main_Image: ""
}
)
