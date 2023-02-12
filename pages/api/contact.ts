import { NextApiRequest, NextApiResponse } from 'next'

export default function contactHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { body, method } = req

  switch (method) {
    case 'POST':
      console.log(body)
      res.status(200).json({ message: 'Post successfull' })
      break

    default:
      break
  }
}
