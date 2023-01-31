function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero__img-container">
          <img
            src="https://placeholder.pics/svg/380"
            alt=""
            className="hero__img"
          />
        </div>
        <div className="hero__content">
          <p className="subtitle fc-neutral-350 fs-350">Développeur Frontend</p>
          <h1 className="h1">Maxime Chirez</h1>
          <p className="hero__description">
            Fusce tempor magna mi, non egestas velit ultricies nec. Aenean
            convallis, risus non condimentum gravida, odio mauris ullamcorper
            felis, ut venenatis purus ex eu mi. Quisque imperdiet lacinia urna,
            aplacerat sapien pretium eu.
          </p>
          <div>
            <a href="#" className="btn btn--primary">
              Télécharger CV
              {/* TODO: Bouton? */}
            </a>
            <a href="#" className="btn btn--secondary">
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
