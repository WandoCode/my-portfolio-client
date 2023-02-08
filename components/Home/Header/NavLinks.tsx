import useGetCurrentSection from '../../../hooks/useGetCurrentSection'
import { useRef, useEffect, useState } from 'react'

interface Props {
  onCloseNav: () => void
}

type Dimensions = Record<string, any>

function NavLinks({ onCloseNav }: Props) {
  const activeSection = useGetCurrentSection()
  const heroRef = useRef<HTMLAnchorElement>(null)
  const projectsRef = useRef<HTMLAnchorElement>(null)
  const skillsRef = useRef<HTMLAnchorElement>(null)
  const aboutRef = useRef<HTMLAnchorElement>(null)
  const contactRef = useRef<HTMLAnchorElement>(null)
  const listSliderRef = useRef<HTMLUListElement>(null)

  const [LinksDimensions, setLinksDimensions] = useState<Dimensions>({})

  const listClass = () => {
    let name = 'nav-links'
    return activeSection ? `${name} ${name}--${activeSection}` : name
  }

  useEffect(() => {
    setLinksDimensions({
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
    })
  }, [])

  useEffect(() => {
    if (listSliderRef.current && activeSection) {
      listSliderRef.current.style.width = `${LinksDimensions[activeSection].width}px`
      listSliderRef.current.style.marginLeft = `${LinksDimensions[activeSection].start}px`
    }
  }, [activeSection])

  return (
    <ul className={listClass()}>
      <li
        className={
          activeSection === 'hero'
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
          Home
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
          Projets
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
          Compétences
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
          ref={aboutRef}
          href="#about"
          className="nav-links__link nav-item"
          onClick={onCloseNav}
        >
          Qui suis-je?
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
          Contact
        </a>
      </li>
      <span ref={listSliderRef} className="nav-links__slider"></span>
    </ul>
  )
}

export default NavLinks
