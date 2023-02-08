import ThemeSwitch from '../../Theme/ThemeSwitch'
import LangSelection from '../../Language/LangSelection'
import { useState, useEffect, useContext } from 'react'
import Logo from '../../../public/assets/Logo.svg'
import Image from 'next/image'
import NavLinks from './NavLinks'
import mockedMainDatas from '../../../__mock__/data/mainDatas.json'
import { LanguageContext } from '../../Language/LanguageContextProvider'

interface Props {
  headerDatas: typeof mockedMainDatas.headings
}

function Header({ headerDatas }: Props) {
  let windowPos = 0

  const { language } = useContext(LanguageContext)

  const [openMenu, setOpenMenu] = useState(false)
  const [windowDir, setWindowDir] = useState<'up' | 'down'>('up')
  const [windowOnTop, setWindowOnTop] = useState(true)

  useEffect(() => {
    windowPos = window.scrollY // Get start position (usually 0)
    setWindowOnTop(windowPos === 0)

    window.addEventListener('scroll', getScrollDirection)
    return () => {
      window.removeEventListener('scroll', getScrollDirection)
    }
  }, [])

  const getScrollDirection = (e: Event) => {
    const currPos = window.scrollY
    if (currPos - windowPos < 0) setWindowDir('up')
    else setWindowDir('down')

    setWindowOnTop(currPos === 0)

    windowPos = currPos
  }

  const burgerClass = () => {
    return openMenu ? 'active' : 'unactive'
  }

  const navContentClass = () => {
    let name = 'nav__content show-on-desktop'
    if (openMenu) name += ' nav__content--open'
    return name
  }

  const navContainerClass = () => {
    if (openMenu) return 'container-nav container-nav--scroll-up'
    else
      return windowDir === 'up'
        ? 'container-nav container-nav--scroll-up'
        : 'container-nav'
  }

  const handleCloseNav = () => {
    setOpenMenu(false)
  }

  return (
    <header className="header">
      <div className={navContainerClass()}>
        <nav className={windowOnTop ? 'nav nav--on-top' : 'nav'}>
          <div className="nav__logo-wrapper img-wrapper">
            <Image className="nav__logo" src={Logo} alt="Logo" fill={true} />
          </div>
          <div className={navContentClass()}>
            <NavLinks
              onCloseNav={handleCloseNav}
              navText={headerDatas[language]}
            />
            <div className="nav__dark-light-switch">
              <ThemeSwitch />
            </div>
            <div className="nav__lang-choice">
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
