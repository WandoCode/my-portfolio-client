const themeStore = {
  loadTheme: () => {
    const darkThemeEnabled = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches

    if (darkThemeEnabled) return 'dark'
    else return 'light'
  },
}

export default themeStore
