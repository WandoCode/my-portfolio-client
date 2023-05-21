import Head from 'next/head'
import { useEffect, useState } from 'react'
import useGetCurrentSection from '../hooks/utils/useGetCurrentSection'
import { useDispatch } from 'react-redux'
import { changeCurrentSection } from '../Features/Navigation/nav.actions'
import useSelectLanguage from '../hooks/selectors/useSelectLanguage'
import {
  About,
  ContactForm,
  Footer,
  Header,
  Hero,
  Projects,
  Skills,
} from '../components'
import useFetchMainDatas from '../hooks/fetch/useFetchMainDatas'

// TODO: créer une page par langue dans le but de pouvoir générer le HTML un maximum au "build time"
function App() {
  const dispatch = useDispatch()
  const language = useSelectLanguage()

  const mainDatas = useFetchMainDatas()

  const [heroRef, setHeroRef] = useState<HTMLElement | null>(null)
  const [projectsRef, setProjectsRef] = useState<HTMLElement | null>(null)
  const [skillsRef, setSkillsRef] = useState<HTMLElement | null>(null)
  const [aboutRef, setAboutRef] = useState<HTMLElement | null>(null)
  const [contactRef, setContactRef] = useState<HTMLElement | null>(null)

  const refs = {
    hero: heroRef,
    projects: projectsRef,
    skills: skillsRef,
    about: aboutRef,
    contact: contactRef,
  }

  const currentSection = useGetCurrentSection({
    parentRefObject: refs,
    margin: '-20% 0px -50% 0px',
    threshold: 0,
  })

  useEffect(() => {
    dispatch(changeCurrentSection(currentSection))
  }, [currentSection])

  return (
    <>
      {mainDatas && (
        <>
          <Head>
            <title>Maxime Chirez</title>
          </Head>
          <div className="app">
            <Header headerDatas={mainDatas.headings} />
            <main className="main">
              <section
                ref={(newRef) => setHeroRef(newRef)}
                className="hero flow"
                id="hero"
              >
                <Hero heroDatas={mainDatas.hero} />
              </section>

              <section
                ref={(newRef) => setProjectsRef(newRef)}
                className="projects"
                id="projects"
              >
                <div className="container projects__container flow">
                  <h2 className="h2 heading-section">
                    {language ? mainDatas.headings[language].projects : ''}
                  </h2>
                  <Projects />
                </div>
              </section>
              <section
                ref={(newRef) => setSkillsRef(newRef)}
                className="skills container flow"
                id="skills"
              >
                <h2 className="h2 heading-section skills__title">
                  {language ? mainDatas.headings[language].skills : ''}
                </h2>
                <Skills />
              </section>
              <section
                ref={(newRef) => setAboutRef(newRef)}
                className="about flow"
                id="about"
              >
                <div className="container">
                  <h2 className="h2 heading-section about__title fc-neutral-300">
                    {language ? mainDatas.headings[language].about : ''}
                  </h2>
                  <About aboutDatas={mainDatas.about} />
                </div>
              </section>
              <section
                ref={(newRef) => setContactRef(newRef)}
                className="contact flow container fc-neutral-700 fc-dark-neutral-400"
                id="contact"
              >
                <h2 className="h2 heading-section">
                  {language ? mainDatas.headings[language].contact : ''}
                </h2>
                <ContactForm />
              </section>
            </main>
            <Footer footerDatas={mainDatas.footer} />
          </div>
        </>
      )}
    </>
  )
}

export default App
