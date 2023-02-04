import Header from '../components/Home/Header/Header'
import Hero from '../components/Home/Hero/Hero'
import Projects from '../components/Home/Projects/Projects'
import Skills from '../components/Home/Skills/Skills'
import Contact from '../components/Home/Contact/Contact'
import Footer from '../components/Home/Footer/Footer'

function App() {
  return (
    <>
      <div className="app">
        <Header />
        <main className="main">
          <Hero />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
      {/* <Button to go top/>*/}
    </>
  )
}

export default App
// TODO: button to go top
