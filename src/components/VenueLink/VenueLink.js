// import React from "react";
import { Link } from "react-router-dom";
import "./VenueLink.css";
function VenueLink(props) {
  return (
    <Link to={`/venues/${props.venue_id}`}>
      <h3 className="venue_link"> at {props.venue_name}</h3>
    </Link>
  );
}

export default VenueLink;
