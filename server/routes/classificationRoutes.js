const express = require("express");
const router = express.Router();
const {
  getClassifications,
  getClassificationById,
  newClassifications,
} = require("../controller/classificationControllers");

// Get all products from db
// route GET /api/classifications

router.get("/", getClassifications);

// route GET /api/classifications
router.post("/", newClassifications);

// Get a classification by id from db
// route GET /api/classification/:id
router.get("/:id", getClassificationById);

module.exports = router;
