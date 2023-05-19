import { createAction } from '@reduxjs/toolkit'
import {
  FormFieldsName,
  Status,
  InputError,
} from '../../constant/types/contactForm'

export const changeFormDatas = createAction(
  'form/changeFormDatas',
  (fieldName: FormFieldsName, newValue: string) => ({
    payload: { fieldName, newValue },
  })
)

export const changeFormErrors = createAction(
  'form/changeFormErrors',
  (fieldName: FormFieldsName, newError: InputError | undefined) => ({
    payload: { fieldName, newError },
  })
)

export const resetForm = createAction('form/resetForm')

export const changeStatus = createAction(
  'form/changeStatus',
  (newStatus: Status) => ({ payload: { newStatus } })
)

export const saveSubmitTimeRef = createAction(
  'form/saveSubmitTimeRef',
  (newTimeRef: number) => ({ payload: { newTimeRef } })
)
