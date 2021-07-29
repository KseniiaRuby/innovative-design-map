import React from "react"
import { useParams } from "react-router-dom"
import ProjectHeader from "./components/ProjectHeader"
import ProjectPageLeftSideShortcuts from "./components/ProjectPageLeftSideShortcuts"
import ProjectDescription from "./components/ProjectDescription"
import ProjectRelatedFeatures from "./components/ProjectRelatedFeatures"
import ProjectAtGlance from "./components/ProjectAtGlance"
import ProjectClassifications from "./components/ProjectClassifications"
import ProjectGalary from "./components/ProjectGalary"
import HorizontalProjectMenu from "../../components/HorizontalProjectSummaries/HorizontalProjectMenu"
import "../../styles/Styles.css"

//

const ProjectPage = () => {
   const params = useParams()
   const data = {
      projectId: params.id,
      projectName: params.projectName,
      projectDescription: "ENTROPY INVERTED TURNSTILES WORLD LINE",
   }

   // params.id
   // useState
   //  projectID
   // useEffect
   //  getProjectByID route

   return (
      <div className="container-grid">
         <div>
            {/* <ProjectHeader /> */}
            <ProjectHeader projectName={data.projectName} />
         </div>
         <div className="container-grid-two-in-the-row border-bottom ">
            <ProjectPageLeftSideShortcuts />
            {/* <ProjectDescription /> */}
            <ProjectDescription projectDescription={data.projectDescription} />
         </div>
         <ProjectRelatedFeatures />
         <ProjectAtGlance />
         <ProjectClassifications />
         <ProjectGalary />

         {/* <HorizontalProjectMenu /> */}

      </div >
   )
}

export default ProjectPage
