import React from "react";
import NewsDetails from "../modules/News/NewsDetails/NewsDetails";
import Pagetop from "../components/Markers/PageTop/Pagetop";
function NewsItem() {
  return (
    <div className="content">
      <Pagetop />
      <h1 className="page_h1">Levenshulme Festival News</h1>
      <NewsDetails />
    </div>
  );
}

export default NewsItem;
