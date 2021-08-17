import React, { useCallback, useEffect } from "react";
import "../../styles/Styles.css";

const ProjectHeader = ({
  projectName,
  projectImageBackground,
  projectImageAlt,
}) => {
  const ResizeToFitText = useCallback((element, outerHeight) => {
    const fontSize = window.getComputedStyle(element).fontSize;
    element.style.fontSize = parseInt(fontSize) - 0.1 + "px";
    if (element.clientHeight > outerHeight) {
      ResizeToFitText(element, outerHeight);
    }
  }, []);

  useEffect(() => {
    const outerHeight = document.getElementById("outer").clientHeight;
    const titleDiv = document.getElementById("title");
    if (titleDiv.clientHeight > outerHeight) {
      ResizeToFitText(titleDiv, outerHeight);
    }
  }, [projectName, ResizeToFitText]);

  return (
    <div className="border-bottom">
      <div className="project-header">
        <div id="outer">
          <div className="project-title" id="title">
            {" "}
            {projectName}{" "}
          </div>
          <img
            id="pict"
            src={projectImageBackground}
            alt={projectImageAlt}
            style={{ width: "75%", padding: "0vw 0vw 0vw 5vw", float: "right" }}
          />
        </div>
        <br />
        <br />
      </div>
    </div>
  );
};
export default ProjectHeader;
