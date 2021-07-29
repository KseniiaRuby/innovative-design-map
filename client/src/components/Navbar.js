import React from "react"
import { Link } from "react-router-dom"
import "../styles/Styles.css"

export default function Navbar() {
   return (
      <>
         <div>
            <div className="navbar-container border-top">
               <Link to="/" className="nav-links">
                  Home
               </Link>
               {/* <Link to="/" className="nav-links">
            Menu
          </Link>
          <Link to="/" className="nav-links">
            Search
          </Link> */}
               <Link to="/Map" className="nav-links">
                  Map
               </Link>
            </div>
         </div>
      </>
   )
}
