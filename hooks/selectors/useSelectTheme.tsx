import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../Features/app.store'
import { ThemesValues } from '../../constant/theme/theme'

function useSelectTheme() {
  const [themeValue, setThemeValue] = useState<ThemesValues | null>(null)

  const theme = useSelector((state: RootState) => state.theme.theme)

  useEffect(() => {
    setThemeValue(theme)
  }, [theme])

  return themeValue
}

export default useSelectTheme
