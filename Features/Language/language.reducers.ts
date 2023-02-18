import { createReducer } from '@reduxjs/toolkit'

import { LanguageAvailable } from '../../../constant/language/language'
import { changeLanguage, initLanguage } from './language.actions'
import languageStore from '../../../stores/language'

const initialLanguage: { language: LanguageAvailable | null } = {
  language: null,
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
})

export default languageReducer

const changeLangHTMLTag = (language: LanguageAvailable) => {
  if (language) document.documentElement.lang = language
}
