import { ThemesValues, themesValues } from '../constant/theme'
const themeStore = {
  getBrowserTheme: () => {
    const darkThemeEnabled = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches

    if (darkThemeEnabled) return 'dark'
    else return 'light'
  },

  saveTheme: (value: ThemesValues) => {
    localStorage.setItem('theme', value)
  },

  loadTheme: () => {
    const theme = localStorage.getItem('theme')
    if (themesValues.includes(theme as any)) return theme as ThemesValues
    return null
  },
}

export default themeStore
