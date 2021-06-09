import React from "react";
import Pagetop from "../components/Markers/PageTop/Pagetop";
import VenueList from "../modules/Venues/VenueList/VenueList";
function Venues() {
  return (
    <div className="content">
      <Pagetop />
      <VenueList />
    </div>
  );
}

export default Venues;
