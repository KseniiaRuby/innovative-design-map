import React from "react";
import "../../styles/Styles.css";

function hasAValue(value) {
  return value !== undefined && value.length > 0;
}

const LeftSideShortcutField = ({ label, value }) => {
  return (
    hasAValue(value) && (
      <div>
        <div>{label}</div>
        {value}
      </div>
    )
  );
};
const ProjectPageLeftSideShortcuts = ({
  projectAddress,
  projectCity,
  projectProvince,
  projectPostalCode,
}) => {
  return (
    <div className="project-padding">
      <LeftSideShortcutField label="ADDRESS" value={projectAddress} />
      <br />
      <LeftSideShortcutField label="CITY" value={projectCity} />
      <br />
      <LeftSideShortcutField label="PROVINCE" value={projectProvince} />
      <br />
      <LeftSideShortcutField label="POSTAL CODE" value={projectPostalCode} />
    </div>
  );
};

export default ProjectPageLeftSideShortcuts;
