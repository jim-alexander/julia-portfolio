//Packages
import React, { Component } from "react";
import { Route } from "react-router-dom";

//Routes, Pages and Layout
import * as routes from "./Constants/Routes";
import Navigation from "./Layout/Navigation";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Resume from "./Pages/Resume";
import Portfolio from "./Pages/Portfolio";

//Style
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Julia Albanese</h1>
        </header>
        <Navigation />
        <div id="divider" />
        <div className="content">
          <Route exact={true} path={routes.HOME} component={() => <Home />} />
          <Route path={routes.CONTACT} component={() => <Contact />} />
          <Route path={routes.RESUME} component={() => <Resume />} />
          <Route path={routes.PORTFOLIO} component={() => <Portfolio />} />
        </div>
      </div>
    );
  }
}

export default App;
