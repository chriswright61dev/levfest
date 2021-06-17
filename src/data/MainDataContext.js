import React, { createContext, useEffect, useReducer } from "react";
import { feedCounter, indexOfYearData } from "../utilities/utilities";
import { fetchListData } from "../utilities/getData";

export const MainDataContext = createContext();

const thisyear = new Date().getFullYear();
// get data from these urls
const mainApiListsURLs = {
  // api urls object
  festival:
    "https://www.levenshulmecommunityfestival.co.uk/api_levfest_basic_data",

  venuesList:
    "https://www.levenshulmecommunityfestival.co.uk/api_levfest_venues_list ",
  eventsList:
    "https://www.levenshulmecommunityfestival.co.uk/api_levfest_events_list/" +
    thisyear,

  newsList:
    "https://www.levenshulmecommunityfestival.co.uk/api_levfest_news_list",
};

function MainDataContextProvider(props) {
  const initialState = {
    // am I using any of this?
    festivalLoaded: false,
    venuesListLoaded: false,
    eventsListLoaded: false,
    newsListLoaded: false,
    feedsCount: 0,
    loadCount: 0,

    festivalData: [],
    venuesListData: [],
    venuesLongData: [],
    eventsListData: [],
    eventsListDataOld: [],
    eventsLongData: [],
    newsListData: [],
    newsLongData: [],
    year: thisyear,
  };

  const [mainState, dispatch] = useReducer(reducerfn, initialState);

  function reducerfn(mainState, action) {
    switch (action.type) {
      case "FEEDS_COUNTED": {
        return {
          ...mainState,
          feedsCount: action.value,
        };
      }

      case "SET_YEAR": {
        return {
          ...mainState,
          year: action.value,
        };
      }

      case "FESTIVAL_DATA_LOADED": {
        return {
          ...mainState,
          festivalLoaded: true,
          loadCount: mainState.loadCount + 1,
        };
      }

      case "VENUES_LIST_DATA_LOADED": {
        return {
          ...mainState,
          venuesListLoaded: true,
          loadCount: mainState.loadCount + 1,
        };
      }

      case "EVENTS_LIST_DATA_LOADED": {
        return {
          ...mainState,
          eventsListLoaded: true,
          loadCount: mainState.loadCount + 1,
        };
      }

      case "NEWS_LIST_DATA_LOADED": {
        return {
          ...mainState,
          newsListLoaded: true,
          loadCount: mainState.loadCount + 1,
        };
      }

      case "ADD_FESTIVAL_DATA": {
        // its an array but only 1 set of data
        return { ...mainState, festivalData: action.value[0] };
      }

      case "ADD_NEWS_LIST_DATA": {
        return { ...mainState, newsListData: action.value };
      }

      case "ADD_VENUES_LIST_DATA": {
        return { ...mainState, venuesListData: action.value };
      }
      case "ADD_EVENTS_LIST_DATA": {
        return { ...mainState, eventsListData: action.value };
      }

      case "ADD_NEWS_DATA": {
        const existingData = mainState.newsLongData;
        const newData = action.value;
        // if we don't check that the data exists
        // then it gets added three times
        const used = existingData.some((news) => news["id"] === newData.id);
        if (used) {
          // already exists so don't add data
          return { ...mainState };
        } else {
          // add data
          existingData.push(action.value);
          return { ...mainState, newsLongData: existingData };
        }
      }

      case "ADD_VENUE_DATA": {
        const venuedata = mainState.venuesLongData;
        const newData = action.value;
        const used = venuedata.some((venue) => venue["id"] === newData.id);
        if (used) {
          // already exists so don't add data
          return { ...mainState };
        } else {
          // add data
          venuedata.push(action.value);
          return { ...mainState, venuesLongData: venuedata };
        }
      }

      case "ADD_EVENT_DATA": {
        const eventdata = mainState.eventsLongData;
        const newData = action.value;
        const used = eventdata.some((event) => event["id"] === newData.id);
        if (used) {
          // already exists so don't add data
          return { ...mainState };
        } else {
          // add data
          eventdata.push(action.value);
          return { ...mainState, eventsLongData: eventdata };
        }
      }

      case "ADD_EVENTS_LIST_OLD_DATA": {
        // check if action.value has data
        const year = mainState.year;
        console.log("year in reducer", year);
        // get this from state
        const keyname = "year" + year;
        let oldEventsData = mainState.eventsListDataOld;
        // check if there is no data
        if (oldEventsData.length > 0) {
          // old data exists - is the current year in it
          let yearIndex = indexOfYearData(oldEventsData, keyname);
          if (yearIndex >= 0) {
            // old data does contain the new data so don't do anything
            return { ...mainState };
          } else {
            // old data does not contain the new data so add it
            let yearobject = { [keyname]: action.value };
            oldEventsData.push(yearobject);
            return { ...mainState, eventsListDataOld: oldEventsData };
          }
        } else {
          // no data exists at all so add it
          let yearobject = { [keyname]: action.value };
          oldEventsData.push(yearobject);
          return { ...mainState, eventsListDataOld: oldEventsData };
        }
      }

      default: {
        return { ...mainState };
      }
    }
  }

  // if one of the promises inside a Promise.all reject,
  // the function will throw - no access to the resolved promises
  // leave as is - seperate

  useEffect(() => {
    feedCounter(mainApiListsURLs, dispatch);
  }, []);

  useEffect(() => {
    fetchListData("festival", mainApiListsURLs, dispatch);
  }, []);

  useEffect(() => {
    fetchListData("eventsList", mainApiListsURLs, dispatch);
  }, []);

  useEffect(() => {
    fetchListData("newsList", mainApiListsURLs, dispatch);
  }, []);

  useEffect(() => {
    fetchListData("venuesList", mainApiListsURLs, dispatch);
  }, []);

  return (
    <MainDataContext.Provider value={{ mainState, dispatch }}>
      {props.children}
    </MainDataContext.Provider>
  );
}
export default MainDataContextProvider;
