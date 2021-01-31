import React from 'react'
import Image from 'next/image'

const ProjectCard = ({ isActive }) => {
  return (
    <div className={`project-container-wrap ${isActive ? 'active' : ''}`}>
      <div className={`project-container ${isActive ? 'active' : ''}`}>
        <div className="project-content">
          <div className="project-img-container">
            <div className="filter">
              <h1>Project 1</h1>
              <Image
                src="/images/cylinder-smc.png"
                width="250px"
                height="165px"
                alt=""
              />
            </div>
          </div>
          <div className="project-info-container">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
              vel! Fuga dolorem voluptatum, possimus odit harum accusamus ex
              mollitia animi officia obcaecati, ullam error similique sunt amet
              repellendus, eius nisi.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
