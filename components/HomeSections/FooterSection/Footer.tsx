import MediaLink from '../../Utils/Link/MediaLink'
import { FooterDatas } from '../../../constant/types/datas'
import RegularList from '../../Utils/List/RegularList'

interface Props {
  footerDatas: FooterDatas | undefined
}

function Footer({ footerDatas }: Props) {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__links">
          {footerDatas && (
            <RegularList items={footerDatas.medias} itemComponent={MediaLink} />
          )}
        </div>
        <div className="footer__text fc-neutral-400 fs-300">
          Designed & Built by Maxime Chirez.
        </div>
      </div>
    </footer>
  )
}

export default Footer
