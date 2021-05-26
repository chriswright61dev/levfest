export function fetchListData(dataName, urlList, dispatch) {
  //fetches the short data
  const url = urlList[dataName]; // key in the api list object
  let correctedDataName = dataName.split(/(?=[A-Z])/).join("_");
  const dispatchDataName = "ADD_" + correctedDataName.toUpperCase() + "_DATA";
  const dispatchLoadedName = correctedDataName.toUpperCase() + "_DATA_LOADED";
  fetch(url)
    .then((res) => res.json())
    .then((loadedData) => {
      dispatch({ type: dispatchDataName, value: loadedData });
      dispatch({ type: dispatchLoadedName });
    });
}

export function countProperties(obj) {
  // count properties of object
  // used for counting the active feeds in the apiURL object
  //in case I add some more
  let count = 0;
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) ++count;
  }
  return count;
}

export function feedCounter(feedList, dispatch) {
  const feedcount = countProperties(feedList);
  dispatch({ type: "FEEDS_COUNTED", value: feedcount });
}
