import Image, { ImageLoaderProps } from 'next/image'
import { isInteger } from '../../../../utils/helpers/number'
import { useEffect, useState } from 'react'
import crossIcon from '../../../../public/assets/crossIcon.svg'
import { SkillDatas } from '../../../../constant/types/datas'

interface Props {
  datas: SkillDatas
}

function SkillItem({ datas }: Props) {
  const [ratingNumber, setRatingNumber] = useState<number>()

  useEffect(() => {
    if (isInteger(datas.rating)) {
      setRatingNumber(parseInt(datas.rating, 10))
    } else {
      throw new Error('Skill rating should be a positive integer or zero.')
    }
  }, [datas])

  const ratingDOM = () => {
    if (!ratingNumber) return

    let rating = []
    for (let i = 0; i < ratingNumber; i++) {
      rating.push(
        <Image src={crossIcon} width={15} height={15} alt="" key={i} />
      )
    }
    return rating
  }

  // const myLoader = ({ src, width, quality }: ImageLoaderProps) => {
  //   return `${src}?w=${width}&q=${quality || 75}`
  // }

  return (
    <li className="skill">
      {ratingNumber && <div className="skill__rating">{ratingDOM()}</div>}
      <div className="skill__img-container">
        <Image
          // loader={myLoader}
          src={datas.urlIcon}
          height={50}
          width={50}
          alt={datas.title}
        />
      </div>
      <h3 className="h3 skill__title">
        <span className="skill__title-text">{datas.title}</span>
      </h3>
    </li>
  )
}

export default SkillItem
