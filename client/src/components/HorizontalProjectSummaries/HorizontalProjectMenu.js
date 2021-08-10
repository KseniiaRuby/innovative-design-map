import React, {useContext} from "react";
import ProjectSlider from "./ProjectSlider";
import ClassificationContext from "../../store/ClassificationContext";

function HorizontalProjectMenu({selectedProjectIndex}) {
 const classificationCtx = useContext(ClassificationContext)
  return <ProjectSlider slides={classificationCtx.projects} selectedProjectIndex = {selectedProjectIndex}/>;
}

export default HorizontalProjectMenu;
