// import React from "react";
import { Link } from "react-router-dom";
import ImageContainer from "../../ImageContainer/ImageContainer";
import "./EventCard.css";
import DateTime from "../../DateTime/DateTime";
function EventCard(props) {
  return (
    // link
    // title
    // id
    // old
    // date
    // venue name text
    // introduction
    // venue_id - is this used

    <div className="event_card">
      <Link to={`/${props.link}/${props.id}`}>
        {/* <div className="event_card__text_top"> */}
        <div
          className={
            !props.old
              ? "event_card__text_top"
              : "event_card__text_top event_old"
          }
        >
          <h2> {props.title}</h2>
        </div>{" "}
      </Link>
      <div className="event_card__text_middle">
        {props.old ? (
          <p className="an_old_event">This is an OLD event</p>
        ) : (
          <DateTime date={props.date} />
        )}
      </div>

      <div className="event_card__text_bottom">
        <p> {props.venue}</p>
        <p> {props.introduction}</p>
        {/* <p>
          event id {props.id} venue id {props.venue_id}
        </p> */}
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
