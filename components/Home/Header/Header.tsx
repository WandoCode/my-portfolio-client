import ThemeSwitch from '../../Theme/ThemeSwitch'
import LangSelection from '../../Language/LangSelection'
import { useState, useContext, useEffect } from 'react'
import Logo from '../../../public/assets/Logo.svg'
import Logo_black from '../../../public/assets/Logo_black.svg'
import Image from 'next/image'
import NavLinks from './NavLinks'
import { LanguageContext } from '../../Language/LanguageContextProvider'
import { HeadingsDatas } from '../../../constant/types/datas'
import useGetScrollingInfos from '../../../hooks/utils/useGetScrollingInfos'
import { ThemeContext } from '../../Theme/ThemeContextProvidor'

interface Props {
  headerDatas: HeadingsDatas | undefined
}

function Header({ headerDatas }: Props) {
  const { language } = useContext(LanguageContext)
  const { theme } = useContext(ThemeContext)

  const { windowDir, windowOnTop } = useGetScrollingInfos()

  const [openMenu, setOpenMenu] = useState(false)

  const burgerClass = () => {
    return openMenu ? 'active' : 'unactive'
  }

  const navContentClass = () => {
    let name = 'nav__content show-on-desktop'
    if (openMenu) name += ' nav__content--open'
    return name
  }

  useEffect(() => {
    console.log(theme)
  }, [theme])
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
          <div
            className={
              windowDir === 'up'
                ? 'nav__logo-wrapper nav__logo-wrapper--large img-wrapper'
                : 'nav__logo-wrapper img-wrapper'
            }
          >
            <Image
              className="nav__logo"
              src={theme === 'dark' ? Logo_black : Logo}
              alt="Logo"
              fill={true}
              quality={100}
              priority={true}
            />
          </div>
          <div id="nav-links-container" className={navContentClass()}>
            <NavLinks
              onCloseNav={handleCloseNav}
              navText={language ? headerDatas?.[language] : undefined}
            />
            <div className="nav__dark-light-switch">
              <ThemeSwitch />
            </div>
            <div className="nav__lang-choice">
              <LangSelection />
            </div>
          </div>
          <button
            aria-controls="nav-links-container"
            aria-expanded={openMenu}
            className="nav__burger show-on-mobile"
            onClick={() => setOpenMenu((old) => !old)}
          >
            <div className="visually-hidden">
              {openMenu ? 'Close menu' : 'Open Menu'}
            </div>
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
