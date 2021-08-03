import React from "react";
import "../../../styles/Styles.css";

const ProjectClassifications = ({
  projectDescription,
  projectPrimaryName,
  projectPrimaryDescription,
  projectSecondaryName,
  projectSecondaryDescription,
  projectTertiaryName,
  projectTertiaryDescription,
}) => {
  return (
    <div className="border-bottom border-top project-padding">
      {/* <p>{projectDescription}</p> */}
      <div className="classificationTitle">
        <u>Related Classifications</u>
      </div>
      <br />
      <div className="classificationName">{projectPrimaryName}</div>
      <p>{projectPrimaryDescription}</p>
      <br />
      <div className="classificationName">{projectSecondaryName}</div>
      <p>{projectSecondaryDescription}</p>
      <br />
      <div className="classificationName">{projectTertiaryName}</div>
      <p>{projectTertiaryDescription}</p>
    </div>
  );
};

export default ProjectClassifications;
