import Image from 'next/image'
import burger from '../../assets/burger.svg'
import Switch from '../Switch/Switch'

function Header() {
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
          <div className="nav__content show-on-desktop">
            <ul className="nav__links">
              <li className="nav__item">
                <a href="#hero" className="nav__link nav-item nav-item--actif">
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
            <div className="nav__lang-choice nav-item">
              Switch langues en/fr/es
            </div>
            <div className="nav__dark-light-switch nav-item">
              <Switch />
            </div>
          </div>
          <Image src={burger} alt="" className="show-on-mobile nav__burger" />
        </nav>
      </div>
    </header>
  )
}

export default Header
