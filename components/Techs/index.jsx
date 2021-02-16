import React, { useState, useEffect } from 'react'
import axios from 'axios'
import TitleContainer from '../TitleContainer'
import TechList from '../TechList'
import Spinner from '../Spinner'

const Techs = () => {
  const [loading, setLoading] = useState(true)
  const [techStackData, setTechStackData] = useState({})

  useEffect(() => {
    const getInitialData = async () => {
      const response = await axios.get(
        'https://epicforge.dev/api/techStackData'
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
