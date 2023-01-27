import { allowedLanguage, LanguagesObject } from '../constant/language'

const languageStore = {
  loadLanguage: () => {
    const navigatorLangValue = navigator.language.slice(0, 2)

    const compatibleDefaultLang = allowedLanguage.find(
      (lang) => lang.value === navigatorLangValue
    )

    if (compatibleDefaultLang)
      return navigatorLangValue as LanguagesObject['value']
    else return 'en'
  },
}

export default languageStore
