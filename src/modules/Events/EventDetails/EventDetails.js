import React, { useContext, useEffect, useState } from "react";
import { MainDataContext } from "../../../data/MainDataContext";

import { useParams } from "react-router-dom";
import EventDetail from "./EventDetail/EventDetail.js";

function EventDetails(props) {
  const [eventState, setEventState] = useState({
    displayData: [],
  });

  const baseUrl = "http://www.levenshulmecommunityfestival.co.uk/";
  const apiUrl = "/api_events_long?event_id=";
  const longEventsData = useContext(MainDataContext).mainState.eventsLongData;
  const dispatcher = useContext(MainDataContext).dispatch;
  let { id } = useParams();

  useEffect(() => {
    // have we looked at this data before
    // if so use that
    // else fetch the data
  }, [id]);
  //rerun useEffect if a new event id is selected

  let eventData = eventState.displayData;
  // starts as an empty array
  if (eventData.length > 0) {
    // so keep it as an array - has only one element

    return <EventDetail data={eventData[0]} />;
  } else {
    return "loading";
  }
}

export default EventDetails;
