export type LanguageAvailable = 'en' | 'fr' | 'es'

export interface LanguagesObject {
  value: LanguageAvailable
  text: string
  description: string
}

export const allowedLanguage: LanguagesObject[] = [
  { value: 'en', text: 'En', description: 'English' },
  { value: 'fr', text: 'Fr', description: 'Francais' },
  { value: 'es', text: 'Es', description: 'Espanol' },
]
