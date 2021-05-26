// import React from "react";
import { Link } from "react-router-dom";
import ImageContainer from "../ImageContainer/ImageContainer";
import "./EventCard.css";
import DateTime from "../DateTime/DateTime";
function EventCard(props) {
  return (
    <div className="event_card">
      <div className="event_card__text">
        <Link to={`/${props.link}/${props.id}`}>
          <h4> {props.title}</h4>
        </Link>
        <DateTime date={props.date} />
        <p> {props.venue}</p>
        <p> {props.introduction}</p>
        <p>
          event id {props.id} venue id {props.venue_id}
        </p>
      </div>

      <ImageContainer
        type="square"
        source={props.image_1}
        altText={props.title}
      />
    </div>
  );
}

export default EventCard;
