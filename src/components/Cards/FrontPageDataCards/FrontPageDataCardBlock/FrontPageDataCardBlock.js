import React from "react";
import { Link } from "react-router-dom";
import "./FrontPageDataCardBlock.css";
import ImageContainer from "../../../ImageContainer/ImageContainer";
function FrontPageDataCardBlock(props) {
  return (
    <Link to={`/${props.link}/${props.id}`}>
      <div className="front_page_data_card_block">
        <div className="front_page_data_card_block_image">
          <ImageContainer
            type="square"
            source={props.image}
            altText={props.title}
          />
        </div>

        <div className="front_page_data_card_block_text">
          <h3>{props.title}</h3>
        </div>
      </div>
    </Link>
  );
}

export default FrontPageDataCardBlock;
