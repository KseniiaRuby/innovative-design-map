import { createContext } from "react";

const ClassificationContext = createContext({
  // All available classification objects
  allClassifications: [],
  // All available gateway words
  allGatewayWords: [],
  // Initialize gateway word
  gatewayWord: undefined,
  // Initialize classification
  classification: undefined,
});

export default ClassificationContext;
