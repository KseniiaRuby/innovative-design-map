const express = require("express");
const router = express.Router();
const {
  getClassifications,
  getClassificationById,
} = require("../controller/classificationControllers");

// Get all products from db
// route GET /api/classifications

router.get("/", getClassifications);

// Get a classificstion by id from db
// route GET /api/classification/:id
router.get("/:id", getClassificationById);

module.exports = router;