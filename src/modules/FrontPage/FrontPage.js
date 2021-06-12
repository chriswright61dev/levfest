import React, { useLayoutEffect, useRef, useState, useContext } from "react";
import { MainDataContext } from "../../data/MainDataContext";
// import svglogo from "../../images/levfestlogo.svg";

// import boxbg from "../../images/boxbg.jpg";
import herobg from "../../images/hero1.jpg";
import "./FrontPage.css";
import HeroContainer from "../../components/HeroContainer/HeroContainer";
import FrontPageBigCard from "../../components/Cards/FrontPage/FrontPageBigCard/FrontPageBigCard";
import FrontPageEventDataCard from "../../components/Cards/FrontPage/FrontPageEventDataCard/FrontPageEventDataCard";
import FrontPageNewsDataCard from "../../components/Cards/FrontPage/FrontPageNewsDataCard/FrontPageNewsDataCard";
import FrontPageVenueDataCard from "../../components/Cards/FrontPage/FrontPageVenueDataCard/FrontPageVenueDataCard";

function FrontPage() {
  const festival = useContext(MainDataContext).mainState.festivalData;

  // scroll animation stuff
  // removed box four - old events
  // state for data about boxes
  const [showBox, setShowBox] = useState({
    itemOne: false,
    itemTwo: false,
    itemThree: false,
    // itemFour: false,
  });
  // useRef for accessing DOM elements,

  const itemOneRef = useRef(null),
    itemTwoRef = useRef(null),
    itemThreeRef = useRef(null);
  // itemFourRef = useRef(null);

  // useLayoutEffect - before first render
  useLayoutEffect(() => {
    // trigger animation when element is past middle of the screen
    const triggerOffset = window.innerHeight / 2;

    const topPosition = (element) => element.getBoundingClientRect().top;
    // const bottomPosition = (element) => element.getBoundingClientRect().bottom;
    // const boxheight = (element) => element.getBoundingClientRect().height;
    // const boxwidth = (element) => element.getBoundingClientRect().width;

    const boxOnePosition = topPosition(itemOneRef.current),
      boxTwoPosition = topPosition(itemTwoRef.current),
      boxThreePosition = topPosition(itemThreeRef.current);

    const onScroll = () => {
      // scrollY returns the Y coordinate of the top edge of the current viewport.

      const scrollPosition = window.scrollY;

      if (
        boxThreePosition <
        scrollPosition + triggerOffset
        //+ positionOffsetThree
      ) {
        // if (boxThreePosition < scrollPosition + positionOffsetThree) {
        setShowBox((state) => ({ ...state, itemThree: true }));

        // } else if (boxThreePosition < scrollPosition + positionOffset) {
        //   setShowBox((state) => ({ ...state, itemThree: true }));
      }
      if (
        boxTwoPosition <
        scrollPosition + triggerOffset
        //+ positionOffsetTwo
      ) {
        setShowBox((state) => ({ ...state, itemTwo: true }));
      }
      if (boxOnePosition < scrollPosition + triggerOffset) {
        setShowBox((state) => ({ ...state, itemOne: true }));
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
    //    remove event listener in cleanup function
  }, []);

  return (
    <div className="front_page">
      {/* <div id="marker"></div> */}

      <HeroContainer
        logosource={festival ? festival.festival_logo : null}
        // title={festival ? festival.festival_title : null}
        // dates={festival ? festival.festival_dates : null}
        text={festival ? festival.festival_intro : null}
        IMGsource={herobg}
      />

      <div className="front_page__cards">
        {/* card wrapper */}

        <div
          ref={itemOneRef}
          className={`card_wrapper animatestart${
            showBox.itemOne ? " triggered" : ""
          }`}
        >
          <FrontPageBigCard
            title="Whats On This Year"
            text="What is On This Year then"
            bottomText="events"
            link="/events"
            IMGsource={festival ? festival.event_header_bg_image : null}
            IMGaltText="alt text is - What's On This Year"
            IMGtype="coverSpace"
          />

          {/* <FrontPageDataCard /> */}
          <FrontPageEventDataCard />
        </div>
        {/* Function components cannot be given refs. 
Attempts to access this ref will fail.  */}
        {/* use div as a wrapper */}

        <div
          ref={itemTwoRef}
          className={`card_wrapper animatestart${
            showBox.itemTwo ? " triggered" : ""
          }`}
        >
          <FrontPageBigCard
            title="What's Happening"
            text=" What's going on now"
            bottomText="news"
            link="/news"
            IMGsource={festival ? festival.news_header_bg_image : null}
            IMGaltText="alt text is - What's going on now"
            IMGtype="coverSpace"
          />
          <FrontPageNewsDataCard />
        </div>

        <div
          ref={itemThreeRef}
          className={`card_wrapper animatestart${
            showBox.itemThree ? " triggered" : ""
          }`}
        >
          <FrontPageBigCard
            title="Where is it happening"
            text=" What's On Where"
            bottomText="venues"
            link="/venues"
            IMGsource={festival ? festival.venue_header_bg_image : null}
            IMGaltText="alt text is - What's On Where"
            IMGtype="coverSpace"
          />
          <FrontPageVenueDataCard />
        </div>

        {/* <div
          ref={itemFourRef}
          className={`card_wrapper animatestart${
            showBox.itemFour ? " triggered" : ""
          }`}
        >
          <FrontPageBigCard
            title="What's Happened Before "
            text=" events you can't go to because they happened last year "
            link="/events_old"
           IMGsource={festival ? festival.past_event_header_bg_image : null}
            IMGaltText="alt text is - old events  "
            IMGtype="square"
          />
        </div> */}
      </div>
    </div>
  );
}

export default FrontPage;
