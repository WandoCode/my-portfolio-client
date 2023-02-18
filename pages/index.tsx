import { useRef, useEffect, RefObject } from 'react'
import useFetchMainDatas from '../hooks/fetch/useFetchMainDatas'

import useGetCurrentSection from '../hooks/utils/useGetCurrentSection'
import Head from 'next/head'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../Features/app.store'
import { changeCurrentSection } from '../Features/Navigation/nav.actions'
import {
  About,
  ContactForm,
  Footer,
  Header,
  Hero,
  Projects,
  Skills,
} from '../components'

function App() {
  const dispatch = useDispatch()
  const language = useSelector((state: RootState) => state.language.language)

  const mainDatas = useFetchMainDatas()

  const refs: Record<string, RefObject<HTMLElement>> = {
    hero: useRef<HTMLElement>(null),
    projects: useRef<HTMLElement>(null),
    skills: useRef<HTMLElement>(null),
    about: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
  }

  const currentSection = useGetCurrentSection({
    parentRefObject: refs,
    margin: '-20% 0px -40% 0px',
    threshold: 0.1,
  })

  useEffect(() => {
    dispatch(changeCurrentSection(currentSection))
  }, [currentSection])

  return (
    <>
      <Head>
        <title>Maxime Chirez</title>
      </Head>
      <div className="app">
        <Header headerDatas={mainDatas?.headings} />
        <main className="main">
          <section ref={refs.hero} className="hero flow" id="hero">
            <Hero heroDatas={mainDatas?.hero} />
          </section>

          <section ref={refs.projects} className="projects" id="projects">
            <div className="container projects__container flow">
              <h2 className="h2 heading-section">
                {language ? mainDatas?.headings[language].projects : ''}
              </h2>
              <Projects />
            </div>
          </section>
          <section
            ref={refs.skills}
            className="skills container flow"
            id="skills"
          >
            <h2 className="h2 heading-section skills__title">
              {language ? mainDatas?.headings[language].skills : ''}
            </h2>
            <Skills />
          </section>
          <section ref={refs.about} className="about flow" id="about">
            <div className="container">
              <h2 className="h2 heading-section about__title fc-neutral-300">
                {language ? mainDatas?.headings[language].about : ''}
              </h2>
              <About aboutDatas={mainDatas?.about} />
            </div>
          </section>
          <section
            ref={refs.contact}
            className="contact flow container fc-neutral-700 fc-dark-neutral-400"
            id="contact"
          >
            <h2 className="h2 heading-section">
              {language ? mainDatas?.headings[language].contact : ''}
            </h2>
            <ContactForm />
          </section>
        </main>
        <Footer footerDatas={mainDatas?.footer} />
      </div>
    </>
  )
}

export default App
