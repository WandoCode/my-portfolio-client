import Image from 'next/image'
import { isInteger } from '../../../utils/number'
import { SkillDatas } from './Skills'
import { useEffect, useState } from 'react'
import crossIcon from '../../../assets/crossIcon.svg'

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
      rating.push(<Image src={crossIcon} width={20} height={20} alt="" />)
    }
    return rating
  }

  return (
    <li className="skill">
      {ratingNumber && <div className="skill__rating">{ratingDOM()}</div>}
      <div className="skill__img-container">
        <Image src={datas.urlIcon} height={41} width={41} alt="" />
      </div>
      <h3 className="h3 skill__title">{datas.title}</h3>
    </li>
  )
}

export default SkillItem
