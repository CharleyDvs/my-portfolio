import React, { useState, useEffect } from 'react'
import axios from 'axios'
import TitleContainer from '../TitleContainer'
import ProjectCard from '../ProjectCard'
import Spinner from '../Spinner'

import { FaCode } from 'react-icons/fa'
import { FaCog } from 'react-icons/fa'

const Projects = () => {
  const [projectsDisplayed, setProjectsDisplayed] = useState('web')
  const [projectsData, setProjectsData] = useState({})
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const getInitialData = async () => {
      const response = await axios.get('http://localhost:3000/api/projectsData')
      const data = response.data
      setProjectsData(data)
      setLoading(false)
    }
    try {
      getInitialData()
    } catch (error) {
      console.error(error)
    }
  }, [])
  const handleWebBtnClick = () => {
    if (projects === 'web') {
      return
    }
    setProjectsDisplayed('web')
  }
  const handleEngineeringBtnClick = () => {
    if (projects === 'engineering') {
      return
    }
    setProjectsDisplayed('engineering')
  }
  return (
    <section id="projects" className="projects right">
      <TitleContainer number="02" text1="My" text2="Projects" />
      <div className="section-content">
        <div className="content-controls">
          <p>Choose the kind of projects that you would like to see</p>
          <button className="project-section-btn" onClick={handleWebBtnClick}>
            <FaCode /> Web Dev
          </button>
          <button
            className="project-section-btn"
            onClick={handleEngineeringBtnClick}
          >
            <FaCog /> Engineering
          </button>
        </div>
        {loading ? (
          <div className="project-list">
            <Spinner />
          </div>
        ) : (
          <div className="project-list">
            {projectsDisplayed === 'web'
              ? projectsData.webProjects.map((project, index) => (
                  <ProjectCard
                    key={project.title}
                    projectType={projectsDisplayed}
                    delayValue={index * 0.2}
                    {...project}
                  />
                ))
              : projectsData.engineeringProjects.map((project, index) => (
                  <ProjectCard
                    key={project.title}
                    projectType={projectsDisplayed}
                    delayValue={index * 0.2}
                    {...project}
                  />
                ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects
