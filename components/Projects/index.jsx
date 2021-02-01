import React, { useState } from 'react'
import TitleContainer from '../TitleContainer'
import ProjectCard from '../ProjectCard'

import { FaCode } from 'react-icons/fa'
import { FaCog } from 'react-icons/fa'

const webProjects = [
  {
    title: 'Cylinder Homologation',
    imageLogo: {
      src: '/images/cylinder-smc.png',
      width: '250px',
      height: '165px',
      alt: 'Cilindro neumático',
    },
    cardBg: 'cylinder-bg.jpg',
    text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, vel! Fuga dolorem voluptatum, possimus odit harum accusamus ex mollitia animi officia obcaecati, ullam error similique sunt amet repellendus, eius nisi.',
    siteUrl: '/#',
    repositoryUrl: '/#',
  },
  {
    title: 'Html Generator',
    imageLogo: {
      src: '/images/cylinder-smc.png',
      width: '250px',
      height: '165px',
      alt: 'Cilindro neumático',
    },
    cardBg: 'cylinder-bg.jpg',
    text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, vel! Fuga dolorem voluptatum, possimus odit harum accusamus ex mollitia animi officia obcaecati, ullam error similique sunt amet repellendus, eius nisi.',
    siteUrl: '/#',
    repositoryUrl: '/#',
  },
  {
    title: 'Project 3',
    imageLogo: {
      src: '/images/cylinder-smc.png',
      width: '250px',
      height: '165px',
      alt: 'Cilindro neumático',
    },
    cardBg: 'cylinder-bg.jpg',
    text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, vel! Fuga dolorem voluptatum, possimus odit harum accusamus ex mollitia animi officia obcaecati, ullam error similique sunt amet repellendus, eius nisi.',
    siteUrl: '/#',
    repositoryUrl: '/#',
  },
]
const engineeringProjects = [
  {
    title: 'Project 1',
    imageLogo: {
      src: '/images/cylinder-smc.png',
      width: '250px',
      height: '165px',
      alt: 'Cilindro neumático',
    },
    cardBg: 'cylinder-bg.jpg',
    text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, vel! Fuga dolorem voluptatum, possimus odit harum accusamus ex mollitia animi officia obcaecati, ullam error similique sunt amet repellendus, eius nisi.',
    siteUrl: '/#',
    repositoryUrl: '/#',
  },
  {
    title: 'Project 2',
    imageLogo: {
      src: '/images/cylinder-smc.png',
      width: '250px',
      height: '165px',
      alt: 'Cilindro neumático',
    },
    cardBg: 'cylinder-bg.jpg',
    text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, vel! Fuga dolorem voluptatum, possimus odit harum accusamus ex mollitia animi officia obcaecati, ullam error similique sunt amet repellendus, eius nisi.',
    siteUrl: '/#',
    repositoryUrl: '/#',
  },
]

const Projects = () => {
  const [projects, setProjects] = useState('web')
  const handleWebBtnClick = () => {
    if (projects === 'web') {
      return
    }
    setProjects('web')
    console.log(projects)
  }
  const handleEngineeringBtnClick = () => {
    if (projects === 'engineering') {
      return
    }
    setProjects('engineering')
    console.log(projects)
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
        <div className={`project-list`}>
          {projects === 'web'
            ? webProjects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))
            : engineeringProjects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
