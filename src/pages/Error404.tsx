import * as React from "react";
import { Link } from "react-router-dom";

export class Error404 extends React.Component {
    render() {
        return (
            <div className="Error404">
                <h1>404 error</h1>
                <p>
                    This is a 404 error page
                </p>
                <p>
                    <Link to="/">Return home</Link>.
                </p>
                <p>
                    Thanks to <a href="https://github.com/rafgraph">Rafael Pedicini</a> for the <a href="https://github.com/rafgraph/spa-github-pages">script</a> used in this redirect.
                </p>
            </div>
        )
    };
}

export default Error404;
