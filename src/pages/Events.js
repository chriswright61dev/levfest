import React from "react";
import EventsList from "../modules/Events/EventsList/EventsList";
import Pagetop from "../components/Markers/PageTop/Pagetop";
function Events() {
  return (
    <div className="content">
      <Pagetop />
      <h1 className="page_h1">Levenshulme Festival Events </h1>
      <EventsList />
    </div>
  );
}

export default Events;
