// import ScrollMenu from "react-horizontal-scrolling-menu";
import Header from "../components/Header"
import MarkPointOnMap from "../components/MarkPointOnMap"
import "../styles/Styles.css"
// import HorizontalProjectMenu from "../components/HorizontalProjectSummaries/HorizontalProjectMenu"

export default function Map() {
   return (
      <div>
         <MarkPointOnMap />
         <Header />
         {/* <HorizontalProjectMenu /> */}

      </div>
   )
}
