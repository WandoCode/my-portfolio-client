import { NextApiRequest, NextApiResponse } from 'next'
import { FormFieldsName } from '../../components/Home/Contact/Contact'
const nodemailer = require('nodemailer')

interface MessageDatas {
  messageDatas: Record<FormFieldsName, string>
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { body, method } = req
  const { messageDatas }: MessageDatas = body

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    auth: {
      user: process.env.mailUser,
      pass: process.env.mailPassword,
    },
    tls: { rejectUnauthorized: false },
  })

  const message = {
    from: messageDatas.email,
    to: process.env.mailUser,
    subject: messageDatas.object,
    text: messageDatas.message,
  }

  switch (method) {
    case 'POST':
      transporter.sendMail(message, (err: any) => {
        if (err) {
          res.status(500).json({
            message: `Error while sending contact email: ${err.message}`,
          })
        } else {
          res.status(200).send({ message: 'Post successfull' })
        }
      })
      break

    default:
      res.status(500).json({ message: 'Unknown Error' })
  }
}
