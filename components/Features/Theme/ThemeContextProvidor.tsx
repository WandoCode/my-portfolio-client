import { PropsWithChildren, createContext, useState, useEffect } from 'react'
import { ThemesValues } from '../../../constant/theme/theme'
import themeStore from '../../../stores/theme'

interface ThemeContextTypes {
  theme: ThemesValues | null
  changeTheme: (value: ThemesValues) => void
}

const defaultContext: ThemeContextTypes = {
  theme: null,
  changeTheme: (value) => {},
}

export const ThemeContext = createContext(defaultContext)

function ThemeContextProvidor({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState(defaultContext.theme)

  useEffect(() => {
    const savedTheme = themeStore.loadTheme()

    if (savedTheme) setTheme(savedTheme)
    else setTheme('light')
  }, [])

  useEffect(() => {
    if (theme === 'dark') document.body.id = 'dark'
    else if (theme === 'light') document.body.id = 'light'
  }, [theme])

  const changeTheme = (val: ThemesValues) => {
    setTheme(val)

    themeStore.saveTheme(val)
  }

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvidor
