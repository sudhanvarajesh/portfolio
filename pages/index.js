import Head from 'next/head'
import About from '../components/About'
import Education from '../components/Education'
import Experience from '../components/Experience'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Sudhanva | Software Engineer</title>
        <meta name="description" content="I’m a Software Engineer specializing in building full stack applications." />
        <link rel="icon" href="/fav.png" />
      </Head>
    <Main />
    <About />
    <Education />
    <Experience />
    <Skills />
    <Projects />
    <Contact />
    </div>
  )
}
