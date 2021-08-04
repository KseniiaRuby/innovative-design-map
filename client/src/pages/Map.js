// import ScrollMenu from "react-horizontal-scrolling-menu";
import Header from "../components/Header"
import MarkPointOnMap from "../components/MarkPointOnMap"
import Navbar from "../components/Navbar"
import "../styles/Styles.css"
import HorizontalProjectMenu from "../components/HorizontalProjectSummaries/HorizontalProjectMenu"
import MarkPointOnMap2 from "../components/MarkPointOnMap2"

export default function Map() {
   return (
      <div>
         {/* <MarkPointOnMap2 /> */}
         <MarkPointOnMap />
         <Header />
         <HorizontalProjectMenu />
         <Navbar />
      </div>
   )
}
