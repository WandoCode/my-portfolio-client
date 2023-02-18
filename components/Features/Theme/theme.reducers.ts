import { createReducer } from '@reduxjs/toolkit'
import { changeTheme, initializeTheme } from './theme.actions'
import { ThemesValues } from '../../../constant/theme/theme'
import themeStore from '../../../stores/theme'

const initTheme: Record<string, ThemesValues | null> = {
  theme: null,
}

const themeReducer = createReducer(initTheme, (builder) => {
  builder
    .addCase(changeTheme, (state, action) => {
      state.theme = action.payload.newTheme
      themeStore.saveTheme(action.payload.newTheme)
    })
    .addCase(initializeTheme, (state) => {
      let newTheme: ThemesValues
      const savedTheme = themeStore.loadTheme()

      if (savedTheme) newTheme = savedTheme
      else newTheme = 'light'
      state.theme = newTheme
    })
})

export default themeReducer
