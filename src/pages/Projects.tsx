import * as React from "react";
import SubpageContainer, { SubpageContainerProps } from "../components/SubpageContainer";


/** Main component for the projects page. */
export class Projects extends React.Component<SubpageContainerProps> {
  render() {
    return (
      <SubpageContainer overlay={this.props.overlay} onClickUnmountSubpageHandler={this.props.onClickUnmountSubpageHandler}>
        Projects page
      </SubpageContainer>
    );
  }
}

export default Projects;
