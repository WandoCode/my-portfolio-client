import Image from 'next/image'
import sun from '../../../public/assets/sun.svg'
import moon from '../../../public/assets/moon.svg'
import { ChangeEvent } from 'react'
import { ThemesValues } from '../../../constant/theme/theme'

interface Props {
  onChangeValue: (e: ChangeEvent<HTMLInputElement>) => void
  theme: ThemesValues | null
}

function Switch({ onChangeValue, theme }: Props) {
  return (
    <form className="switch" aria-hidden={true}>
      <Image src={sun} alt="Sun" width={20} height={12} />
      <Image src={moon} alt="Moon" width={20} height={12} />
      <input
        className="visually-hidden switch__input"
        type="checkbox"
        name="theme"
        id="theme"
        onChange={onChangeValue}
        checked={theme === 'dark'}
        tabIndex={-1}
      />
      <label htmlFor="theme" className="switch__slider-container">
        <div className="switch__slider"></div>
      </label>
    </form>
  )
}

export default Switch
