import axios from 'axios'

const BASE_API = process.env.BASE_API

const mainDatasStore = {
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

export default mainDatasStore

/* 
main datas data structure type:

mainDatas = {
  headings:{
    fr: {
      home: string
      projects: string
      skills: string
    }
    en:{
      home: string
      projects: string
      skills: string
    }
    es:{
      home: string
      projects: string
      skills: string
    }
  }
  hero: {
    img: {
      link: string
      alt: string
    }
    text: {
      fr: string
      en: string
      es: string
    }
    CVLink: string
  }
  about:{
    img: {
      link: string
      alt: string
    }
    text: {
      fr: string
      en: string
      es: string
    }
  }
  constact:{
    "place": {
      fr: string
      en: string
      es: string
    }
    email: string
  }

}
*/
