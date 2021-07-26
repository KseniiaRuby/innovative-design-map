const {ObjectId} = require('mongodb')

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

const findProjectSummariesByClassification = async (req, res) => {
  try {
    let classificationId = req.query.classificationId
    let classification = new ObjectId(classificationId)
    const projects = await Project.find(
      { $or: [
          { "innovationDescriptions.primaryTypeOfInnovation.classificationId": classification },
          { "innovationDescriptions.secondaryTypeOfInnovation.classificationId": classification },
          { "innovationDescriptions.tertiaryTypeOfInnovation.classificationId": classification }
        ]
      },
      { "projectName": 1, "location": 1, "projectDescription": 1 }
    );
    res.json(projects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
}

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
  findProjectSummariesByClassification,
};
