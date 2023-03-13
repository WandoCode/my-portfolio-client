import Image from 'next/image'
import { ChangeEvent } from 'react'

interface Props {
  isChecked: boolean
  imageRefOff: string
  imageRefOn: string
  onChangeValue: (e: ChangeEvent<HTMLInputElement>) => void
}

function Switch({ isChecked, imageRefOn, imageRefOff, onChangeValue }: Props) {
  return (
    <form className="switch" aria-hidden={true}>
      <Image src={imageRefOn} alt="Sun" width={20} height={12} />
      <Image src={imageRefOff} alt="Moon" width={20} height={12} />
      <input
        className="visually-hidden switch__input"
        type="checkbox"
        name="theme"
        id="theme"
        onChange={onChangeValue}
        checked={isChecked}
        tabIndex={-1}
      />
      <label htmlFor="theme" className="switch__slider-container">
        <span className="switch__slider"></span>
      </label>
    </form>
  )
}

export default Switch
