import EventDetails from "../modules/Events/EventDetails/EventDetails";
import Pagetop from "../components/Markers/PageTop/Pagetop";
function Event() {
  return (
    <div className="content">
      <Pagetop />
      <h1 className="page_h1">A Levenshulme Festival Event </h1>
      <EventDetails />
    </div>
  );
}

export default Event;
