import React, { useContext } from "react";
import { MainDataContext } from "../../../data/MainDataContext";
import VenueCard from "../../../components/VenueCard/VenueCard";
import "./VenueList.css";
function VenueList() {
  const venues = useContext(MainDataContext).mainState.venuesListData;

  if (venues.length === 0) {
    return null;
  } else {
    return (
      <div className="venues">
        {venues.map((venue) => {
          return (
            <VenueCard
              key={venue.id}
              id={venue.id}
              link={"venues"}
              title={venue.venue_title}
              introduction={venue.venue_introduction}
              // postcode={venue.venue_address_4}
              image_1={venue.venue_image_1}
            />
          );
        })}
      </div>
    );
  }
}

export default VenueList;
