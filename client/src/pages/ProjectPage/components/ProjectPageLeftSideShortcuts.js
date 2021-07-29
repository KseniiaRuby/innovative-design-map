import React from "react"
import "../../../styles/Styles.css"

const ProjectPageLeftSideShortcuts = ({
   projectAddress,
   projectCity,
   projectProvince,
   projectPostalCode,
}) => {
   // const ProjectAddress = ('#/projectsInformation.Location.Address')

   console.log("Project Address: ", projectAddress)
   return (
      <div className="border-right projectpageleftsideshortcuts">
         <div>
            Address:
            <br />
            {projectAddress}
            <br />
            City:
            <br />
            {projectCity}
            {/* 800 3 Street SE */}
            <br />
            Province:
            <br />
            {projectProvince}
            {/* Calgary */}
            <br />
            Postal Code:
            <br />
            {projectPostalCode}
            {/* Alberta */}
            {/* <br /> */}
            {/* T2G 2E7 */}
         </div>
         <br />
         <div>Access to Public: Yes</div>
         <br />
         <div>
            {/* Hours: */}
            <br />
            {/* Sunday: 12:00 PM - 5:00 PM
        <br />
        Monday: 9:00 AM - 8:00 PM
        <br />
        Tuesday: 9:00 AM - 8:00 PM
        <br />
        Wednesday: 9:00 AM - 8:00 PM
        <br />
        Thursday: 9:00 AM - 8:00 PM
        <br />
        Friday: 9:00 AM - 6:00 PM
        <br />
        Saturday: 9:00 AM - 5:00 PM */}
         </div>
         <br />
         {/* <div>Audio Tour</div> */}
      </div>
   )
}

export default ProjectPageLeftSideShortcuts
