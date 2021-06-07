import * as React from "react";
import "./Home.css";

const debounce = require('lodash.debounce');


export class Home extends React.Component {
    render() {
        return (
            <div className="home h-screen bg-gray text-red p-10">
                <AnimatedBorder>

                </AnimatedBorder>
            </div>
        )
    };
}


class AnimatedBorder extends React.Component {
    render() {
        return (
            <div className="animated-border p-px h-full rounded-3xl">
                <div className="animated-border-inner h-full rounded-3xl bg-gray">
                    {this.props.children}
                </div>
            </div>
        )
    }
}


// correct viewport for mobile browsers
// from https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
function updateVH() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}
updateVH();
// unfortunately this (using debounce) means that resizing is no longer smooth
window.addEventListener('resize', debounce(updateVH, 200));

export default Home;
