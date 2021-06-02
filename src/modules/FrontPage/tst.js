import React, { useLayoutEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const App = () => {
  const [show, doShow] = useState({
    itemOne: false,
    itemTwo: false,
    itemThree: false,
  });
  const ourRef = useRef(null),
    anotherRef = useRef(null),
    refThree = useRef(null);

  useLayoutEffect(() => {
    const topPos = (element) => element.getBoundingClientRect().top;
    const div1Pos = topPos(ourRef.current),
      div2Pos = topPos(anotherRef.current),
      div3Pos = topPos(refThree.current);

    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight;
      if (div1Pos < scrollPos) {
        doShow((state) => ({ ...state, itemOne: true }));
      } else if (div2Pos < scrollPos) {
        doShow((state) => ({ ...state, itemTwo: true }));
      } else if (div3Pos < scrollPos) {
        doShow((state) => ({ ...state, itemThree: true }));
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <p>scroll down</p>
      <Wrapper>
        <Div animate={show.itemThree} ref={refThree}>
          <p>tag here</p>
          <p>tag here</p>
          <p>tag here</p>
          <p>tag here</p>
        </Div>
        <Div animate={show.itemTwo} ref={anotherRef} />
        <Div animate={show.itemOne} ref={ourRef} />
      </Wrapper>
    </>
  );
};

const Div = styled.div`
  height: 900px;
  width: 300px;
  background-color: red;
  transform: translateX(${({ animate }) => (animate ? "0" : "-100vw")});
  transition: transform 1s;
  margin: 20px;
`;

const Wrapper = styled.div`
  margin-top: 100vh;
  display: flex;
  flex-flow: column;
  align-items: center;
`;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
