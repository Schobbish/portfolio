import * as React from "react";
import { Link } from "react-router-dom";

export class Error404 extends React.Component {
    render() {
        return (
            <div className="error-404 m-10">
                <h1 className="text-5xl font-semibold pb-4">404 error</h1>
                <p>
                    This is a 404 error page
                </p>
                <p>
                    <Link to="/">Return home</Link>.
                </p>
                <p className="pt-8">
                    Thanks to <a href="https://github.com/rafgraph">Rafael Pedicini</a> for the <a href="https://github.com/rafgraph/spa-github-pages">script</a> used in this redirect.
                </p>
            </div>
        )
    };
}

export default Error404;
