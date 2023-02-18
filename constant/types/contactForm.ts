import { emptyFormObject } from '../../components/Home/Contact/index'

export type Status = 'error' | 'success' | 'loading' | 'idle'
export type FormFieldsName = keyof typeof emptyFormObject
