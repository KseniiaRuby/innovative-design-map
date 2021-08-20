import React, {useState} from "react";
import { Link } from "react-router-dom";
import "../styles/Styles.css";
import GlossaryContainer from "./Glossary/GlossaryContainer";

export default function Navbar() {
  let [showGlossary, setShowGlossary] = useState(false) 

  return (
    <>
      <div>
        <div className="navbar-container border-top">
          <Link to="/"
            className="nav-links">
            Home
          </Link>
          <Link to="/Map"
            className="nav-links">
            Map
          </Link>
          <Link to="/Category"
            className="nav-links">
            Explore
          </Link>
          <Link 
            className="nav-links"
            onClick={() => setShowGlossary(true)}>
            Glossary
          </Link>
        </div>
      </div>
            {showGlossary ? <GlossaryContainer showGlossary={showGlossary} setShowGlossary={setShowGlossary}/> : null}
    </>
  );
}
