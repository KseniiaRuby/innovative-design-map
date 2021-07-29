import ClassificationContext from "./ClassificationContext";
import { useState, useEffect } from "react";

export default function ClassificationProvider({ children }) {
  const [allClassifications, setAllClassifications] = useState([]);
  const [allGatewayWords, setAllGatewayWords] = useState([]);
  const [gatewayWord, setGatewayWord] = useState();
  const [classification, setClassification] = useState();
  const [projects, setProjects] = useState([]);

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
    const getProjects = async () => {
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
            "/api/project/findProjectsByClassification?classificationId=" +
              classification._id,
            requestOptions
          );
          if (response.status !== 200) {
            throw new Error("Fetch for project summaries failed");
          }
          let projects = await response.json();
          setProjects(projects);
          console.log("Projects: " + JSON.stringify(projects));
        } catch (err) {
          console.log("Error on client-side.", err);
        }
      }
    };
    getProjects();
  }, [gatewayWord, classification]);

  return (
    <ClassificationContext.Provider
      value={{
        allGatewayWords,
        gatewayWord,
        setGatewayWord,
        classification,
        projects,
      }}
    >
      {children}
    </ClassificationContext.Provider>
  );
}
