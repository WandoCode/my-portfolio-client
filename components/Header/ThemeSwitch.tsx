import { ChangeEvent, useState, useContext } from 'react'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import Image from 'next/image'
import { GlobalContext } from '../../contexts/GlobalContextProvider'

function ThemeSwitch() {
  const { theme, changeTheme } = useContext(GlobalContext)
  const [showFocusOnLabel, setShowFocusOnLabel] = useState(false)

  const handleSwitch = (e: ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked

    isChecked ? changeTheme('dark') : changeTheme('light')
  }

  const labelClass = () => {
    let name = 'switch__slider-container'
    return showFocusOnLabel ? `${name} ${name}--focused` : name
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
        onFocus={() => setShowFocusOnLabel(true)}
        onBlur={() => setShowFocusOnLabel(false)}
      />
      <label htmlFor="theme" className={labelClass()}>
        <div className="switch__slider"></div>
      </label>
    </form>
  )
}
// TODO: Need configuration (default theme value, theme value and img visible: match?)

export default ThemeSwitch
