import Image from 'next/image'
import GithubIcone from '../../../public/assets/githubIcon.svg'
import WebIcone from '../../../public/assets/webIcon.svg'
interface Props {
  item: { image: string; link: string; alt: string }
  background?: 'light' | 'dark'
}

function MediaLink({ item, background = 'light' }: Props) {
  const imgSrc = () => {
    if (item.image === 'github') return GithubIcone
    if (item.image === 'web') return WebIcone
    else return item.image
  }

  return (
    <a
      href={item.link}
      className={`media-link media-link--${background}-bg`}
      target="_blank"
    >
      <Image src={imgSrc()} width={32} height={32} alt={item.alt} />
    </a>
  )
}

export default MediaLink
