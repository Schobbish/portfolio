import * as React from "react";
import SubpageContainer, { SubpageContainerProps } from "./SubpageContainer";


/** Main component for the projects page. */
export class Projects extends React.Component<SubpageContainerProps> {
  render() {
    return (
      <SubpageContainer overlay={this.props.overlay}>
        Projects page
      </SubpageContainer>
    );
  }
}

export default Projects;
