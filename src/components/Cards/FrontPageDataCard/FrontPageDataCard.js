import React, { useContext } from "react";
import "./FrontPageDataCard.css";
import { MainDataContext } from "../../../data/MainDataContext";
import FrontPageDataCardBlock from "../FrontPageDataCards/FrontPageDataCardBlock/FrontPageDataCardBlock.js";
function FrontPageDataCard() {
  const events = useContext(MainDataContext).mainState.eventsListData;
  console.log(events);
  if (!events) {
    return null;
  } else {
    const highlights = events.filter(
      (event) => event.event_highlight === "highlight"
    );
    return (
      <div className="front_page_data_cards">
        {highlights.map((event) => {
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
