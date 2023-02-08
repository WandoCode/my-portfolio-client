import axios from 'axios'

const BASE_API = process.env.BASE_API

const socialLinkStore = {
  getAll: async () => {
    try {
      const rep = await axios.get(BASE_API + `/medias`)

      return rep.data
    } catch (error) {
      if (axios.isAxiosError(error)) throw error
      else {
        throw new Error(
          `Unknown error loading medias links (not handled by Axios)`
        )
      }
    }
  },
}

export default socialLinkStore

/* 
Media links data structure type:

mediaLinks = {
  id: string
  image: string
  link: string
  alt: string
}
*/
