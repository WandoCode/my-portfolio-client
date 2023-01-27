import Image from 'next/image'
import burger from '../../assets/burger.svg'
import ThemeSwitch from './ThemeSwitch'
import LangSelection from './LangSelection'
import { useState } from 'react'

function Header() {
  const [openMenu, setOpenMenu] = useState(false)

  const burgerClass = () => {
    return openMenu ? 'active' : 'unactive'
  }

  const navContentClass = () => {
    let name = 'nav__content show-on-desktop'
    if (openMenu) name += ' nav__content--open'
    return name
  }

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <div className="nav__logo-wrapper">
            <img
              className="nav__logo"
              src="https://placeholder.pics/svg/45"
              alt="Logo"
            />
            {/* Logo.svg = 1 svg avec le ""logo"" et mon nom (tout en un) */}
          </div>
          <div className={navContentClass()}>
            <ul className="nav__links">
              <li className="nav__item">
                <a href="#hero" className="nav__link nav-item ">
                  Home
                </a>
              </li>
              <li className="nav__item">
                <a href="#projects" className="nav__link nav-item">
                  Projets
                </a>
              </li>
              <li className="nav__item">
                <a href="#skills" className="nav__link nav-item">
                  Compétences
                </a>
              </li>
              <li className="nav__item">
                <a href="#contact" className="nav__link nav-item">
                  Contact
                </a>
              </li>
            </ul>
            <div className="nav__dark-light-switch">
              <ThemeSwitch />
            </div>
            <div className="nav__lang-choice fc-neutral-550">
              <LangSelection />
            </div>
          </div>
          <button
            className="nav__burger show-on-mobile"
            onClick={() => setOpenMenu((old) => !old)}
          >
            <svg
              className={burgerClass()}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -100 450 400"
            >
              <path
                d="M 75 30 H 355 C 415 30 415 120 355 120 H 75 C 15 120 15 210 75 210 H 355 L 123 -14 H 354 L 120 211"
                stroke="var(--burger-stroke)"
                strokeWidth="20"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header
// todo: ajouter un bouton 'go top' pour le DESKTOP uniquement (mobile/tablet, le menu suit l'utilisateur)
