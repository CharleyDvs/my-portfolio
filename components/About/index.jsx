import React from 'react'
import TitleContainer from '../TitleContainer'
import Logo from '../EpicForgeLogo'

const About = () => {
  return (
    <section id="about-me" className="about left">
      <TitleContainer number="01" text1="About" text2="me" align="left" />
      <div className="section-content">
        <div className="images-container">
          <Logo />
        </div>
        <div className="txt-container">
          <p>
            I'm a <em>self-taught Web Developer and Mechanical Engineer</em>, I
            love to learn about new technologies and to stay up to date to the
            current thrends.
          </p>
          <p>
            As a Web Developer I have experience mainly working at the front end
            but I had also worked with back-end technologies like Node and
            Express, I would like to eventually work as full-stack developer,
            tough I would like to focus mainly with React and the MERN stack.
          </p>
          <p>
            As a Mechanical Engineer I work mainly designing and developing
            automation process using pneumatic and electropneumatic
            technologies. Eventually I would like to combine my knowledge in
            both fields to develop integral IoT projects.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
