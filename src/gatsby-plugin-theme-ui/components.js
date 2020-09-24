import React from "react"
import ProjectCard from "../components/project-card"
import MemberCard from "../components/member-card"

const components = {
  // eslint-disable-next-line react/display-name
  ProjectCard: ({ link, title, bg, children }) => (
    <ProjectCard link={link} title={title} bg={bg}>
      {children}
    </ProjectCard>
  ),
  MemberCard: ({ link, title, bg, children }) => (
    <MemberCard link={link} title={title} bg={bg}>
      {children}
    </MemberCard>
  ),
  
}

export default components
