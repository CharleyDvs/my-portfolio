import React, { useEffect, useRef } from 'react'
import Image from 'next/image'

import { initialAnimation, scrubHorizontal } from '../../animations'

const Header = () => {
  let headerText1 = useRef(null)
  let headerText2 = useRef(null)
  let titleText1 = useRef(null)
  let titleText2 = useRef(null)
  let titleSeparator = useRef(null)
  let hawkImg = useRef(null)
  let bgImg = useRef(null)

  useEffect(() => {
    initialAnimation({
      headerText1,
      headerText2,
      titleText1,
      titleText2,
      titleSeparator,
    })
    scrubHorizontal(hawkImg, 1, -100)
  }, [])

  return (
    <header id="home">
      <div ref={(node) => (bgImg = node)} className="bg-container"></div>
      <div className="txt-container">
        <div ref={(node) => (headerText1 = node)} className="secondary-color">
          <h1>Jaime</h1>
        </div>
        <div ref={(node) => (headerText2 = node)}>
          <h1>Yerena</h1>
        </div>
        <div className="title-container">
          <div className="title-one" ref={(node) => (titleText1 = node)}>
            <span>Web Developer</span>
          </div>
          <div
            ref={(node) => (titleSeparator = node)}
            className="title-separator secondary-color"
          >
            <span>|</span>
          </div>
          <div className="title-Two" ref={(node) => (titleText2 = node)}>
            <span>Mechanical Engineer</span>
          </div>
        </div>
      </div>
      <div ref={(node) => (hawkImg = node)} className="img-container">
        <Image src="/images/hawk-1.png" width="400px" height="400px" alt="" />
      </div>
    </header>
  )
}

export default Header
