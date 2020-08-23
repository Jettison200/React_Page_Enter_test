import React from "react";
import "../scss/header.scss";

function Header(props) {
  return (
    <header>
      <div className="header-container">
        <div className="header-text">
          <h1 className="header-greeting">
            Welcome {props.name}! <br />
         <span className="sub-greeting">Are you ready to take a look into the <span className="bold">Future?</span> </span>   
          </h1>
        </div>
      </div>
    </header>
  );
}

export default Header;
