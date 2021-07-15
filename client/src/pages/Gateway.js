import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Pages.css";

export let selectedGateway = "";

export function Gateway() {
  const [gateway, setGateway] = useState();

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
          <option value="green">green</option>
          <option value="resilient">resilient</option>
          <option value="adaptive">adaptive</option>
          <option value="clean">clean</option>
          <option value="vibrant">vibrant</option>
          <option value="safe">safe</option>
          <option value="healthy">healthy</option>
          <option value="smart">smart</option>
          <option value="accessible">accessible</option>
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
