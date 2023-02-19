import Image from 'next/image'
import { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
  imageRef: string | undefined
}

function Info({ imageRef, children }: Props) {
  return (
    <div className="info fs-500">
      {imageRef && <Image src={imageRef} height={32} width={32} alt="" />}

      <p className="info__text">{children}</p>
    </div>
  )
}

export default Info
