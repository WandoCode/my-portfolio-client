import { useState, useEffect } from 'react'
import mainDatasStore from '../../stores/mainDatas'
import { MainDatas } from '../../constant/types/datas'

function useFetchMainDatas() {
  const [mainDatas, setMainDatas] = useState<MainDatas>()

  useEffect(() => {
    const rep = mainDatasStore.getAll()

    setMainDatas(rep)
  }, [])

  return mainDatas
}

export default useFetchMainDatas
