// import ScrollMenu from "react-horizontal-scrolling-menu";
import Header from "../components/Header";
import ClassificationHeader from "../components/ClassificationHeader";
import HorizontalProjectMenu from "../components/HorizontalProjectSummaries/HorizontalProjectMenu";
import Navbar from "../components/Navbar";
import "../styles/Styles.css";

export default function Category() {
  return (
    <div>
      <ClassificationHeader />
      {/* <div className="projects-title">Explore Projects</div> */}
      <div className="project-title-spacer"></div>
      <HorizontalProjectMenu />
      <Header />
      <Navbar />
    </div>
  );
}
