import React, { useState, useContext, useEffect } from "react";
import { Button } from "./Button";
// import * as projectData from "../../data/projectsampleinfo.json";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import "../../styles/Styles.css";

import ClassificationContext from "../../store/ClassificationContext";

const ProjectSlider = ({ slides, selectedProjectIndex }) => {
  // const sectionStyle = {
  //    // width: "100%",
  //    // height: "200%",
  //    background: "url(" + { ProjectSummaryImage } + ")"
  //    //   backgroundImage:
  //    //     "https://i.ibb.co/LnHDd7y/Riverdale-Avenue-Retaining-Wall-Replacement-Project-1.jpg",
  // }
  const classificationCtx = useContext(ClassificationContext);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (selectedProjectIndex) {
      setCurrent(selectedProjectIndex);
    }
  }, [selectedProjectIndex])

  // pass setCurrent add this to context 
  const features = Array.from(classificationCtx.projects);
  // const ProjectSummaryImage = Array.from()
  // const length = slides.length;
  const length = features.length;
  // const features = Array.from(projectData.features);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  // if (!Array.isArray(slides).length <= 0) {
  if (!Array.isArray(features) || features.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <IoIosArrowBack className="left-arrow" onClick={prevSlide} />
      <IoIosArrowForward className="right-arrow" onClick={nextSlide} />

      {features.map((project, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              // <Button>
              <Button linkProperty={`/ProjectPage/` + project._id}>
                <div className="slider-div">
                  <div className="project-name-align">
                    {project.projectName}{" "}
                  </div>
                  <div style={{ padding: "7px 0px 0px 0px" }}>
                    <img
                      src={project.imageUrls.image1.image}
                      alt={project.imageUrls.image1.alt}
                      style={{
                        // width: "100%",
                        height: "75px",
                        padding: "0em 0em 0em 0em",
                        opacity: "100%",
                        // opacity: "50%",
                        overflow: "hidden",
                        // margin: "-2em 0em 0em 0em",
                        // position: "absolute",
                      }}
                    />
                  </div>
                  <div className="description-align">
                    {" "}
                    {JSON.stringify(project.innovationDescriptions.featureWords)
                      .replace('["', " ")
                      .replace('","', ", ")
                      .replace('","', ", ")
                      .replace('","', ", ")
                      .replace('","', ", ")
                      .replace('","', ", ")
                      .replace('","', ", ")
                      .replace('"]', " ")}
                    {/* {project.innovationDescriptions.featureWords.map(
                      (featureWord) => {
                        return (
                          <ul key={featureWord}>
                            <li>{featureWord}</li>
                          </ul>
                        );
                      }
                    )} */}
                  </div>
                </div>
              </Button>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ProjectSlider;
