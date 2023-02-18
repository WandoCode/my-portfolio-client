import { ChangeEvent, useContext, useEffect } from 'react'
import Input, { InputError } from '../../../utils/form/Input'
import { LanguageContext } from '../../Language/LanguageContextProvider'
import { InputTypes } from '../../../constant/types/InputFields'
import useFetchFormDatas from '../../../hooks/fetch/useFetchFormDatas'
import { FormFieldsName } from '../../../constant/types/contactForm'
import { useDispatch, useSelector } from 'react-redux'
import { changeFormErrors, changeFormDatas } from '../../Form/form.actions'
import yup from 'yup'
import { formSchema } from '../../Form/form.schema'
import { ValidationError } from 'yup'
import { RootState } from '../../../stores/redux'

interface Props {
  name: FormFieldsName
  label: string | undefined
  type: InputTypes
  inputErrors: InputError[]
}

function InputField({ name, type, label, inputErrors }: Props) {
  const dispatch = useDispatch()
  const formDatas = useSelector((state: RootState) => state.form.formDatas)
  const inputDatas = useSelector(
    (state: RootState) => state.form.formDatas[name]
  )
  const { language } = useContext(LanguageContext)
  const errorMessage = useFetchFormDatas()?.errorText

  useEffect(() => {
    checkInputValidity()
  }, [inputDatas])

  const checkInputValidity = async () => {
    if (inputErrors.length > 0) {
      try {
        await formSchema.validateAt(name, formDatas, {
          abortEarly: false,
        })
        console.log(2)

        if (inputErrors.length != 0) dispatch(changeFormErrors(name, []))
      } catch (err) {
        if (err instanceof ValidationError) {
          const fieldError = [err.inner[0].path]
          console.table(err.inner[0])

          if (fieldError.length !== inputErrors.length)
            dispatch(changeFormErrors(name, fieldError as InputError[]))
        }
      }
    }
  }

  const handleInput = async (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    dispatch(changeFormDatas(name, e.target.value))
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
