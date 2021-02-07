import React from 'react'
import EnterWhenVisible from '../../hoc/EnterWhenVisible'

const TitleContainer = ({ number, text1, text2, align = 'right' }) => {
  return (
    <div className={`section-header ${align}`}>
      <div className="section-title">
        <div className="text1-container">
          <EnterWhenVisible>
            <span>{number}</span>
          </EnterWhenVisible>
          <EnterWhenVisible animationValue="hiddenRight" delay={0.3}>
            <h1>{text1}</h1>
          </EnterWhenVisible>
        </div>
        <div className="text2-container">
          <EnterWhenVisible animationValue="hiddenLeft" delay={0.5}>
            <h1>{text2}</h1>
          </EnterWhenVisible>
        </div>
      </div>
      <div className="line"></div>
    </div>
  )
}

export default TitleContainer
