import React from 'react'
import TitleContainer from '../TitleContainer'

const About = () => {
  return (
    <section id="about-me" className="about left">
      <TitleContainer number="01" text1="About" text2="me" align="left" />
      <div className="section-content">
        <div className="images-container"></div>
        <div className="txt-container">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui magnam
            neque est, suscipit ad minima asperiores fugiat aperiam repudiandae
            consequatur <b>nostrum harum adipisci rerum</b> veniam, dolor ea
            omnis architecto alias.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.{' '}
            <em>
              Laudantium qui, earum nihil corporis deserunt harum possimus cum
              aperiam maxime placeat at itaque ullam nostrum voluptate odit
              consequuntur odio illum perspiciatis?
            </em>
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
