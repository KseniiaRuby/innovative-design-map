import { useContext } from "react";
import { Link } from "react-router-dom";
import "../styles/Pages.css";
import ClassificationContext from "../store/ClassificationContext";

export function Gateway() {
  const classificationCtx = useContext(ClassificationContext);
  let selectedGateway = "";

  return (
    <div className="category-block">
      <br></br>
      What
      <br></br>
      makes
      <br></br>
      Calgary
      <br></br>
      <div className="list-spacer">
        <select
          className="list-style"
          value={classificationCtx.gatewayWord}
          onChange={(e) => {
            selectedGateway = e.target.value;
            classificationCtx.setGatewayWord(selectedGateway);
          }}
        >
          <option value=""></option>
          {classificationCtx.allGatewayWords.map((gatewayWord) => {
            return <option key={gatewayWord}>{gatewayWord}</option>;
          })}
        </select>
        &nbsp;?
        <div>
          <div className="button-spacer">
            <button className="button-lets-go">
              <Link className="button-styling" to="/Category">
                LET'S GO
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
