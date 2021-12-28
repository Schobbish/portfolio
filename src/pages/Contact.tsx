import * as React from "react";
import SubpageContainer, { SubpageContainerProps } from "../components/SubpageContainer";


/** Main component for the contact page. */
export class Contact extends React.Component<SubpageContainerProps> {
  render() {
    return (
      <SubpageContainer overlay={this.props.overlay} onClickUnmountSubpageHandler={this.props.onClickUnmountSubpageHandler}>
        Contact page
      </SubpageContainer>
    );
  }
}

export default Contact;
