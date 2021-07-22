const express = require("express");
const router = express.Router();
const {
  getClassifications,
  getClassificationById,
  newClassifications,
} = require("../controller/classificationControllers");

// Get all products from db
// route GET /api/classifications

// router.get("/", getClassifications);
//
router.get("/:id", async function (req, res) {
  try {
    const data = await classificationSchema.findById(req.params.id);
    console.info(`Found Classification:`, data);
    res.send(data);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// route GET /api/classifications
router.post("/", newClassifications);

// Get a classification by id from db
// route GET /api/classification/:id
router.get("/:id", getClassificationById);

module.exports = router;
