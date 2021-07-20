// import { useState, useEffect } from "react";
// import { GetClassification } from "../../../reducer/ClassificationReducer";
import "../styles/Header.css";
import { selectedClassification } from "../pages/Gateway";

export default function Header() {
  // const [classification, setClassification] = useState(SelectedClassification);
  // const classificationCtx = useContext(ClassificationContext);

  // useEffect(() => {
  //   console.log("Classification name was updated");

  //   return (
  //     <>
  //       <div>
  //         <div>
  //           <div></div>
  //         </div>
  //       </div>
  //     </>
  //   );
  // }, [classification]);

  return (
    <>
      <div>
        <div className="classification-container">
          <div className="title-text">{selectedClassification}</div>
        </div>
      </div>
    </>
  );
}
