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
    <div className="border-right project-padding">
      <LeftSideShortcutField label="Address:" value={projectAddress} />
      <br />
      <LeftSideShortcutField label="City:" value={projectCity} />
      <br />
      <LeftSideShortcutField label="Province:" value={projectProvince} />
      <br />
      <LeftSideShortcutField label="Postal Code:" value={projectPostalCode} />
    </div>
  );
};

export default ProjectPageLeftSideShortcuts;
