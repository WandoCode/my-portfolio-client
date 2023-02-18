import { ChangeEvent } from 'react'
import { InputTypes } from '../../../constant/types/InputFields'
import { FormFieldsName, InputError } from '../../../constant/types/contactForm'
import { useSelector } from 'react-redux'
import { RootState } from '../../../Features/app.store'
import { FormDatas } from '../../../constant/types/datas'

interface Props {
  name: FormFieldsName
  label: string | undefined
  type: InputTypes
  inputError: InputError | undefined
  inputValue: string
  onChangeInput: (val: string, fieldName: FormFieldsName) => void
  errorMessages: FormDatas['errorText'] | undefined
}

function InputField({
  name,
  type,
  label,
  inputError,
  inputValue,
  onChangeInput,
  errorMessages,
}: Props) {
  const language = useSelector((state: RootState) => state.language.language)

  const handleInput = async (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    onChangeInput(e.target.value, name)
  }

  const fieldClass = () => {
    const base = 'input-field__input'
    let nameClass = base

    if (type == 'textarea') nameClass += ` ${base}--textarea`
    if (inputError) nameClass += ` ${base}--error`
    return nameClass
  }

  const getValidationErrorText = () => {
    if (!language) return ''
    if (!inputError) return ''
    const errorMessage = errorMessages?.[language][inputError] || ''

    return errorMessage
  }

  return (
    <div
      className={
        type === 'honeypot' ? 'input-field input-field--pot' : 'input-field'
      }
    >
      {inputError && (
        <div className="input-field__error fc-primary-700 fc-dark-primary-700">
          {getValidationErrorText()}
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
          value={inputValue}
          onChange={handleInput}
        />
      ) : (
        <input
          type={type === 'honeypot' ? 'text' : type}
          name={name}
          id={name}
          className={fieldClass()}
          value={inputValue}
          onChange={handleInput}
          {...(type === 'honeypot'
            ? { autoComplete: 'off', tabIndex: -1 }
            : '')}
        />
      )}
    </div>
  )
}

export default InputField
