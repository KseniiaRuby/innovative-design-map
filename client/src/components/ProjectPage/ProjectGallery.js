import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "../../styles/Styles.css";

const ProjectGallery = ({ projectImageUrls }) => {
  const objectImages = Object.values(projectImageUrls);
  let slideImages = [];
  let slideAlt = [];
  const loadSlide = (objectImages) => {
    for (let i = 0, len = objectImages.length; i < len; i++) {
      slideImages[i] = objectImages[i].image;
      slideAlt[i] = objectImages[i].alt;
    }
  };
  loadSlide(objectImages);

  console.log(JSON.stringify(objectImages));
  console.log(slideImages);
  console.log(slideAlt);

  return (
    <div className="slider-container">
      <div className="gallery-container">
        <Slide>
          {slideImages.map((each, index) => {
            return (
              <div key={index} className="each-slide">
                {/* <div
                // style={{ backgroundImage: `url('${each}')` }}
                // style={{ backgroundImage: `url(${slideImages[0]})` }}
                // imageUrl={`${each}`}
                ></div> */}
                <div>
                  <img src={`${each}`} alt={``} />
                </div>
              </div>
            );
          })}
        </Slide>
      </div>
    </div>
  );
};

export default ProjectGallery;
