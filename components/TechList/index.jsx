import React from 'react'
import Image from 'next/image'

function TechList({ logoList }) {
  return (
    <div className="tech-list">
      {logoList.map((logo) => (
        <div className="img-container">
          <Image
            key={logo.id}
            src={`/logos/${logo.name}-logo.svg`}
            height={logo.height}
            width="auto"
          />
          <div className="txt-container">
            <span>{logo.name}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TechList
