import Image from 'next/image'
import { AboutDatas } from '../../../constant/types/datas'
import { useSelector } from 'react-redux'
import { RootState } from '../../Features/app.store'

interface Props {
  aboutDatas: AboutDatas | undefined
}

function About({ aboutDatas }: Props) {
  const language = useSelector((state: RootState) => state.language.language)

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
