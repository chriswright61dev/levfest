import React, { useContext } from "react";
import { MainDataContext } from "../../../data/MainDataContext";
import NewsCard from "../../../components/Cards/NewsCard/NewsCard";
function NewsList() {
  const news = useContext(MainDataContext).mainState.newsListData;

  return (
    <div className="news">
      news list here - map array
      {news.map((newsitem) => {
        return (
          <NewsCard
            key={newsitem.id}
            id={newsitem.id}
            link={"news"}
            title={newsitem.title}
            introduction={newsitem.news_introduction}
            image_1={newsitem.news_image_1}
          />
        );
      })}
    </div>
  );
}

export default NewsList;
