import {useState} from 'react'
import Header from "../components/Header";
import Navbar from "../components/Navbar";  
import HorizontalProjectMenu from "../components/HorizontalProjectSummaries/HorizontalProjectMenu";
import MarkPointOnMap2 from "../components/MarkPointOnMap2";
import "../styles/Styles.css";
import "../styles/MarkPointOnMap2.css";


export default function Map() {
  let [selectedProjectIndex, setSelectedProjectIndex] = useState()
  let [selectedProjectOnSlider, setSelectedProjectOnSlider] = useState()

  return (
    <div>
      <MarkPointOnMap2 setSelectedProjectIndex = {setSelectedProjectIndex} selectedProjectOnMap= {selectedProjectOnSlider} />
      {/* <MarkPointOnMap /> */}
      <Header />
      <HorizontalProjectMenu  selectedProjectIndex = {selectedProjectIndex} setSelectedProjectOnSlider = {setSelectedProjectOnSlider} />
      <Navbar />
    </div>
  );
}