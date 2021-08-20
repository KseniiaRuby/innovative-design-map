import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import ProjectHeader from "../components/ProjectPage/ProjectHeader";
import ProjectPageLeftSideShortcuts from "../components/ProjectPage/ProjectPageLeftSideShortcuts";
import ProjectDescription from "../components/ProjectPage/ProjectDescription";
import ProjectRelatedClassifications from "../components/ProjectPage/ProjectRelatedClassifications";
import FeatureWordsList from "../components/ProjectPage/ProjectFeatureWords";
import ProjectClassifications from "../components/ProjectPage/ProjectClassifications";
import Navbar from "../components/Navbar";
import GlossaryContainer from "../components/Glossary/GlossaryContainer";
import ProjectGallery from "../components/ProjectPage/ProjectGallery";
import ProjectSlider from "../components/HorizontalProjectSummaries/ProjectSlider";
import ClassificationContext from "../store/ClassificationContext";
import "../styles/Styles.css";

const ProjectPage = () => {

  const params = useParams();
  const chosenID = params.id;
  const [project, setProject] = useState();
  let [showGlossary, setShowGlossary] = useState(false) 
  const classificationCtx = useContext(ClassificationContext);
  let [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const sliderRelatedProjects = classificationCtx.projects.filter(function (
    obj
  ) {
    return obj.projectName !== project?.projectName;
  });

  useEffect(() => {
    const getProject = async () => {
      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };

      try {
        let response = await fetch("/api/project/" + chosenID, requestOptions);
        if (response.status !== 200) {
          throw new Error("Fetch for project ID failed");
        }
        let data = await response.json();

        setProject(data);
      } catch (err) {
        console.log("Error on client-side.", err);
      }
    };
    getProject();
  }, [chosenID]);

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
        <div className="border-top">
          <div>
            <h2 className="project-padding-left">VIEW GALLERY</h2>
          </div>
          <div>
            <ProjectGallery projectImageUrls={project.imageUrls} />
          </div>
        </div>
        <div className="project-padding-bottom">
          <div className="border-top project-padding-left">
            <h2>RELATED PROJECTS</h2>
          </div>
          <div>
            <ProjectSlider
              className="slider-on-project-page border-top border-bottom"
              slides={sliderRelatedProjects}
              selectedProjectIndex={selectedProjectIndex}
              setSelectedProjectIndex={setSelectedProjectIndex}
            />
          </div>
        </div>
        <div className="navbar-project-page">
          <Navbar />
        </div>
        <GlossaryContainer showGlossary={showGlossary} setShowGlossary={setShowGlossary}/>
      </div>
    );
  }
  return null;
};

export default ProjectPage;
