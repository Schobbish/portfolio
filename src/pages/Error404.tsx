import * as React from "react";

export class Error404 extends React.Component {
    render() {
        return (
            <div className="Error404 p-10">
                <h1 className="text-5xl font-semibold pb-5">404 error</h1>
                <p className="pb-2">
                    This is a 404 error page
                </p>
                <p className="pb-8">
                    <a className="anc-def" href="/">Return home</a>.
                </p>
                <p className="pb-2">
                    Thanks to <a className="anc-def" href="https://github.com/rafgraph">Rafael Pedicini</a> for the <a className="anc-def" href="https://github.com/rafgraph/spa-github-pages">script</a> used in this redirect.
                </p>
            </div>
        )
    };
}

export default Error404;
