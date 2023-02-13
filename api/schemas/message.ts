import { string, object, ObjectSchema } from 'yup'

const messageSchema = object({
  name: string().required(),
  email: string().email().required(),
  object: string().required(),
  message: string().required(),
})

export { messageSchema }
