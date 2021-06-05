import * as React from "react";

import "../App.css";

export class Error404 extends React.Component {
    render() {
        return (
            <div className="Error404 p-10">
                <h1 className="text-5xl font-semibold pb-5">404 error</h1>
                <p className="pb-2">
                    This is a 404 error page
                </p>
                <p>
                    <a className="text-blue-800 underline" href="/">Return home</a>.
                </p>
            </div>
        )
    };
}

export default Error404;
