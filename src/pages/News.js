import React from "react";
import NewsList from "../modules/News/NewsList/NewsList";
import Pagetop from "../components/Markers/PageTop/Pagetop";
function News() {
  return (
    <div className="content">
      <Pagetop />
      <NewsList />
    </div>
  );
}

export default News;
