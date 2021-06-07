import * as React from "react";
import { Switch, Route, Link } from "react-router-dom";

import { Home } from "./pages/Home";
import { Error404 } from "./pages/Error404";
import "./App.css";

export class App extends React.Component {
    render() {
        return (
            <div className="app">
                <nav className="hidden">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                    </ul>
                </nav>

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
