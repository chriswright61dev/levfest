import React, { useContext } from "react";
import "./FrontPageDataCard.css";
import { MainDataContext } from "../../../data/MainDataContext";
import FrontPageDataCardBlock from "./FrontPageDataCardBlock/FrontPageDataCardBlock.js";
function FrontPageDataCard() {
  const events = useContext(MainDataContext).mainState.eventsListData;

  if (!events) {
    //   if (events.length === 0) {
    return null;
  } else {
    return (
      // this is outputting all events

      <div className="front_page_data_card">
        {events.map((event) => {
          return (
            <FrontPageDataCardBlock
              key={event.id}
              id={event.id}
              link={"events"}
              title={event.event_title}
              // name={event.event_name}
              date={event.event_date_time}
              venue={event.event_venue}
              // venue_id={event.event_venue_id}
              // introduction={event.event_introduction}
              // time={event.event_time_text}
              image={event.event_image_1}
            />
          );
        })}
      </div>
    );
  }
}

export default FrontPageDataCard;
