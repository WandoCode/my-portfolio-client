import Image from 'next/image'
import mockedMainDatas from '../../../__mock__/data/mainDatas.json'
import { useContext } from 'react'
import { LanguageContext } from '../../Language/LanguageContextProvider'

interface Props {
  aboutDatas: typeof mockedMainDatas.about
}

function About({ aboutDatas }: Props) {
  const { language } = useContext(LanguageContext)

  return (
    <section className="about flow-bottom" id="about">
      <div className="container">
        <h2 className="h2 heading-section about__title fc-neutral-300">
          Qui suis-je?
        </h2>
        <div className="about__body">
          <div className="about__text fc-neutral-300">
            {/* TODO: utiliser un lecteur markdown pour générer les paragraphes */}
            {aboutDatas.text[language]}
          </div>
          <div className="about__img-container">
            <Image
              src={aboutDatas.img.link}
              height={380}
              width={380}
              alt={aboutDatas.img.alt}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
