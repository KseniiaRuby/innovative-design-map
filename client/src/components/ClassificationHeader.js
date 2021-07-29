import { useContext } from "react"
import ClassificationContext from "../store/ClassificationContext"
import "../styles/Styles.css"

export default function Header() {
   const classificationCtx = useContext(ClassificationContext)

   return (
      <>
         <div>
            <div className="classification-container">
               {classificationCtx.classification && (
                  <div className="title-text">
                     {classificationCtx.classification.classificationName}
                  </div>
               )}
               {classificationCtx.classification && (
                  <div className="description-text border-bottom">
                     {classificationCtx.classification.shortDescription}
                     {/* {classificationCtx.projectSummaries.length > 0 &&
                JSON.stringify(classificationCtx.projectSummaries[0].location)} */}
                  </div>
               )}
            </div>
         </div>
      </>
   )
}
