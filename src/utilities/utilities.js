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
