import React from 'react'
import { useInView } from 'react-intersection-observer'
import TitleContainer from '../TitleContainer'
import ContactForm from '../ContactForm'

const index = () => {
  const [ref, inView] = useInView()
  return (
    <section ref={ref} id="contact" className="contact">
      <TitleContainer number="04" text1="Contact" text2="Me" />
      <div className="section-content">
        <div className="img-container"></div>
        <div className={`bg-container ${inView ? 'zoom' : ''}`}></div>
        <div className="social-links"></div>
        <ContactForm />
      </div>
    </section>
  )
}

export default index
