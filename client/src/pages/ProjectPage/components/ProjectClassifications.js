import React from "react";
import TextWithGlossaryLinks from "../../../components/glossary/TextWithGlossaryLinks";
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
    <div>
      <div className="border-top project-padding-left">
        <h2>PROJECT DESCRIPTION</h2>
      </div>
      <div className="border-top project-padding-left">
        <p>
          <TextWithGlossaryLinks text={projectDescription} />
        </p>
      </div>
      <div>
        <div className="border-top projectclassification project-padding-left">
          <h2>Related Classifications</h2>
        </div>
        <div className="border-top projectclassification project-padding-left">
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
      </div>
    </div>
  );
};

export default ProjectClassifications;
