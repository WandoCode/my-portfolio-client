import Image from 'next/image'

interface Props {
  image: string
  link: string
  altText: string
}

function MediaLink({ image, link, altText }: Props) {
  return (
    <a href={link} className="media-link" target="_blank">
      <Image src={image} width={32} height={32} alt={altText} />
    </a>
  )
}

export default MediaLink

// TODO: update any type
