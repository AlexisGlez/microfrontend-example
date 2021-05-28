import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import Button from "button/Button";

const Home = () => (
  <div>
    <p>Hey!</p>
    <Button />
  </div>
);

ReactDOM.render(<Home />, document.getElementById("app"));
