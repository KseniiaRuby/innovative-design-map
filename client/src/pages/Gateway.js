import { useState } from "react";
import "../styles/Pages.css";

export function Gateway() {
  // const [city, setCity] = useState();
  const [gateway, setGateway] = useState();

  return (
    <div className="category-block">
      What makes Calgary
      <br></br>
      {/* <select
        className="list-style"
        value={city}
        onChange={(e) => {
          const selectedCity = e.target.value;
          setCity(selectedCity);
        }}
      >
        <option value="Calgary">Calgary</option>
        <option value="Edmonton">Edmonton</option>
        <option value="Lethbridge">Lethbridge</option>
      </select> */}
      <div>
        <select
          className="list-style"
          value={gateway}
          onChange={(e) => {
            const selectedGateway = e.target.value;
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
            <button className="lets-go-button">Let's Go</button>
          </div>
        </div>
      </div>
    </div>
  );
}
