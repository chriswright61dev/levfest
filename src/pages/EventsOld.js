import EventsOldList from "../modules/Events/EventsOldList/EventsOldList";
import Pagetop from "../components/Markers/PageTop/Pagetop";
function eventsOld() {
  return (
    <div className="content">
      <Pagetop />
      <h1 className="page_h1">Old Levenshulme Festival Events </h1>
      <EventsOldList />
    </div>
  );
}

export default eventsOld;
