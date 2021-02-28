import { useState, useEffect } from 'react'
import Head from 'next/head'
import Header from '../components/Header/'
import HamburguerMenu from '../components/HamburguerMenu'
import Sidemenu from '../components/Sidemenu'
import About from '../components/About'
import Projects from '../components/Projects'
import QuoteBanner from '../components/QuoteBanner'
import Techs from '../components/Techs'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  const [scroll, setScroll] = useState(0)
  useEffect(() => {
    const handleScroll = () => {
      const yOffset = window.pageYOffset
      setScroll(yOffset)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <>
      <Head>
        <meta httpEquiv="content-language" content="en"></meta>
        <meta
          name="description"
          content="Self taught Web Developer and Mechanical Engineer"
        ></meta>
        <meta name="author" content="Jaime Yerena"></meta>
        <title>Jaime Yerena | Web developer</title>
      </Head>
      <main>
        <HamburguerMenu />
        <Sidemenu />
        <Header scroll={scroll} />
        <About />
        <Projects />
        <QuoteBanner />
        <Techs />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
