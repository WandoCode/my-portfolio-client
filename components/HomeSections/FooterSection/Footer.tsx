import MediaLink from '../../Utils/Link/MediaLink'
import { FooterDatas } from '../../../constant/types/datas'

interface Props {
  footerDatas: FooterDatas | undefined
}

function Footer({ footerDatas }: Props) {
  const mediaLinksDOM = () => {
    return footerDatas?.medias.map((media, i) => (
      <li key={i}>
        <MediaLink
          image={media.image}
          altText={media.alt}
          link={media.link}
          background="dark"
        />
      </li>
    ))
  }

  return (
    <footer className="footer">
      <div className="container footer__container">
        <ul className="footer__links">{mediaLinksDOM()}</ul>
        <div className="footer__text fc-neutral-400 fs-300">
          Designed & Built by Maxime Chirez.
        </div>
      </div>
    </footer>
  )
}

export default Footer
