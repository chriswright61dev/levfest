import React from "react";
import NewsDetails from "../modules/News/NewsDetails/NewsDetails";
import Pagetop from "../components/Markers/PageTop/Pagetop";
function NewsItem() {
  return (
    <div className="content">
      <Pagetop />
      <NewsDetails />
    </div>
  );
}

export default NewsItem;
