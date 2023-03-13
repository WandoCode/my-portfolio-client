import ThemeSwitch from '../../../../Features/Theme/ThemeSwitch'
import LangSelection from '../../../../Features/Language/LangSelection'
import Logo from '../../../../public/assets/Logo.svg'
import Logo_black from '../../../../public/assets/Logo_black.svg'
import Image from 'next/image'
import NavLinks from '../NavLinks'
import { HeadingsDatas } from '../../../../constant/types/datas'
import { LanguageAvailable } from '../../../../constant/language/language'
import { ThemesValues } from '../../../../constant/theme/theme'

interface Props {
  headerDatas: HeadingsDatas
  language: LanguageAvailable | null
  theme: ThemesValues | null
  scrollingInfos: {
    windowDir: 'up' | 'down'
    windowOnTop: boolean
  }
  menuIsOpen: boolean
  onOpenMenu: (value: boolean) => void
}

function Header({
  headerDatas,
  language,
  theme,
  scrollingInfos,
  menuIsOpen,
  onOpenMenu,
}: Props) {
  const { windowDir, windowOnTop } = scrollingInfos

  const burgerClass = () => {
    return menuIsOpen ? 'active' : 'unactive'
  }

  const navContentClass = () => {
    let name = 'nav__content show-on-desktop'
    if (menuIsOpen) name += ' nav__content--open'
    return name
  }

  const navContainerClass = () => {
    if (menuIsOpen) return 'container-nav container-nav--scroll-up'
    else
      return windowDir === 'up'
        ? 'container-nav container-nav--scroll-up'
        : 'container-nav'
  }

  const handleCloseNav = () => {
    onOpenMenu(false)
  }

  const toogleOpenMenu = () => {
    const newMenuIsOpen = !menuIsOpen
    onOpenMenu(newMenuIsOpen)
  }

  return (
    <header className="header">
      <div className={navContainerClass()}>
        <nav className={windowOnTop ? 'nav nav--on-top' : 'nav'}>
          <a
            href="#hero"
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
          </a>
          <div id="nav-links-container" className={navContentClass()}>
            <NavLinks
              onCloseNav={handleCloseNav}
              navText={language ? headerDatas[language] : undefined}
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
            aria-expanded={menuIsOpen}
            className="nav__burger show-on-mobile"
            onClick={toogleOpenMenu}
          >
            <span className="visually-hidden">
              {menuIsOpen ? 'Close menu' : 'Open Menu'}
            </span>
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
