// import React from "react";
import { Link } from "react-router-dom";
import "./VenueLink.css";
function VenueLink(props) {
  return (
    <Link to={`/venues/${props.venue_id}`}>
      <h4 className="venue_name"> at {props.venue_name}</h4>;
      <div>show an image of the venue here? </div>
    </Link>
  );
}

export default VenueLink;
