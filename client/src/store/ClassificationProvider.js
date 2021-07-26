import ClassificationContext from "./ClassificationContext";
import { useState, useEffect } from "react";

export default function ClassificationProvider({ children }) {
  const [gatewayWord, setGatewayWord] = useState();
  const [classification, setClassification] = useState();
  const [response, setResponse] = useState();

  const gatewayWords = [
    "green",
    "resilient",
    "adaptive",
    "clean",
    "efficient",
    "vibrant",
    "inclusive",
    "healthy",
    "active",
    "smart",
    "human-oriented",
    "dynamic",
    "accessible",
    "connected",
  ];

  useEffect(() => {
    console.log({ classification });
    console.log({ gatewayWord });

    // // fetch api
    // const getClassification = async () => {
    //   // fetch uses the "proxy" value set in client/package.json
    //   let response = await fetch("/api/classifications");
    //   let data = await response.json();
    //   setClassification(data);
    //   //
    // };
    // getClassification();

    // useEffect(() => {
    //  if (gateway === "green" || gateway === "resilient" || gateway === "adaptive") {
    // switch (gateway) {
    switch (gatewayWord) {
      case "green":
      case "resilient":
      case "adaptive":
        setClassification("Climate & Environment");
        // selectedClassification = classification;
        return;
      case "clean":
      case "efficient":
        setClassification("Energy & Resources");
        // selectedClassification = classification;
        return;
      case "vibrant":
      case "inclusive":
        setClassification("Culture, Heritage & Society");
        // selectedClassification = classification;
        return;
      case "safe":
      case "diverse":
        setClassification("Equity & Social Justice");
        // selectedClassification = classification;
        return;
      case "healthy":
      case "active":
        setClassification("Health & Wellness");
        // selectedClassification = classification;
        return;
      case "smart":
      case "human-oriented":
      case "dynamic":
        setClassification("Technology");
        // selectedClassification = classification;
        return;
      case "accessible":
      case "connected":
        setClassification("Transportation & Infrastructure");
        // selectedClassification = classification;
        return;
      default:
        return;
    }
    // }, [gateway, classification]);
  }, [gatewayWord, classification]);

  // }, [gatewayWord]);

  function getAllGatewayWords() {
    return gatewayWords;
  }

  const getAllClassifications = async () => {
    let allClassifications = {};

    try {
      let response = await fetch("/api/classifications");
      if (response.status !== 200) {
        let errorMessage = await response.text();
        console.log("We had an error: ", errorMessage);
        setResponse(errorMessage);
      } else if (response.status === 200) {
        let data = await response.json();
        allClassifications(data);
      } else {
        setResponse(undefined);
      }
    } catch (error) {
      console.error("Failed to reach the server");
    }
  };

  return (
    <ClassificationContext.Provider
      value={{
        getAllGatewayWords,
        gatewayWord,
        setGatewayWord,
        classification,
      }}
    >
      {children}
    </ClassificationContext.Provider>
  );
}
