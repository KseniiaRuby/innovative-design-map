import React from "react";

import "../../../styles/Styles.css";

const ProjectRelatedClassifications = ({
  projectPrimaryName,
  projectSecondaryName,
  projectTertiaryName,
}) => {
  return (
    <div>
      <div className="border-top projectclassification project-padding-left">
        <h2>CLASSIFICATIONS</h2>
      </div>
      <div className="border-top projectclassification project-padding-left">
        <p className="lists">{projectPrimaryName}</p>
        <p>{projectSecondaryName}</p>
        <p>{projectTertiaryName}</p>
      </div>
    </div>
  );
};

export default ProjectRelatedClassifications;
