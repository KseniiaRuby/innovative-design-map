import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { useState } from "react";
import HorizontalProjectMenu from "../components/HorizontalProjectSummaries/HorizontalProjectMenu";
import MarkPointOnMap from "../components/MarkPointOnMap";
import "../styles/Styles.css";
import "../styles/MarkPointOnMap.css";

export default function Map() {
  let [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  return (
    <div>
      <MarkPointOnMap
        setSelectedProjectIndex={setSelectedProjectIndex}
        selectedProjectIndex={selectedProjectIndex}
      />
      <Header />
      <HorizontalProjectMenu
        selectedProjectIndex={selectedProjectIndex}
        setSelectedProjectIndex={setSelectedProjectIndex}
      />
      <Navbar />
    </div>
  );
}
