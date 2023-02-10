import useGetCurrentSection from '../../../hooks/utils/useGetCurrentSection'
import { useRef, useEffect, useState, useContext } from 'react'
import { LanguageContext } from '../../Language/LanguageContextProvider'
import { HeadingsDatas } from '../../../constant/types/datas'

interface Props {
  onCloseNav: () => void
  navText: HeadingsDatas['fr'] | undefined
}

type Dimensions = Record<string, any>

function NavLinks({ onCloseNav, navText }: Props) {
  const { language } = useContext(LanguageContext)

  const activeSection = useGetCurrentSection()
  const heroRef = useRef<HTMLAnchorElement>(null)
  const projectsRef = useRef<HTMLAnchorElement>(null)
  const skillsRef = useRef<HTMLAnchorElement>(null)
  const aboutRef = useRef<HTMLAnchorElement>(null)
  const contactRef = useRef<HTMLAnchorElement>(null)
  const listSliderRef = useRef<HTMLUListElement>(null)

  const [linksDimensions, setLinksDimensions] = useState<Dimensions>({})

  const listClass = () => {
    let name = 'nav-links'
    return activeSection ? `${name} ${name}--${activeSection}` : name
  }

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
    if (listSliderRef.current && activeSection) {
      console.log(activeSection)

      listSliderRef.current.style.width = `${linksDimensions[activeSection].width}px`
      listSliderRef.current.style.marginLeft = `${linksDimensions[activeSection].start}px`
    }
  }, [activeSection, linksDimensions])

  return (
    <ul className={listClass()}>
      <li
        className={
          activeSection === 'hero' || !activeSection
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
          activeSection === 'projects'
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
          activeSection === 'skills'
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
          activeSection === 'about'
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
          activeSection === 'contact'
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
