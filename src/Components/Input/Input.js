import React, { useState } from "react";
import "../scss/input.scss";

function Input(props) {
  const [error, setError] = useState(".");
  let button;
  let errorMsg = error;
  let enter = () => {
    errorMsg = setError("Remember to enter your name");
    return errorMsg;
  };

  if (props.name === "Client" || props.name === " " || props.name === "") {
    button = (
      <button className="submit" onClick={enter}>
        Enter
      </button>
    );
  } else {
    button = (
      <button className="submit" onClick={props.remove}>
        Enter
      </button>
    );
  }

  return (
    <div className="input" style={props.newStyle}>
      <div className="input-container">
        <p style={{ display: "none" }}>{props.name}</p>
        <p className="error-message">{errorMsg}</p>
        <div className="input-contents">
          <input
            type="text"
            onChange={props.handler}
            placeholder="Please Enter Your Name..."
          />
          <span></span>
        </div>
        <div className="enter">{button}</div>
      </div>
    </div>
  );
}

export default Input;
