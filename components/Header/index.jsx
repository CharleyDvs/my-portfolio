import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const Header = () => {
  let headerText1 = useRef(null)
  let headerText2 = useRef(null)
  let titleText1 = useRef(null)
  let titleText2 = useRef(null)
  let titleSeparator = useRef(null)

  useEffect(() => {
    gsap.from(headerText1, {
      opacity: 0,
      x: -150,
      duration: 1,
      rotate: 20,
      ease: 'power3',
    })
    gsap.from(headerText2, {
      opacity: 0,
      x: 150,
      duration: 1,
      rotate: -20,
      ease: 'power3',
    })
    gsap.to(titleSeparator, {
      delay: 1,
      duration: 0.7,
      rotate: 10,
    })
    gsap.from(titleText1, {
      delay: 1,
      duration: 0.5,
      opacity: 0,
      x: -50,
    })
    gsap.from(titleText2, {
      delay: 1,
      duration: 0.5,
      opacity: 0,
      x: 50,
    })
  }, [])

  return (
    <header>
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
    </header>
  )
}

export default Header
