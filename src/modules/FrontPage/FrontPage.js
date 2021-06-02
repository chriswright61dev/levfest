import React, { useLayoutEffect, useRef, useState } from "react";
// import ReactDOM from "react-dom";
import svglogo from "../../images/levfestlogo.svg";
import boxbg from "../../images/boxbg.jpg";
import herobg from "../../images/hero1.jpg";
import "./FrontPage.css";
import HeroContainer from "../../components/HeroContainer/HeroContainer";

// import FrontPageCard from "../../components/Cards/FrontPageCard/FrontPageCard";
import FrontPageBigCard from "../../components/Cards/FrontPageBigCard/FrontPageBigCard";
import FrontPageDataCard from "../../components/Cards/FrontPageDataCard/FrontPageDataCard";

function FrontPage() {
  // scroll animation stuff
  // let classNameTwo = "card_wrapper";
  // let classNameThree = "card_wrapper";
  // let classNameFour = "card_wrapper";
  // classNameFour += "triggered";
  // classNameThree += "triggered";
  // classNameTwo += "triggered";
  // don't animate box 1 just 2 3 and 4 so name refs etc like that

  // state for data about boxes
  const [showBox, setShowBox] = useState({
    itemTwo: false,
    itemThree: false,
    itemFour: false,
  });
  // useRef for accessing  DOM elements,
  const itemTwoRef = useRef(null),
    itemThreeRef = useRef(null),
    itemFourRef = useRef(null);

  // useLayoutEffect - before first render
  useLayoutEffect(() => {
    const topPosition = (element) => element.getBoundingClientRect().top;
    const positionOffset = -200;
    const boxTwoPosition = topPosition(itemTwoRef.current),
      boxThreePosition = topPosition(itemThreeRef.current),
      boxFourPosition = topPosition(itemFourRef.current);

    const onScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      // console.log("scrollPosition", scrollPosition);

      if (boxFourPosition < scrollPosition + positionOffset) {
        setShowBox((state) => ({ ...state, itemFour: true }));
      } else if (boxThreePosition < scrollPosition + positionOffset) {
        setShowBox((state) => ({ ...state, itemThree: true }));
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
        logosource={svglogo}
        title="festival name"
        text="dates and an intro to the festival"
        IMGsource={herobg}
      />

      <div className="front_page__cards">
        {/* card wrapper */}
        {/* first card is not animated */}

        <div className="card_wrapper">
          <FrontPageBigCard
            title="Whats On This Year - events"
            text="What is On This Year then"
            link="/events"
            IMGsource={boxbg}
            IMGaltText="alt text is - What's On This Year"
            IMGtype="square"
          />

          <FrontPageDataCard />
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
            title="What's Happening - news"
            text=" What's going on now"
            link="/news"
            IMGsource={boxbg}
            IMGaltText="alt text is - What's going on now"
            IMGtype="square"
          />
          <FrontPageDataCard />
        </div>

        <div
          ref={itemThreeRef}
          className={`card_wrapper animatestart${
            showBox.itemThree ? " triggered" : ""
          }`}
        >
          <FrontPageBigCard
            title="Where is it happening - venues"
            text=" What's On Where"
            link="/venues"
            IMGsource={boxbg}
            IMGaltText="alt text is - What's On Where"
            IMGtype="square"
          />
          <FrontPageDataCard />
        </div>

        <div
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
          <FrontPageDataCard />
        </div>
      </div>
    </div>
  );
}

export default FrontPage;
