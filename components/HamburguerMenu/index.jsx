import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { FaBars, FaBackward } from 'react-icons/fa'

function HamburguerMenu() {
  const router = useRouter()
  const [isMenuActive, setIsMenuActive] = useState(false)
  const handleClick = () => {
    setIsMenuActive(!isMenuActive)
  }
  return (
    <div className="hamburguer-menu-container">
      <div className="menu-icon-container" onClick={handleClick}>
        <FaBars />
      </div>
      <div className={`menu-wrapper ${isMenuActive && 'active'}`}>
        <div className="menu-container">
          <nav>
            <ul>
              <li
                onClick={() => {
                  router.push('/#home')
                  handleClick()
                }}
              >
                Home
              </li>
              <li
                onClick={() => {
                  router.push('/#about-me')
                  handleClick()
                }}
              >
                About me
              </li>
              <li
                onClick={() => {
                  router.push('/#projects')
                  handleClick()
                }}
              >
                Projects
              </li>
              <li
                onClick={() => {
                  router.push('/#tech-stack')
                  handleClick()
                }}
              >
                Tech Stack
              </li>
              <li
                onClick={() => {
                  router.push('/#contact')
                  handleClick()
                }}
              >
                Contact
              </li>
            </ul>
          </nav>
          <div className="menu-close-container" onClick={handleClick}>
            <FaBackward />
            Go back
          </div>
        </div>
      </div>
    </div>
  )
}

export default HamburguerMenu
