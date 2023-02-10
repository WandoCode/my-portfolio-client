import mainDatas from '../constant/content/mainDatas.json'
import { MainDatas } from '../constant/types/datas'

const mainDatasStore = {
  getAll: (): MainDatas => {
    return mainDatas
  },
}

export default mainDatasStore
