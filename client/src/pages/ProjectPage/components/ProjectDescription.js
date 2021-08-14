import React from "react";
import "../../../styles/Styles.css";

function hasAValue(value) {
  return value !== undefined && value.length > 0;
}
const CheckIfHasValue = ({ label, value }) => {
  return (
    hasAValue(value) && (
      <div>
        <div>{label}</div>
        <u>{value}</u>
      </div>
    )
  );
};

const ProjectDescription = ({
  projectName,
  projectTypology,
  projectNeighbourhood,
  projectCity,
  projectProvince,
  projectFirm,
  projectYear,
  projectClient,
}) => {
  return (
    <div className="border project-description project-padding">
      The <u>{projectName}</u> is a <u>{projectTypology}</u> located in the{" "}
      <u>{projectNeighbourhood}</u> neighbourhood in{" "}
      <u>
        {projectCity}, <u></u>
        {projectProvince}
      </u>
      <br />
      <br />
      The project was{" "}
      <CheckIfHasValue value={projectFirm}>
        {" "}
        designed by <u>{projectFirm}</u> and
      </CheckIfHasValue>{" "}
      completed in <u>{projectYear}</u>{" "}
      <CheckIfHasValue value={projectClient}>for the</CheckIfHasValue>{" "}
      <u>{projectClient}</u>
    </div>
  );
};

export default ProjectDescription;
