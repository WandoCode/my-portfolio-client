import { useState, useEffect } from 'react'
import { MainDatas } from '../../constant/types/datas'
import contentStore from '../../stores/content'

function useFetchMainDatas() {
  const [mainDatas, setMainDatas] = useState<MainDatas>()

  useEffect(() => {
    const rep = contentStore.getmainDatas()

    setMainDatas(rep)
  }, [])

  return mainDatas
}

export default useFetchMainDatas
