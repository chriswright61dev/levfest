import "./Header.css";
import React, { useContext } from "react";
import HeaderLogo from "./HeaderLogo/HeaderLogo";
// import svglogo from "../../images/levfestlogo.svg";
import { MainDataContext } from "../../data/MainDataContext";

function Header() {
  const festival = useContext(MainDataContext).mainState.festivalData[0];
  return (
    <header>
      <HeaderLogo logosource={festival ? festival.festival_logo : null} />
      <div className="header_text">
        <p>{festival ? festival.festival_dates : null}</p>
      </div>
    </header>
  );
}

export default Header;
