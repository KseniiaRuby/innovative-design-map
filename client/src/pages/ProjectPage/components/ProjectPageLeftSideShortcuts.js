import React from "react";
import "../../../styles/Styles.css";

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
      {/* <p> */}
      Address:
      <br />
      <u>{projectAddress}</u>
      <br />
      City:
      <br />
      <u>{projectCity}</u>
      <br />
      <br />
      Province:
      <br />
      <u>{projectProvince}</u>
      <br />
      <br />
      Postal Code:
      <br />
      <u>{projectPostalCode}</u>
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
