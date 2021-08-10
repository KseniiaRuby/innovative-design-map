import React from "react"

import "../../../styles/Styles.css"

const ProjectRelatedClassifications = ({
   projectPrimaryName,
   projectSecondaryName,
   projectTertiaryName,
}) => {
   return (
      <div className="border-bottom border-top projectclassification project-padding">
         <u>Classifications</u>
         <p className="lists">{projectPrimaryName}</p>
         <p>{projectSecondaryName}</p>
         <p>{projectTertiaryName}</p>
      </div>
   )
}

export default ProjectRelatedClassifications
