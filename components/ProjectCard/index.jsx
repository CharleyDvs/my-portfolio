import React, { useState } from 'react'
import Image from 'next/image'
import TechList from '../TechList'

import { FaBackward } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaRegWindowMaximize } from 'react-icons/fa'
import { FaWrench } from 'react-icons/fa'

import EnterFromRight from '../../hoc/EnterFromRight/'

const ProjectCard = ({
  title,
  imageLogo,
  cardBg,
  text,
  techList,
  siteUrl,
  repositoryUrl,
  projectType,
  delayValue,
}) => {
  const [isActive, setIsActive] = useState(false)
  const handleClick = () => {
    setIsActive(!isActive)
  }
  return (
    <EnterFromRight delayValue={delayValue}>
      <div className={`project-container-wrap ${isActive ? 'active' : ''}`}>
        <div
          className={`project-container ${isActive ? 'active' : ''}`}
          onClick={handleClick}
        >
          <div className="project-content">
            <div
              className="project-img-container"
              style={{
                backgroundImage: `url('./images/${cardBg}')`,
              }}
            >
              <div className="filter">
                <h1>{title}</h1>
                <div className="img-container">
                  <Image
                    src={imageLogo.src}
                    width={imageLogo.width}
                    height={imageLogo.height}
                    alt={imageLogo.alt}
                  />
                </div>
              </div>
            </div>
            <div className="project-info-container">
              <h1 className="info-title">{title}</h1>
              <p>{text}</p>
              {projectType === 'web' ? (
                <>
                  <h2 className="info-title">Technologies used:</h2>
                  <div className="tech-stack-list">
                    <TechList logoList={techList} keyGen={name} />
                  </div>
                  <div className="btn-container">
                    <a rel="noreferrer" target="_blank" href={siteUrl}>
                      <button>
                        <FaRegWindowMaximize />
                        Visit site
                      </button>
                    </a>
                    <a rel="noreferrer" target="_blank" href={repositoryUrl}>
                      <button>
                        <FaGithub />
                        View code
                      </button>
                    </a>
                  </div>
                </>
              ) : (
                <>
                  <div className="btn-container">
                    <button>
                      <FaWrench />
                      View diagram
                    </button>
                  </div>
                </>
              )}
              <div className="back-btn" onClick={handleClick}>
                <FaBackward className="back" />
                <span>Go back</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </EnterFromRight>
  )
}

export default ProjectCard
