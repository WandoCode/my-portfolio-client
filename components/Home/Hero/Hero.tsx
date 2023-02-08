import Image from 'next/image'
import heroImg from '../../../public/assets/hero__placeholder.png'
import Button from '../../Utils/Button/Button'
import mockedMainDatas from '../../../__mock__/data/mainDatas.json'
import { LanguageContext } from '../../Language/LanguageContextProvider'
import { useContext } from 'react'
import btnText from '../../../constant/text/heroBtns.json'

interface Props {
  heroDatas: typeof mockedMainDatas.hero
}

function Hero({ heroDatas }: Props) {
  const { language } = useContext(LanguageContext)

  const handleDownloadCV = () => {}

  return (
    <section className="hero flow" id="hero">
      <div className="container">
        <div className="hero__container">
          <div className="hero__img-container">
            <Image
              width={500}
              height={500}
              src={heroDatas.img.link}
              alt={heroDatas.img.alt}
              className="hero__img"
              priority={true}
            />
          </div>
          <div className="hero__content">
            <p className="hero__subtitle subtitle fc-neutral-350 fs-350">
              {heroDatas.subtitle[language]}
            </p>
            <h1 className="h1 fs-800">{heroDatas.title[language]}</h1>
            <p className="hero__description">{heroDatas.text[language]}</p>
            <div className="hero__btns-wrapper">
              <Button
                type="button"
                level="primary"
                onclick={handleDownloadCV}
                className="hero__btn fs-400 fc-neutral-800"
              >
                {btnText[language].CV}
              </Button>
              <Button
                type="link"
                level="secondary"
                href="#contact"
                className="hero__btn fs-400 fc-neutral-800 "
              >
                {btnText[language].contact}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
