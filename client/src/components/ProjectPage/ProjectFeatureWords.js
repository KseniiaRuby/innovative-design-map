import React from "react";
import "../../styles/Styles.css";
import TextWithGlossaryLinks from "../Glossary/TextWithGlossaryLinks";

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
      <div className="project-padding-bottom project-padding-left">
        {featureWords.map((featureWord) => {
          return (
            <div key={featureWord}>
              <li><TextWithGlossaryLinks text={featureWord} /></li>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default FeatureWordsList;
