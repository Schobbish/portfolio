import * as React from "react";


/**
 * Determines styles and animations based on whether its children should be
 *  rendered as an overlaid or standalone page.
 */
export class SubpageContainer extends React.Component<SubpageContainerProps> {
  render() {
    return this.props.overlay ? (
      <div>
        {this.props.children}
        <br />
        as overlay
      </div>
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
}

export default SubpageContainer;
