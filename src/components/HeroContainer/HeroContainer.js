import React from "react";
import "./HeroContainer.css";
// import ImageContainer from "../../components/ImageContainer/ImageContainer";
function HeroContainer(props) {
  return (
    <div className="hero_container">
      <div className="hero_container__text">
        <h2>{props.title}</h2>
        <h3>{props.dates}</h3>
        <p>{props.text}</p>{" "}
      </div>
      <div className="hero_container__logo">
        <img src={props.logosource} alt="festival logo" />
      </div>
      {/* {props.IMGsource} */}
    </div>
  );
}

export default HeroContainer;
