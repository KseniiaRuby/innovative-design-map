import React from "react";
import "../../../styles/Styles.css";

function hasAValue(value) {
  return value !== undefined && value.length > 0 
}

const LeftSideShortcutField= ({label, value}) => {
  return hasAValue(value) && (
    <div>
     <div>{label}</div>
     <u>{value}</u>
   </div>
  )
}
const ProjectPageLeftSideShortcuts = ({
  projectAddress,
  projectCity,
  projectProvince,
  projectPostalCode,
}) => {
  // const ProjectAddress = ('#/projectsInformation.Location.Address')

  console.log("Project Address: ", projectAddress);
  return (
    <div className="border-right projectpageleftsideshortcuts project-padding">
      <LeftSideShortcutField label='Address:' value={projectAddress} />
      <br />
      <LeftSideShortcutField label='City:' value={projectCity} />
      <br />
      <LeftSideShortcutField label='Province:' value={projectProvince} />
      <br />
      <LeftSideShortcutField label='Postal Code:' value={projectPostalCode} />
      {/* </p> */}
      {/* <p>Access to Public: Yes</p> */}
      {/* <p> */}
      {/* Hours: */}
      {/* Sunday: 12:00 PM - 5:00 PM
        Monday: 9:00 AM - 8:00 PM
        Tuesday: 9:00 AM - 8:00 PM
        Wednesday: 9:00 AM - 8:00 PM
        Thursday: 9:00 AM - 8:00 PM
        Friday: 9:00 AM - 6:00 PM
        Saturday: 9:00 AM - 5:00 PM */}
      {/* </p> */}
      {/* <div>Audio Tour</div> */}
    </div>
  );
};

export default ProjectPageLeftSideShortcuts;
