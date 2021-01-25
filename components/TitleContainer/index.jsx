import React from 'react'

const TitleContainer = ({ number, text1, text2, align = 'right' }) => {
  return (
    <div className={`section-header ${align}`}>
      <div className="section-title">
        <div className="text1-container">
          <span>{number}</span>
          <h1>{text1}</h1>
        </div>
        <div className="text2-container">
          <h1>{text2}</h1>
        </div>
      </div>
      <div className="line"></div>
    </div>
  )
}

export default TitleContainer
