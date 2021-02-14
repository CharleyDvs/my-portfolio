import React from 'react'
import { FaCode } from 'react-icons/fa'
import { GiAnvilImpact } from 'react-icons/gi'

function Logo() {
  return (
    <div className="logo">
      <div className="anvil">
        <GiAnvilImpact />
      </div>
      <div className="code">
        <FaCode />
      </div>
    </div>
  )
}

export default Logo
