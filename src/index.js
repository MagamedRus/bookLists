import React from "react";
import ReactDOM from "react-dom";
import "./styles/global.scss";
import App from "./App";

const rootElement = document.getElementById("root");

ReactDOM.render(
    <React.StrictMode>
      {/* <App /> */}
      <p>Some content</p>
    </React.StrictMode>,
  rootElement
);
