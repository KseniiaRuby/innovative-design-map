import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProjectHeader from "./components/ProjectHeader";
import ProjectPageLeftSideShortcuts from "./components/ProjectPageLeftSideShortcuts";
import ProjectDescription from "./components/ProjectDescription";
import ProjectRelatedFeatures from "./components/ProjectRelatedFeatures";
import ProjectAtGlance from "./components/ProjectAtGlance";
import ProjectClassifications from "./components/ProjectClassifications";
import ProjectGalary from "./components/ProjectGalary";
import "../../styles/Styles.css";
// import ClassificationContext from "../../store/ClassificationContext";
//

const ProjectPage = () => {
  const params = useParams();
  const chosenID = params.id;
  const [project, setProject] = useState();
  //   let chosenProject = {};
  //   const classificationCtx = useContext(ClassificationContext);
  //   const features = Array.from(classificationCtx.projects);
  //   console.log("Project Page: ", JSON.stringify(features[0]));

  useEffect(() => {
    const getProject = async () => {
      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };

      // if (project.id !== chosenID) {
      if (!project) {
        console.log("Looking up project by ID: ", chosenID);
        try {
          let response = await fetch(
            "/api/project/" + chosenID,
            requestOptions
          );
          if (response.status !== 200) {
            throw new Error("Fetch for project ID failed");
          }
          let data = await response.json();
          //  chosenProject = await response.json();
          setProject(data);
          //  console.log("Project 1: " + JSON.stringify(data));
          console.log("Project 1: " + JSON.stringify(data._id));
        } catch (err) {
          console.log("Error on client-side.", err);
        }
      }
    };
    getProject();
  }, [project]);

  // params.id
  // useState
  //  projectID
  // useEffect
  //  getProjectByID route

  //   console.log("Project 2: " + JSON.stringify(project._id));
  if (project !== undefined) {
    return (
      <div className="container-grid">
        <div>
          {/* <ProjectHeader /> */}
          <ProjectHeader projectName={project.projectName} />
        </div>
        <div className="container-grid-two-in-the-row">
          <ProjectPageLeftSideShortcuts />
          <ProjectDescription />
          <ProjectDescription projectDescription={project.projectDescription} />
        </div>
        <ProjectRelatedFeatures />
        <ProjectAtGlance />
        <ProjectClassifications />
        <ProjectGalary />
      </div>
    );
  }
  return null;
};

export default ProjectPage;
