import React, { useState, useEffect } from "react"
// import { Link } from "react-router-dom"
import "../../../styles/Styles.css"

const ProjectHeader = ({
   projectName,
   projectImageBackground,
   projectImageAlt,
}) => {

   const [titleStyle, setTitleStyle] = useState({})

   useEffect(() => {
      const outerHeight = document.getElementById("outer").clientHeight
      const titleDiv = document.getElementById("title")
      if (titleDiv.clientHeight > outerHeight) {
         ResizeToFitText(titleDiv, outerHeight)
      }
   }, [projectName])

   const ResizeToFitText = (element, outerHeight) => {
      const fontSize = window.getComputedStyle(element).fontSize
      element.style.fontSize = parseInt(fontSize) - 0.1 + "px"
      if (element.clientHeight > outerHeight) {
         ResizeToFitText(element, outerHeight)
      }
   }

   const sectionStyle = {
      // width: "100%",
      height: "100%",
      background: "url(" + { projectImageBackground } + ")"
   }

   return (
      <div className="border-bottom">
         <div
            className="project-header"
         // style={sectionStyle}
         // background={"url(" + { projectImageBackground } + ")"}
         // background-image={"url(" + { projectImageBackground } + ")"}
         >
            <div className="project-container" id="outer">
               <div className="project-title" id="title"> {projectName} </div>
               <img
                  id="pict"
                  src={projectImageBackground}
                  alt={projectImageAlt}
                  style={{ width: "75%", padding: "0vw 0vw 0vw 5vw", float: "right" }}
               // max-width={"inherit"}
               // max-height={"inherit"}
               // height={"inherit"}
               // width={"inherit"}
               //  object-fit={"cover"}
               //  float={"right"}
               />

            </div>
            {/* </div> */}
            {/* New Central Library */}
            <br />
            <br />
         </div>
         {/* work on LIke and Share once it's on heroku */}
         {/* <div className="project-buttons">
            <button>CHECK IN</button>
            <Link to="" className="nav-links">Like</Link>
            <Link to="" className="nav-links">Share</Link>
         </div> */}
      </div>
   )
}
export default ProjectHeader
