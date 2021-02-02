import React, { useState, useEffect } from 'react'
import axios from 'axios'
import TitleContainer from '../TitleContainer'
import TechList from '../TechList'
import Spinner from '../Spinner'

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
  const [loading, setLoading] = useState(true)
  const [techStackData, setTechStackData] = useState({})
  useEffect(() => {
    const getInitialData = async () => {
      const response = await axios.get(
        'http://localhost:3000/api/techStackData'
      )
      const data = response.data
      setTechStackData(data)
      setLoading(false)
    }
    try {
      getInitialData()
    } catch (error) {
      console.error(error)
    }
  }, [])
  return (
    <section id="tech-stack" className="tech-stack">
      <TitleContainer number="03" text1="Tech" text2="Stack" align="left" />
      {loading ? (
        <Spinner />
      ) : (
        <>
          {Object.keys(techStackData).map((row) => (
            <TechList
              key={row.toString()}
              logoList={techStackData[row]}
              keyGen="tech-stack-section"
            />
          ))}
        </>
      )}
    </section>
  )
}

export default Techs
