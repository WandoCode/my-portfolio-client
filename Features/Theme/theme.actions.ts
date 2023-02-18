import { createAction } from '@reduxjs/toolkit'
import { ThemesValues } from '../../constant/theme/theme'

export const changeTheme = createAction(
  'theme/changeTheme',
  (newTheme: ThemesValues) => ({ payload: { newTheme } })
)
export const initializeTheme = createAction('theme/initializeTheme')
