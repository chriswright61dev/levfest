import React from "react";
import ImageContainer from "../../../../components/ImageContainer/ImageContainer";
function EventDetail(props) {
  const es = props.data;
  if (es) {
    return (
      <div className="event_detail">
        <div className="event_detail_text">
          <div className="old_event">
            <p>is it an old event? </p>

            <p> {props.old ? "Yes" : "No"}</p>
          </div>
          <p> title:{es.event_title}</p>
          <p> name:{es.event_name}</p>
          {/* make some components  */}
          {/* <DateTime date={es.event_date_time} /> */}
          <p> introduction:{es.event_introduction}</p>
          {/* <TimeText timeText={es.event_time_text} /> */}
          <p>Admission: {es.event_admission}</p>
          {/* <VenueLink venue_name={es.event_venue} venue_id={es.event_venue_id} /> */}
          <div
            className="event_body"
            dangerouslySetInnerHTML={{ __html: es.event_body }}
          />
        </div>

        <div className="event_detail_images">
          <ImageContainer source={es.event_poster_original} altText={es.name} />
          <ImageContainer source={es.event_image_1} altText={es.name} />
          <ImageContainer source={es.event_image_2} altText={es.name} />
          <ImageContainer source={es.event_image_3} altText={es.name} />
        </div>
      </div>
    );
  } else return null;
}

export default EventDetail;
