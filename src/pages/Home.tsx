import * as React from "react";
import { Link, LinkProps } from "react-router-dom";
import debounce from "lodash.debounce";
import "./Home.css";


/** Render home page */
export class Home extends React.Component {
    render() {
        return (
            <div className="home p-10 h-screen bg-gray">
                <nav className="absolute bottom-0 left-0 grid grid-rows-3 gap-4 place-items-start mb-8 lg:mb-16">
                    <TrapezoidButton to="/about" color="#f92672">About</TrapezoidButton>
                    <TrapezoidButton to="/projects" color="#66d9ef">Projects</TrapezoidButton>
                    <TrapezoidButton to="/contact" color="#a6e22e">Contact</TrapezoidButton>
                </nav>
                <AnimatedBorder>
                    <div className="flex justify-center items-center h-full">
                        <div className="p-20 text-center text-yellow">
                            <h1 className="font-display text-6xl sm:text-7xl md:text-8xl 2xl:text-9xl">NATHAN ADAM</h1>
                            <p className="font-serif 2xl:text-lg">Website under construction<a className="underline" href="https://schobbish.com/">.</a></p>
                        </div>
                    </div>
                </AnimatedBorder>
            </div>
        )
    };
}


/**
 * Totally unnecessary class to create a custom moving dashed border.
 *  Mostly relies on css in Home.css. Not customizable because no need yet.
 */
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


/** Trapezoid-shaped button for main nav buttons */
class TrapezoidButton extends React.Component<TrapezoidButtonProps> {
    /** Uses the `color` to create the background gradient of that color */
    private createBgImageString(color: string): string {
        return `linear-gradient(-80deg, transparent, transparent 6%, ${color} 6%, ${color} 100%)`;
    }

    render() {
        return (
            <Link to={this.props.to}>
                <div style={{backgroundImage: this.createBgImageString("white")}} className="trapezoid-button relative -left-4 py-1 pr-1 w-40 lg:w-48 h-11">
                    <div style={{backgroundImage: this.createBgImageString(this.props.color)}} className="trapezoid-button-inner p-1 pl-7 font-display text-xl text-white">
                        {this.props.children}
                    </div>
                </div>
            </Link>
        )
    }
}
type TrapezoidButtonProps = {
    /** `to` prop passed to React Router's Link */
    to: LinkProps["to"],
    /** One of the tailwind theme colors */
    color: string
}


/**
 * Correct viewport for mobile browsers
 * @author Louis Hoebregts
 *  https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
 */
function updateVH() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

// unfortunately using debounce means that resizing is no longer smooth
window.addEventListener('resize', debounce(updateVH, 200));
updateVH();

export default Home;
