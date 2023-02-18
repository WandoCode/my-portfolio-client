import { createReducer } from '@reduxjs/toolkit'
import { LanguageAvailable } from '../../constant/language/language'

import languageStore from '../../stores/language'
import {
  changeLanguage,
  initLanguage,
  changeOpenMenu,
} from './language.actions'

interface InitializeLanguage {
  language: LanguageAvailable | null
  menuIsOpen: boolean
}

const initialLanguage: InitializeLanguage = {
  language: null,
  menuIsOpen: false,
}

const languageReducer = createReducer(initialLanguage, (builder) => {
  builder
    .addCase(changeLanguage, (state, action) => {
      const newLanguage = action.payload.newLanguage
      state.language = newLanguage
      languageStore.saveLanguage(newLanguage)
      changeLangHTMLTag(newLanguage)
    })
    .addCase(initLanguage, (state) => {
      let finalLanguage = null
      const savedLang = languageStore.loadLanguage()

      if (savedLang) finalLanguage = savedLang
      else finalLanguage = languageStore.getBrowserLanguage()

      changeLangHTMLTag(finalLanguage)
      state.language = finalLanguage
    })
    .addCase(changeOpenMenu, (state, action) => {
      state.menuIsOpen = action.payload.newStatus
    })
})

export default languageReducer

const changeLangHTMLTag = (language: LanguageAvailable) => {
  if (language) document.documentElement.lang = language
}
