import React from "react";
import "./OldEvent.css";
import ShowYear from "../ShowYear/ShowYear";
import ShowMonth from "../ShowMonth/ShowMonth";
function OldEvent(props) {
  return (
    <div className="old_event">
      This is an OLD event from <ShowMonth date={props.date} />{" "}
      <ShowYear date={props.date} />
    </div>
  );
}

export default OldEvent;
