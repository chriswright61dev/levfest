import React, { useContext } from "react";
import "./FrontPageVenueDataCard.css";
import { MainDataContext } from "../../../../data/MainDataContext";
import FrontPageDataCardBlock from "../FrontPageDataCardBlock/FrontPageDataCardBlock.js";

function FrontPageVenueDataCard() {
  const venues = useContext(MainDataContext).mainState.venuesListData;

  console.log(venues);
  if (!venues) {
    return null;
  } else {
    const highlights = venues.filter(
      (venue) => venue.venue_highlight === "highlight"
    );
    return (
      <div className="front_page_event_data_card">
        {highlights.map((venue) => {
          return (
            <FrontPageDataCardBlock
              key={venue.id}
              id={venue.id}
              link={"venues"}
              title={venue.venue_title}
              image={venue.venue_image_1}
            />
          );
        })}
      </div>
    );
  }
}

export default FrontPageVenueDataCard;
