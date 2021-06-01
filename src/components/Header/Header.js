import "./Header.css";
import HeaderLogo from "./HeaderLogo/HeaderLogo";
import svglogo from "../../images/levfestlogo.svg";

function Header() {
  return (
    <header>
      <HeaderLogo logosource={svglogo} />
      <div className="header_text">
        <p>Festival Dates</p>
      </div>
    </header>
  );
}

export default Header;
