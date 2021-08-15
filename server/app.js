const express = require("express");
var app = express();

app.use(express.json());

// Serve the react application
app.use(express.static("../client/build"));

module.exports = app;
