import Header from '../components/Home/Header/Header'
import Hero from '../components/Home/Hero/Hero'
import Projects from '../components/Home/Projects/Projects'
import Skills from '../components/Home/Skills/Skills'
import Contact from '../components/Home/Contact/Contact'
import Footer from '../components/Home/Footer/Footer'
import About from '../components/Home/About/About'
import mainDatas from '../constant/content/mainDatas.json'
import { useContext } from 'react'
import { LanguageContext } from '../components/Language/LanguageContextProvider'

function App() {
  const { language } = useContext(LanguageContext)

  return (
    <>
      <div className="app">
        <Header headerDatas={mainDatas.headings} />
        <main className="main">
          <Hero heroDatas={mainDatas.hero} />
          <section className="projects" id="projects">
            <div className="container projects__container flow">
              <h2 className="h2 heading-section">
                {language ? mainDatas.headings[language].projects : ''}
              </h2>
              <Projects />
            </div>
          </section>
          <section className="skills container flow" id="skills">
            <h2 className="h2 heading-section skills__title">
              {language ? mainDatas.headings[language].skills : ''}
            </h2>
            <Skills />
          </section>
          <section className="about flow-bottom" id="about">
            <div className="container">
              <h2 className="h2 heading-section about__title fc-neutral-300">
                {language ? mainDatas.headings[language].about : ''}
              </h2>
              <About aboutDatas={mainDatas.about} />
            </div>
          </section>
          <section
            className="contact flow container fc-neutral-700 fc-dark-neutral-400"
            id="contact"
          >
            <h2 className="h2 heading-section">
              {language ? mainDatas.headings[language].contact : ''}
            </h2>
            <Contact contactDatas={mainDatas.contact} />
          </section>
        </main>
        <Footer />
      </div>
      {/* <Button to go top/>*/}
    </>
  )
}

export default App
// TODO: button to go top
