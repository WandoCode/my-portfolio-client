import Image from 'next/image'
import Tag from '../Tag'
import { ProjectDatas } from '../../../../constant/types/projects'
import MediaLink from '../../../Utils/Link/MediaLink'
import { LanguageAvailable } from '../../../../constant/language/language'
import Map from '../../../Utils/List/Map'
import ListItem from '../../../Utils/List/RegularListItem'

interface Props {
  datas: ProjectDatas
  side: 'left' | 'right'
  language: LanguageAvailable | null
}

function Project({ datas, side, language }: Props) {
  return (
    <article className={`project project--${side}`} data-testid="project">
      <a
        href={datas.medias[1].link}
        target="_blank"
        className="project__img-container"
      >
        <Image
          src={datas.urlPreview}
          height={400}
          width={700}
          alt={datas.altText}
          className="project__img"
        />
      </a>
      <div className="project__content">
        <h3 className="project__title h3 fs-600">
          {language ? datas.title : ''}
        </h3>
        <div
          className="project__description"
          dangerouslySetInnerHTML={{
            __html: language ? datas.description[language] : '',
          }}
        />

        <ul className="project__features-wrapper">
          {language && (
            <Map items={datas.features[language]} itemComponent={ListItem} />
          )}
        </ul>

        <ul className="project__skills-wrapper" data-testid="tags">
          <Map items={datas.tags} itemComponent={Tag} />
        </ul>

        <div className="project__links">
          <Map
            items={datas.medias}
            itemComponent={MediaLink}
            background="light"
          />
        </div>
      </div>
    </article>
  )
}

export default Project
