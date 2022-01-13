import * as React from "react";
import SubpageContainer, { SubpageContainerProps } from "../components/SubpageContainer";


/** Main component for the about page. */
export class About extends React.Component<SubpageContainerProps> {
  render() {
    return (
      <SubpageContainer overlay={this.props.overlay} onClickUnmountSubpageHandler={this.props.onClickUnmountSubpageHandler}>
        <h2 className="std-h2">About Me</h2>
        <div>
          <img className="float-left mr-3 w-full md:w-96 max-w-full" src="/headshot.jpeg" alt="me in 2019" />
          <p>Thank you for checking out my personal website! My name is Nathan Adam and I'm currently a junior studying computer science at the University of Texas at Dallas. In computer science, my interests include plain old programming, UX design, and acessibility. I'm also interested in building and working with IT systems. I'm most comfortable with JavaScript/TypeScript, but I also have experience with Java, C++, and Python. This website serves as a showcase for some of my best personal projects, and more are hosted at <a className="underline" href="https://schobbish.com/">schobbish.com</a>.</p>
        </div>
      </SubpageContainer>
    )
  }
}

export default About;
