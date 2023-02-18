import { createReducer } from '@reduxjs/toolkit'
import { FormFieldsName, Status } from '../../constant/types/contactForm'
import { InputError } from '../../utils/form/Input'
import {
  changeFormDatas,
  changeFormErrors,
  resetForm,
  changeStatus,
} from './form.actions'

interface Form {
  formDatas: Record<FormFieldsName, string>
  formErrors: Record<FormFieldsName, InputError | undefined>
  status: Status
}

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

const initialForm: Form = {
  formDatas: { ...emptyFormObject },
  formErrors: { ...emptyErrorObject },
  status: 'idle',
}

const formReducer = createReducer(initialForm, (builder) => {
  builder
    .addCase(changeFormDatas, (state, action) => {
      const { fieldName, newValue } = action.payload
      state.formDatas[fieldName] = newValue
    })
    .addCase(changeFormErrors, (state, action) => {
      const { fieldName, newError } = action.payload
      state.formErrors[fieldName] = newError
    })
    .addCase(resetForm, (state) => {
      state.formDatas = initialForm.formDatas
      state.formErrors = initialForm.formErrors
    })
    .addCase(changeStatus, (state, action) => {
      state.status = action.payload.newStatus
    })
})

export default formReducer
