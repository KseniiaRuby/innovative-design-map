import React from "react"
import { Link } from "react-router-dom"
import "../../styles/Styles.css"

export const Button = ({ children, type, onClick, linkProperty, imageUrl }) => {
   const link = linkProperty ? linkProperty : "/ProjectPage"

   const scrollToTop = () => {
      window.scrollTo({
         top: 0,
         behavior: "smooth",
      })
   }

   return (
      <div>
         <Link to={link} className="btn-text">
            <button
               style={{
                  backgroundImage: `url(${imageUrl})`,
               }}
               className={"btn-large"}
               // onClick={onClick}
               onClick={scrollToTop}
               type={type}
            >
               <div className="project-name-on-slider">
                  {children}
               </div>
            </button>
         </Link>
      </div>
   )
}
