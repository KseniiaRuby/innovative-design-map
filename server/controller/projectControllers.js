const Project = require("../models/Project");

const getProjects = async (req, res) => {
  try {
    const projects = await Project.find({});
    res.json(projects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    res.json(project);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const newProjects = async (req, res) => {
  let newProject = req.body;
  try {
    const Projects = new Project(newProject);
    await Projects.save();
    console.log("Created Project", Projects);
    res.send(Projects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  getProjects,
  getProjectById,
  newProjects,
};
