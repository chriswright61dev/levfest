import React from "react";
import ImageContainer from "../../../../components/ImageContainer/ImageContainer";
import "./NewsDetail.css";
function NewsDetail(props) {
  const ns = props.data;
  console.log("ns", ns);
  if (ns) {
    return (
      <div className="news_detail">
        <div className="news_detail_text">
          <p> title:{ns.news_title}</p>

          <div
            className="news_body"
            dangerouslySetInnerHTML={{ __html: ns.news_body }}
          />
        </div>
        <div className="news_detail_images">
          <ImageContainer source={ns.news_image_1} altText={ns.news_title} />
          <ImageContainer source={ns.news_image_2} altText={ns.news_title} />
          <ImageContainer source={ns.news_image_3} altText={ns.news_title} />
          <ImageContainer source={ns.news_image_4} altText={ns.news_title} />
        </div>
      </div>
    );
  } else return null;
}

export default NewsDetail;
