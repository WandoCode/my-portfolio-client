import axios from 'axios'

const BASE_API = process.env.BASE_API

const projectsStore = {
  getAll: async () => {
    try {
      const rep = await axios.get(BASE_API + '/projects/all')

      return rep.data
    } catch (error) {
      if (axios.isAxiosError(error)) throw error
      else {
        throw new Error('Unknown error loading projects (not handled by Axios)')
      }
    }
  },
  getOne: async (id: string) => {
    try {
      const rep = await axios.get(BASE_API + `/project/${id}`)

      return rep.data
    } catch (error) {
      if (axios.isAxiosError(error)) throw error
      else {
        throw new Error(
          `Unknown error loading project with id: ${id} (not handled by Axios)`
        )
      }
    }
  },
}

export default projectsStore

/* 
Project data structure type:

Project = {
  id : string
  title: string
  features : {
    fr: string[],
    en: string[],
    es: string[]
  }
  tags: Tag[]
  urlLive: string
  urlGithub: string
  urlPreview: string
}

Tag = {
  text: string
  color: string
}

*/
