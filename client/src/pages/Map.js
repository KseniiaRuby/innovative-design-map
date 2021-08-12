import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { useState } from "react";
import HorizontalProjectMenu from "../components/HorizontalProjectSummaries/HorizontalProjectMenu";
import MarkPointOnMap2 from "../components/MarkPointOnMap2";
import "../styles/Styles.css";
import "../styles/MarkPointOnMap2.css";

export default function Map() {
  let [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  return (
    <div>
      <MarkPointOnMap2
        setSelectedProjectIndex={setSelectedProjectIndex}
        selectedProjectIndex={selectedProjectIndex}
      />
      {/* <MarkPointOnMap /> */}
      <Header />
      <HorizontalProjectMenu
        selectedProjectIndex={selectedProjectIndex}
        setSelectedProjectIndex={setSelectedProjectIndex}
      />
      <Navbar />
    </div>
  );
}
