import { ChangeEvent } from 'react'
import Input from '../../../utils/form/Input'

interface Props {
  name: string
  label: string
  type: 'email' | 'text' | 'textarea'
  inputErrors: string[]
  inputDatas: Input
  onChangeFormDatas: (fieldName: string, newValue: string) => void
  onChangeErrors: (fieldName: string, newErrors: string[]) => void
}

function InputField({
  name,
  type,
  label,
  inputErrors,
  inputDatas,
  onChangeFormDatas,
  onChangeErrors,
}: Props) {
  const handleInput = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    onChangeFormDatas(name, e.target.value)

    if (inputErrors.length > 0) {
      const newErrors = inputDatas.getValidationErrors()
      if (newErrors.length !== inputErrors.length) {
        onChangeErrors(name, newErrors)
      }
    }
  }

  const fieldClass = () => {
    const base = 'input-field__input'
    let name = base
    if (type == 'textarea') name += ` ${base}--textarea`
    if (inputErrors.length > 0) name += ` ${base}--error`
    return name
  }

  return (
    <div className="input-field">
      {inputErrors.length > 0 && (
        <div className="input-field__error fc-primary-700">
          {inputErrors.join(' ')}
        </div>
      )}
      <label htmlFor={name} className="input-field__label">
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea
          name={name}
          id={name}
          className={fieldClass()}
          value={inputDatas.value}
          onChange={handleInput}
        />
      ) : (
        <input
          type={type}
          name={name}
          id={name}
          className={fieldClass()}
          value={inputDatas.value}
          onChange={handleInput}
        />
      )}
    </div>
  )
}

export default InputField
