import React from "react";
import "../../../styles/Styles.css";

const FeatureWordsList = ({ featureWords }) => {
  return (
    // <div className="project-margins">
    //    <p>
    //       <u>Features</u>
    //    </p>
    //    <div>
    <div>
      <div className="border-top project-padding-left">
        <h2>FEATURES</h2>
      </div>
      <div className="border-top project-padding-left">
        {featureWords.map((featureWord) => {
          return (
            <div key={featureWord}>
              <p>{featureWord}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeatureWordsList;
