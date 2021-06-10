import React from "react";
import VenueDetails from "../modules/Venues/VenueDetails/VenueDetails";
import Pagetop from "../components/Markers/PageTop/Pagetop";
function Venue() {
  return (
    <div className="content">
      <div className="container">
        <Pagetop />
        <h1 className="page_h1">A Levenshulme Festival Venue</h1>
        <VenueDetails />
      </div>

      <aside>
        <h4>Other Venues</h4>
        add a list of other venues for quick switching?
      </aside>
    </div>
  );
}

export default Venue;
