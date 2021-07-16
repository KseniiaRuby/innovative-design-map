import React from "react"
import { Link } from "react-router-dom"
import "../styles/Navbar.css"

export default function Navbar() {
   return (
      <>
         <div>
            <div className="navbar-container">
               <Link to="/" className="nav-links">
                  Home
               </Link>
               {/* <Link to="/" className="nav-links">
            Menu
          </Link>
          <Link to="/" className="nav-links">
            Search
          </Link> */}
               <Link to="/MarkPointOnMap" className="nav-links">
                  Map
               </Link>
            </div>
         </div>
      </>
   )
}
