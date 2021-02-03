import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import TitleContainer from '../TitleContainer'
import TechList from '../TechList'
import Spinner from '../Spinner'

import { scrubHorizontal } from '../../animations'

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
          {Object.keys(techStackData).map((row, index) => (
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
