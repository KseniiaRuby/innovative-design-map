import { Button } from "./Button";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import "../../styles/Styles.css";

const ProjectSlider = ({
  slides,
  selectedProjectIndex,
  setSelectedProjectIndex,
}) => {
  const features = Array.from(slides);
  const length = features.length;

  const nextSlide = () => {
    setSelectedProjectIndex(
      selectedProjectIndex === length - 1 ? 0 : selectedProjectIndex + 1
    );
  };

  const prevSlide = () => {
    setSelectedProjectIndex(
      selectedProjectIndex === 0 ? length - 1 : selectedProjectIndex - 1
    );
  };

  if (!Array.isArray(features).length <= 0) {
    return null;
  }
  //   const lengthOfFirstLine= (projectName)=>{
  //      const indexOfSpace = projectName.indexOf(" ",14)
  //      if(indexOfSpace>=0 && indexOfSpace<20){
  //         return (indexOfSpace)
  //      }
  //      else if (indexOfSpace<0 && )
  //   }

  return (
    <div className="slider-container">
      <div className="slider-container-left">
        <IoIosArrowBack className="arrow" onClick={prevSlide} />
      </div>
      <section className="slider">
        {features.map((project, index) => {
          return (
            <div
              className={
                index === selectedProjectIndex
                  ? "slide active"
                  : "slide-opacity"
              }
              key={index}
            >
              {index === selectedProjectIndex && (
                <div>
                  <Button
                    imageUrl={project.imageUrls.image1.image}
                    linkProperty={`/ProjectPage/` + project._id}
                  >
                    <div>
                      {/* <span className="project-name-align">
                      {project.projectName.substring(0, 10)}
                    </span> */}
                      <span className="project-name-align">
                        {project.projectName}
                      </span>
                    </div>
                  </Button>
                  <div className="count">
                    {index + 1}/{length}{" "}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </section>
      <div className="slider-container-right">
        <IoIosArrowForward className="arrow" onClick={nextSlide} />
      </div>
    </div>
  );
};

export default ProjectSlider;
