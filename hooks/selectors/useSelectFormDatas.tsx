import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../Features/app.store'
import { FormFieldsName } from '../../constant/types/contactForm'

type FormDatasValues = Record<FormFieldsName, string>

function useSelectFormDatas() {
  const formDatas = useSelector((state: RootState) => state.form.formDatas)
  const [formDatasValues, setFormDatasValues] =
    useState<FormDatasValues>(formDatas)

  useEffect(() => {
    setFormDatasValues(formDatas)
  }, [formDatas])

  return formDatasValues
}

export default useSelectFormDatas
