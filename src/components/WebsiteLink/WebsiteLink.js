// import React from 'react'
import "./WebsiteLink.css";
function WebsiteLink(props) {
  return (
    <p className="website_link">
      WebSite:
      <a href={props.source} target="_blank" rel="noopener noreferrer">
        {props.linkText}
      </a>
    </p>
  );
}

export default WebsiteLink;
