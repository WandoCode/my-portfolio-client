import { createReducer } from '@reduxjs/toolkit'
import { FormFieldsName, Status } from '../../constant/types/contactForm'
import { InputError } from '../../utils/form/Input'
import { changeFormDatas, changeFormErrors } from './form.actions'

interface Form {
  formDatas: any
  formErrors: Record<FormFieldsName, InputError | undefined>
  status: Status
}
// TODO: remove any
export const emptyFormObject = {
  name: '',
  email: '',
  object: '',
  message: '',
  phone: '', // Honeypot
}

export const emptyErrorObject = {
  name: undefined,
  email: undefined,
  object: undefined,
  message: undefined,
  phone: undefined,
}

const form: Form = {
  formDatas: { ...emptyFormObject },
  formErrors: { ...emptyErrorObject },
  status: 'idle',
}

const formReducer = createReducer(form, (builder) => {
  builder
    .addCase(changeFormDatas, (state, action) => {
      const { fieldName, newValue } = action.payload
      state.formDatas[fieldName] = newValue
    })
    .addCase(changeFormErrors, (state, action) => {
      const { fieldName, newError } = action.payload
      state.formErrors[fieldName] = newError
    })
    .addCase('submitForm', (state, action) => {})
})

export default formReducer
