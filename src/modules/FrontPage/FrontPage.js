import React, { useLayoutEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import svglogo from "../../images/levfestlogo.svg";
import boxbg from "../../images/boxbg.jpg";
import herobg from "../../images/hero1.jpg";
import "./FrontPage.css";
import HeroContainer from "../../components/HeroContainer/HeroContainer";
// import FrontPageCard from "../../components/Cards/FrontPageCard/FrontPageCard";
import FrontPageBigCard from "../../components/Cards/FrontPageBigCard/FrontPageBigCard";
function FrontPage() {
  // don't animate box 1
  // just 2 3 4

  // const [showBox, setShowBox] = useState({
  //   itemTwo: false,
  //   itemThree: false,
  //   itemFour: false,
  // });

  // const itemTwoRef = useRef(null),
  //   itemThreeRef = useRef(null),
  //   itemFourRef = useRef(null);

  // scroll animation stuff
  // useLayoutEffect - before render
  // state for data
  // useRef for accessing  DOM elements,
  //
  // calculate the vertical position of an element from the top of the document.
  // top property from the js getBoundingClientRect() method

  // returned value of DOMRect object
  // which is the smallest rectangle which contains the entire element,
  // including its padding and border-width.
  // The left, top, right, bottom, x, y, width, and height properties
  // describe the position and size of the overall rectangle in pixels.
  // Properties other than width and height are relative to the top-left of the viewport.

  // const ourRef = useRef(null);

  // topPosition = ourRef.current.getBoundingClientRect().top; // number in px
  //   Compare this value to the sum of the window properties
  //   window.scrollY + window.innerHeight.

  //   When topPosition is less than these added values,
  // trigger our CSS animation/transition

  // if (topPosition < window.scrollY + window.innerHeight) {
  //   //do animating things
  // }

  // listen for the scroll event on the window
  // run it when the user scrolls down the page.
  // We can assign the event listener to the window
  // in our useLayoutEffect hook and track scroll changes:

  // useLayoutEffect(() => {
  //   const topPosition = itemTwoRef.current.getBoundingClientRect().top;
  //   const onScroll = () => {
  //     const scrollPosition = window.scrollY + window.innerHeight;
  //     if (topPosition < scrollPosition) {
  //       // trigger animation
  //     }
  //   };

  //   window.addEventListener("scroll", onScroll);
  //   return () => window.removeEventListener("scroll", onScroll);
  //   /*
  //    should remove event listener in cleanup function
  //    to prevent memory leaks
  // */
  // }, []);

  // When we update any property in our state object,
  // we need to compute the new value using our previous state.
  // If we only use the object spread operator to update our state,
  // we'll need to include our state in our array of dependencies
  // in the useLayoutEffect hook, which will cause many unnecessary renders

  //do this
  // doShow(state => ({...state, itemOne: true})

  //not this
  // doShow({...show, itemOne: true})

  // To conditionally add styles based on our state,
  // we can either add a CSS class name using conventional CSS
  // or change the state of a prop when using a CSS-in-JS solution.
  // I'll be using the latter here.

  return (
    <div className="front_page">
      <HeroContainer
        // logosource={logo}
        logosource={svglogo}
        title="festival name"
        text="dates and an intro to the festival"
        IMGsource={herobg}
      />
      <div className="front_page__cards">
        <FrontPageBigCard
          title="What's On This Year"
          text="What is On This Year then"
          link="/events"
          IMGsource={boxbg}
          IMGaltText="alt text is - What's On This Year"
          IMGtype="square"
        />

        <FrontPageBigCard
          title="What's Happening"
          text=" What's going on now"
          link="/news"
          IMGsource={boxbg}
          IMGaltText="alt text is - What's going on now"
          IMGtype="square"
        />

        <FrontPageBigCard
          title="Where is it happening"
          text=" What's On Where"
          link="/venues"
          IMGsource={boxbg}
          IMGaltText="alt text is - What's On Where"
          IMGtype="square"
        />

        <FrontPageBigCard
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
