import Image, { ImageLoaderProps } from 'next/image'

interface Props {
  image: string
  link: string
  altText: string
}

function MediaLink({ image, link, altText }: Props) {
  const myLoader = ({ src, width, quality }: ImageLoaderProps) => {
    return `${src}?w=${width}&q=${quality || 75}`
  }
  return (
    <a href={link} className="media-link" target="_blank">
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

// TODO: update any type
