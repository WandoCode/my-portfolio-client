import { emptyFormObject } from '../../components/Form/form.reducers'

export type Status = 'error' | 'success' | 'loading' | 'idle'
export type FormFieldsName = keyof typeof emptyFormObject
