import axios from 'axios'

const contactStore = {
  postMessage: async (messageDatas: Record<string, string>) => {
    try {
      const rep = await axios.post(
        'http://localhost:3000/api/contact',
        messageDatas
      )

      return { isSuccessfull: true, message: rep.data.message }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return { successfull: false, message: error.message }
      } else {
        throw new Error(`An unhandled error happend : ${error}`)
      }
    }
  },
}

export default contactStore
