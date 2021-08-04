import React from "react";
import "../../../styles/Styles.css";

const FeatureWordsList = ({ featureWords }) => {
  return (
    <div className="project-margins">
      <p>
        <u>Features</u>
      </p>
      <div>
        {featureWords.map((featureWord) => {
          return (
            <ul key={featureWord}>
              <li>{featureWord}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default FeatureWordsList;
