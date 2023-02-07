import Image from 'next/image'
import GithubIcon from '/public/assets/githubIcon.svg'
import WebIcon from '/public/assets/webIcon.svg'
import { useMemo } from 'react'
import Tag from './Tag'
import { ProjectDatas } from '../../../constant/projects'
import MediaLink from '../../Utils/Link/MediaLink'

interface Props {
  datas: ProjectDatas
  side: 'left' | 'right'
}

function Project({ datas, side }: Props) {
  const featuresDom = useMemo(() => {
    return datas.features.map((feature, i) => (
      <li className="project__feature" key={i}>
        {feature}
      </li>
    ))
  }, [datas])

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
          alt=""
          className="project__img"
        />
      </div>
      <div className={`project__content project__content--${side}`}>
        <h3 className={`project__title project__title--${side} h3 fs-600`}>
          Audiophile
        </h3>
        <p className="project__description">{datas.description}</p>

        <ul className="project__features-wrapper">{featuresDom}</ul>

        <div className="project__footer">
          <ul className="project__skills-wrapper">{skillsDom}</ul>

          <div className="project__links">
            <MediaLink image={GithubIcon} link="#" altText=" " />
            <MediaLink image={WebIcon} link="#" altText=" " />
          </div>
        </div>
      </div>
    </article>
  )
}

export default Project
// TODO: en mobile: header: faire se fermer quand un lien est cliqué
