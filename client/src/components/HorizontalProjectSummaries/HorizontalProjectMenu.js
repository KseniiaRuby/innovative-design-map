import React from "react";
import ProjectSlider from "./ProjectSlider";
import projectData from "../../data/projectsampleinfo.json";

function HorizontalProjectMenu({selectedProjectIndex}) {
  return <ProjectSlider slides={projectData.features} selectedProjectIndex = {selectedProjectIndex}/>;
}

export default HorizontalProjectMenu;
