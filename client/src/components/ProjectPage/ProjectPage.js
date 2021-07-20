import React from "react";
import ProjectHeader from "./components/ProjectHeader";
import ProjectPageLeftSideShortcuts from "./components/ProjectPageLeftSideShortcuts";
import ProjectDescription from "./components/ProjectDescription";
import ProjectRelatedFeatures from "./components/ProjectRelatedFeatures";
import ProjectAtGlance from "./components/ProjectAtGlance";
import ProjectClassifications from "./components/ProjectClassifications";
import ProjectGalary from "./components/ProjectGalary";
import "./ProjectPage.css";

//

const ProjectPage = () => {
  return (
    <div className="app-wrap">
      <div>
        <ProjectHeader />
      </div>
      <div className="container">
        <ProjectPageLeftSideShortcuts />
        <ProjectDescription />
      </div>
      <ProjectRelatedFeatures />
      <ProjectAtGlance />
      <ProjectClassifications />
      <ProjectGalary />
    </div>
  );
};

export default ProjectPage;
