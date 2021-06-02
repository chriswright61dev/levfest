import React from "react";
import "./FrontPageBigCard.css";
import { Link } from "react-router-dom";
import ImageContainer from "../../ImageContainer/ImageContainer";
function FrontPageBigCard(props) {
  // console.log(props);
  return (
    <div className="front_page_big_card">
      <div className="front_page_big_card__text_top">
        <h2>{props.title}</h2>
      </div>
      <div className="front_page_big_card__text_bottom">
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

export default FrontPageBigCard;
