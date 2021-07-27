import ClassificationContext from "./ClassificationContext";
import { useState, useEffect } from "react";

export default function ClassificationProvider({ children }) {
  const [allClassifications, setAllClassifications] = useState([]);
  const [allGatewayWords, setAllGatewayWords] = useState([]);
  const [gatewayWord, setGatewayWord] = useState();
  const [classification, setClassification] = useState();
  const [projectSummaries, setProjectSummaries] = useState();

  useEffect(() => {
    const getAllClassifications = async () => {
      try {
        let response = await fetch("/api/classification");
        if (response.status !== 200) {
          throw new Error("Fetch for classifications failed");
        }
        let classifications = await response.json();
        setAllClassifications(classifications);
      } catch (err) {
        console.log("Error on Client-Side: Classifications", err);
      }
    };

    getAllClassifications();
  }, []);

  useEffect(() => {
    let foundGatewayWords = [];
    allClassifications.forEach((classification) => {
      let newGatewayWords = classification.gatewayWords;
      foundGatewayWords = foundGatewayWords.concat(newGatewayWords);
    });
    setAllGatewayWords(foundGatewayWords);
  }, [allClassifications]);

  useEffect(() => {
    console.log("Looking up classification for gateway word: ", gatewayWord);
    let foundClassification = allClassifications.find((classification) => {
      return classification.gatewayWords.includes(gatewayWord);
    });
    console.log("Found classification: ", foundClassification);
    setClassification(foundClassification);
    //
    //
    console.log("Looking up project summaries for gateway word: ", gatewayWord);
    const getProjectSummaries = async () => {
      try {
        let response = await fetch(
          "/api/project/findSummariesByClassification"
        );
        if (response.status !== 200) {
          throw new Error("Fetch for project summaries failed");
        }
        let projects = await response.json();
        setProjectSummaries(projects);
      } catch (err) {
        console.log("Error on client-side.", err);
      }
    };
    getProjectSummaries();
  }, [gatewayWord]);

  return (
    <ClassificationContext.Provider
      value={{
        allGatewayWords,
        gatewayWord,
        setGatewayWord,
        classification,
        projectSummaries,
      }}
    >
      {children}
    </ClassificationContext.Provider>
  );
}
