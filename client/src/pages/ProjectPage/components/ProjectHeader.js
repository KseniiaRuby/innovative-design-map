import React from "react";
import "../../../styles/Styles.css";

const ProjectHeader = ({
  projectName,
  projectImageBackground,
  projectImageAlt,
}) => {
  var sectionStyle = {
    width: "100%",
    height: "200%",
    background: "url(" + { projectImageBackground } + ")",
    //   backgroundImage:
    //     "https://i.ibb.co/LnHDd7y/Riverdale-Avenue-Retaining-Wall-Replacement-Project-1.jpg",
  };

  return (
    <div className="border-bottom  project-header" style={sectionStyle}>
      {projectName}
      {/* <img src={projectImageBackground} alt={projectImageAlt} /> */}
      {/* New Central Library */}
      <br />
      <br />
      <br />
      {/* <div className="project-buttons">
        <button>CHECK IN</button>
        <button>ADD TO FAVOURITES</button>
        <button>SHARE</button>
      </div> */}
    </div>
  );
};
export default ProjectHeader;
