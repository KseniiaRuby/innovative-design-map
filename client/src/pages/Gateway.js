import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../styles/Pages.css";
import ClassificationContext from "../store/ClassificationContext";

export let selectedGateway = "";
export let selectedClassification = "";

// function inputValidation() {
//   if (selectedGateway === "") {
//     alert("Please select a gateway word option.");
//     return false;
//   }
// }

export function Gateway() {
  const classificationCtx = useContext(ClassificationContext);
  const [gateway, setGateway] = useState(selectedGateway);
  const [classification, setClassification] = useState();

  selectedClassification = classification;

  useEffect(() => {
    //  if (gateway === "green" || gateway === "resilient" || gateway === "adaptive") {
    switch (gateway) {
      case "green":
      case "resilient":
      case "adaptive":
        setClassification("Climate & Environment");
        selectedClassification = classification;
        return;
      case "clean":
      case "efficient":
        setClassification("Energy & Resources");
        selectedClassification = classification;
        return;
      case "vibrant":
      case "inclusive":
        setClassification("Culture, Heritage & Society");
        selectedClassification = classification;
        return;
      case "safe":
      case "diverse":
        setClassification("Equity & Social Justice");
        selectedClassification = classification;
        return;
      case "healthy":
      case "active":
        setClassification("Health & Wellness");
        selectedClassification = classification;
        return;
      case "smart":
      case "human-oriented":
      case "dynamic":
        setClassification("Technology");
        selectedClassification = classification;
        return;
      case "accessible":
      case "connected":
        setClassification("Transportation & Infrastructure");
        selectedClassification = classification;
        return;
      default:
        return;
    }
  }, [gateway, classification]);

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
          value={gateway}
          onChange={(e) => {
            selectedGateway = e.target.value;
            setGateway(selectedGateway);
          }}
        >
          <option value=""></option>
          {classificationCtx.getAllGatewayWords().map((gatewayWord) => {
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
