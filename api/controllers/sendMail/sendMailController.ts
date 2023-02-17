const nodemailer = require('nodemailer')
import { NextApiResponse } from 'next'
import { buildEmail, buildObject } from '../../helpers/emailContentBuilder'
import { LanguageAvailable } from '../../../constant/language/language'
import { FormFieldsName } from '../../../constant/types/contactForm'

type MessageDatas = Record<FormFieldsName, string>

export const sendMailController = (
  res: NextApiResponse,
  messageDatas: MessageDatas,
  lang: LanguageAvailable | null
) => {
  const messageHTML = buildEmail(lang, messageDatas)

  const message = {
    from: process.env.mailUser,
    to: [process.env.mailUser, messageDatas.email],
    subject: buildObject(lang),
    text: messageDatas.message,
    html: messageHTML,
  }

  const transporter = createTransporter(
    process.env.mailUser,
    process.env.mailPassword
  )

  transporter.sendMail(message, (err: any) => {
    if (err) {
      res.status(500).json({
        message: `Error while sending contact email: ${err.message}`,
      })
    } else {
      res.status(200).send({ message: 'Post successfull' })
    }
  })
}

const createTransporter = (user = '', pass = '') => {
  return nodemailer.createTransport({
    host: 'smtp.gmail.com',
    auth: { user, pass },
    tls: { rejectUnauthorized: false },
  })
}
