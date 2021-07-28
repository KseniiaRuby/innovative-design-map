import React from "react"
import { Link } from "react-router-dom"
import "../../styles/Styles.css"

export const Button = ({ children, type, onClick, linkProperty }) => {
   const link = linkProperty ? linkProperty : "/ProjectPage"
   return (
      <button className={"btn-large"} onClick={onClick} type={type}>
         <Link to={link} className="btn-text">
            {children}
         </Link>
      </button>
   )
}
