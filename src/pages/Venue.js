import React from "react";
import VenueDetails from "../modules/Venues/VenueDetails/VenueDetails";

function Venue() {
  return (
    <div className="container">
      <main>
        <VenueDetails />
      </main>

      <aside>
        <h4>Other Venues</h4>
        add a list of other venues for quick switching?
      </aside>
    </div>
  );
}

export default Venue;
