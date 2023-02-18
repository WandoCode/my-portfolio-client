import InputField from './InputField'
import { FormFieldsName } from '../../../constant/types/contactForm'
import { InputTypes } from '../../../constant/types/InputFields'
import { useDispatch, useSelector } from 'react-redux'
import {
  changeFormDatas,
  changeFormErrors,
} from '../../Features/Form/form.actions'
import { RootState } from '../../Features/app.store'
import { formSchema } from '../../Features/Form/form.schema'
import { ValidationError } from 'yup'
import { InputError } from '../../../utils/form/Input'
import useFetchFormDatas from '../../../hooks/fetch/useFetchFormDatas'

interface Props {
  name: FormFieldsName
  label: string | undefined
  type: InputTypes
}

export default ({ name, type, label }: Props) => {
  const dispatch = useDispatch()
  const errorMessages = useFetchFormDatas()?.errorText

  const formErrors = useSelector((state: RootState) => state.form.formErrors)
  const formDatas = useSelector((state: RootState) => state.form.formDatas)

  const handleInput = async (newValue: string, fieldName: FormFieldsName) => {
    dispatch(changeFormDatas(fieldName, newValue))
    checkInputValidity(newValue, fieldName)
  }

  const checkInputValidity = async (
    newValue: string,
    fieldName: FormFieldsName
  ) => {
    const inputError = formErrors[fieldName]
    const newFormDatas = { ...formDatas }
    newFormDatas[fieldName] = newValue

    if (formErrors[fieldName]) {
      try {
        await formSchema.validateAt(fieldName, newFormDatas, {
          abortEarly: false,
        })

        if (inputError) dispatch(changeFormErrors(fieldName, undefined))
      } catch (err) {
        if (err instanceof ValidationError) {
          const fieldError = err.inner[0].message

          if (fieldError !== inputError)
            dispatch(changeFormErrors(fieldName, fieldError as InputError))
        }
      }
    }
  }

  return (
    <InputField
      name={name}
      type={type}
      label={label}
      onChangeInput={handleInput}
      inputError={formErrors[name]}
      inputValue={formDatas[name]}
      errorMessages={errorMessages}
    />
  )
}
