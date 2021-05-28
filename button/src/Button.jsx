import React from "react";

const Button = (props) => (
  <button
    style={{
      padding: "1rem",
      backgroundColor: props.backgroundColor ?? "black",
      color: "white",
      fontSize: "xx-large",
      cursor: "pointer",
    }}
    onClick={() => console.log("Hi")}
  >
    Hello there!
  </button>
);

export default Button;
