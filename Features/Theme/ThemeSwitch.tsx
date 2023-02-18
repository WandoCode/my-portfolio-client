import { ChangeEvent, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeTheme, initializeTheme } from './theme.actions'
import { RootState } from '../app.store'
import { Switch } from '../../components'
import sun from '../../public/assets/sun.svg'
import moon from '../../public/assets/moon.svg'

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
    const newTheme = isChecked ? 'light' : 'dark'

    dispatch(changeTheme(newTheme))
  }

  return (
    <Switch
      onChangeValue={handleSwitch}
      isChecked={theme === 'light'}
      imageRefOff={sun}
      imageRefOn={moon}
    />
  )
}

export default ThemeSwitch
