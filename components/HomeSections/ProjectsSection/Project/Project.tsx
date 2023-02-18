import Image from 'next/image'
import GithubIcon from '/public/assets/githubIcon.svg'
import WebIcon from '/public/assets/webIcon.svg'
import { useMemo } from 'react'
import Tag from '../Tag'
import { ProjectDatas } from '../../../../constant/types/projects'
import MediaLink from '../../../Utils/Link/MediaLink'
import { LanguageAvailable } from '../../../../constant/language/language'

interface Props {
  datas: ProjectDatas
  side: 'left' | 'right'
  language: LanguageAvailable | null
}

function Project({ datas, side, language }: Props) {
  const featuresDom = useMemo(() => {
    if (!language) return ''
    return datas.features[language].map((feature, i) => (
      <li className="project__feature" key={i}>
        {feature}
      </li>
    ))
  }, [datas, language])

  const skillsDom = useMemo(() => {
    return datas.tags.map((tag, i) => (
      <Tag text={tag.text} color={tag.color} key={i} />
    ))
  }, [datas])

  return (
    <article className="project">
      <div className={`project__img-container project__img-container--${side}`}>
        <Image
          src={datas.urlPreview}
          height={500}
          width={500}
          alt={datas.altText}
          className="project__img"
        />
      </div>
      <div className={`project__content project__content--${side}`}>
        <h3 className={`project__title project__title--${side} h3 fs-600`}>
          {language ? datas.title : ''}
        </h3>
        <p className="project__description">
          {language ? datas.description[language] : ''}
        </p>

        <ul className="project__features-wrapper">{featuresDom}</ul>

        <div className="project__footer">
          <ul className="project__skills-wrapper">{skillsDom}</ul>

          <div className="project__links">
            <MediaLink
              image={GithubIcon}
              link={datas.urlGithub}
              altText="Github icon"
              background="light"
            />
            <MediaLink
              image={WebIcon}
              link={datas.urlLive}
              altText="Web icone"
              background="light"
            />
          </div>
        </div>
      </div>
    </article>
  )
}

export default Project
