import React, { Component } from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "weather-icons/css/weather-icons.css";

import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Sponsors } from "./pages/Sponsors";
import { Academy } from "./pages/Academy";
import { PageNotFound } from "./pages/PageNotFound";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Weather from "./pages/Weather";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
    };
  }

  render() {
    return (
      <Router>
        <div>
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/academy" component={Academy} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/contact" component={Contact} />
            <Route path="/weather" component={Weather} />
            <Route path="/sponsors" component={Sponsors} />
            <Route component={PageNotFound} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
