import React, { useState, useContext } from "react";
import { Button } from "./Button";
// import * as projectData from "../../data/projectsampleinfo.json";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import "../../styles/Styles.css";

import ClassificationContext from "../../store/ClassificationContext";

const ProjectSlider = ({
  slides,
  // ProjectSummaryImage
}) => {
  // const sectionStyle = {
  //    // width: "100%",
  //    // height: "200%",
  //    background: "url(" + { ProjectSummaryImage } + ")"
  //    //   backgroundImage:
  //    //     "https://i.ibb.co/LnHDd7y/Riverdale-Avenue-Retaining-Wall-Replacement-Project-1.jpg",
  // }
  const classificationCtx = useContext(ClassificationContext);
  const [current, setCurrent] = useState(0);
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
                  <h2 className="project-name-align">
                    {project.projectName}{" "}
                    <img
                      src={project.imageUrls.image1.image}
                      alt={project.imageUrls.image1.alt}
                      style={{
                        width: "100%",
                        height: "100%",
                        padding: "0em 0em 0em 0em",
                        opacity: "50%",
                        overflow: "hidden",
                      }}
                    />
                  </h2>
                  <div className="description-align">
                    {" "}
                    {project.innovationDescriptions.featureWords.map(
                      (featureWord) => {
                        return (
                          <ul key={featureWord}>
                            <li>{featureWord}</li>
                          </ul>
                        );
                      }
                    )}
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
