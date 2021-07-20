import React from "react";
import ProjectSlider from "./ProjectSlider";
import projectData from "../../data/projectsampleinfo.json";

function HorizontalProjectSummaries() {
  return <ProjectSlider slides={projectData.features} />;
}

export default HorizontalProjectSummaries;
