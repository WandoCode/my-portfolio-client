import { ChangeEvent, useState, useEffect } from 'react'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import Image from 'next/image'

function Switch() {
  const [theme, setTheme] = useState('dark')

  const handleSwitch = (e: ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked

    isChecked ? setTheme('dark') : setTheme('light')
  }

  return (
    <form className="switch">
      <Image src={sun} alt="light theme icon" />
      <Image src={moon} alt="dark theme icon" />
      <input
        className="visually-hidden switch__input"
        type="checkbox"
        name="theme"
        id="theme"
        onChange={handleSwitch}
        checked={theme === 'dark'}
      />
      <label htmlFor="theme" className="switch__slider-container">
        <div className="switch__slider"></div>
      </label>
    </form>
  )
}

export default Switch
