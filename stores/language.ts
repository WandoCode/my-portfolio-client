import {
  allowedLanguage,
  LanguagesObject,
  LanguageAvailable,
} from '../constant/language/language'

const languageStore = {
  getBrowserLanguage: () => {
    const navigatorLangValue = navigator.language.slice(0, 2)

    const compatibleDefaultLang = allowedLanguage.find(
      (lang) => lang.value === navigatorLangValue
    )

    if (compatibleDefaultLang)
      return navigatorLangValue as LanguagesObject['value']
    else return 'en'
  },

  saveLanguage: (val: LanguageAvailable) => {
    localStorage.setItem('lang', val)
  },

  loadLanguage: () => {
    const lang = localStorage.getItem('lang')

    const langIsAllowed = allowedLanguage.find(
      (allowedLang) => allowedLang.value === lang
    )

    if (langIsAllowed) return lang as LanguageAvailable

    return null
  },
}

export default languageStore
