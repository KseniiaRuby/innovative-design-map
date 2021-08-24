import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "../styles/Styles.css";
import GlossaryContainer from "./Glossary/GlossaryContainer";
import GlossaryContext from "../store/GlossaryContext";

export default function Navbar() {
  let glossaryContext = useContext(GlossaryContext);
  const [navbar, setNavbar] = useState()

        return (
        <>
          <div className={`${glossaryContext.showGlossary ? "display-none" : "display-block"}`}>
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
                onClick={() => glossaryContext.setShowGlossary(true) && setNavbar(false)}>
                Glossary
              </Link>
            </div>
          </div>
          {glossaryContext.showGlossary ? <GlossaryContainer /> : null }
        </>
        );
}
