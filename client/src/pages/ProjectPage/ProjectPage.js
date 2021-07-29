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

const ProjectPage = () => {
  const params = useParams();
  const chosenID = params.id;
  const [project, setProject] = useState();

  useEffect(() => {
    const getProject = async () => {
      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };

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
          setProject(data);
          console.log("Project: " + JSON.stringify(data));
          console.log("Project: " + JSON.stringify(data._id));
        } catch (err) {
          console.log("Error on client-side.", err);
        }
      }
    };
    getProject();
  }, [project]);

  if (project !== undefined) {
    return (
      <div className="container-grid">
        <div>
          <ProjectHeader projectName={project.projectName} />
        </div>
        <div className="container-grid-two-in-the-row">
          <ProjectPageLeftSideShortcuts />
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
