import { useContext } from "react";
import ClassificationContext from "../store/ClassificationContext";
// import { selectedGateway } from "../pages/Gateway";
import "../styles/Header.css";

export default function Header() {
  const classificationCtx = useContext(ClassificationContext);

  return (
    <>
      <div>
        <div className="header-container">
          <div className="title-text">
            What makes <u>Calgary</u>
            <br></br>
            <u>{classificationCtx.gatewayWord}</u>&nbsp;?
          </div>
        </div>
      </div>
    </>
  );
}
