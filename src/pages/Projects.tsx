import * as React from "react";
import SubpageContainer, { SubpageContainerProps } from "../components/SubpageContainer";


/** Main component for the projects page. */
export class Projects extends React.Component<SubpageContainerProps> {
  render() {
    return (
      <SubpageContainer overlay={this.props.overlay} onClickUnmountSubpageHandler={this.props.onClickUnmountSubpageHandler}>
        <h2 className="std-h2">My Projects</h2>
      </SubpageContainer>
    );
  }
}


class ProjectCard extends React.Component<ProjectCardProps> {

}
type ProjectCardProps = {

}


export default Projects;
