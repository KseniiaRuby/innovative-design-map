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
                        <div>
                           <div className="project-name-align">
                              <div>
                                 <span className="project-name-slider">
                                    {project.projectName}{" "}
                                    <div className="count">
                                       {index + 1} of {length}{" "}
                                    </div>
                                 </span>
                              </div>
                           </div>
                        </div>
                     </Button>
                  )}
               </div>
            )
         })}
      </section>
   )
}

export default ProjectSlider
