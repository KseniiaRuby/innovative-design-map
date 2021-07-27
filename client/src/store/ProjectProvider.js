import ProjectContext from "./ClassificationContext";
import { useState, useEffect } from "react";

export default function ProjectProvider({ children }) {
  const [allProjects, setAllProjects] = useState();

  useEffect(() => {
    const getAllProjects = async () => {
      try {
        let response = await fetch("/api/project");
        if (response.status !== 200) {
          throw new Error("Fetch for projects failed");
        }
        let projects = await response.json();
        setAllProjects(projects);
      } catch (err) {
        console.log("Error on client-side.", err);
      }
    };

    getAllProjects();
  }, []);

  return (
    <ProjectContext.Provider
      value={{
        allProjects,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
}
