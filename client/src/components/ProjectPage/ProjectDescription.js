import React from "react";
import "../../styles/Styles.css";

function hasAValue(value) {
  return value !== undefined && value.length > 0;
}
const CheckIfHasValue = ({ label, value }) => {
  return (
    hasAValue(value) && (
      <div>
        <div>{label}</div>
        {value}
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
  const projectNameFilter = () => {
    if (projectName.substring(0, 4) === "The ") {
      projectName = projectName.substring(4);
    }
  };
  projectNameFilter();

  return (
    <div className="border project-description project-padding">
      The {projectName} is a {projectTypology} located in the{" "}
      {projectNeighbourhood} neighbourhood in {projectCity},{projectProvince}
      <br />
      <br />
      The project was{" "}
      <CheckIfHasValue value={projectFirm}>
        {" "}
        designed by {projectFirm} and
      </CheckIfHasValue>{" "}
      completed in {projectYear}{" "}
      <CheckIfHasValue value={projectClient}>for the</CheckIfHasValue>{" "}
      {projectClient}
    </div>
  );
};

export default ProjectDescription;
