import { emptyFormObject } from '../../Features/Form/form.reducers'

export type Status = 'error' | 'success' | 'loading' | 'idle'
export type FormFieldsName = keyof typeof emptyFormObject
export type InputError = 'invalid' | 'required'
