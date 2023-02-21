import { ChangeEvent, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { changeTheme, initializeTheme } from './theme.actions'
import { Switch } from '../../components'
import sun from '../../public/assets/sun.svg'
import moon from '../../public/assets/moon.svg'
import useSelectTheme from '../../hooks/selectors/useSelectTheme'

function ThemeSwitch() {
  const dispatch = useDispatch()
  const theme = useSelectTheme()

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
