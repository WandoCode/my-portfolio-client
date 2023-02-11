import { useState, useEffect } from 'react'
import { FormDatas } from '../../constant/types/datas'
import FormDatasStore from '../../stores/formDatas'

function useFetchFormDatas() {
  const [formDatas, setFormDatas] = useState<FormDatas>()

  useEffect(() => {
    const rep = FormDatasStore.getAll()

    setFormDatas(rep)
  }, [])

  return formDatas
}

export default useFetchFormDatas
