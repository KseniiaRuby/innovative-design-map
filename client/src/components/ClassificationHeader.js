// import { useState, useEffect, useContext } from "react";
import { useContext } from "react";
// import { GetClassification } from "../../../reducer/ClassificationReducer";
import "../styles/Header.css";
// import { selectedClassification } from "../pages/Gateway";
import ClassificationContext from "../store/ClassificationContext";

export default function Header() {
  const classificationCtx = useContext(ClassificationContext);

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

  // console.log({ClassificationContext.gatewayWord});
  // console.log({ClassificationContext.classification});

  return (
    <>
      <div>
        <div className="classification-container">
          {/* <div className="title-text">{selectedClassification}</div> */}
          <div className="title-text">{classificationCtx.classification}</div>
        </div>
      </div>
    </>
  );
}
