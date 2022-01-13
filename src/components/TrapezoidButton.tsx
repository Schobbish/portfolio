import * as React from "react";
import { Link, LinkProps } from "react-router-dom";


/** Trapezoid-shaped button for main nav buttons */
export class TrapezoidButton extends React.Component<TrapezoidButtonProps> {
  /** Uses the `color` to create the background gradient of that color */
  private createBgImageString(color: string): string {
    return `linear-gradient(-80deg, transparent, transparent 6%, ${color} 6%, ${color} 100%)`;
  }

  render() {
    // this will be the child of the Link or anchor element
    const linkChild = (
      <div className="p-1 w-40 lg:w-48 h-11 active:filter active:brightness-75 motion-safe:transition-transform duration-200 motion-safe:transform hover:translate-x-4" style={{ backgroundImage: this.createBgImageString("white") }}>
        <div className="p-1 pl-7 font-display text-xl text-white" style={{ backgroundImage: this.createBgImageString(this.props.color) }}>
          {this.props.children}
        </div>
      </div>
    )
    return this.props.to.toString().startsWith("https://") || this.props.to.toString().startsWith("http://") ? (
      <a className="trapezoid-button" href={this.props.to.toString()}>
        {linkChild}
      </a>
    ) : (
      <Link className="trapezoid-button" to={this.props.to} onClick={event => this.props.onClick?.(event, this.props.to)}>
        {linkChild}
      </Link>
    );
  }
}
type TrapezoidButtonProps = {
  /** `to` prop passed to React Router's Link or an http(s) url. */
  to: LinkProps["to"],
  /** One of the tailwind theme colors */
  color: string,
  /**
   * Handler called when button is clicked on.
   * @param event The typical onClick event.
   * @param to The value of the `to` prop.
   */
  onClick?: (event: React.MouseEvent, to: LinkProps["to"]) => void;
};

export default TrapezoidButton;
