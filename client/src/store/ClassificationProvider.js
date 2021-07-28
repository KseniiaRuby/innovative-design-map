import ClassificationContext from "./ClassificationContext";
import { useState, useEffect } from "react";

export default function ClassificationProvider({ children }) {
  const [allClassifications, setAllClassifications] = useState([]);
  const [allGatewayWords, setAllGatewayWords] = useState([]);
  const [gatewayWord, setGatewayWord] = useState();
  const [classification, setClassification] = useState();
  const [projectSummaries, setProjectSummaries] = useState([]);

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
    if (gatewayWord) {
      console.log("Looking up classification for Gateway word: ", gatewayWord);
      let foundClassification = allClassifications.find((classification) => {
        return classification.gatewayWords.includes(gatewayWord);
      });
      console.log("Found Classification object: ", foundClassification);
      setClassification(foundClassification);
    }
  }, [gatewayWord]);

  useEffect(() => {
    const getProjectSummaries = async () => {
      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };

      if (classification) {
        console.log(
          "Looking up project summaries for Classification Name: ",
          classification.classificationName
        );
        try {
          console.log("Classification ID: ", classification._id);
          let response = await fetch(
            "/api/project/findProjectSummariesByClassification?classificationId=" +
              classification._id,
            requestOptions
          );
          if (response.status !== 200) {
            throw new Error("Fetch for project summaries failed");
          }
          let projects = await response.json();
          setProjectSummaries(projects);
          console.log("Project Summaries: " + projects);
        } catch (err) {
          console.log("Error on client-side.", err);
        }
      }
    };
    getProjectSummaries();
  }, [gatewayWord, classification]);

  // console.log("Project Summaries 2: " + JSON.stringify(projectSummaries));

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
