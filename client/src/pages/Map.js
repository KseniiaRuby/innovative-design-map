// import ScrollMenu from "react-horizontal-scrolling-menu";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import "../styles/Styles.css";
import HorizontalProjectMenu from "../components/HorizontalProjectSummaries/HorizontalProjectMenu";
// import MarkPointOnMap from "../components/MarkPointOnMap";
import MarkPointOnMap2 from "../components/MarkPointOnMap2";
import "../styles/MarkPointOnMap2.css";
import {useState} from 'react'


export default function Map() {
  let [selectedProjectIndex, setSelectedProjectIndex] = useState(0)

  return (
    <div>
      <MarkPointOnMap2 setSelectedProjectIndex = {setSelectedProjectIndex}/>
      {/* <MarkPointOnMap /> */}
      <Header />
      <HorizontalProjectMenu  selectedProjectIndex = {selectedProjectIndex}/>
      <Navbar />
    </div>
  );
}
