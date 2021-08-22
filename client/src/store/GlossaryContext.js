import { createContext } from "react";

const GlossaryContext = createContext({
  allTerms: [],
  selectSelectedTerm: () => {},
  selectedDefinition: undefined,
  showGlossary: undefined
  
});

export default GlossaryContext;
