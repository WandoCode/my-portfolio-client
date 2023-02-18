import { ChangeEvent, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeTheme, initializeTheme } from './theme.actions'
import { RootState } from '../app.store'
import Switch from '../../Utils/Select/Switch'

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

  return <Switch onChangeValue={handleSwitch} theme={theme} />
}

export default ThemeSwitch
