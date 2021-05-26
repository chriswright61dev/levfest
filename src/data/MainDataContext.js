import React, { createContext, useEffect, useReducer } from "react";
import { feedCounter, fetchListData } from "../utilities/utilities";

export const MainDataContext = createContext();

const thisyear = new Date().getFullYear();
// get data from these urls
const mainApiListsURLs = {
  // api urls object
  venuesList:
    "http://www.levenshulmecommunityfestival.co.uk/api_levfest_venues_list ",
  eventsList:
    "http://www.levenshulmecommunityfestival.co.uk/api_levfest_events_list/" +
    thisyear,

  newsList:
    "http://www.levenshulmecommunityfestival.co.uk/api_levfest_news_list",
};

function MainDataContextProvider(props) {
  const initialState = {
    venuesListLoaded: false,
    eventsListLoaded: false,
    newsListLoaded: false,
    feedsCount: 0,
    loadCount: 0,
    venuesListData: [],
    venuesLongData: [],
    eventsListData: [],
    eventsListDataOld: [],
    eventsLongData: [],
    newsListData: [],
    newsLongData: [],
  };

  const [mainState, dispatch] = useReducer(reducerfn, initialState);

  function reducerfn(mainState, action) {
    switch (action.type) {
      case "ADD_NEWS_LIST_DATA": {
        return { ...mainState, newsListData: action.value };
      }

      case "ADD_VENUES_LIST_DATA": {
        return { ...mainState, venuesListData: action.value };
      }
      case "ADD_EVENTS_LIST_DATA": {
        return { ...mainState, eventsListData: action.value };
      }
      case "FEEDS_COUNTED": {
        return {
          ...mainState,
          feedsCount: action.value,
        };
      }

      default: {
        return { ...mainState };
      }
    }
  }

  useEffect(() => {
    feedCounter(mainApiListsURLs, dispatch);
  }, []);

  useEffect(() => {
    fetchListData("venuesList", mainApiListsURLs, dispatch);
  }, []);

  useEffect(() => {
    fetchListData("eventsList", mainApiListsURLs, dispatch);
  }, []);

  useEffect(() => {
    fetchListData("newsList", mainApiListsURLs, dispatch);
  }, []);

  return (
    <MainDataContext.Provider value={{ mainState, dispatch }}>
      {props.children}
    </MainDataContext.Provider>
  );
}
export default MainDataContextProvider;
