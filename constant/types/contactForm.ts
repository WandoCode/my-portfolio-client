import { emptyFormObject } from '../../components/Home/Contact/Contact'

export type Status = 'error' | 'success' | 'loading' | 'idle'
export type FormFieldsName = keyof typeof emptyFormObject
