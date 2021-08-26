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
    <div className="container-flex">
      <div>
        <Header />
      </div>
      <div>
        <MarkPointOnMap
          setSelectedProjectIndex={setSelectedProjectIndex}
          selectedProjectIndex={selectedProjectIndex}
        />
      </div>
      <div>
        <HorizontalProjectMenu
          selectedProjectIndex={selectedProjectIndex}
          setSelectedProjectIndex={setSelectedProjectIndex}
        />
      </div>
      <div>
        <Navbar />
      </div>
    </div>
  );
}
