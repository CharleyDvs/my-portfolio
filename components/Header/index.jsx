import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <header id="home">
      <div className="bg-container"></div>
      <div className="txt-container">
        <div className="secondary-color">
          <h1>Jaime</h1>
        </div>
        <div>
          <h1>Yerena</h1>
        </div>
        <div className="title-container">
          <div className="title-one">
            <span>Web Developer</span>
          </div>
          <div className="title-separator secondary-color">
            <span>|</span>
          </div>
          <div className="title-Two">
            <span>Mechanical Engineer</span>
          </div>
        </div>
      </div>
      <div className="img-container">
        <Image src="/images/hawk-1.png" width="400px" height="400px" alt="" />
      </div>
    </header>
  )
}

export default Header
