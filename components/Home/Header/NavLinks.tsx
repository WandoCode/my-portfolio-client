import { useRef, useEffect, useState, useContext } from 'react'
import { LanguageContext } from '../../Language/LanguageContextProvider'
import { HeadingsDatas } from '../../../constant/types/datas'
import { NavContext } from '../../Navigation/NavContextProvider'

interface Props {
  onCloseNav: () => void
  navText: HeadingsDatas['fr'] | undefined
}

type Dimensions = Record<string, any>

function NavLinks({ onCloseNav, navText }: Props) {
  const { language } = useContext(LanguageContext)
  const { currentSection } = useContext(NavContext)

  const heroRef = useRef<HTMLAnchorElement>(null)
  const projectsRef = useRef<HTMLAnchorElement>(null)
  const skillsRef = useRef<HTMLAnchorElement>(null)
  const aboutRef = useRef<HTMLAnchorElement>(null)
  const contactRef = useRef<HTMLAnchorElement>(null)
  const listSliderRef = useRef<HTMLUListElement>(null)

  const [linksDimensions, setLinksDimensions] = useState<Dimensions>({})

  const listClass = () => {
    let name = 'nav-links'
    return currentSection ? `${name} ${name}--${currentSection}` : name
  }
  // TODO: util cette listCalss?

  const getLinksDimensions = () => {
    return {
      hero: {
        start: heroRef.current?.offsetLeft,
        width: heroRef.current?.offsetWidth,
      },
      projects: {
        start: projectsRef.current?.offsetLeft,
        width: projectsRef.current?.offsetWidth,
      },
      skills: {
        start: skillsRef.current?.offsetLeft,
        width: skillsRef.current?.offsetWidth,
      },
      about: {
        start: aboutRef.current?.offsetLeft,
        width: aboutRef.current?.offsetWidth,
      },
      contact: {
        start: contactRef.current?.offsetLeft,
        width: contactRef.current?.offsetWidth,
      },
    }
  }

  useEffect(() => {
    setLinksDimensions(getLinksDimensions())
  }, [language])

  useEffect(() => {
    if (listSliderRef.current && currentSection) {
      listSliderRef.current.style.width = `${linksDimensions[currentSection].width}px`
      listSliderRef.current.style.marginLeft = `${linksDimensions[currentSection].start}px`
    }
  }, [currentSection, linksDimensions])

  return (
    <ul className={listClass()}>
      <li
        className={
          currentSection === 'hero' || !currentSection
            ? 'nav-links__item nav-links__item--active'
            : 'nav-links__item'
        }
      >
        <a
          ref={heroRef}
          href="#hero"
          className="nav-links__link nav-item "
          onClick={onCloseNav}
        >
          {navText ? navText.home : ''}
        </a>
      </li>
      <li
        className={
          currentSection === 'projects'
            ? 'nav-links__item nav-links__item--active'
            : 'nav-links__item'
        }
      >
        <a
          ref={projectsRef}
          href="#projects"
          className="nav-links__link nav-item"
          onClick={onCloseNav}
        >
          {navText ? navText.projects : ''}
        </a>
      </li>
      <li
        className={
          currentSection === 'skills'
            ? 'nav-links__item nav-links__item--active'
            : 'nav-links__item'
        }
      >
        <a
          ref={skillsRef}
          href="#skills"
          className="nav-links__link nav-item"
          onClick={onCloseNav}
        >
          {navText ? navText.skills : ''}
        </a>
      </li>
      <li
        className={
          currentSection === 'about'
            ? 'nav-links__item nav-links__item--active'
            : 'nav-links__item'
        }
      >
        <a
          ref={aboutRef}
          href="#about"
          className="nav-links__link nav-item"
          onClick={onCloseNav}
        >
          {navText ? navText.about : ''}
        </a>
      </li>
      <li
        className={
          currentSection === 'contact'
            ? 'nav-links__item nav-links__item--active'
            : 'nav-links__item'
        }
      >
        <a
          ref={contactRef}
          href="#contact"
          className="nav-links__link nav-item"
          onClick={onCloseNav}
        >
          {navText ? navText.contact : ''}
        </a>
      </li>
      <span ref={listSliderRef} className="nav-links__slider"></span>
    </ul>
  )
}

export default NavLinks
// TODO: solution: Créer un context qui contiendra la section actuellmeent consulté. Dans chaque section (dans le component): utilise useObeserver pour savoir si la section est active ou non et modifier le contexte en conséquence. NavLink utilisera ce context pour  actualiser les lien et le slider
