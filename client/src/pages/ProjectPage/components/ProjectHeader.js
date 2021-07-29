import React from "react"
import "../../../styles/Styles.css"


const ProjectHeader = ({ projectName }) => {
   return (
      <div div className="border-bottom  project-header">
         {projectName}
         {/* New Central Library */}
         <br />
         <div className="project-buttons">
            <button>CHECK IN</button>
            <button>ADD TO FAVOURITES</button>
            <button>SHARE</button>
         </div>
      </div>
   )
}
export default ProjectHeader
