// import { useState, useEffect } from "react";
// import { SelectedClassification } from "../pages/Gateway";
import "../../../styles/Header.css";
import { selectedClassification } from "../../Gateway";
// import { GetClassification } from "../../../reducer/ClassificationReducer";

export default function Header() {
  // const [classification, setClassification] = useState(SelectedClassification);
  //   const classificationCtx = useContext(ClassificationContext);

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

  console.log("Classification Page");

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
