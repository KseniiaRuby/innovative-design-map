import { createContext } from "react";

const GlossaryContext = createContext({
  allTerms: [],
  selectSelectedTerm: () => {},
  selectedDefinition: undefined,
});

export default GlossaryContext;
