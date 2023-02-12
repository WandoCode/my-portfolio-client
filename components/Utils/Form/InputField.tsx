import { ChangeEvent, useContext } from 'react'
import Input, { InputError } from '../../../utils/form/Input'
import { LanguageContext } from '../../Language/LanguageContextProvider'
import { InputTypes } from '../../../constant/types/InputFields'
import useFetchFormDatas from '../../../hooks/fetch/useFetchFormDatas'
import { FormFieldsName } from '../../Home/Contact/Contact'

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
    <div className="input-field">
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
