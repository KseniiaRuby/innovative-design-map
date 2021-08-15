require("dotenv").config();
const express = require("express");
const connectDB = require("./models/db");
const classificationRoutes = require("./routes/classificationRoutes");
const projectRoutes = require("./routes/projectRoutes");
const glossaryRoutes = require("./routes/glossaryRoutes");

connectDB();
const app = express();
app.use(express.json());

// Serve the react application
app.use(express.static("../client/build"));

//routes

app.use("/api/classification", classificationRoutes);
app.use("/api/project", projectRoutes);
app.use("/api/glossary", glossaryRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("Server listening on port " + port);
});
