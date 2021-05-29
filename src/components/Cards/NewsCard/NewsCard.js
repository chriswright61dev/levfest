// import React from "react";
import { Link } from "react-router-dom";
import ImageContainer from "../../ImageContainer/ImageContainer";
function NewsCard(props) {
  // console.log("props in newscard", props);
  return (
    <div className="venue_card">
      <Link to={`/${props.link}/${props.id}`}>
        <div className="news_card__text">
          <h2> {props.title}</h2>
          <p> {props.introduction}</p>
        </div>
        <ImageContainer
          type="square"
          source={props.image_1}
          altText={props.title}
        />

        <p> {props.id}</p>
      </Link>
    </div>
  );
}

export default NewsCard;
