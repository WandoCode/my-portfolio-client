export type LanguageAvailable = 'en' | 'fr' | 'es'

export interface LanguagesObject {
  value: LanguageAvailable
  text: string
}

export const allowedLanguage: LanguagesObject[] = [
  { value: 'en', text: 'En' },
  { value: 'fr', text: 'Fr' },
  { value: 'es', text: 'Es' },
]
