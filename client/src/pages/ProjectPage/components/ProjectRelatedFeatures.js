import React from 'react'
import '../../../styles/Styles.css'

const ProjectRelatedFeatures = ({
   projectPrimaryName,
   projectSecondaryName,
   projectTertiaryName
}) => {
   return (
      <div className="border-bottom border-top project-related-features">
         <div>
            <br />

            <u className="force-left">Features</u>
            <p className="text-in-the-box">
               Culture, heritage and Society
            </p>
            <p className="text-in-the-box">
               Transporattion and Infrastructure
            </p>

         </div>
         {/* <p>{projectPrimaryName}</p>
         <p>{projectSecondaryName}</p>
         <p>{projectTertiaryName}</p> */}
      </div>
   )
}

export default ProjectRelatedFeatures
