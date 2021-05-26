import React, { createContext, useEffect, useReducer } from "react";

export const MainDataContext = createContext();
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

  function reducerfn(mainState, action) {}

  const thisyear = new Date().getFullYear();
  // get data from these urls
  const mainApiListsURLs = {
    // api urls object
    venuesList: "http://www.levenshulmecommunityfestival.co.uk/api_venues_list",
    eventsList:
      "http://www.levenshulmecommunityfestival.co.uk/api_levfest_events_list/" +
      thisyear,

    newsList: "http://www.levenshulmecommunityfestival.co.uk/api_news_list",
  };

  return (
    <MainDataContext.Provider value={mainState}>
      {props.children}
    </MainDataContext.Provider>
  );
}
export default MainDataContextProvider;
