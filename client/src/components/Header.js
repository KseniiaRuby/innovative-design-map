import { useContext } from "react";
import ClassificationContext from "../store/ClassificationContext";
import "../styles/Styles.css";

export default function Header() {
  const classificationCtx = useContext(ClassificationContext);
  let selectedGateway = "";

  return (
    <>
      <div>
        <div className="header-container">
          <div className="title-text">
            What makes Calgary{" "}
            <select
              className="list-style"
              value={classificationCtx.gatewayWord}
              onChange={(e) => {
                selectedGateway = e.target.value;
                classificationCtx.setGatewayWord(selectedGateway);
              }}
            >
              {classificationCtx.allGatewayWords.map((gatewayWord) => {
                return <option key={gatewayWord}>{gatewayWord}</option>;
              })}
            </select>
            &nbsp;?
          </div>
        </div>
      </div>
    </>
  );
}
