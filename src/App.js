import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Event from "./pages/Event";
import EventsOld from "./pages/EventsOld";
import Venues from "./pages/Venues";
import Venue from "./pages/Venue";
import News from "./pages/News";
import NewsItem from "./pages/NewsItem";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/events" exact>
            <Events />
          </Route>
          <Route path="/events/:id">
            <Event />
          </Route>
          <Route path="/events_old" exact>
            <EventsOld />
          </Route>
          <Route path="/news" exact>
            <News />
          </Route>
          <Route path="/news/:id">
            <NewsItem />
          </Route>
          <Route path="/venues" exact>
            <Venues />
          </Route>
          <Route path="/venues/:id" exact>
            <Venue />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
