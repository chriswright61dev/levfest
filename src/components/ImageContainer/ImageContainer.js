import React from "react";

function ImageContainer(props) {
  return (
    <div className={props.type}>
      <img src={props.source} alt={props.altText} />
    </div>
  );
}

export default ImageContainer;
