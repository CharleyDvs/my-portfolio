import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

function Footer() {
  return (
    <footer>
      <div className="social-links-container">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/CharleyDvs/"
        >
          <FaGithub />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/carlos-jaime-yerena/"
        >
          <FaLinkedin />
        </a>
      </div>
      <p>ing.carlosjaime@outlook.com</p>
    </footer>
  )
}

export default Footer
