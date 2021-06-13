import React, { useContext, useEffect, useState } from "react";
import { MainDataContext } from "../../../data/MainDataContext";
import {
  // fetchSingleData,
  isParameterUsed,
  getExistingData,
} from "../../../utilities/utilities";
import { fetchSingleData } from "../../../utilities/getData";
import { useParams } from "react-router-dom";
import VenueDetail from "./VenueDetail/VenueDetail";
import Loader from "../../../components/Loader/Loader";
function VenueDetails(props) {
  const [venueState, setVenueState] = useState({
    displayData: [],
  });

  const baseUrl = "https://www.levenshulmecommunityfestival.co.uk/";
  const apiUrl = "api_venues_long?venue_id=";
  const longVenueData = useContext(MainDataContext).mainState.venuesLongData;
  const dispatcher = useContext(MainDataContext).dispatch;
  let { id } = useParams();

  useEffect(() => {
    // have we looked at this data before
    if (isParameterUsed(longVenueData, "id", id)) {
      let displayData = getExistingData(longVenueData, id);
      setVenueState({
        displayData: displayData,
      });
    } else {
      const fetchParametersObject = {
        url: baseUrl + apiUrl + id,
        // state: "venueState",
        setState: setVenueState,
        dispatchFunction: dispatcher,
        dispatchName: "ADD_VENUE_DATA",
      };

      fetchSingleData(fetchParametersObject);
    }
  }, [id]);
  //rerun useEffect if new venue id is selected

  let venueData = venueState.displayData;
  // starts as an empty array
  if (venueData.length > 0) {
    return <VenueDetail data={venueData[0]} />;
  } else {
    return <Loader />;
  }
}

export default VenueDetails;
