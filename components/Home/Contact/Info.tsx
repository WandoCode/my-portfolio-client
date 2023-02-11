import Image, { ImageLoaderProps } from 'next/image'
import { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
  imageRef: string | undefined
}

function Info({ imageRef, children }: Props) {
  const myLoader = ({ src, width, quality }: ImageLoaderProps) => {
    return `${src}?w=${width}&q=${quality || 75}`
  }

  return (
    <div className="info fs-500">
      {imageRef && (
        <Image loader={myLoader} src={imageRef} height={32} width={32} alt="" />
      )}

      <p className="info__text">{children}</p>
    </div>
  )
}

export default Info
