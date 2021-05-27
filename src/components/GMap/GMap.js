// import React from "react";
import "./Gmap.css";

function GMap(props) {
  const GAPIKEY = process.env.REACT_APP_GAPIKEY;
  const baseUrl = "https://www.google.com/maps/embed/v1/";
  const Gkey = "?key=" + GAPIKEY;
  const center = `&center=${props.latitude},${props.longitude}`;
  const mapquery = `&q=${props.querytext}`;
  const zoom = "&zoom=18";
  const mapsrc = baseUrl + "place" + Gkey + mapquery + center + zoom;

  return (
    <div className="gmap">
      <iframe title="map" width="100%" height="100%" src={mapsrc}></iframe>
    </div>
  );
}

export default GMap;
