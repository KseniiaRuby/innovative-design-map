import React, { useState, useContext, useEffect } from "react";
import { Button } from "./Button";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import "../../styles/Styles.css";

const ProjectSlider = ({
  slides,
  selectedProjectIndex,
  setSelectedProjectOnSlider,
}) => {
  // const sectionStyle = {
  //    // width: "100%",
  //    // height: "200%",
  //    background: "url(" + { ProjectSummaryImage } + ")"
  //    //   backgroundImage:
  //    //     "https://i.ibb.co/LnHDd7y/Riverdale-Avenue-Retaining-Wall-Replacement-Project-1.jpg",
  // }
  // const classificationCtx = useContext(ClassificationContext);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (selectedProjectIndex) {
      setCurrent(selectedProjectIndex);
    }
  }, [selectedProjectIndex]);

  // pass setCurrent add this to context
  const features = Array.from(slides);
  // get the length of the projects array
  const length = features.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    // setSelectedProjectOnSlider(current)
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
    // setSelectedProjectOnSlider(current)
  };

  if (!Array.isArray(features).length <= 0) {
    // if (!Array.isArray(features) || length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      {/* <IoIosArrowBack className="left-arrow" onClick={prevSlide} />
      <IoIosArrowForward className="right-arrow" onClick={nextSlide} /> */}

      {features.map((project, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            <IoIosArrowBack className="left-arrow" onClick={prevSlide} />
            <IoIosArrowForward className="right-arrow" onClick={nextSlide} />
            {index === current && (
              <Button linkProperty={`/ProjectPage/` + project._id}>
                <div className="slider-div">
                  <div className="project-name-align">
                    {project.projectName}{" "}
                  </div>
                  <div className="img-style">
                    <img
                      src={project.imageUrls.image1.image}
                      alt={project.imageUrls.image1.alt}
                      style={{
                        // width: "60vw",
                        height: "100px",
                        opacity: "100%",
                        overflow: "hidden",

                        // padding: "0em 0em 0em 0em",
                        // margin: "0em 0em 0em 0em",
                      }}
                    />
                  </div>
                  <div className="description-align">
                    {" "}
                    {project.innovationDescriptions.featureWords.map(
                      (word, index) => {
                        if (
                          index <
                          project.innovationDescriptions.featureWords.length - 1
                        )
                          return word + ", ";
                        return word;
                      }
                    )}{" "}
                    <br></br>
                    {index + 1} of {length}{" "}
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
