import React from "react";
import EventCard from "../../../../components/EventCard/EventCard";

function EventsOldListDisplay(props) {
  const events = props.events;

  if (!events) {
    //   if (events.length === 0) {
    return null;
  } else {
    return (
      <div className="events">
        {events.map((event) => {
          return (
            <EventCard
              key={event.id}
              id={event.id}
              link={"events"}
              title={event.event_title}
              name={event.event_name}
              date={event.event_date_time}
              venue={event.event_venue}
              venue_id={event.event_venue_id}
              introduction={event.event_introduction}
              time={event.event_time_text}
              image_1={event.event_image_1}
            />
          );
        })}
      </div>
    );
  }
}

export default EventsOldListDisplay;
