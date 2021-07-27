import { createContext } from "react";

const ProjectContext = createContext({
  // Get all projects
  getAllProjects: [],
});

export default ProjectContext;
