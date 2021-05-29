import React from "react";
import "./HeroContainer.css";
import ImageContainer from "../../components/ImageContainer/ImageContainer";
function HeroContainer(props) {
  return (
    <div className="hero_container">
      <div className="hero_container__logo">
        <img src={props.logosource} alt="festival logo" />
      </div>
      <h2>{props.title}</h2>
      <p>{props.text}</p>

      {props.IMGsource}
    </div>
  );
}

export default HeroContainer;
