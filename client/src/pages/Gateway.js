import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import ClassificationContext from "../store/ClassificationContext";
import "../styles/Styles.css";

export function Gateway() {
  const [gateway, setGateway] = useState();
  const classificationCtx = useContext(ClassificationContext);
  //   let selectedGateway = "";

  return (
    <div className="choose-gateway-word-title">
      What <br /> makes <br />
      Calgary
      <div className="list-spacer">
        <select
          className="list-style"
          value={classificationCtx.gatewayWord}
          onChange={(e) => {
            // selectedGateway = e.target.value;
            setGateway(e.target.value);
            // classificationCtx.setGatewayWord(selectedGateway);
            classificationCtx.setGatewayWord(e.target.value);
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
            {/*  */}
            {gateway !== undefined ? (
              <div>
                <button className="button-lets-go">
                  <Link className="button-styling" to="/Category">
                    LET'S GO
                  </Link>
                </button>
              </div>
            ) : null}
            {/*  */}
          </div>
        </div>
      </div>
    </div>
  );
}
