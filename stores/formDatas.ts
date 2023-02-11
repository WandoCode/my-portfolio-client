import formDatas from '../constant/content/formDatas.json'
import { FormDatas } from '../constant/types/datas'

const FormDatasStore = {
  getAll: (): FormDatas => {
    return formDatas
  },
}

export default FormDatasStore
