import React from 'react'
import '../ProjectPage.css'

const ProjectHeader = () => {
   return (
      <div div className="border project-header" >
         New Central Library
         < br />
         <div className="project-buttons">
            <button>CHECK IN</button>
            <button>ADD TO FAVOURITES</button>
            <button>SHARE</button>
         </div>
      </div>
   )
}
export default ProjectHeader
