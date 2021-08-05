import GlossaryContext from "./GlossaryContext";
import { useState, useEffect } from "react";

export default function GlossaryProvider({ children }) {
  const [allDefintions, setAllDefinitions] = useState([])
  const [allTerms, setAllTerms] = useState([])
  const [selectedDefinition, setSelectedDefinition] = useState()

  useEffect(() => {
    const getAllDefinitions = async () => {
      setAllDefinitions([
        { term: 'Project', description: 'A project!'},
        { term: 'Of The', description: 'a common conjunction'},
        { term: 'Apple', description: 'A delicious fruit associated with good health.'},
        { term: 'Banana', description: 'A delicious fruit associated with tropical locations.'}
      ])
      // try {
      //   let response = await fetch("/api/glossary");
      //   if (response.status !== 200) {
      //     throw new Error("Fetch for glossary words failed");
      //   }
      //   let defintions = await response.json();
      //   setAllDefinitions(defintions);
      // } catch (err) {
      //   console.log("Error on Client-Side: Glossary Defintions", err);
      // }
    };

    getAllDefinitions();
  }, []);

  useEffect(() => {
    let terms = allDefintions.map((definition) => definition.term)
    setAllTerms(terms)
  },[allDefintions])

  const setSelectedTerm = (term) => {
    console.log('Trying to select term, ', term)
    let foundDefintion = allDefintions.find((definition) => definition.term === term)
    console.log('selecting definition, ', foundDefintion)
    setSelectedDefinition(foundDefintion)
  }

  return (
    <GlossaryContext.Provider
      value={{
        allTerms,
        setSelectedTerm,
        selectedDefinition
      }}
    >
      {children}
    </GlossaryContext.Provider>
  );
}
