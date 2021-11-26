import * as React from "react";
import SubpageContainer, { SubpageContainerProps } from "./SubpageContainer";


/** Main component for the about page. */
export class About extends React.Component<SubpageContainerProps> {
  render() {
    return (
      <SubpageContainer overlay={this.props.overlay}>
        About page
      </SubpageContainer>
    )
  }
}

export default About;
