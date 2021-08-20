import { useState, useEffect, useContext } from "react";
import ReactModal from "react-modal";
import GlossaryContext from "../../store/GlossaryContext";

import "./glossary.css";
import TextWithGlossaryLinks from "./TextWithGlossaryLinks";

// I couldn't figure out how to do this with css
const modalStyles = {
  overlay: {
    backgroundColor: "#00000080",
  },
  content: {
    top: "20px",
    left: "20px",
    bottom: "20px",
    right: "20px",
    backgroundColor: "black",
    color: "white",
  },
};

const GlossaryIndex = ({ terms, selectedLetter, selectTerm }) => {
  let filtered = terms.filter((term) => term.startsWith(selectedLetter));
  let sorted = [...filtered];
  sorted.sort();
  return (
    <div className="glossary-index">
      {sorted.map((term, index) => (
        <div key={"term" + index} onClick={() => selectTerm(term)}>
          {term}
        </div>
      ))}
    </div>
  );
};

const GlossaryEntry = ({ selectedDefinition }) => {
  return selectedDefinition ? (
    <div className="glossary-entry">
      <div className="glossary-entry-title">{selectedDefinition.term}</div>
      <div className="glossary-entry-text">
        <TextWithGlossaryLinks
          text={selectedDefinition.description}
          excludeTerm={selectedDefinition.term}
        />
      </div>
    </div>
  ) : null;
};

const LetterSelector = ({ letter, selectLetter }) => {
  return (
    <div className="glossary-letter" onClick={() => selectLetter(letter)}>
      {letter}
    </div>
  );
};

const LetterSelectors = ({ selectLetter }) => {
  return (
    <div className="glossary-letters border-right">
      <LetterSelector letter="A" selectLetter={selectLetter} />
      <LetterSelector letter="B" selectLetter={selectLetter} />
      <LetterSelector letter="C" selectLetter={selectLetter} />
      <LetterSelector letter="D" selectLetter={selectLetter} />
      <LetterSelector letter="E" selectLetter={selectLetter} />
      <LetterSelector letter="F" selectLetter={selectLetter} />
      <LetterSelector letter="G" selectLetter={selectLetter} />
      <LetterSelector letter="H" selectLetter={selectLetter} />
      <LetterSelector letter="I" selectLetter={selectLetter} />
      <LetterSelector letter="J" selectLetter={selectLetter} />
      <LetterSelector letter="K" selectLetter={selectLetter} />
      <LetterSelector letter="L" selectLetter={selectLetter} />
      <LetterSelector letter="M" selectLetter={selectLetter} />
      <LetterSelector letter="N" selectLetter={selectLetter} />
      <LetterSelector letter="O" selectLetter={selectLetter} />
      <LetterSelector letter="P" selectLetter={selectLetter} />
      <LetterSelector letter="Q" selectLetter={selectLetter} />
      <LetterSelector letter="R" selectLetter={selectLetter} />
      <LetterSelector letter="S" selectLetter={selectLetter} />
      <LetterSelector letter="T" selectLetter={selectLetter} />
      <LetterSelector letter="U" selectLetter={selectLetter} />
      <LetterSelector letter="V" selectLetter={selectLetter} />
      <LetterSelector letter="W" selectLetter={selectLetter} />
      <LetterSelector letter="X" selectLetter={selectLetter} />
      <LetterSelector letter="Y" selectLetter={selectLetter} />
      <LetterSelector letter="Z" selectLetter={selectLetter} />
    </div>
  );
};

const GlossaryContainer = ({showGlossary, setShowGlossary}) => {
  let glossaryContext = useContext(GlossaryContext);
  // let [showGlossary, setShowGlossary] = useState(false);
  let [selectedLetter, setSelectedLetter] = useState();

  useEffect(() => {
    if (glossaryContext.selectedDefinition) {
      setSelectedLetter(glossaryContext.selectedDefinition.term.charAt(0));
      setShowGlossary(true);
    }
  }, [glossaryContext]);

  useEffect(() => {
    if (showGlossary) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showGlossary]);

  const hideGlossary = () => {
    glossaryContext.setSelectedTerm(null);
    setShowGlossary(false);
  };

  const selectTerm = (term) => {
    glossaryContext.setSelectedTerm(term);
  };

  const selectLetter = (letter) => {
    setSelectedLetter(letter);
    glossaryContext.setSelectedTerm(null);
  };

  return (
    <ReactModal isOpen={showGlossary} style={modalStyles}>
      <div className="glossary-fullscreen">
        <div className="glossary-header border-bottom">
          <div className="glossary-button-container">
            <div className="glossary-cancel" onClick={() => hideGlossary()}>
              Cancel
            </div>
          </div>
          <h1>Glossary</h1>
        </div>
        <div className="glossary-body">
          <LetterSelectors selectLetter={selectLetter} />
          <div className="glossary-entry-def">
            {glossaryContext.selectedDefinition ? (
              <GlossaryEntry
                selectedDefinition={glossaryContext.selectedDefinition}
              />
            ) : (
              <GlossaryIndex
                terms={glossaryContext.allTerms}
                selectedLetter={selectedLetter}
                selectTerm={selectTerm}
              />
            )}
          </div>
        </div>
      </div>
    </ReactModal>
  );
};

export default GlossaryContainer;
