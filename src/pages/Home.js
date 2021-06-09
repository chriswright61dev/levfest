import React from "react";
import FrontPage from "../modules/FrontPage/FrontPage";
import Pagetop from "../components/Markers/PageTop/Pagetop";
function Home() {
  return (
    <div className="content">
      <Pagetop />
      <FrontPage />
    </div>
  );
}

export default Home;
