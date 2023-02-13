import { NextApiRequest, NextApiResponse } from 'next'
import { FormFieldsName } from '../../components/Home/Contact/Contact'
import { sendMailController } from '../../api/controllers/sendMail/sendMailController'
import { LanguageAvailable } from '../../constant/language/language'
import { messageSchema } from '../../api/schemas/message'
import yup from 'yup'

interface BodyParams {
  messageDatas: Record<FormFieldsName, string>
  lang: LanguageAvailable | null
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { body, method } = req
  const { messageDatas, lang }: BodyParams = body

  const messageIsValid = await messageSchema.isValid(messageDatas)

  if (!messageIsValid) {
    res.status(500).json({
      message: 'Received contact form datas are not formatted correctly.',
    })
    return
  }

  switch (method) {
    case 'POST':
      sendMailController(res, messageDatas, lang)
      break

    default:
      res.status(500).json({ message: 'Unknown Error' })
  }
}
