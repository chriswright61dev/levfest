import React from "react";
import { Link } from "react-router-dom";
import "./HeaderLogo.css";
function HeaderLogo(props) {
  return (
    <Link to="/">
      <div className="header_logo">
        <img src={props.logosource} alt="festival logo" />
      </div>
    </Link>
  );
}

export default HeaderLogo;
