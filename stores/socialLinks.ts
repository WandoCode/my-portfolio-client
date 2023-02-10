import mediasDatas from '../constant/content/media.json'
const socialLinkStore = {
  getAll: async () => {
    return mediasDatas.medias
  },
}

export default socialLinkStore
