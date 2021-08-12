import React, { useContext } from "react";
import ProjectSlider from "./ProjectSlider";
import ClassificationContext from "../../store/ClassificationContext";

function HorizontalProjectMenu({
  selectedProjectIndex,
  setSelectedProjectIndex,
}) {
  const classificationCtx = useContext(ClassificationContext);
  return (
    <ProjectSlider
      slides={classificationCtx.projects}
      selectedProjectIndex={selectedProjectIndex}
      setSelectedProjectIndex={setSelectedProjectIndex}
    />
  );
}

export default HorizontalProjectMenu;
