import { useState, useEffect } from 'react'
import { FormDatas } from '../../constant/types/datas'
import contentStore from '../../stores/content'

function useFetchFormDatas() {
  const [formDatas, setFormDatas] = useState<FormDatas>()

  useEffect(() => {
    const rep = contentStore.getFormDatas()

    setFormDatas(rep)
  }, [])

  return formDatas
}

export default useFetchFormDatas
