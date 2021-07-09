const mongoose = require("mongoose");

const projectsSchema = new mongoose({
  Project_Information: {
    type: String,
    Project_Name: "",
    Location: {
      Address: "",
      City: "",
      Province: "",
      Postal_Code: "",
      Coordinates: [],
    },
    Neighbourhood: "",
    Project_Owners_and_Clients: [],
    Project_Designers_Collaborations: [],
    Completion_Date: "",
    Project_Typology: [],
    Project_Profile: "",
    Key_Facts_About_The_Project: "",
  },
  Contact_Information: {
    Company_Name: "",
    First_Name: "",
    Last_Name: "",
    Email: "",
    Phone_Number: "",
    Project_Website: "",
  },
  Vistors_Information: {
    Open_To_Public: false,
    Reception: "",
    Other_Comments: "",
  },
  Innovation_Descriptions: {
    Primary_Type_of_Innovation: {
      Classification: "",
      Description: "",
    },
    Secondary_Type_of_Innovation: {
      Classification: "",
      Description: "",
    },
    Tertiary_Type_of_Innovation: {
      Classification: "",
      Description: "",
    },
    General_Profile: "",
    Key_Facts: [],
  },
  Classification_List: {
    Classification: [],
    Gateway_Words: [],
    Feature_Words: [],
  },
  Image,
});
