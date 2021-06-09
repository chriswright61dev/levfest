// import React from "react";

import ImageContainer from "../../../../components/ImageContainer/ImageContainer";

import WebsiteLink from "../../../../components/WebsiteLink/WebsiteLink";
import EmailLink from "../../../../components/EmailLink/EmailLink";

import GMap from "../../../../components/GMap/GMap";
import GStreetView from "../../../../components/GStreetView/GStreetView";

import EventsAtVenue from "../../../Events/EventsAtVenue/EventsAtVenue";

import "./VenueDetail.css";

function VenueDetail(props) {
  const vs = props.data;
  console.log("vs in more detail", vs);
  if (vs) {
    return (
      <div className="venue">
        <div className="venue_text">
          <div className="venue_small_image">
            {vs.venue_image_1 ? (
              <ImageContainer
                source={vs.venue_image_1}
                altText={vs.venue_title}
              />
            ) : null}
          </div>
          <h3 className="venue_name">{vs.venue_title}​</h3>
          {/* <p> Venue id {vs.id}​</p> */}
          <address>
            {vs.venue_address_1 ? <p>{vs.venue_address_1}</p> : null}
            {vs.venue_address_2 ? <p>{vs.venue_address_2}</p> : null}
            {vs.venue_address_3 ? <p>{vs.venue_address_3}</p> : null}
            {vs.venue_address_4 ? <p>{vs.venue_address_4}</p> : null}
            <hr />
            {vs.venue_telephone ? <p>{vs.venue_telephone}</p> : null}

            {vs.venue_website ? (
              <EmailLink source={vs.venue_email} linkText={vs.venue_title} />
            ) : null}

            {vs.venue_website ? (
              <WebsiteLink
                source={vs.venue_website}
                linkText={vs.venue_title}
              />
            ) : null}
          </address>

          {vs.venue_introduction ? <p>{vs.venue_introduction}</p> : null}
        </div>
        <div className="venue_events">
          {/* <h4>Events at {vs.venue_title}</h4> */}

          <EventsAtVenue venue_id={vs.id} />
        </div>

        <div className="venue_images">
          {vs.venue_image_1 ? (
            <ImageContainer
              source={vs.venue_image_1}
              altText={vs.venue_title}
            />
          ) : null}
          {vs.venue_image_2 ? (
            <ImageContainer
              source={vs.venue_image_2}
              altText={vs.venue_title}
            />
          ) : null}

          {vs.venue_gmap_latitude ? (
            <GMap
              latitude={vs.venue_gmap_latitude}
              longitude={vs.venue_gmap_longitude}
              querytext={vs.venue_gmap_query_text}
            />
          ) : null}

          {vs.venue_gstreet_latitude ? (
            <GStreetView
              latitude={vs.venue_gstreet_latitude}
              longitude={vs.venue_gstreet_longitude}
              heading={vs.venue_gstreet_heading}
              pitch={vs.venue_gstreet_pitch}
            />
          ) : null}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
export default VenueDetail;
