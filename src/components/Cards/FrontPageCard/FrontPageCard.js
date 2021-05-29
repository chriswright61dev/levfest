import React from "react";
import "./FrontPageCard.css";
import { Link } from "react-router-dom";
import ImageContainer from "../../ImageContainer/ImageContainer";
function FrontPageCard(props) {
  console.log(props);
  return (
    <div className="front_page_card">
      <div className="front_page_card__text_top">
        <h2>{props.title}</h2>
      </div>
      <div className="front_page_card__text_bottom">
        <p>{props.text}</p>
      </div>
      <Link to={props.link}>
        <ImageContainer
          source={props.IMGsource}
          altText={props.IMGaltText}
          type={props.IMGtype}
        />
      </Link>
    </div>
  );
}

export default FrontPageCard;
