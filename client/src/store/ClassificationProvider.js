import ClassificationContext from "./ClassificationContext";
// import { useState, useEffect } from "react";

export default function ClassificationProvider({ children }) {
  // const [gatewayWords, setgatewayWords] = useState([
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

  //   const [classification, setClassification] = useState([
  //     {
  //       name: "climate_and_environment",
  //       id: 0,
  //       gatewayWords: ["green", "resilient", "adaptive"],
  //       featureWords: [],
  //       description: "this is climate classification description",
  //     },
  //     {
  //       name: "energy_and_resources",
  //       id: 1,
  //       gatewayWords: ["clean", "efficient"],
  //       featureWords: [],
  //       description: "this is energy and resources classification description",
  //     },
  //   ]);

  // useEffect(() => {
  //   console.log("ClassificationProvider Page: Gateway words initialized.");
  // }, [gatewayWords]);

  function getAllGatewayWords() {
    return gatewayWords;
  }

  //   function getClassification() {
  //  if (gatewayWords === "green" || gatewayWords === "resilient" || gatewayWords === "adaptive")

  return (
    <ClassificationContext.Provider value={{ getAllGatewayWords }}>
      {children}
    </ClassificationContext.Provider>
  );
}
