import { ChangeEvent, useState, useContext } from 'react'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import Image from 'next/image'
import { GlobalContext } from '../../contexts/GlobalContextProvider'

function ThemeSwitch() {
  const { theme, changeTheme } = useContext(GlobalContext)

  const handleSwitch = (e: ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked

    isChecked ? changeTheme('dark') : changeTheme('light')
  }

  return (
    <form className="switch">
      <Image src={sun} alt="light theme icon" width={20} height={12} />
      <Image src={moon} alt="dark theme icon" width={20} height={12} />
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
// TODO: Need configuration (default theme value, theme value and img visible: match?)

export default ThemeSwitch
