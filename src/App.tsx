import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from "./pages/Home";
import Error404 from "./pages/Error404";

export default function App() {
    return (
        <Router>
            <div>
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
        </Router>
    );
}
