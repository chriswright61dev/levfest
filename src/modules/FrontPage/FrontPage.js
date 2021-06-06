import React, { useLayoutEffect, useRef, useState, useContext } from "react";
import { MainDataContext } from "../../data/MainDataContext";
// import svglogo from "../../images/levfestlogo.svg";

import boxbg from "../../images/boxbg.jpg";
import herobg from "../../images/hero1.jpg";
import "./FrontPage.css";
import HeroContainer from "../../components/HeroContainer/HeroContainer";
import FrontPageBigCard from "../../components/Cards/FrontPage/FrontPageBigCard/FrontPageBigCard";
import FrontPageEventDataCard from "../../components/Cards/FrontPage/FrontPageEventDataCard/FrontPageEventDataCard";
import FrontPageNewsDataCard from "../../components/Cards/FrontPage/FrontPageNewsDataCard/FrontPageNewsDataCard";
import FrontPageVenueDataCard from "../../components/Cards/FrontPage/FrontPageVenueDataCard/FrontPageVenueDataCard";

function FrontPage() {
  const festival = useContext(MainDataContext).mainState.festivalData[0];

  // scroll animation stuff
  // don't animate box 1 just 2 3 and  so name refs etc like that
  // removed box four - old events
  // state for data about boxes
  const [showBox, setShowBox] = useState({
    itemTwo: false,
    itemThree: false,
    // itemFour: false,
  });
  // useRef for accessing DOM elements,
  const itemTwoRef = useRef(null),
    itemThreeRef = useRef(null);
  // itemFourRef = useRef(null);

  // useLayoutEffect - before first render
  useLayoutEffect(() => {
    const topPosition = (element) => element.getBoundingClientRect().top;
    const positionOffset = -200;
    const boxTwoPosition = topPosition(itemTwoRef.current),
      boxThreePosition = topPosition(itemThreeRef.current);
    // boxFourPosition = topPosition(itemFourRef.current);

    const onScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      // remove box four - old events
      // console.log("scrollPosition", scrollPosition);
      // if (boxFourPosition < scrollPosition + positionOffset) {
      //   setShowBox((state) => ({ ...state, itemFour: true }));
      if (boxThreePosition < scrollPosition + positionOffset) {
        setShowBox((state) => ({ ...state, itemThree: true }));
        // } else if (boxThreePosition < scrollPosition + positionOffset) {
        //   setShowBox((state) => ({ ...state, itemThree: true }));
      } else if (boxTwoPosition < scrollPosition + positionOffset) {
        setShowBox((state) => ({ ...state, itemTwo: true }));
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
    //    remove event listener in cleanup function
  }, []);

  return (
    <div className="front_page">
      <HeroContainer
        logosource={festival ? festival.festival_logo : null}
        // title={festival ? festival.festival_title : null}
        // dates={festival ? festival.festival_dates : null}
        text={festival ? festival.festival_intro : null}
        IMGsource={herobg}
      />

      <div className="front_page__cards">
        {/* card wrapper */}
        {/* first card is not animated */}

        <div className="card_wrapper">
          <FrontPageBigCard
            title="Whats On This Year"
            text="What is On This Year then"
            bottomText="events"
            link="/events"
            IMGsource={boxbg}
            IMGaltText="alt text is - What's On This Year"
            IMGtype="square"
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
            IMGsource={boxbg}
            IMGaltText="alt text is - What's going on now"
            IMGtype="square"
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
            IMGsource={boxbg}
            IMGaltText="alt text is - What's On Where"
            IMGtype="square"
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
            IMGsource={boxbg}
            IMGaltText="alt text is - old events  "
            IMGtype="square"
          />
        </div> */}
      </div>
    </div>
  );
}

export default FrontPage;
