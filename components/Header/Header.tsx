function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav__logo-wrapper">
          <img
            className="nav__logo"
            src="https://placeholder.pics/svg/70"
            alt="Logo"
          />
          {/* Logo.svg = 1 svg avec le ""logo"" et mon nom (tout en un) */}
        </div>
        <div className="nav__links">
          <a href="#hero" className="nav__link">
            Home
          </a>
          <a href="#projects" className="nav__link">
            Projets
          </a>
          <a href="#skills" className="nav__link">
            Compétences
          </a>
          <a href="#contact" className="nav__link">
            Contact
          </a>
        </div>
        <div className="nav__lang-choice">Switch langues en/fr/es</div>
        <div className="nav__dark-light-switch">Switch dark/light mode</div>
      </nav>
    </header>
  )
}

export default Header
