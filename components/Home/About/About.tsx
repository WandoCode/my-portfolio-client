import Image from 'next/image'
import { useContext } from 'react'
import { AboutDatas } from '../../../constant/types/datas'
import { LanguageContext } from '../../Language/LanguageContextProvider'

interface Props {
  aboutDatas: AboutDatas | undefined
}

function About({ aboutDatas }: Props) {
  const { language } = useContext(LanguageContext)

  return (
    <div className="about__body">
      <div className="about__text fc-neutral-300">
        {/* TODO: utiliser un lecteur markdown pour générer les paragraphes */}
        {language ? aboutDatas?.text[language] : ''}
      </div>
      <div className="about__img-container">
        {aboutDatas && (
          <Image
            src={aboutDatas.img.link}
            height={380}
            width={380}
            alt={aboutDatas.img.alt}
          />
        )}
      </div>
    </div>
  )
}

export default About
