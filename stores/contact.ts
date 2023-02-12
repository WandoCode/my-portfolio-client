import axios from 'axios'
import { FormFieldsName } from '../components/Home/Contact/Contact'

interface MessageDatas {
  messageDatas: Record<FormFieldsName, string>
}
const contactStore = {
  postMessage: async ({ messageDatas }: MessageDatas) => {
    try {
      const rep = await axios.post('http://localhost:3000/api/sendEmail', {
        messageDatas,
      })

      return { isSuccessfull: true, message: rep.data.message }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return {
          successfull: false,
          message: error.response?.data.message,
        }
      } else {
        throw new Error(`An unhandled error happend : ${error}`)
      }
    }
  },
}

export default contactStore
