import React from "react";
import "./SquareCard.css";
import { Link } from "react-router-dom";
import ImageContainer from "../../ImageContainer/ImageContainer";
function SquareCard(props) {
  // title
  // id
  // linkBaseName
  // imageurl

  <div className="square_card">
    <Link to={`/${props.linkBaseName}/${props.id}`}>
      <div className="square_card__text_top">
        <h2> {props.title}</h2>
      </div>
    </Link>
    <div className="square_card__text_middle"></div>

    <div className="square_card__text_bottom"></div>

    <ImageContainer
      type="square"
      source={props.imageurl}
      altText={props.title}
    />
  </div>;
}

export default SquareCard;
