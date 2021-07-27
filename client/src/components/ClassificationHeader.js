import { useContext } from "react";
import "../styles/Header.css";
import ClassificationContext from "../store/ClassificationContext";

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
            <div className="description-text">
              {classificationCtx.classification.shortDescription}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
