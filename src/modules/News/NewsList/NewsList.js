import React, { useContext } from "react";
import { MainDataContext } from "../../../data/MainDataContext";
function NewsList() {
  const state = useContext(MainDataContext);
  console.log("state", state);
  const news = useContext(MainDataContext).mainState.newsListData;
  console.log("news", news);
  return <div>news list - an array of objects</div>;
}

export default NewsList;
