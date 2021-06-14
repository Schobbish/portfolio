import * as React from "react";
import { Switch, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Error404 } from "./pages/Error404";
import "./App.css";


/** Render app */
export class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Switch>
                    <Route exact path="/">
                        <Home />
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
