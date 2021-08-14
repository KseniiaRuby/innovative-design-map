import React from "react";

import "../../../styles/Styles.css";

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
      <div className="border-top project-padding-left">
        <p>{projectPrimaryName}</p>
        <p>{projectSecondaryName}</p>
        <p>{projectTertiaryName}</p>
      </div>
    </div>
  );
};

export default ProjectRelatedClassifications;
