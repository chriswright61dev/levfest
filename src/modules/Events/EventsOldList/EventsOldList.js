import React, { useContext, useEffect, useState } from "react";
import EventsOldListDisplay from "./EventsOldListDisplay/EventsOldListDisplay";

import { MainDataContext } from "../../../data/MainDataContext";
import {
  indexOfYearData,
  fetchOldListData,
} from "../../../utilities/utilities";

function EventsOldList() {
  // listing data from previous years

  const [eventYearState, setEventYearState] = useState({
    year: "2020",
  });

  const [oldEventState, setOldEventState] = useState({
    loading: false,
    displayData: [],
  });

  function handleYearChange(event) {
    setEventYearState({
      year: event.target.value,
    });
  }

  const year = eventYearState.year;
  let keyname = "year" + year;
  const baseUrl = "http://www.levenshulmecommunityfestival.co.uk/";
  const apiUrl = "api_levfest_events_list/";

  const oldEventsListData =
    useContext(MainDataContext).mainState.eventsListDataOld;
  const dispatcher = useContext(MainDataContext).dispatch;

  const url = baseUrl + apiUrl;

  useEffect(() => {
    let yearIndex = indexOfYearData(oldEventsListData, keyname);

    if (yearIndex >= 0) {
      //   data already exists
      let displayData = oldEventsListData[yearIndex][keyname];
      setOldEventState({
        displayData: displayData,
      });
    } else {
      fetchOldListData(
        "EVENTS_LIST_OLD",
        url,
        year,
        dispatcher,
        setOldEventState
      );
    }
  }, [eventYearState.year]);
  // console.log("oldEventState in component", oldEventState);
  //   const options = [2020, 2019, 2018]; // get this from state - api - values available
  return (
    <div>
      <select name="year" id="year-select" onChange={handleYearChange}>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
        {/* there is no data for 2019 */}
      </select>
      old events list from {year}
      <EventsOldListDisplay events={oldEventState.displayData} />
    </div>
  );
}

export default EventsOldList;
