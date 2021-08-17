import { Button } from "./Button"
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io"
import "../../styles/Styles.css"

const ProjectSlider = ({
   slides,
   selectedProjectIndex,
   setSelectedProjectIndex,
}) => {
   const features = Array.from(slides)
   const length = features.length

   const nextSlide = () => {
      setSelectedProjectIndex(
         selectedProjectIndex === length - 1 ? 0 : selectedProjectIndex + 1
      )
   }

   const prevSlide = () => {
      setSelectedProjectIndex(
         selectedProjectIndex === 0 ? length - 1 : selectedProjectIndex - 1
      )
   }

   if (!Array.isArray(features).length <= 0) {
      return null
   }

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
                        index === selectedProjectIndex ? "slide active" : "slide"
                     }
                     key={index}
                  >
                     {index === selectedProjectIndex && (
                        <Button
                           imageUrl={project.imageUrls.image1.image}
                           linkProperty={`/ProjectPage/` + project._id}
                        >
                           <div>
                              <div className="project-name-align">
                                 <span>
                                    {project.projectName}{" "}
                                    <div className="count">
                                       {index + 1} of {length}{" "}
                                    </div>
                                 </span>
                              </div>
                           </div>
                        </Button>
                     )}
                  </div>
               )
            })}
         </section>
         <div className="slider-container-right">
            <IoIosArrowForward className="arrow" onClick={nextSlide} />
         </div>
      </div>
   )
}

export default ProjectSlider
