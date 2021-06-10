import * as React from "react";
import debounce from "lodash.debounce";
import "./Home.css";


export class Home extends React.Component {
    render() {
        return (
            <div className="home h-screen bg-gray text-yellow p-10">
                <AnimatedBorder>
                    <div className="flex justify-center items-center h-full">
                        <div className="text-center p-20">
                            <h1 className="font-display text-6xl sm:text-7xl md:text-8xl 2xl:text-9xl">NATHAN ADAM</h1>
                            <p className="font-serif 2xl:text-lg">Website under construction<a href="https://schobbish.com/" className="text-yellow">.</a></p>
                        </div>
                    </div>
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


/**
 * Correct viewport for mobile browsers
 * @author Louis Hoebregts, https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
 */
function updateVH() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

// unfortunately using debounce means that resizing is no longer smooth
window.addEventListener('resize', debounce(updateVH, 200));
updateVH();

export default Home;
