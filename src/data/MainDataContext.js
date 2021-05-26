import React, { createContext, useState } from "react";

export const MainDataContext = createContext();
function MainDataContextProvider(props) {
  const [mainState, setMainState] = useState({
    news: "news",
    events: "events",
    venues: "venues",
  });

  return (
    <MainDataContext.Provider value={mainState}>
      {props.children}
    </MainDataContext.Provider>
  );
}
export default MainDataContextProvider;
