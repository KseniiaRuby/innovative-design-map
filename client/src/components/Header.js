import React from "react";
import { selectedGateway } from "../pages/Gateway";
import "../styles/Header.css";

export default function Header() {
  console.log("Header Page");
  return (
    <>
      <div>
        <div className="header-container">
          <div className="title-text">
            What makes <u>Calgary</u> <u>{selectedGateway}</u>&nbsp;?
          </div>
        </div>
      </div>
    </>
  );
}
