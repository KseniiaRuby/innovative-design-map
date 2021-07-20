import React, { useState, Link } from "react";
import { Button } from "../components/Button";
import * as projectData from "../data/projectsampleinfo.json";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "../styles/Button.css";
import "../styles/ProjectSlider.css";

const ProjectSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const features = Array.from(projectData.features);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides).length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      {features.map((project, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <Button
                className="btn"
                buttonStyle="btn--primary"
                buttonSize="btn--large"
                linkProperty="/"
              >
                <div>
                  <h2 className="project-name-align">
                    {project.properties.NAME}{" "}
                  </h2>
                  {/* <img src={project.properties.PICTURE_LI} /> */}
                  <p className="description-align">
                    {" "}
                    {project.properties.DESCRIPTIO}
                  </p>
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
