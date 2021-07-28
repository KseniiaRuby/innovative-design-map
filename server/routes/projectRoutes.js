const express = require("express");
const router = express.Router();
const {
  getProjects,
  getProjectById,
  newProjects,
  findProjectsByClassification,
} = require("../controller/projectControllers");

// route GET /api/projects
router.get("/findProjectsByClassification", findProjectsByClassification);

// route GET /api/projects
router.get("/", getProjects);

// route GET /api/projects/:id
router.get("/:id", getProjectById);

// route POST /api/newProjects -- add new projects
router.post("/", newProjects);

module.exports = router;
