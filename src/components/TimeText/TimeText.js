import "./TimeText.css";
function TimeText(props) {
  // This is used for non stanard times - just in case
  return props.timeText ? (
    <h4 className="time_text">'Time TEXT not a date: time'{props.timeText}</h4>
  ) : null;
}

export default TimeText;
