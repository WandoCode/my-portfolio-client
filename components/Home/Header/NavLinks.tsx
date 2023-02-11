import { useRef, useEffect, useContext, RefObject } from 'react'
import { LanguageContext } from '../../Language/LanguageContextProvider'
import { HeadingsDatas } from '../../../constant/types/datas'
import { NavContext } from '../../Navigation/NavContextProvider'

interface Props {
  onCloseNav: () => void
  navText: HeadingsDatas['fr'] | undefined
}

function NavLinks({ onCloseNav, navText }: Props) {
  const { language } = useContext(LanguageContext)
  const { currentSection = 'hero' } = useContext(NavContext)
  const refs: Record<string, RefObject<HTMLAnchorElement>> = {
    hero: useRef<HTMLAnchorElement>(null),
    projects: useRef<HTMLAnchorElement>(null),
    skills: useRef<HTMLAnchorElement>(null),
    about: useRef<HTMLAnchorElement>(null),
    contact: useRef<HTMLAnchorElement>(null),
  }

  const listSliderRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    if (listSliderRef.current) {
      listSliderRef.current.style.width = `${refs[currentSection].current?.offsetWidth}px`
      listSliderRef.current.style.marginLeft = `${refs[currentSection].current?.offsetLeft}px`
    }
  }, [currentSection, language])

  return (
    <ul className="nav-links">
      <li
        className={
          currentSection === 'hero' || !currentSection
            ? 'nav-links__item nav-links__item--active'
            : 'nav-links__item'
        }
      >
        <a
          ref={refs.hero}
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
          ref={refs.projects}
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
          ref={refs.skills}
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
          ref={refs.about}
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
          ref={refs.contact}
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
