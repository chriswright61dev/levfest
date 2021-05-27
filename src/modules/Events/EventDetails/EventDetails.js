import React, { useContext, useEffect, useState } from "react";
import { MainDataContext } from "../../../data/MainDataContext";
import {
  fetchSingleData,
  isParameterUsed,
  getExistingData,
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
  console.log("longEventsData", longEventsData);
  console.log("id", id);
  useEffect(() => {
    console.log(
      "isParameterUsed(longEventsData",
      isParameterUsed(longEventsData, "id", id)
    );
    // have we looked at this data before
    if (isParameterUsed(longEventsData, "id", id)) {
      let displayData = getExistingData(longEventsData, id);
      console.log("old data - displayData", displayData);
      setEventState({
        displayData: displayData,
      });
    } else {
      console.log("get new detail data");
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
    const oldEvent = false;
    return <EventDetail old={oldEvent} data={eventData[0]} />;
  } else {
    return "loading";
  }
}

export default EventDetails;
