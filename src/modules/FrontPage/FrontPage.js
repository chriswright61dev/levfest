import React from "react";
import logo from "../../images/badlogo.png";
import boxbg from "../../images/boxbg.jpg";
import herobg from "../../images/hero1.jpg";
import "./FrontPage.css";
import HeroContainer from "../../components/HeroContainer/HeroContainer";
import FrontPageCard from "../../components/Cards/FrontPageCard/FrontPageCard";
function FrontPage() {
  return (
    <div className="front_page">
      <HeroContainer
        logosource={logo}
        title="festival name"
        text="something about the festival"
        IMGsource={herobg}
      />
      <div className="front_page__cards">
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
          text=" What's going on now"
          link="/news"
          IMGsource={boxbg}
          IMGaltText="alt text is - What's going on now"
          IMGtype="square"
        />

        <FrontPageCard
          title="Where is it happening"
          text=" What's On Where"
          link="/venues"
          IMGsource={boxbg}
          IMGaltText="alt text is - What's On Where"
          IMGtype="square"
        />

        <FrontPageCard
          title="What's Happened Before "
          text=" probably does not need a front page box"
          link="/events_old"
          IMGsource={boxbg}
          IMGaltText="alt text is - probably does not need a front page box  "
          IMGtype="square"
        />
      </div>
    </div>
  );
}

export default FrontPage;
