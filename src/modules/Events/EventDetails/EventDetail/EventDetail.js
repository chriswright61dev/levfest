import React from "react";
import "./EventDetail.css";
import DateTime from "../../../../components/DateTime/DateTime";
import TimeText from "../../../../components/TimeText/TimeText";
import ShowYear from "../../../../components/ShowYear/ShowYear";
import VenueLink from "../../../../components/VenueLink/VenueLink";
import ImageContainer from "../../../../components/ImageContainer/ImageContainer";
function EventDetail(props) {
  const es = props.data;
  if (es) {
    return (
      <div className="event_detail">
        <div className="event_detail_text">
          <div className="old_event">
            <p>is it an old event? if so make it very clear </p>
            <p> {props.old ? "Yes" : "No"}</p>
          </div>
          <p> title:{es.event_title}</p>
          <p> name:{es.event_name}</p>
          <p> event id:{es.id}</p>
          {/* make some components  */}
          <DateTime date={es.event_date_time} />
          <ShowYear date={es.event_date_time} />
          <p> introduction:{es.event_introduction}</p>
          <TimeText timeText={es.event_time_text} />
          {/* time from text field not date */}{" "}
          <p>Admission: {es.event_admission}</p>
          <VenueLink venue_name={es.event_venue} venue_id={es.event_venue_id} />
          <div
            className="event_body"
            dangerouslySetInnerHTML={{ __html: es.event_body }}
          />
          <p>end of text</p>
        </div>

        <div className="event_detail_images">
          {es.event_poster_original ? (
            <ImageContainer
              type="square"
              source={es.event_poster_original}
              altText={es.name}
            />
          ) : null}

          {es.event_image_1 ? (
            <ImageContainer
              type="square"
              source={es.event_image_1}
              altText={es.name}
            />
          ) : null}

          {es.event_image_2 ? (
            <ImageContainer
              type="square"
              source={es.event_image_2}
              altText={es.name}
            />
          ) : null}

          {es.event_image_3 ? (
            <ImageContainer
              type="square"
              source={es.event_image_3}
              altText={es.name}
            />
          ) : null}
        </div>
      </div>
    );
  } else return null;
}

export default EventDetail;
