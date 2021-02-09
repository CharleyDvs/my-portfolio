import React, { useState } from 'react'
import { FaBars, FaBackward } from 'react-icons/fa'

function HamburguerMenu() {
  const [isMenuActive, setIsMenuActive] = useState(false)
  const handleClick = () => {
    setIsMenuActive(!isMenuActive)
    console.log('working')
  }
  return (
    <div className="hamburguer-menu-container">
      <div className="menu-icon-container" onClick={handleClick}>
        <FaBars />
      </div>
      <div className={`menu-wrapper ${isMenuActive && 'active'}`}>
        <div className="menu-container">
          <div className="menu-close-container" onClick={handleClick}>
            <FaBackward />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HamburguerMenu
