export function findIndexInArray(arrayName, objectKeyName, keyValue) {
  // find the index of a key value in an array of objects
  return arrayName
    .map(function (e) {
      return e[objectKeyName];
    })
    .indexOf(keyValue);
}

export function isParameterUsed(arrayName, objectKeyname, parameter) {
  // is a parameter present in an array of objects
  return arrayName.some(
    (objectName) => objectName[objectKeyname] === parameter
  );
}

export function indexOfYearData(dataArray, keyname) {
  let foundindex = -1;
  for (let index = 0; index < dataArray.length; index++) {
    let keysindex = Object.keys(dataArray[index]).indexOf(keyname);
    if (keysindex === 0) {
      foundindex = index;
    }
  }
  return foundindex;
}

export function getExistingData(dataArray, id) {
  const dataIndex = findIndexInArray(dataArray, "id", id);
  let displayData = [];
  displayData.push(dataArray[dataIndex]);
  return displayData;
}

export function fetchOldListData(fParam) {
  // pass in fParam - a parameters object
  const url = fParam.baseurl + fParam.year;
  const dispatchDataName = "ADD_" + fParam.dataName.toUpperCase() + "_DATA";
  const dispatchLoadedName = fParam.dataName.toUpperCase() + "_DATA_LOADED";
  fetch(url)
    .then((res) => res.json())
    .then((loadedData) => {
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
        // no data received for that year so make a result up
        console.log("loadedData is empty - adding blank for year", loadedData); // []
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
    });
}

export function fetchSingleData(parametersObject) {
  fetch(parametersObject.url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Something went wrong");
      }
    })
    .then((loadedData) => {
      // update main state
      parametersObject.dispatchFunction({
        type: parametersObject.dispatchName,
        value: loadedData[0],
      });
      // update local display state
      parametersObject.setState({
        displayData: loadedData,
      });
    })

    .catch((error) => {
      console.log(error);
    });
}

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

export function hasDatePassed(date) {
  let HasEventPassed = false;
  const now = new Date();
  if (Date.parse(now) > Date.parse(date)) {
    HasEventPassed = true;
  }
  return HasEventPassed;
}

export function DateFormat(dateTimeString) {
  // fix date data from api and format it

  const datesarray = dateTimeString.split(" ");

  const justDates = {};
  justDates.dayofweek = datesarray[0].slice(0, -1);
  justDates.day = datesarray[2].slice(0, -1);
  justDates.month = datesarray[1];
  justDates.year = datesarray[3];
  justDates.hour = datesarray[5].slice(0, 2);
  justDates.mins = datesarray[5].slice(3, 5);

  let miniMins = justDates.mins;
  // don't want :00pm
  miniMins = miniMins === "00" ? "" : ":" + miniMins;

  let hour = parseInt(justDates.hour);
  if (hour < 12) {
    justDates.ampm = justDates.hour + miniMins + "am";
  }
  if (hour === 12) {
    justDates.ampm = justDates.hour + miniMins + "pm";
  }
  if (hour > 12) {
    justDates.ampm = hour - 12 + miniMins + "pm";
  }

  if (justDates.day === "1") {
    justDates.daysuffix = "1st";
  } else if (justDates.day === "2") {
    justDates.daysuffix = "2nd";
  } else if (justDates.day === "3") {
    justDates.daysuffix = "3rd";
  } else if (justDates.day === "21") {
    justDates.daysuffix = "21st";
  } else if (justDates.day === "22") {
    justDates.daysuffix = "22nd";
  } else if (justDates.day === "23") {
    justDates.daysuffix = "23rd";
  } else {
    justDates.daysuffix = justDates.day + "th";
  }

  return justDates;
}
