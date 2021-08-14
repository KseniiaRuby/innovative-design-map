import GlossaryContext from "./GlossaryContext";
import { useState, useEffect } from "react";

function removeNBSP(text) {
  return text.replace(/\u00A0/g, "\x20");
}

function fixDefinition(definition) {
  return {
    term: removeNBSP(definition.term),
    description: removeNBSP(definition.description),
  };
}

export default function GlossaryProvider({ children }) {
  const [allDefintions, setAllDefinitions] = useState([]);
  const [allTerms, setAllTerms] = useState([]);
  const [selectedDefinition, setSelectedDefinition] = useState();

  useEffect(() => {
    const getAllDefinitions = async () => {
      try {
        let response = await fetch("/api/glossary");
        if (response.status !== 200) {
          throw new Error("Fetch for glossary words failed");
        }
        let definitions = await response.json();
        setAllDefinitions(definitions.map(fixDefinition));
      } catch (err) {
        console.log("Error on Client-Side: Glossary Defintions", err);
      }
    };

    getAllDefinitions();
  }, []);

  useEffect(() => {
    let terms = allDefintions.map((definition) => definition.term);
    setAllTerms(terms);
  }, [allDefintions]);

  const setSelectedTerm = (term) => {
    let foundDefintion = allDefintions.find(
      (definition) => definition.term === term
    );
    setSelectedDefinition(foundDefintion);
  };

  return (
    <GlossaryContext.Provider
      value={{
        allTerms,
        setSelectedTerm,
        selectedDefinition,
      }}
    >
      {children}
    </GlossaryContext.Provider>
  );
}
