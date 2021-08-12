import { useState, useEffect, useContext } from "react"
import { useParams } from "react-router-dom"
import ProjectHeader from "./components/ProjectHeader"
import ProjectPageLeftSideShortcuts from "./components/ProjectPageLeftSideShortcuts"
import ProjectDescription from "./components/ProjectDescription"
import ProjectRelatedClassifications from "./components/ProjectRelatedClassifications"
import FeatureWordsList from "./components/ProjectFeatureWords"
import ProjectClassifications from "./components/ProjectClassifications"
// import ProjectGallery from "./components/ProjectGallery";
import Navbar from "../../components/Navbar"
import GlossaryContainer from "../../components/glossary/GlossaryContainer"
import ProjectSlider from "../../components/HorizontalProjectSummaries/ProjectSlider"
import ClassificationContext from "../../store/ClassificationContext"
// import HorizontalProjectMenu from "../../components/HorizontalProjectSummaries/HorizontalProjectMenu"
import "../../styles/Styles.css"

const ProjectPage = () => {
   const params = useParams()
   const chosenID = params.id
   const [project, setProject] = useState()
   const classificationCtx = useContext(ClassificationContext)
   let [selectedProjectIndex, setSelectedProjectIndex] = useState(0)

   useEffect(() => {
      const getProject = async () => {
         const requestOptions = {
            method: "GET",
            headers: {
               "Content-Type": "application/json",
            },
         }

         console.log("Looking up project by ID: ", chosenID)
         try {
            let response = await fetch("/api/project/" + chosenID, requestOptions)
            if (response.status !== 200) {
               throw new Error("Fetch for project ID failed")
            }
            let data = await response.json()
            // data.location.city = ""
            // data.location.province = ""

            setProject(data)
            console.log("Project: " + JSON.stringify(data))
            console.log("Project ID: " + JSON.stringify(data._id))
            console.log(
               "Project Name: " +
               JSON.stringify(
                  data.innovationDescriptions.secondaryTypeOfInnovation
                     .classificationName
               )
            )
         } catch (err) {
            console.log("Error on client-side.", err)
         }
      }
      getProject()
   }, [chosenID])

   if (project !== undefined) {
      return (
         <div className="container-grid">
            <div>
               <div>
                  <ProjectHeader
                     projectName={project.projectName}
                     projectImageBackground={project.imageUrls.image1.image}
                     projectImageAlt={project.imageUrls.image1.alt}
                  />
               </div>
               <div className="container-grid-two-in-the-row">
                  {(project.location.address ||
                     project.location.city ||
                     project.location.province ||
                     project.location.postalCode) && (
                        <ProjectPageLeftSideShortcuts
                           projectAddress={project.location.address}
                           projectCity={project.location.city}
                           projectProvince={project.location.province}
                           projectPostalCode={project.location.postalCode}
                        />
                     )}
                  <ProjectDescription
                     //  projectDescription={project.projectDescription}
                     projectName={project.projectName}
                     projectTypology={project.projectTypology}
                     projectNeighbourhood={project.Neighbourhood}
                     projectCity={project.location.city}
                     projectProvince={project.location.province}
                     projectFirm={project.companyName}
                     projectYear={project.dateOfCompletion}
                     projectClient={project.projectOwnersAndClients}
                  />
               </div>
               <ProjectRelatedClassifications
                  projectPrimaryName={
                     project.innovationDescriptions.primaryTypeOfInnovation
                        .classificationName
                  }
                  projectSecondaryName={
                     project.innovationDescriptions.secondaryTypeOfInnovation
                        .classificationName
                  }
                  projectTertiaryName={
                     project.innovationDescriptions.tertiaryTypeOfInnovation
                        .classificationName
                  }
               />
               <FeatureWordsList
                  featureWords={project.innovationDescriptions.featureWords}
               />
               <ProjectClassifications
                  projectDescription={project.projectDescription}
                  projectPrimaryName={
                     project.innovationDescriptions.primaryTypeOfInnovation
                        .classificationName
                  }
                  projectPrimaryDescription={
                     project.innovationDescriptions.primaryTypeOfInnovation
                        .projectDescription
                  }
                  projectSecondaryName={
                     project.innovationDescriptions.secondaryTypeOfInnovation
                        .classificationName
                  }
                  projectSecondaryDescription={
                     project.innovationDescriptions.secondaryTypeOfInnovation
                        .projectDescription
                  }
                  projectTertiaryName={
                     project.innovationDescriptions.tertiaryTypeOfInnovation
                        .classificationName
                  }
                  projectTertiaryDescription={
                     project.innovationDescriptions.tertiaryTypeOfInnovation
                        .projectDescription
                  }
               />
            </div>
            <ProjectSlider
               className="slider-on-project-page border-top border-bottom"
               slides={classificationCtx.projects}
               selectedProjectIndex={selectedProjectIndex}
               setSelectedProjectIndex={setSelectedProjectIndex}
            />
            <div className="navbar-project-page">
               <Navbar />
            </div>
            {/* function HorizontalProjectMenu({
                selectedProjectIndex,
                setSelectedProjectIndex,
}) {
  const classificationCtx = useContext(ClassificationContext);
             return ( */}
            {/* <ProjectGallery /> */}
            {/* <div className="slider-on-project-page border-top border-bottom">
               <HorizontalProjectMenu />
            </div> */}
            <GlossaryContainer />
         </div>
      )
   }
   return null
}

export default ProjectPage
