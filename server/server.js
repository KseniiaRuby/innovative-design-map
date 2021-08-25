require("dotenv").config();
const path = require("path");
const express = require("express");
const connectDB = require("./models/db");
const classificationRoutes = require("./routes/classificationRoutes");
const projectRoutes = require("./routes/projectRoutes");
const glossaryRoutes = require("./routes/glossaryRoutes");

connectDB();
const app = express();
app.use(express.json());

//routes

app.use("/api/classification", classificationRoutes);
app.use("/api/project", projectRoutes);
app.use("/api/glossary", glossaryRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("Server listening on port " + port);
});

// Serve the react application
app.use(express.static("../client/build"));

app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});
