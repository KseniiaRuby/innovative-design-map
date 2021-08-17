import React from "react";
import "../../styles/Styles.css";

const ProjectRelatedClassifications = ({
  projectPrimaryName,
  projectSecondaryName,
  projectTertiaryName,
}) => {
  return (
    <div>
      <div className="border-top project-padding-left">
        <h2>CLASSIFICATIONS</h2>
      </div>
      <div className="project-padding-bottom project-padding-left">
        <li>{projectPrimaryName}</li>
        <li>{projectSecondaryName}</li>
        <li>{projectTertiaryName}</li>
      </div>
    </div>
  );
};

export default ProjectRelatedClassifications;
