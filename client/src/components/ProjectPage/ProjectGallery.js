import React from "react"
import { Slide } from "react-slideshow-image"
import "react-slideshow-image/dist/styles.css"
import "../../styles/Styles.css"


const ProjectGallery = ({ projectImageUrls }) => {
   const objectImages = Object.values(projectImageUrls)
   let slideImages = []
   const loadSlide = (objectImages) => {
      for (let i = 0, len = objectImages.length; i < len; i++) {
         slideImages[i] = objectImages[i].image
      }
   }
   loadSlide(objectImages)

   slideImages.forEach((image) => {
      if (image !== "") {

      }
   })

   console.log(slideImages)

   return (
      <div className="slide-container gallery-container">
         <Slide>
            {slideImages.map((index) => {
               return (
                  <div>
                     <div key={index} className="each-slide">
                        <div
                           style={{ "backgroundImage": `url(${slideImages[1]})` }}
                        >
                        </div>
                     </div>
                  </div>
               )
            })}
         </Slide>
      </div>
   )
}

export default ProjectGallery
