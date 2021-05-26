import React from "react";
import "./ImageContainer.css";
function ImageContainer(props) {
  return (
    <div className={props.type}>
      <img src={props.source} alt={props.altText} />
    </div>
  );
}

export default ImageContainer;
