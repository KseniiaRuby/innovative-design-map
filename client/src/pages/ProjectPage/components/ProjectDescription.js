import React from "react"
import '../../../styles/Styles.css'


const ProjectDescription = ({ projectDescription }) => {
   return (
      <div className="border project-description">
         <p>{projectDescription}</p>
         {/* <p>
            The <u>Calgary Central Library</u>,
            also known as the <u>Calgary New Central Library</u>,
            is a <u>public library</u> in <u>Calgary</u>, Alberta, Canada,
            and the flagship branch of the Calgary Public Library system
         </p> */}
         <p>
            The project was designed by <u>Snohetta</u> in collaboration with{" "}
            <u>DIALOG</u>
            and completed in <u>2018</u>.
         </p>
      </div>
   )
}

export default ProjectDescription
