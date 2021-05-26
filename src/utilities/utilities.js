export function fetchListData(url) {
  //fetches the short data
  // key in the api list object

  fetch(url)
    .then((res) => res.json())
    .then((loadedData) => {
      console.log("loadedData", loadedData);
    });
}
