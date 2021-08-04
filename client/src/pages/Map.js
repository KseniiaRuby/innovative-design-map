// import ScrollMenu from "react-horizontal-scrolling-menu";
import Header from "../components/Header"
import MarkPointOnMap2 from "../components/MarkPointOnMap2"
import Navbar from "../components/Navbar"
import "../styles/Styles.css"
import HorizontalProjectMenu from "../components/HorizontalProjectSummaries/HorizontalProjectMenu"

export default function Map() {
   return (
      <div>
         <MarkPointOnMap2 />
         <Header />
         <HorizontalProjectMenu />
         <Navbar />
      </div>
   )
}
