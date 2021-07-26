import { createContext } from "react";

const ClassificationContext = createContext({
  // Initialize gateway word
  //
  gatewayWord: undefined,

  // Initialize classification
  //
  classification: undefined,

  setGatewayWord: () => {},
  setClassification: () => {},

  getAllClassifications: () => {},
  getAllGatewayWords: () => {},
});

export default ClassificationContext;
