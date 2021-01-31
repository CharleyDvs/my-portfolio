import React from 'react'
import { useRouter } from 'next/router'

import { GiCastle } from 'react-icons/gi'
import { GiVisoredHelm } from 'react-icons/gi'
import { FaCogs } from 'react-icons/fa'
import { GiSwordsEmblem } from 'react-icons/gi'
import { FaFeatherAlt } from 'react-icons/fa'

const Sidemenu = () => {
  const router = useRouter()
  return (
    <nav className="sidemenu">
      <ul>
        <li onClick={() => router.push('/')}>
          <GiCastle />
          <div className="link-text">Home</div>
        </li>
        <li>
          <GiVisoredHelm />
          <div className="link-text">About me</div>
        </li>
        <li>
          <FaCogs />
          <div className="link-text">My projects</div>
        </li>
        <li>
          <GiSwordsEmblem />
          <div className="link-text">Tech stack</div>
        </li>
        <li>
          <FaFeatherAlt />
          <div className="link-text">Contact me</div>
        </li>
      </ul>
    </nav>
  )
}

export default Sidemenu
