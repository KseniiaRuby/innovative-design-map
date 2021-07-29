const { ObjectId } = require("mongodb");

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

const findProjectsByClassification = async (req, res) => {
  try {
    let classificationId = req.query.classificationId;
    let classification = new ObjectId(classificationId);
    const projects = await Project.find(
      {
        $or: [
          {
            "innovationDescriptions.primaryTypeOfInnovation.classificationId":
              classification,
          },
          {
            "innovationDescriptions.secondaryTypeOfInnovation.classificationId":
              classification,
          },
          {
            "innovationDescriptions.tertiaryTypeOfInnovation.classificationId":
              classification,
          },
        ],
      },
      { projectName: 1, location: 1, projectDescription: 1 }
    );
    res.json(projects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getProjectById = async function (req, res) {
  try {
    const projectSelected = await Project.findOne({ _id: req.params.id });
    console.info(`Found Project:`, projectSelected);
    res.send(projectSelected);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
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
  findProjectsByClassification,
};
