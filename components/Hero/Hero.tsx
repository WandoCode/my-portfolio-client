import Image from 'next/image'
import heroImg from '../../assets/hero__placeholder.png'
import Button from '../Utils/Button/Button'

function Hero() {
  const handleDownloadCV = () => {}

  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero__img-container">
          <Image
            width={500}
            height={500}
            src={heroImg}
            alt=""
            className="hero__img"
          />
        </div>
        <div className="hero__content">
          <p className="subtitle fc-neutral-350 fs-350">Développeur Frontend</p>
          <h1 className="h1 fs-800">Maxime Chirez</h1>
          <p className="hero__description">
            Fusce tempor magna mi, non egestas velit ultricies nec. Aenean
            convallis, risus non condimentum gravida, odio mauris ullamcorper
            felis, ut venenatis purus ex eu mi. Quisque imperdiet lacinia urna,
            aplacerat sapien pretium eu.
          </p>
          <div>
            <Button
              type="button"
              level="primary"
              onclick={handleDownloadCV}
              className="fs-400 fc-neutral-800"
            >
              Télécharger CV
            </Button>
            <Button
              type="link"
              level="secondary"
              href="#contact"
              className="fs-400 fc-neutral-800"
            >
              Contact
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
