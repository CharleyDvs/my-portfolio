import React from 'react'
import TitleContainer from '../TitleContainer'
import TechList from '../TechList'

const techStack = {
  firstRow: [
    {
      id: 'logo-section-html',
      name: 'html5',
      height: '150px',
    },
    {
      id: 'logo-section-css',
      name: 'css3',
      height: '150px',
    },
    {
      id: 'logo-section-js',
      name: 'javascript',
      height: '150px',
    },
    {
      id: 'logo-section-gh',
      name: 'github',
      height: '150px',
    },
  ],
  secondRow: [
    {
      id: 'logo-section-react',
      name: 'react',
      height: '150px',
    },
    {
      id: 'logo-section-redux',
      name: 'redux',
      height: '150px',
    },
    {
      id: 'logo-section-gsap',
      name: 'gsap',
      height: '150px',
    },
    {
      id: 'logo-section-nextjs',
      name: 'nextjs',
      height: '150px',
    },
  ],
  thirdRow: [
    {
      id: 'logo-section-nodejs',
      name: 'nodejs',
      height: '150px',
    },
    {
      id: 'logo-section-mongodb',
      name: 'mongodb',
      height: '150px',
    },
    {
      id: 'logo-section-firebase',
      name: 'firebase',
      height: '150px',
    },
  ],
}

const Techs = () => {
  return (
    <section id="tech-stack" className="tech-stack">
      <TitleContainer number="03" text1="Tech" text2="Stack" align="left" />
      {
        <>
          <TechList logoList={techStack.firstRow} />
          <TechList logoList={techStack.secondRow} />
          <TechList logoList={techStack.thirdRow} />
        </>
      }
    </section>
  )
}

export default Techs
