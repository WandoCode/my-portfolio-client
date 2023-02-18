import { string, object } from 'yup'

const formSchema = object({
  name: string().required('required'),
  email: string().email('invalid').required('required'),
  object: string(),
  message: string().required('required'),
  phone: string(),
})

export { formSchema }
