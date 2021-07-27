import { createContext } from "react";

const ProjectContext = createContext({
  // All project summaries by classification
  getAllProjects: [],
});

export default ProjectContext;
