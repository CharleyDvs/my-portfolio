import React from 'react'
import TitleContainer from '../TitleContainer'
import ContactForm from '../ContactForm'

const index = () => {
  return (
    <section id="contact" className="contact">
      <TitleContainer number="04" text1="Contact" text2="Me" />
      <div className="section-content">
        <div className="img-container"></div>
        <div className="bg-container"></div>
        <div className="social-links"></div>
        <ContactForm />
      </div>
    </section>
  )
}

export default index
