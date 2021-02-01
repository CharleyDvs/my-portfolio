import Head from 'next/head'
import Header from '../components/Header/'
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
        <meta http-equiv="content-language" content="en" />
        <title>Jaime Yerena | Web developer</title>
      </Head>
      <main>
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
