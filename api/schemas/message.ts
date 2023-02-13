import { string, object, ObjectSchema } from 'yup'
import { FormFieldsName } from '../../components/Home/Contact/Contact'

const messageSchema: ObjectSchema<Record<FormFieldsName, string>> = object({
  name: string().required(),
  email: string().email().required(),
  object: string().required(),
  message: string().required(),
})

export { messageSchema }
