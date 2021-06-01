import React from "react";
import "./HeaderLogo.css";
function HeaderLogo(props) {
  return (
    <div className="header_logo">
      <img src={props.logosource} alt="festival logo" />
    </div>
  );
}

export default HeaderLogo;
