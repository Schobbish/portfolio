import * as React from "react";
import { Switch, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Projects } from "./pages/Projects";
import { Contact } from "./pages/Contact";
import { Error404 } from "./pages/Error404";
import "./App.css";


/** Main app class which routes to the various pages. */
export class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="*">
            <Error404 />
          </Route>
        </Switch>
      </div>
    );
  }
}


export default App;
