import Head from 'next/head'
import Header from '../components/Header/'
import HamburguerMenu from '../components/HamburguerMenu'
import Sidemenu from '../components/Sidemenu'
import About from '../components/About'
import Projects from '../components/Projects'
import QuoteBanner from '../components/QuoteBanner'
import Techs from '../components/Techs'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <>
      <Head>
        <meta httpEquiv="content-language" content="en" />
        <title>Jaime Yerena | Web developer</title>
      </Head>
      <main>
        <HamburguerMenu />
        <Sidemenu />
        <Header />
        <About />
        <Projects />
        <QuoteBanner />
        <Techs />
        <Contact />
      </main>
    </>
  )
}
