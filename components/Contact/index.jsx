import React from 'react'
import TitleContainer from '../TitleContainer'
import ContactForm from '../ContactForm'
import Image from 'next/image'

const index = () => {
  return (
    <section id="contact" className="contact">
      <TitleContainer number="04" text1="Contact" text2="Me" />
      <div className="section-content">
        <div className="img-container">
          <Image src="/images/hawk-3.png" width="300px" height="300px" />
        </div>
        <div className="bg-container"></div>
        <div className="social-links"></div>
        <ContactForm />
      </div>
    </section>
  )
}

export default index
