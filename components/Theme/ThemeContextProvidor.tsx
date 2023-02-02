import { PropsWithChildren, createContext, useState, useEffect } from 'react'
import { ThemesValues } from '../../constant/theme'
import themeStore from '../../stores/theme'

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
    setTheme('light') //TODO: retirer la ligne: developpement seulement (avant de s'attaquer au theme foncé)

    // if (savedTheme) setTheme(savedTheme)
    // else setTheme(themeStore.getBrowserTheme())
  }, [])

  useEffect(() => {
    if (theme === 'dark') document.body.id = 'dark'
    else if (theme === 'light') document.body.id = 'light'
    // Quand theme définit (= dark ou light) => l'id correspondant active le theme dans le CSS.
    // Si pas de theme (au tout début du chargement de la page entre autre) => pas d'id => theme par défaut du navigateur (via le CSS)
    //TODO: si on change de theme (il se sauve dans le localstorage) et qu'on recharge la page, il y a un flsh car le theme du browser est utilisé puis est changé par la récupération du theme dans le localstorage. Comment résoudre???
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
