import Image from 'next/image'
import { useEffect, useState } from 'react'
import crossIcon from '../../../../public/assets/crossIcon.svg'
import { SkillDatas } from '../../../../constant/types/datas'
import { isPositiveIntegerOrZero } from '../../../../utils/helpers/string'

interface Props {
  datas: SkillDatas
}

function SkillItem({ datas }: Props) {
  const [ratingNumber, setRatingNumber] = useState<number>()

  useEffect(() => {
    if (isPositiveIntegerOrZero(datas.rating)) {
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
        <Image src={crossIcon} width={15} height={15} alt="rating" key={i} />
      )
    }
    return rating
  }

  return (
    <li className="skill">
      {ratingNumber && <div className="skill__rating">{ratingDOM()}</div>}
      <div className="skill__img-container">
        <Image src={datas.urlIcon} height={50} width={50} alt={datas.title} />
      </div>
      <h3 className="h3 skill__title">
        <span className="skill__title-text">{datas.title}</span>
      </h3>
    </li>
  )
}

export default SkillItem
