// data has already been saved
export function getExistingData(dataArray, id) {
  const dataIndex = findIndexInArray(dataArray, "id", id);
  let displayData = [];
  displayData.push(dataArray[dataIndex]);
  return displayData;
}

// check for old events
export function hasDatePassed(date) {
  let HasEventPassed = false;
  const now = new Date();
  if (Date.parse(now) > Date.parse(date)) {
    HasEventPassed = true;
  }
  return HasEventPassed;
}

// find the index of a key value in an array of objects
export function findIndexInArray(arrayName, objectKeyName, keyValue) {
  return arrayName
    .map(function (e) {
      return e[objectKeyName];
    })
    .indexOf(keyValue);
}

// is a parameter present in an array of objects
export function isParameterUsed(arrayName, objectKeyname, parameter) {
  return arrayName.some(
    (objectName) => objectName[objectKeyname] === parameter
  );
}

// index of the data in the state array for a particular year
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

// count the properties of an object
// used for counting the active feeds in the apiURL object
//in case I add some more
export function countProperties(obj) {
  let count = 0;
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) ++count;
  }
  return count;
}

// count the active feeds in the apiURL object
export function feedCounter(feedList, dispatch) {
  const feedcount = countProperties(feedList);
  dispatch({ type: "FEEDS_COUNTED", value: feedcount });
}

// fix date data from api and format it
export function DateFormat(dateTimeString) {
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
