import * as React from "react";

import "../App.css";

export class Home extends React.Component {
    render() {
        return (
            <div className="Home p-10">
                <h1 className="text-5xl font-semibold pb-5">Hi.</h1>
                <p className="pb-2">
                    Welcome to Nathan Adam's portfolio website.
                </p>
                <p>
                    I'm working on making a proper website right now, so check back later.
                    In the meantime, you can visit my projects website at&nbsp;
                    <a className="text-blue-800 underline" href="https://schobbish.com">schobbish.com</a>.
                </p>
            </div>
        )
    };
}

export default Home
