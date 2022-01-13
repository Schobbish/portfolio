import * as React from "react";
import SubpageContainer, { SubpageContainerProps } from "../components/SubpageContainer";
import { TrapezoidButton } from "../components/TrapezoidButton";


/** Main component for the projects page. */
export class Projects extends React.Component<SubpageContainerProps> {
  render() {
    return (
      <SubpageContainer overlay={this.props.overlay} onClickUnmountSubpageHandler={this.props.onClickUnmountSubpageHandler}>
        <h2 className="std-h2">My Projects</h2>
        <div className="divide-y divide-brown">
          <p className="mb-3">Here's a selection of my favorite projects that I've worked on.</p>
          <ProjectCard
            imageSrc="/headshot.jpeg"
            imageAlt="blah"
            header="Portfolio Website"
            github="https://github.com/Schobbish/portfolio"
          >
            This is the website you're looking at right now! This was my first time using React, TypeScript, and Tailwind CSS. I did not strictly <span className="italic">need</span> to use React but it certainly made it easier.
          </ProjectCard>
          <ProjectCard
            imageSrc=""
            imageAlt=""
            header=""
          >
          </ProjectCard>
          <ProjectCard
            imageSrc=""
            imageAlt=""
            header=""
          >
          </ProjectCard>
        </div>
      </SubpageContainer>
    );
  }
}


class ProjectCard extends React.Component<ProjectCardProps> {
  render() {
    const imageStyle: React.CSSProperties = {
      backgroundImage: "url('" + this.props.imageSrc + "'), url('/graytangle.png')",
      backgroundPosition: "center",
      backgroundSize: "cover"
    }
    const visitButton: JSX.Element | null
      = this.props.website ? <TrapezoidButton to={this.props.website} color="#ae81ff">Visit</TrapezoidButton> : null;
    const githubButton: JSX.Element | null
      = this.props.github ? <TrapezoidButton to={this.props.github} color="#ae81ff">GitHub</TrapezoidButton> : null;

    return (
      <div className="w-full flex flex-col md:flex-row py-3">
        {/* flex-shrink class may change in tailwind v3 */}
        <div className="w-48 h-48 flex-shrink-0 self-center rounded-xl" style={imageStyle} title={this.props.imageAlt}></div>
        <div className="ml-3 mt-3 md:mt-0">
          <h3 className="std-h3">{this.props.header}</h3>
          <p className="w-full mb-6">{this.props.children}</p>
          <div className="flex flex-col md:flex-row gap-4 md:gap-10">
            {visitButton}
            {githubButton}
          </div>
        </div>
      </div>
    )
  }
}
type ProjectCardProps = {
  imageSrc: string,
  imageAlt: string,
  header: string,
  website?: string,
  github?: string
}


export default Projects;
