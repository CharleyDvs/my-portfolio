import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { FaBackward } from 'react-icons/fa'

const ProjectCard = () => {
  const [isActive, setIsActive] = useState(false)
  const handleClick = () => {
    setIsActive(!isActive)
  }
  return (
    <div className={`project-container-wrap ${isActive ? 'active' : ''}`}>
      <div
        className={`project-container ${isActive ? 'active' : ''}`}
        onClick={handleClick}
      >
        <div className="project-content">
          <div className="project-img-container">
            <div className="filter">
              <h1>Project 1</h1>
              <div className="img-container">
                <Image
                  src="/images/cylinder-smc.png"
                  width="250px"
                  height="165px"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="project-info-container">
            <h1 className="info-title">Project 1</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
              vel! Fuga dolorem voluptatum, possimus odit harum accusamus ex
              mollitia animi officia obcaecati, ullam error similique sunt amet
              repellendus, eius nisi.
            </p>
            <h2 className="info-title">Technologies used:</h2>
            <div className="tech-stack-list"></div>
            <div className="btn-container">
              <Link href="#">
                <button>Visit site</button>
              </Link>
              <Link href="#">
                <button>View code</button>
              </Link>
            </div>
            <div className="back-btn" onClick={handleClick}>
              <FaBackward className="back" />
              <span>Go back</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
