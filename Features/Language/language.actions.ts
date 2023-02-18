import { createAction } from '@reduxjs/toolkit'
import { LanguageAvailable } from '../../constant/language/language'

export const initLanguage = createAction('language/initLanguage')

export const changeLanguage = createAction(
  'language/changeLanguage',
  (newLanguage: LanguageAvailable) => ({
    payload: { newLanguage },
  })
)

export const changeOpenMenu = createAction(
  'language/changeOpenMenu',
  (newStatus: boolean) => ({
    payload: { newStatus },
  })
)
