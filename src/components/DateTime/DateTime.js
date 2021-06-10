// import React from "react";
import { DateFormat } from "../../utilities/utilities";
import "./DateTime.css";
function DateTime(props) {
  if (props.date) {
    const formattedDate = DateFormat(props.date);
    //  check that the Date Data exists
    // so split errors don't occur in the formatting funcyion
    return (
      <h3 className="date_time">
        {formattedDate.dayofweek} {formattedDate.daysuffix}
        {" of "}
        {formattedDate.month} at {formattedDate.ampm}
      </h3>
    );
  } else {
    return null;
  }
}

export default DateTime;
