import axios from 'axios'

const BASE_API = process.env.BASE_API

const skillsStore = {
  getAll: async () => {
    try {
      const rep = await axios.get(BASE_API + `/skills`)

      return rep.data
    } catch (error) {
      if (axios.isAxiosError(error)) throw error
      else {
        throw new Error(`Unknown error loading skills (not handled by Axios)`)
      }
    }
  },
}

export default skillsStore

/* 
Skills data structure type:

Skills = {
  id: string
  image: string
  link: string
  alt: string
}
*/
