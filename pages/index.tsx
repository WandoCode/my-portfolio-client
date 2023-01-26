import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import Projects from '../components/Projects/Projects'
import Skills from '../components/Skills/Skills'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
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
