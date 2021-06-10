import React from "react";
import NewsList from "../modules/News/NewsList/NewsList";
import Pagetop from "../components/Markers/PageTop/Pagetop";
function News() {
  return (
    <div className="content">
      <Pagetop />
      <h1 className="page_h1">Latest News about the Levenshulme Festival</h1>
      <NewsList />
    </div>
  );
}

export default News;
