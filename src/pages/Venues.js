import React from "react";
import Pagetop from "../components/Markers/PageTop/Pagetop";
import VenueList from "../modules/Venues/VenueList/VenueList";
function Venues() {
  return (
    <div className="content">
      <Pagetop />
      <h1 className="page_h1">Levenshulme Festival Venues</h1>
      <VenueList />
    </div>
  );
}

export default Venues;
