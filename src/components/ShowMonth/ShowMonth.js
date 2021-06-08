import React from "react";
import { DateFormat } from "../../utilities/utilities";
function ShowMonth(props) {
  if (props.date) {
    const formattedDate = DateFormat(props.date);
    //  check that the Date Data exists
    // so split errors don't occur in the formatting funcyion
    return <>{formattedDate.month}</>;
  } else {
    return null;
  }
}

export default ShowMonth;
