import React from "react";
import boxbg from "../../images/boxbg.jpg";
import "./FrontPage.css";
import FrontPageCard from "../../components/FrontPageCard/FrontPageCard";
function FrontPage() {
  return (
    <div className="front_page">
      <FrontPageCard
        title="What's On This Year"
        text="What is On This Year then"
        link="/events"
        IMGsource={boxbg}
        IMGaltText="alt text is - What's On This Year"
        IMGtype="square"
      />

      <FrontPageCard
        title="What's Happening"
        link="/news"
        IMGsource={boxbg}
        IMGaltText="alt text is - What's going on now"
        IMGtype="square"
      />

      <FrontPageCard
        title="Where is it happening"
        link="/venues"
        IMGsource={boxbg}
        IMGaltText="alt text is - What's On Where"
        IMGtype="square"
      />

      <FrontPageCard
        title="What's Happened Before "
        link="/events_old"
        IMGsource={boxbg}
        IMGaltText="alt text is - probably does not need a front page box  "
        IMGtype="square"
      />
    </div>
  );
}

export default FrontPage;
