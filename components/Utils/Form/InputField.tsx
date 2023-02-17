import { ChangeEvent, useContext } from 'react'
import Input, { InputError } from '../../../utils/form/Input'
import { LanguageContext } from '../../Language/LanguageContextProvider'
import { InputTypes } from '../../../constant/types/InputFields'
import useFetchFormDatas from '../../../hooks/fetch/useFetchFormDatas'
import { FormFieldsName } from '../../../constant/types/contactForm'

interface Props {
  name: FormFieldsName
  label: string | undefined
  type: InputTypes
  inputErrors: InputError[]
  inputDatas: Input
  onChangeFormDatas: (fieldName: FormFieldsName, newValue: string) => void
  onChangeErrors: (fieldName: FormFieldsName, newErrors: InputError[]) => void
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
  const { language } = useContext(LanguageContext)
  const errorMessage = useFetchFormDatas()?.errorText

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
    if (type === 'honeypot') return (name += ` ${base}--pot`)
    if (type == 'textarea') name += ` ${base}--textarea`
    if (inputErrors.length > 0) name += ` ${base}--error`
    return name
  }

  const getValidationErrorText = () => {
    if (!language) return ''
    const errorMessageArray = inputErrors.map(
      (error) => errorMessage?.[language][error]
    )
    return errorMessageArray.join(' ')
  }

  return (
    <div
      className={
        type === 'honeypot' ? 'input-field input-field--pot' : 'input-field'
      }
    >
      {inputErrors.length > 0 && (
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
          value={inputDatas.value}
          onChange={handleInput}
        />
      ) : (
        <input
          type={type === 'honeypot' ? 'text' : type}
          name={name}
          id={name}
          className={fieldClass()}
          value={inputDatas.value}
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
