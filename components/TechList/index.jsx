import React from 'react'
import Image from 'next/image'

function TechList({ logoList, keyGen }) {
  return (
    <div className="tech-list">
      {logoList.map((logo) => (
        <div key={`${keyGen}-${logo.name}`} className="img-container">
          <Image
            src={`/logos/${logo.name}-logo.svg`}
            height={logo.height}
            width="auto"
            alt={`${logo.name} logo`}
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
