import React, { useContext } from "react";
import "./FrontPageNewsDataCard.css";
import { MainDataContext } from "../../../../data/MainDataContext";
import FrontPageDataCardBlock from "../FrontPageDataCardBlock/FrontPageDataCardBlock.js";

function FrontPageNewsDataCard() {
  const news = useContext(MainDataContext).mainState.newsListData;
  if (!news) {
    return null;
  } else {
    let size = 3;
    const latestNews = news.slice(0, size);

    return (
      <div className="front_page_event_data_card">
        {latestNews.map((newsitem) => {
          return (
            <FrontPageDataCardBlock
              key={newsitem.id}
              id={newsitem.id}
              link={"news"}
              title={newsitem.news_title}
              image={newsitem.news_image_1}
              introduction={newsitem.news_introduction}
            />
          );
        })}
      </div>
    );
  }
}

export default FrontPageNewsDataCard;
