import React, { useContext, useEffect, useState } from "react";
import { MainDataContext } from "../../../data/MainDataContext";
import {
  // fetchSingleData,
  isParameterUsed,
  getExistingData,
} from "../../../utilities/utilities";
import { fetchSingleData } from "../../../utilities/getData";
import { useParams } from "react-router-dom";
import NewsDetail from "./NewsDetail/NewsDetail";
import Loader from "../../../components/Loader/Loader";
function NewsDetails(props) {
  const [newsState, setNewsState] = useState({
    displayData: [],
  });

  const baseUrl = "https://www.levenshulmecommunityfestival.co.uk/";
  const apiUrl = "api_news_long?news_id=";
  const longNewsData = useContext(MainDataContext).mainState.newsLongData;
  const dispatcher = useContext(MainDataContext).dispatch;
  let { id } = useParams();

  useEffect(() => {
    // have we looked at this data before
    if (isParameterUsed(longNewsData, "id", id)) {
      let displayData = getExistingData(longNewsData, id);
      setNewsState({
        displayData: displayData,
      });
    } else {
      // id not used so fetch it
      const fetchParametersObject = {
        url: baseUrl + apiUrl + id,
        setState: setNewsState,
        dispatchFunction: dispatcher,
        dispatchName: "ADD_NEWS_DATA",
      };

      fetchSingleData(fetchParametersObject);
    }
  }, [id]);
  //rerun useEffect if new news id is selected

  let newsData = newsState.displayData;
  // starts as an empty array
  if (newsData.length > 0) {
    return <NewsDetail data={newsData[0]} />;
  } else {
    return <Loader />;
  }
}

export default NewsDetails;
