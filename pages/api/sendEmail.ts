import { NextApiRequest, NextApiResponse } from 'next'
import { FormFieldsName } from '../../components/Home/Contact/Contact'
import { messageSchema } from '../../api/schemas/message'
import { sendMailController } from '../../api/controllers/sendMail/sendMailController'
import {
  LanguageAvailable,
  allowedLanguage,
} from '../../constant/language/language'

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

  const datasAreValid = await validateDatas(messageDatas, lang)

  if (!datasAreValid) {
    res.status(500).json({
      message:
        'Contact form datas or selected language are not formatted correctly.',
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

const validateDatas = async (
  messageDatas: Record<FormFieldsName, string>,
  lang: LanguageAvailable | null
) => {
  const messageIsValid = await messageSchema.isValid(messageDatas)
  const langIsValid = allowedLanguage.find(
    (langObject) => langObject.value === lang
  )

  if (!messageIsValid || !langIsValid) {
    return false
  }

  return true
}
