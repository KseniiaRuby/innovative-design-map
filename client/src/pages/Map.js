// import ScrollMenu from "react-horizontal-scrolling-menu";
import Header from "../components/Header"
import MarkPointOnMap from "../components/MarkPointOnMap"
import "../styles/Styles.css"

export default function Map() {
   return (
      <div>
         <MarkPointOnMap />
         <Header />
      </div>
   )
}
