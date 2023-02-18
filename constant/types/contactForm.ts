import { emptyFormObject } from '../../components/Features/Form/form.reducers'

export type Status = 'error' | 'success' | 'loading' | 'idle'
export type FormFieldsName = keyof typeof emptyFormObject
