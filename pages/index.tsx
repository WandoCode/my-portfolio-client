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
import contentStore from '../stores/content'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { MainDatas, SkillDatas } from '../constant/types/datas'
import { ProjectsDatas } from '../constant/types/projects'

export const getStaticProps: GetStaticProps<{
  mainDatas: MainDatas
  projectsArray: ProjectsDatas
  skillsDatas: SkillDatas[]
}> = async () => {
  const mainDatas = await contentStore.getmainDatas()
  const projectsArray = await contentStore.getProjectsDatas()
  const skillsDatas = contentStore.getSkillsDatas()
  return {
    props: { mainDatas, projectsArray, skillsDatas },
  }
}

function App({
  mainDatas,
  projectsArray,
  skillsDatas,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const dispatch = useDispatch()
  const language = useSelectLanguage()

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
              <article
                ref={(newRef) => setHeroRef(newRef)}
                className="hero flow"
                id="hero"
                aria-labelledby="hero-region"
              >
                <Hero heroDatas={mainDatas.hero} />
              </article>

              <article
                ref={(newRef) => setProjectsRef(newRef)}
                className="projects"
                id="projects"
                aria-labelledby="projects-region"
              >
                <div className="container projects__container flow">
                  <h2 className="h2 heading-section" id="projects-region">
                    {language ? mainDatas.headings[language].projects : ''}
                  </h2>
                  <Projects projectsArray={projectsArray} />
                </div>
              </article>
              <article
                ref={(newRef) => setSkillsRef(newRef)}
                className="skills container flow"
                id="skills"
                aria-labelledby="skills-region"
              >
                <h2
                  className="h2 heading-section skills__title"
                  id="skills-region"
                >
                  {language ? mainDatas.headings[language].skills : ''}
                </h2>
                <Skills skillsDatas={skillsDatas} />
              </article>
              <article
                ref={(newRef) => setAboutRef(newRef)}
                className="about flow"
                id="about"
                aria-labelledby="about-region"
              >
                <div className="container">
                  <h2
                    className="h2 heading-section about__title fc-neutral-300"
                    id="about-region"
                  >
                    {language ? mainDatas.headings[language].about : ''}
                  </h2>
                  <About aboutDatas={mainDatas.about} />
                </div>
              </article>
              <article
                ref={(newRef) => setContactRef(newRef)}
                className="contact flow container fc-neutral-700 fc-dark-neutral-400"
                id="contact"
                aria-labelledby="contact-region"
              >
                <h2 className="h2 heading-section" id="contact-region">
                  {language ? mainDatas.headings[language].contact : ''}
                </h2>
                <ContactForm />
              </article>
            </main>
            <Footer footerDatas={mainDatas.footer} />
          </div>
        </>
      )}
    </>
  )
}

export default App
