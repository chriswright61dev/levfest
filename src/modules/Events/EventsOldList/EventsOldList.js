import React, { useContext, useEffect, useState } from "react";
import EventsOldListDisplay from "./EventsOldListDisplay/EventsOldListDisplay";

import { MainDataContext } from "../../../data/MainDataContext";
import { indexOfYearData } from "../../../utilities/utilities";

import { fetchOldListData } from "../../../utilities/getData";

function EventsOldList() {
  // listing data from previous years

  // the year we are looking at
  const [eventYearState, setEventYearState] = useState({
    year: "2020",
  });

  const [oldEventState, setOldEventState] = useState({
    displayData: [],
  });

  // change year state from select box
  function handleYearChange(event) {
    setEventYearState({
      year: event.target.value,
    });
  }

  // const year = eventYearState.year;
  let keyname = "year" + eventYearState.year;
  const baseUrl = "http://www.levenshulmecommunityfestival.co.uk/";
  const apiUrl = "api_levfest_events_list/";

  const oldEventsListData =
    useContext(MainDataContext).mainState.eventsListDataOld;
  const dispatcher = useContext(MainDataContext).dispatch;
  // console.log("oldEventsListData", oldEventsListData);
  const url = baseUrl + apiUrl;

  useEffect(() => {
    let yearIndex = indexOfYearData(oldEventsListData, keyname);

    if (yearIndex >= 0) {
      //   data already exists
      let savedDisplayData = oldEventsListData[yearIndex][keyname];
      console.log("savedDisplayData", savedDisplayData);

      if (savedDisplayData[0].id) {
        // savedDisplayData is valid data
        setOldEventState({
          displayData: savedDisplayData,
        });
      } else {
        // savedDisplayData is NOT valid data
        setOldEventState({
          displayData: [],
        });
      }
    } else {
      const fetchParametersObject = {
        dataName: "EVENTS_LIST_OLD",
        baseurl: url,
        year: eventYearState.year,
        dispatch: dispatcher,
        setTheState: setOldEventState,
      };

      fetchOldListData(fetchParametersObject);
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
      old events list from {eventYearState.year}
      <EventsOldListDisplay events={oldEventState.displayData} />
    </div>
  );
}

export default EventsOldList;
