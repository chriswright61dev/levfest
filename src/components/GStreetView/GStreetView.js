// import React from "react";
import "./GStreetView.css";

function GStreetView(props) {
  const baseUrl = "https://www.google.com/maps/embed/v1/";
  const GAPIKEY = process.env.REACT_APP_GAPIKEY;
  const Gkey = "?key=" + GAPIKEY;
  const location = `&location=
  ${props.latitude},
  ${props.longitude}`;
  const heading = `&heading=${props.heading}`;
  const pitch = `&pitch=${props.pitch}`;

  const sviewsrc = baseUrl + "streetview" + Gkey + location + heading + pitch;

  return (
    <div className="gstreetview">
      <iframe
        title="streetview"
        width="100%"
        height="100%"
        src={sviewsrc}
      ></iframe>
    </div>
  );
}

export default GStreetView;
