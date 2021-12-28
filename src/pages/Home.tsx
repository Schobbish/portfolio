import * as React from "react";
import * as ReactDOM from "react-dom";
import { Link, LinkProps } from "react-router-dom";
import debounce from "lodash.debounce";

import { About } from "./About";
import { Projects } from "./Projects";
import { Contact } from "./Contact";
import "./Home.css";


/** Main component for the home page. Also handles overlaid subpages. */
export class Home extends React.Component<{}, HomeState> {
  /**
   * Sets the default state and binds a function.
   * @param props Passed to the React.Component constructor.
   */
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = { shownSubpage: "/" };
    this.updateShownSubpage = this.updateShownSubpage.bind(this);
  }

  /**
   * Updates the state to show the overlaid subpage when a link is clicked.
   * @param event The onClick event from the clicked link.
   * @param to The path to the subpage to be shown (technically determined in
   *       SubpageOverlay.render())
   */
  // TODO: support back/forward buttons
  updateShownSubpage(event: React.MouseEvent, to: LinkProps["to"]) {
    console.log(to);
    event.preventDefault();
    this.setState({ shownSubpage: to.toString() });
    window.history.pushState("state?", document.title, to.toString());
    console.log(window.history);
  }

  render() {
    return (
      <div className="home p-10 h-screen bg-gray">
        <nav className="absolute bottom-0 left-0 grid grid-rows-3 gap-4 place-items-start mb-8 lg:mb-16">
          <TrapezoidButton to="/about" color="#f92672" onClick={this.updateShownSubpage}>About</TrapezoidButton>
          <TrapezoidButton to="/projects" color="#66d9ef" onClick={this.updateShownSubpage}>Projects</TrapezoidButton>
          <TrapezoidButton to="/contact" color="#a6e22e" onClick={this.updateShownSubpage}>Contact</TrapezoidButton>
        </nav>
        <AnimatedBorder>
          <div className="flex justify-center items-center h-full">
            <div className="p-20 text-center text-yellow">
              <h1 className="font-display text-6xl sm:text-7xl md:text-8xl 2xl:text-9xl">NATHAN ADAM</h1>
              <p className="font-serif 2xl:text-lg">Website under construction<a className="underline" href="https://schobbish.com/">.</a></p>
            </div>
          </div>
        </AnimatedBorder>
        <SubpageOverlay subpage={this.state.shownSubpage} onClickUnmountSubpageHandler={this.updateShownSubpage}/>
      </div>
    )
  };
}
type HomeState = {
  /**
   * Determines which subpage, if any, is being shown. If equal to "/", no
   *  subpage is shown because we are on the root page.
   */
  shownSubpage: string;
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
      <Link className="trapezoid-button" to={this.props.to} onClick={event => this.props.onClick(event, this.props.to)}>
        <div className="relative -left-4 py-1 pr-1 w-40 lg:w-48 h-11 active:filter active:brightness-75 motion-safe:transition-all duration-200 motion-safe:transform hover:translate-x-4" style={{ backgroundImage: this.createBgImageString("white") }}>
          <div className="p-1 pl-7 font-display text-xl text-white" style={{ backgroundImage: this.createBgImageString(this.props.color) }}>
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
  color: string,
  /**
   * Handler called when button is clicked on.
   * @param event The typical onClick event.
   * @param to The value of the `to` prop.
   */
  onClick: (event: React.MouseEvent, to: LinkProps["to"]) => void
}


/**
 * Handles the technicalities of creating an overlay which is appended at a
 *  sibling of the app's root container.
 */
// may want to combine with the Home component?
class SubpageOverlay extends React.Component<SubpageOverlayProps> {
  overlayRoot: HTMLElement | null;
  container: HTMLElement;

  /**
   * Sets the root and container of the subpage.
   * @param props Passed to the React.Component constructor.
   */
  constructor(props: SubpageOverlayProps | Readonly<SubpageOverlayProps>) {
    super(props)

    this.overlayRoot = document.getElementById("overlay-root");
    this.container = document.createElement("div");
  }

  /** Adds the subpage container to its root */
  componentDidMount() {
    this.overlayRoot?.appendChild(this.container);
  }

  /** Removes the subpage container from its root */
  componentWillUnmount() {
    this.overlayRoot?.removeChild(this.container);
  }

  render() {
    switch (this.props.subpage) {
      case "/about":
      case "/about/":
        return ReactDOM.createPortal(<About overlay onClickUnmountSubpageHandler={this.props.onClickUnmountSubpageHandler}/>, this.container);
      case "/projects":
      case "/projects/":
        return ReactDOM.createPortal(<Projects overlay onClickUnmountSubpageHandler={this.props.onClickUnmountSubpageHandler}/>, this.container);
      case "/contact":
      case "/contact/":
        return ReactDOM.createPortal(<Contact overlay onClickUnmountSubpageHandler={this.props.onClickUnmountSubpageHandler}/>, this.container);
    }
    return null;
  }
}
type SubpageOverlayProps = {
  /**
   * Detemines the subpage to show. Should be consistent with the routing
   *  set up in the App component.
   */
  subpage: LinkProps["to"],
  /**
   * Function which gets passed onto the subpage's SubpageContainer.
   * @see SubpageContainerProps.onClickUnmountSubpageHandler
   */
  onClickUnmountSubpageHandler: (event: React.MouseEvent, to: LinkProps["to"]) => void
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
