import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../styles/Pages.css";
import ClassificationContext from "../store/ClassificationContext";

export let selectedGateway = "";
export let selectedClassification = "";

export function Gateway() {
  const classificationCtx = useContext(ClassificationContext);
  const [gateway, setGateway] = useState();
  const [classification, setClassification] = useState();

  selectedClassification = classification;

  useEffect(() => {
    console.log("Gateway Page: Word was updated to: ", selectedGateway);
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
        setClassification("Healthy & Wellness");
        selectedClassification = classification;
        return;
      case "smart":
      case "human-oriented":
      case "dynamic":
        setClassification("Technology");
        selectedClassification = classification;
        return;
      case "Accessible":
      case "Connected":
        setClassification("Transportation & Infrastructure");
        selectedClassification = classification;
        return;
      default:
        return;
    }
  }, [gateway]);

  return (
    <div className="category-block">
      What makes Calgary
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
            return <option value={gatewayWord}>{gatewayWord}</option>;
          })}

          {/* <option value="resilient">resilient</option>
               <option value="adaptive">adaptive</option>
               <option value="clean">clean</option>
               <option value="vibrant">vibrant</option>
               <option value="safe">safe</option>
               <option value="healthy">healthy</option>
               <option value="smart">smart</option>
               <option value="accessible">accessible</option> */}
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
