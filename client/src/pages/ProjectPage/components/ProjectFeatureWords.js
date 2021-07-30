import React from "react";
import "../../../styles/Styles.css";

const FeatureWordsList = ({ featureWords }) => {
  return (
    <div>
      <p>
        <u>Features</u>
      </p>
      <div>
        {featureWords.map((featureWord) => {
          return (
            <ul>
              <li>{featureWord}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default FeatureWordsList;
