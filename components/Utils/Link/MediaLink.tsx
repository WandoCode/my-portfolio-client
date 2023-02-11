import Image, { ImageLoaderProps } from 'next/image'

interface Props {
  image: string
  link: string
  altText: string
  background?: 'light' | 'dark'
}

function MediaLink({ image, link, altText, background = 'light' }: Props) {
  const myLoader = ({ src, width, quality }: ImageLoaderProps) => {
    return `${src}?w=${width}&q=${quality || 75}`
  }

  return (
    <a
      href={link}
      className={`media-link media-link--${background}-bg`}
      target="_blank"
    >
      <Image
        loader={myLoader}
        src={image}
        width={32}
        height={32}
        alt={altText}
      />
    </a>
  )
}

export default MediaLink
