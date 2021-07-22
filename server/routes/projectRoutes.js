const express = require("express");
const router = express.Router();
const {
  getProjects,
  getProjectById,
  newProjects
} = require("../controller/projectControllers");

// Get all products from db
// route GET /api/projects

router.get("/", getProjects);

// Get a project by id from db
// route GET /api/projects/:id
router.get("/:id", getProjectById);

// route POST /api/newProjects -- add new projects
router.post("/", newProjects);

module.exports = router;