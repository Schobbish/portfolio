import * as React from "react";
import { Link, LinkProps } from "react-router-dom";
import { Transition } from "@headlessui/react";


/**
 * Determines styles and animations based on whether its children should be
 *  rendered as an overlaid or standalone page.
 */
export class SubpageContainer extends React.Component<SubpageContainerProps, SubpageContainerState> {
  /** The event which unmounts the component. */
  unmountClickEvent: React.MouseEvent | null = null;

  /**
   * Sets the default state and binds functions.
   * @param props Passed to the React.Component constructor.
   */
  constructor(props: SubpageContainerProps | Readonly<SubpageContainerProps>) {
    super(props);

    this.state = { subpageShown: this.props.overlay as boolean };
    this.unmountSubpage = this.unmountSubpage.bind(this);
    this.callUnmountHandler = this.callUnmountHandler.bind(this);
  }

  /**
   * Prepares to unmount by setting `this.state.subpageShown` to false.
   * @param event The event which caused the subpage to unmount.
   */
  unmountSubpage(event: React.MouseEvent) {
    event.preventDefault();
    this.setState({ subpageShown: false });
    this.unmountClickEvent = event;
  }

  /**
   * Calls the `onClickUnmountSubpageHandler` once the subpage finishes
   *  transitioning out of view.
   */
  callUnmountHandler() {
    console.log(this.unmountClickEvent)
    if (this.unmountClickEvent)
      this.props.onClickUnmountSubpageHandler?.(this.unmountClickEvent, "/");
  }

  render() {
    return this.props.overlay ? (
      <Transition
        className="subpage-container absolute inset-0"

        show={this.state.subpageShown}
        appear={true}
        unmount={false}
      >
        <Transition.Child
          as={Link}
          to="/"
          onClick={this.unmountSubpage}
          className="fixed inset-0 bg-black"

          enter="transition-opacity duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-60"
          entered="opacity-60"
          leave="transition-opacity duration-300 delay-300"
          leaveFrom="opacity-60"
          leaveTo="opacity-0"
          afterLeave={this.callUnmountHandler}
        />
        <Transition.Child
          className="fixed left-1/2 mt-32 w-11/12 max-w-4xl h-full bg-yellow rounded-3xl"

          enter="motion-safe:transition-transform motion-reduce:transition-opacity duration-700 transform"
          enterFrom="-translate-x-1/2 translate-y-full opacity-0"
          enterTo="-translate-x-1/2 translate-y-0 opacity-100"
          entered="-translate-x-1/2 transform opacity-100"
          // TODO: figure out fade out
          leave="transition motion-reduce:transition-none duration-700 transform"
          leaveFrom="-translate-x-1/2 translate-y-0"
          leaveTo="-translate-x-1/2 translate-y-full"
        >
          {this.props.children}
          <br />
          as overlay
        </Transition.Child>
      </Transition>
    ) : (
      <div>
        {this.props.children}
        <br />
        as own page
      </div>
    )
  }
}
export type SubpageContainerProps = {
  /**
   * If true, the subpage (the children of SubpageContainer) is rendered as an
   *  overlaid page. If false or omitted, it is rendered as its own page.
   */
  overlay?: boolean
  /**
   * Function which unmounts or replaces the subpage after it is closed. It is
   *  called after the subpage transitions out of view.
   * The props are mainly for compatibility with the actual handler used for
   *  this since it acutally needs the event object and target subpage, whereas
   *  here the event is handled already and it always goes back to home.
   * @param event The MouseEvent which caused the subpage is close.
   *              preventDefault will have already been called on this.
   * @param to The path to the new subpage or root.
   */
  onClickUnmountSubpageHandler?: (event: React.MouseEvent, to: LinkProps["to"]) => void
}
type SubpageContainerState = {
  /**
   * Controls whether or not the subpage is shown. When updated, the subpage
   *  will transition in/out of view accordingly.
   */
  subpageShown: boolean
}

export default SubpageContainer;
