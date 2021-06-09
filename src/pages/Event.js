import EventDetails from "../modules/Events/EventDetails/EventDetails";
import Pagetop from "../components/Markers/PageTop/Pagetop";
function Event() {
  return (
    <div className="content">
      <Pagetop />
      <EventDetails />
    </div>
  );
}

export default Event;
