import MediaLink from '../../Utils/Link/MediaLink'
import { FooterDatas } from '../../../constant/types/datas'
import Map from '../../Utils/List/Map'

interface Props {
  footerDatas: FooterDatas
}

function Footer({ footerDatas }: Props) {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__links">
          <Map items={footerDatas.medias} itemComponent={MediaLink} />
        </div>
        <div className="footer__text fc-neutral-400 fs-300">
          Designed & Built by Maxime Chirez.
        </div>
      </div>
    </footer>
  )
}

export default Footer
