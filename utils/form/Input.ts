type InputType = 'text' | 'email'
class Input {
  type: InputType
  value: string
  required: boolean

  constructor(type: InputType, required?: string) {
    this.type = type
    this.value = ''
    this.required = required === 'required'
  }

  getValidationErrors(): any {
    let errors = []
    if (this.required && !this.inputIsFilled()) errors.push('Champ requis.')
    if (this.type === 'email' && !this.inputIsEmail())
      errors.push('Format invalide.')

    return errors
  }

  private inputIsFilled(): any {
    return this.value.length > 0
  }

  private inputIsEmail(): any {
    const emailRegEx = /\b[+\w\.-]+@[\w-]+\.\w+\b/gi
    return emailRegEx.test(this.value)
  }
}

export default Input
