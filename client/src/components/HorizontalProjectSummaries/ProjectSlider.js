import { Button } from "./Button";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import "../../styles/Styles.css";

const ProjectSlider = ({
  slides,
  selectedProjectIndex,
  setSelectedProjectIndex,
}) => {

  const features = Array.from(slides);
  // get the length of the projects array
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

  return (
    <section className="slider">

      {features.map((project, index) => {
        return (
          <div
            className={
              index === selectedProjectIndex ? "slide active" : "slide"
            }
            key={index}
          >
            <IoIosArrowBack className="left-arrow" onClick={prevSlide} />
            <IoIosArrowForward className="right-arrow" onClick={nextSlide} />
            {index === selectedProjectIndex && (
              <Button
                imageUrl={project.imageUrls.image1.image}
                linkProperty={`/ProjectPage/` + project._id}
              >
                <div className="slider-div">
                  <div className="project-name-align">
                    {project.projectName}{" "}
                  </div>
                  {/* <div className="img-style"
                              style={{
                                 'background-image':
                                 `url(${project.imageUrls.image1.image})`
                              }}> */}

                  {/* <img
                                 className="img-slider"
                                 alt={project.imageUrls.image1.alt}
                                 style={
                                    // width: "60vw",
                                    // height: "",
                                    // opacity: "100%",
                                    // overflow: "hidden",
                                    
                                    // padding: "0em 0em 0em 0em",
                                    // margin: "0em 0em 0em 0em",
                                 }
                              /> */}
                  {/* </div> */}
                  {/* <div className="description-align">
                              {" "}
                              {project.innovationDescriptions.featureWords.map(
                                 (word, index) => {
                                    if (
                                       index <
                                       project.innovationDescriptions.featureWords.length - 1
                                    )
                                       return word + ", "
                                    return word
                                 }
                              )}{" "} */}

                  <div className="count">
                    {index + 1} of {length}{" "}
                  </div>
                </div>
                {/* </div> */}
              </Button>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ProjectSlider;
