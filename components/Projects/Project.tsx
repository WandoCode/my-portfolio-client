import Image from 'next/image'
import GithubIcon from '../../assets/GithubIcon.svg'
import WebIcon from '../../assets/WebIcon.svg'
import { useMemo, useCallback } from 'react'
import Tag from './Tag'
import { ProjectDatas } from '../../constant/projects'

interface Props {
  datas: ProjectDatas
}

function Project({ datas }: Props) {
  const featuresDom = useMemo(() => {
    return (
      <>
        {datas.features.map((feature, i) => (
          <li className="project__feature" key={i}>
            {feature}
          </li>
        ))}
      </>
    )
  }, [datas])

  const skillsDom = useMemo(() => {
    return (
      <>
        {datas.tags.map((tag, i) => (
          <Tag text={tag.text} color={tag.color} key={i} />
        ))}
      </>
    )
  }, [datas])

  return (
    <article className="project">
      <div className="project__img-container">
        <Image
          src={datas.urlPreview}
          fill={true}
          alt=""
          className="project__img"
        />
      </div>
      <div className="project__content">
        <h3 className="h3 project__title fs-600">Audiophile</h3>
        <p className="project__description">{datas.description}</p>

        <ul className="project__features-wrapper">{featuresDom}</ul>

        <ul className="project__skills-wrapper">{skillsDom}</ul>

        <div className="project__links">
          <a href="#" className="project__link">
            <Image src={GithubIcon} width={32} height={32} alt="" />
          </a>
          <a href="#" className="project__link">
            <Image src={WebIcon} width={32} height={32} alt="" />
          </a>
        </div>
      </div>
    </article>
  )
}

export default Project
// TODO: en mobile: header: faire se fermer quand un lien est cliqué
