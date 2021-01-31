import React from 'react'
import TitleContainer from '../TitleContainer'
import ProjectCard from '../ProjectCard'

const Projects = () => {
  return (
    <section className="projects right">
      <TitleContainer number="02" text1="My" text2="Projects" />
      <div className="section-content">
        <div className="content-controls">
          <p>Choose the kind of projects that you would like to see</p>
          <button>Web Dev</button>
          <button>Engineering</button>
        </div>
        <div className="project-list">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </section>
  )
}

export default Projects
