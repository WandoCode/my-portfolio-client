import Image from 'next/image'
import { AboutDatas } from '../../../constant/types/datas'
import { LanguageAvailable } from '../../../constant/language/language'

interface Props {
  aboutDatas: AboutDatas | undefined
  language: LanguageAvailable | null
}

function About({ aboutDatas, language }: Props) {
  return (
    <div className="about__body">
      <div className="about__text fc-neutral-300">
        <p>{language ? aboutDatas?.text1[language] : ''}</p>
        <p>{language ? aboutDatas?.text2[language] : ''}</p>
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
