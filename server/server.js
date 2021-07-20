require('dotenv').config();
const express = require("express");
const connectDB = require('./models/db')
const classificationRoutes = require('./routes/classificationRoutes');
const projectRoutes = require('./routes/projectRoutes');

connectDB();
const app = express();
app.use(express.json());

//routes

app.use("/api/classifications", classificationRoutes);
app.use("/api/projects", projectRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("Server listening on port " + port);
});