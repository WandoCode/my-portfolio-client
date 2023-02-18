import { ChangeEvent, useContext } from 'react'
import { InputError } from '../../../utils/form/Input'
import { LanguageContext } from '../../Language/LanguageContextProvider'
import { InputTypes } from '../../../constant/types/InputFields'
import useFetchFormDatas from '../../../hooks/fetch/useFetchFormDatas'
import { FormFieldsName } from '../../../constant/types/contactForm'
import { useSelector } from 'react-redux'
import { RootState } from '../../../stores/redux'

interface Props {
  name: FormFieldsName
  label: string | undefined
  type: InputTypes
  inputErrors: InputError[]
  onChangeInput: (val: string, fieldName: FormFieldsName) => void
}

function InputField({ name, type, label, inputErrors, onChangeInput }: Props) {
  const formDatas = useSelector((state: RootState) => state.form.formDatas)

  const { language } = useContext(LanguageContext)
  const errorMessage = useFetchFormDatas()?.errorText

  const handleInput = async (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    onChangeInput(e.target.value, name)
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
          value={formDatas[name].value}
          onChange={handleInput}
        />
      ) : (
        <input
          type={type === 'honeypot' ? 'text' : type}
          name={name}
          id={name}
          className={fieldClass()}
          value={formDatas[name].value}
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
