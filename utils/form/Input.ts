type InputType = 'text' | 'email'

export type InputError = 'required' | 'invalid'

class Input {
  type: InputType
  value: string
  required: boolean

  constructor(type: InputType, required?: string) {
    this.type = type
    this.value = ''
    this.required = required === 'required'
  }

  getValidationErrors() {
    let errors: InputError[] = []
    if (this.required && !this.inputIsFilled()) errors.push('required')
    if (this.type === 'email' && !this.inputIsEmail()) errors.push('invalid')

    return errors
  }

  private inputIsFilled(): boolean {
    return this.value.length > 0
  }

  private inputIsEmail(): boolean {
    const emailRegEx = /\b[+\w\.-]+@[\w-]+\.\w+\b/gi
    return emailRegEx.test(this.value)
  }
}

export default Input
