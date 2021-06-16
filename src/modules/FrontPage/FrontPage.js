import React, { useEffect, useState, useContext } from "react";
// import React, { useLayoutEffect, useRef, useState, useContext } from "react";
import { MainDataContext } from "../../data/MainDataContext";
import herobg from "../../images/hero1.jpg";
import "./FrontPage.css";
import HeroContainer from "../../components/HeroContainer/HeroContainer";
import FrontPageBigCard from "../../components/Cards/FrontPage/FrontPageBigCard/FrontPageBigCard";
import FrontPageEventDataCard from "../../components/Cards/FrontPage/FrontPageEventDataCard/FrontPageEventDataCard";
import FrontPageNewsDataCard from "../../components/Cards/FrontPage/FrontPageNewsDataCard/FrontPageNewsDataCard";
import FrontPageVenueDataCard from "../../components/Cards/FrontPage/FrontPageVenueDataCard/FrontPageVenueDataCard";
import Loader from "../../components/Loader/Loader";
function FrontPage() {
  const festival = useContext(MainDataContext).mainState.festivalData;
  // an object not an array

  // scroll animation stuff
  // removed box four - old events
  // state for data about boxes
  const [showBox, setShowBox] = useState({
    itemOne: false,
    itemTwo: false,
    itemThree: false,
    // itemFour: false,
  });

  function createObserver(item) {
    let observer;
    let ObserverOptions = {
      root: null,
      rootMargin: "10px 2500px 10px 10px",

      // rootMargin: "320px",
      threshold: [0.1, 0.15, 0.2, 0.25, 0.3],
    };
    observer = new IntersectionObserver(handleIntersect, ObserverOptions);
    observer.observe(item);
  }

  function handleIntersect(entries, observer) {
    // console.log("entries", entries);
    entries.forEach((entry) => {
      let boxstatename = entry.target.id;
      // console.log("entry.intersectionRatio", entry.intersectionRatio);
      // console.log("entry.target.id", entry.target.id);
      if (entry.intersectionRatio > 0.15) {
        // if (entry.intersectionRatio > 0) {
        // console.log("entry.isIntersecting", entry.isIntersecting);
        // console.log("entry.target", entry.target);
        // console.log("entry.target.id", entry.target.id);
        // console.log("entry.intersectionRatio", entry.intersectionRatio);
        if (boxstatename === "itemOne") {
          setShowBox((state) => ({ ...state, itemOne: true }));
        }
        if (boxstatename === "itemTwo") {
          setShowBox((state) => ({ ...state, itemTwo: true }));
        }
        if (boxstatename === "itemThree") {
          setShowBox((state) => ({ ...state, itemThree: true }));
        }
      }
    });
  }

  // useLayoutEffect - before first render
  useEffect(() => {
    if (document.getElementById("itemOne")) {
      const itemOne = document.getElementById("itemOne");
      const itemTwo = document.getElementById("itemTwo");
      const itemThree = document.getElementById("itemThree");
      createObserver(itemOne);
      createObserver(itemTwo);
      createObserver(itemThree);
    }
  }, []);

  if (festival) {
    // it is an object not an array
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

          <div
            id="itemOne"
            // ref={itemOneRef}
            className={`card_wrapper animatestart${
              showBox.itemOne ? " triggered" : " untriggered"
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
          {/* use div as a wrapper */}

          <div
            id="itemTwo"
            // ref={itemTwoRef}
            className={`card_wrapper animatestart${
              showBox.itemTwo ? " triggered" : " untriggered"
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
            id="itemThree"
            // ref={itemThreeRef}
            className={`card_wrapper animatestart${
              showBox.itemThree ? " triggered" : " untriggered"
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
  } else {
    return <Loader />;
  }
}

export default FrontPage;
