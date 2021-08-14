import { useState } from "react";
import Header from "../components/Header";
import ClassificationHeader from "../components/ClassificationHeader";
import HorizontalProjectMenu from "../components/HorizontalProjectSummaries/HorizontalProjectMenu";
import Navbar from "../components/Navbar";
import "../styles/Styles.css";

export default function Category() {
  let [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  return (
    <div>
      <ClassificationHeader />
      <div className="project-title-spacer"></div>
      <HorizontalProjectMenu
        selectedProjectIndex={selectedProjectIndex}
        setSelectedProjectIndex={setSelectedProjectIndex}
      />
      <Header />
      <Navbar />
    </div>
  );
}
