export async function fetchSingleData(parametersObject) {
  try {
    const response = await fetch(parametersObject.url);
    if (response.ok) {
      const loadedData = await response.json();
      // update main state
      parametersObject.dispatchFunction({
        type: parametersObject.dispatchName,
        value: loadedData[0],
      });
      // update local display state
      parametersObject.setState({
        displayData: loadedData,
      });
    } else {
      throw new Error("Something went wrong");
    }
  } catch (err) {
    console.error(err);
  }
}

export async function fetchListData(dataName, urlList, dispatch) {
  const url = urlList[dataName]; // key in the api list object
  let correctedDataName = dataName.split(/(?=[A-Z])/).join("_");
  const dispatchDataName = "ADD_" + correctedDataName.toUpperCase() + "_DATA";
  const dispatchLoadedName = correctedDataName.toUpperCase() + "_DATA_LOADED";

  try {
    const response = await fetch(url);
    if (response.ok) {
      const loadedData = await response.json();
      dispatch({ type: dispatchDataName, value: loadedData });
      dispatch({ type: dispatchLoadedName });
    } else {
      throw new Error("Something went wrong");
    }
  } catch (err) {
    console.error(err);
  }
}

export async function fetchOldListData(fParam) {
  // pass in fParam - a parameters object
  const url = fParam.baseurl + fParam.year;
  const dispatchDataName = "ADD_" + fParam.dataName.toUpperCase() + "_DATA";
  const dispatchLoadedName = fParam.dataName.toUpperCase() + "_DATA_LOADED";

  try {
    const response = await fetch(url);
    if (response.ok) {
      const loadedData = await response.json();
      if (loadedData.length > 0) {
        fParam.dispatch({
          type: "SET_YEAR",
          value: fParam.year,
        });
        fParam.dispatch({
          type: dispatchDataName,
          value: loadedData,
        });
        fParam.dispatch({ type: dispatchLoadedName });
        // update local display state
        fParam.setTheState({
          displayData: loadedData,
        });
      } else {
        fParam.dispatch({
          type: "SET_YEAR",
          value: fParam.year,
        });
        // no data received for that year so make a result up and store that
        let nodata_array = [];
        let nodata = { event_year: fParam.year };
        nodata_array.push(nodata);
        fParam.dispatch({
          type: dispatchDataName,
          value: nodata_array,
        });
        fParam.setTheState({
          displayData: loadedData,
        });
      }
    } else {
      throw new Error("Something went wrong");
    }
  } catch (err) {
    console.error(err);
  }
}
