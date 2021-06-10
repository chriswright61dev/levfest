import React from "react";
import FrontPage from "../modules/FrontPage/FrontPage";
import Pagetop from "../components/Markers/PageTop/Pagetop";
function Home() {
  const thisyear = new Date().getFullYear();
  return (
    <div className="content">
      <Pagetop />
      <h1 className="page_h1">The Levenshulme Festival {thisyear}</h1>
      <FrontPage />
    </div>
  );
}

export default Home;
