import mediaMockedDatas from '../../../__mock__/data/media.json'
import MediaLink from '../../Utils/Link/MediaLink'

function Footer() {
  const mediaLinksDOM = () => {
    const mediasDatas = mediaMockedDatas.medias
    return mediasDatas.map((media, i) => (
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
