import axios from 'axios'
import { LanguageAvailable } from '../constant/language/language'
import { FormFieldsName } from '../constant/types/contactForm'

interface Params {
  messageDatas: Record<FormFieldsName, string>
  lang: LanguageAvailable | null
}

const contactStore = {
  postMessage: async ({ messageDatas, lang }: Params) => {
    if (messageDatas.object === '') messageDatas.object = 'No object'

    try {
      const rep = await axios.post(
        process.env.NEXT_PUBLIC_apiURL + 'sendEmail',
        {
          messageDatas,
          lang,
        }
      )

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
