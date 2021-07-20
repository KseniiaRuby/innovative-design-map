const express = require("express");
const router = express.Router();
const {
  getProjects,
  getProjectById,
} = require("../controller/projectControllers");

// Get all products from db
// route GET /api/projects

router.get("/", getProjects);

// Get a project by id from db
// route GET /api/projects/:id
router.get("/:id", getProjectById);

module.exports = router;