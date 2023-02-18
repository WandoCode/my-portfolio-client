import Image from 'next/image'
import Button from '../../Utils/Button/Button'
import { LanguageContext } from '../../Features/Language/LanguageContextProvider'
import { useContext } from 'react'
import { HeroDatas } from '../../../constant/types/datas'

interface Props {
  heroDatas: HeroDatas | undefined
}

function Hero({ heroDatas }: Props) {
  const { language } = useContext(LanguageContext)

  const handleDownloadCV = () => {}

  return (
    <div className="container">
      <div className="hero__container">
        <div className="hero__img-container">
          {heroDatas && (
            <Image
              width={500}
              height={500}
              src={heroDatas.img.link}
              alt={heroDatas.img.alt}
              className="hero__img"
              priority={true}
              placeholder="blur"
              blurDataURL="/assets/placeholderBlur.png"
            />
          )}
        </div>
        <div className="hero__content">
          <p className="hero__subtitle subtitle fc-neutral-350 fc-dark-neutral-500 fs-350">
            {language ? heroDatas?.subtitle[language] : ''}
          </p>
          <h1 className="h1 fs-800">
            {language ? heroDatas?.title[language] : ''}
          </h1>
          <p className="hero__description">
            {language ? heroDatas?.text[language] : ''}
          </p>
          <div className="hero__btns-wrapper">
            <Button
              type="link"
              level="primary"
              onclick={handleDownloadCV}
              href="/CV.pdf"
              target="_blank"
              className="hero__btn fs-400 fc-neutral-800"
              aria-label="Open my CV in PDF format in an other browser tab"
            >
              {language ? heroDatas?.btn[language].CV : ''}
            </Button>
            <Button
              type="link"
              level="secondary"
              href="#contact"
              className="hero__btn fs-400 fc-neutral-800 fc-dark-neutral-250"
            >
              {language ? heroDatas?.btn[language].contact : ''}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
