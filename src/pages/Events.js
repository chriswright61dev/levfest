import React from "react";
import EventsList from "../modules/Events/EventsList/EventsList";
import Pagetop from "../components/Markers/PageTop/Pagetop";
function Events() {
  return (
    <div className="content">
      <Pagetop />
      <EventsList />
    </div>
  );
}

export default Events;
