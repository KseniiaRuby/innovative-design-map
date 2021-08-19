import React from "react"
import { Slide } from "react-slideshow-image"
import "react-slideshow-image/dist/styles.css"
import "../../styles/Styles.css"


const ProjectGallery = ({ projectImageUrls }) => {
   const objectImages = Object.values(projectImageUrls)
   const slideImages = objectImages.map(element => element.image).filter(url => url !== "")


   console.log(objectImages)

   console.log(slideImages)

   return (
      <div className="slide-container">
         <div className="gallery-container">
            <Slide>
               {slideImages.map((each, index) => {
                  return (
                     <div key={index} className="each-slide">
                        <div
                           style={{ "backgroundImage": `url(${each})` }}
                        >
                        </div>
                     </div>
                  )
               })}
            </Slide>
         </div>
      </div>
   )
}

export default ProjectGallery
