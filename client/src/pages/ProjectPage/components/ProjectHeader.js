import React from "react"
import { Link } from "react-router-dom"
import "../../../styles/Styles.css"

const ProjectHeader = ({
   projectName,
   projectImageBackground,
   projectImageAlt,
}) => {
   var sectionStyle = {
      // width: "100%",
      // height: "200%",
      background: "url(" + { projectImageBackground } + ")",
      //   backgroundImage:
      //     "https://i.ibb.co/LnHDd7y/Riverdale-Avenue-Retaining-Wall-Replacement-Project-1.jpg",
   }

   return (
      <div className="border-bottom">
         <div
            className="project-header"
         // style={sectionStyle}
         // background={"url(" + { projectImageBackground } + ")"}
         // background-image={"url(" + { projectImageBackground } + ")"}
         >
            <div className="project-container">
               <div className="project-title"> {projectName} </div>
               {/* <div className="project-image"> */}

               <img
                  src={projectImageBackground}
                  alt={projectImageAlt}
                  style={{ width: "75%", padding: "0em 0em 0em 3em" }}
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
         <div className="project-buttons">
            {/* <button>CHECK IN</button> */}
            <Link to="" className="nav-links">Like</Link>
            <Link to="" className="nav-links">Share</Link>

         </div>
      </div>
   )
}
export default ProjectHeader
