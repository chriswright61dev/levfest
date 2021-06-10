import React from "react";
import "./EventDetail.css";
import DateTime from "../../../../components/DateTime/DateTime";
import TimeText from "../../../../components/TimeText/TimeText";
// import ShowYear from "../../../../components/ShowYear/ShowYear";
import VenueLink from "../../../../components/VenueLink/VenueLink";
import OldEvent from "../../../../components/OldEvent/OldEvent";
import ImageContainer from "../../../../components/ImageContainer/ImageContainer";
function EventDetail(props) {
  const es = props.data;
  if (es) {
    return (
      <div className="event_detail">
        <div className="event_detail_text">
          <h2>{es.event_title}</h2>
          <DateTime date={es.event_date_time} />
          <VenueLink venue_name={es.event_venue} venue_id={es.event_venue_id} />
          {es.event_admission ? (
            <p className="admission">Admission: {es.event_admission} </p>
          ) : null}
          {/* is it an old event? if so make it very clear  */}
          {props.old ? <OldEvent date={es.event_date_time} /> : null}
          <p>{es.event_introduction}</p>
          {/* <TimeText timeText={es.event_time_text} /> */}
          {/* time from text field not date */}

          <div
            className="event_body"
            dangerouslySetInnerHTML={{ __html: es.event_body }}
          />
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
