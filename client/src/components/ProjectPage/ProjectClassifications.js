import React from "react"
import TextWithGlossaryLinks from "../Glossary/TextWithGlossaryLinks"
import "../../styles/Styles.css"

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
         <div className="project-padding-left">
            <p className="descriptionFormat">
               <TextWithGlossaryLinks text={projectDescription} />
            </p>
         </div>
         <div>
            <div className="border-top projectclassification project-padding-left">
               <h2>RELATED CLASSIFICATIONS</h2>
            </div>
            <div className="projectclassification project-padding-left">
               <br />
               <div className="classificationName">{projectPrimaryName}</div>
               <pre className="descriptionFormat">
                  <TextWithGlossaryLinks text={projectPrimaryDescription} />
               </pre>
               <br />
               <div className="classificationName">{projectSecondaryName}</div>
               <pre className="descriptionFormat">
                  <TextWithGlossaryLinks text={projectSecondaryDescription} />
               </pre>
               <br />
               <div className="classificationName">{projectTertiaryName}</div>
               <pre className="descriptionFormat">
                  <TextWithGlossaryLinks text={projectTertiaryDescription} />
               </pre>
            </div>
         </div>
      </div>
   )
}

export default ProjectClassifications
