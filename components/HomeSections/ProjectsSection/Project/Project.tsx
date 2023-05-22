import Image from 'next/image'
import Tag from '../Tag'
import { ProjectDatas } from '../../../../constant/types/projects'
import MediaLink from '../../../Utils/Link/MediaLink'
import { LanguageAvailable } from '../../../../constant/language/language'
import Map from '../../../Utils/List/Map'
import ListItem from '../../../Utils/List/RegularListItem'
import { removeWhiteSpace } from '../../../../utils/helpers/string'

interface Props {
  datas: ProjectDatas
  side: 'left' | 'right'
  language: LanguageAvailable | null
}

function Project({ datas, side, language }: Props) {
  const titleAsId = removeWhiteSpace(datas.title)
  return (
    <section
      className={`project project--${side}`}
      data-testid="project"
      aria-labelledby={titleAsId}
    >
      <a
        href={datas.medias[1].link}
        target="_blank"
        className="project__img-container"
        aria-label={datas.medias[1].alt}
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
        <h3 className="project__title h3 fs-600" id={titleAsId}>
          {language ? datas.title : ''}
        </h3>
        <section
          className="project__description"
          dangerouslySetInnerHTML={{
            __html: language ? datas.description[language] : '',
          }}
          aria-labelledby={titleAsId + '-description'}
        />
        <h4 className="visually-hidden" id={titleAsId + '-description'}>
          Description
        </h4>

        <section aria-labelledby={titleAsId + '-features'}>
          <h4 className="visually-hidden" id={titleAsId + '-features'}>
            Features
          </h4>
          <ul className="project__features-wrapper">
            {language && (
              <Map items={datas.features[language]} itemComponent={ListItem} />
            )}
          </ul>
        </section>

        <section aria-labelledby={titleAsId + '-skills'}>
          <h4 className="visually-hidden" id={titleAsId + '-skills'}>
            Skills
          </h4>
          <ul className="project__skills-wrapper" data-testid="tags">
            <Map items={datas.tags} itemComponent={Tag} />
          </ul>
        </section>

        <nav
          className="project__links"
          aria-label={`${datas.title} external links`}
        >
          <Map
            items={datas.medias}
            itemComponent={MediaLink}
            background="light"
          />
        </nav>
      </div>
    </section>
  )
}

export default Project
