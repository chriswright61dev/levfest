import React from "react";

import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <nav className="header-links">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/news">News</Link>
        </li>
        <li>
          <Link to="/events">What's On</Link>
        </li>
        <li>
          <Link to="/venues">Venues</Link>
        </li>
        <li>
          <Link to="/events_old">What was on</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
