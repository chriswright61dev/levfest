import React, { useContext, useEffect, useState } from "react";
import { MainDataContext } from "../../../data/MainDataContext";
import {
  fetchSingleData,
  isParameterUsed,
  getExistingData,
  hasDatePassed,
} from "../../../utilities/utilities";
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
    if (isParameterUsed(longEventsData, "id", id)) {
      let displayData = getExistingData(longEventsData, id);
      setEventState({
        displayData: displayData,
      });
    } else {
      const fetchParametersObject = {
        url: baseUrl + apiUrl + id,
        setState: setEventState,
        dispatchFunction: dispatcher,
        dispatchName: "ADD_EVENT_DATA",
      };

      fetchSingleData(fetchParametersObject);
    }
  }, [id]);
  //rerun useEffect if a new event id is selected

  let eventData = eventState.displayData;
  // starts as an empty array
  if (eventData.length > 0) {
    // so keep it as an array - has only one element

    const HasEventPassed = hasDatePassed(eventData.event_date);
    return <EventDetail old={HasEventPassed} data={eventData[0]} />;
  } else {
    return "loading";
  }
}

export default EventDetails;
