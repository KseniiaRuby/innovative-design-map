import { useContext } from "react";
import ClassificationContext from "../store/ClassificationContext";
import "../styles/Styles.css";

export default function Header() {
  const classificationCtx = useContext(ClassificationContext);

  return (
    <>
      <div>
        <div className="classification-container">
          {classificationCtx.classification && (
            <div className="title-text">
              {classificationCtx.classification.classificationName}
            </div>
          )}
          {classificationCtx.classification && (
            <div className="description-text border-bottom">
              {classificationCtx.classification.shortDescription}
            </div>
          )}
          <h2 className="title-text-padding">EXPLORE PROJECTS</h2>
        </div>
      </div>
    </>
  );
}
