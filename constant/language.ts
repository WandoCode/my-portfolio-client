export interface LanguagesObject {
  value: 'en' | 'fr' | 'es'
  text: string
}

export const allowedLanguage: LanguagesObject[] = [
  { value: 'en', text: 'En' },
  { value: 'fr', text: 'Fr' },
  { value: 'es', text: 'Es' },
]
