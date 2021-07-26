import ClassificationContext from "./ClassificationContext";
import { useState, useEffect } from "react";

export default function ClassificationProvider({ children }) {
  const [allClassifications, setAllClassifications] = useState([])
  const [allGatewayWords, setAllGatewayWords] = useState([]);
  const [gatewayWord, setGatewayWord] = useState();
  const [classification, setClassification] = useState();

  useEffect(() => {
    const getAllClassifications = async () => {
      try {
        let response = await fetch("/api/classification");
        if (response.status !== 200) {
          throw new Error('Fetch for classifications failed')
        }
        let classifications = await response.json();
        setAllClassifications(classifications)
      } catch (err) {
        console.log("Error on Client-Side", err);
      }
    };
  
    getAllClassifications()
  }, [])

  useEffect(() => {
    let foundGatewayWords = []
    allClassifications.forEach((classification) => {
      let newGatewayWords = classification.gatewayWords
      foundGatewayWords = foundGatewayWords.concat(newGatewayWords)
    })
    setAllGatewayWords(foundGatewayWords)
  }, [allClassifications])

  useEffect(() => {
    console.log('looking up classification for', gatewayWord)
    let foundClassification = allClassifications.find((classification) => {
      return classification.gatewayWords.includes(gatewayWord)
    })
    console.log('found ', foundClassification)
    setClassification(foundClassification)
  }, [gatewayWord])

  return (
    <ClassificationContext.Provider
      value={{
        allGatewayWords,
        gatewayWord,
        setGatewayWord,
        classification,
      }}
    >
      {children}
    </ClassificationContext.Provider>
  );
}
