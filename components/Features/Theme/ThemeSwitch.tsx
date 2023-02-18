import { ChangeEvent, useEffect } from 'react'
import sun from '../../../public/assets/sun.svg'
import moon from '../../../public/assets/moon.svg'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { changeTheme, initializeTheme } from './theme.actions'
import { RootState } from '../app.store'

function ThemeSwitch() {
  const dispatch = useDispatch()
  const theme = useSelector((state: RootState) => state.theme.theme)

  useEffect(() => {
    dispatch(initializeTheme())
  }, [])

  useEffect(() => {
    if (theme === 'dark') document.body.id = 'dark'
    else if (theme === 'light') document.body.id = 'light'
  }, [theme])

  const handleSwitch = (e: ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked
    const newTheme = isChecked ? 'dark' : 'light'

    dispatch(changeTheme(newTheme))
  }

  return (
    <form className="switch" aria-hidden={true}>
      <Image src={sun} alt="Sun" width={20} height={12} />
      <Image src={moon} alt="Moon" width={20} height={12} />
      <input
        className="visually-hidden switch__input"
        type="checkbox"
        name="theme"
        id="theme"
        onChange={handleSwitch}
        checked={theme === 'dark'}
        tabIndex={-1}
      />
      <label htmlFor="theme" className="switch__slider-container">
        <div className="switch__slider"></div>
      </label>
    </form>
  )
}

export default ThemeSwitch
