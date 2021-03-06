import React, { useContext } from "react";
import "./NewsList.css";
import { MainDataContext } from "../../../data/MainDataContext";
import NewsCard from "../../../components/Cards/NewsCard/NewsCard";
import Loader from "../../../components/Loader/Loader";
function NewsList() {
  const news = useContext(MainDataContext).mainState.newsListData;

  // loader
  if (!news) {
    return <Loader />;
  } else {
    return (
      <div className="news">
        {news.map((newsitem) => {
          return (
            <NewsCard
              key={newsitem.id}
              id={newsitem.id}
              link={"news"}
              title={newsitem.news_title}
              introduction={newsitem.news_introduction}
              image_1={newsitem.news_image_1}
            />
          );
        })}
      </div>
    );
  }
}

export default NewsList;
