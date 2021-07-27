import React, { useState } from "react";
import { Button } from "./Button";
import * as projectData from "../../data/projectsampleinfo.json";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "./ProjectSlider.css";

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
              <Button>
                <div>
                  <h2 className="project-name-align">
                    {project.Project_Information.Project_Name}{" "}
                  </h2>
                  <p className="description-align">
                    {" "}
                    {project.Project_Information.Project_Description}
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
