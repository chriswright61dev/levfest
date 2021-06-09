// import React from "react";
import { Link } from "react-router-dom";

import ImageContainer from "../../ImageContainer/ImageContainer";
import "./VenueCard.css";
function VenueCard(props) {
  return (
    <div className="venue_card">
      <Link to={`/${props.link}/${props.id}`}>
        <div className="venue_card__text_top">
          <h2> {props.title}</h2>
        </div>
      </Link>
      <div className="venue_card__text_bottom">
        <p> {props.introduction}</p>
        {/* <p> {props.postcode}</p> */}
      </div>
      <ImageContainer
        type="square"
        source={props.image_1}
        altText={props.title}
      />
      {/* <p> {props.id}</p> */}
    </div>
  );
}

export default VenueCard;
