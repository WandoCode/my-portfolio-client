import Contact from './Contact'
import useFetchFormDatas from '../../../hooks/fetch/useFetchFormDatas'
import { LanguageContext } from '../../Language/LanguageContextProvider'
import { MouseEvent, useContext, useRef, useState } from 'react'
import { Status, FormFieldsName } from '../../../constant/types/contactForm'
import Input from '../../../utils/form/Input'
import { InputError } from '../../../utils/form/Input'
import contactStore from '../../../stores/contact'

const EXCLUDE_ROBOT_SPAM_TIME = 4000
const INFO_MESSAGE_DISPLAY_TIME = 3000

export const emptyFormObject = {
  name: new Input('text', 'required'),
  email: new Input('email', 'required'),
  object: new Input('text'),
  message: new Input('text', 'required'),
  phone: new Input('text'), // Honeypot
}

export const emptyErrorObject = {
  name: [],
  email: [],
  object: [],
  message: [],
  phone: [],
}

export default () => {
  const formText = useFetchFormDatas()

  const { language } = useContext(LanguageContext)

  const pageLoadTimeRef = useRef(Date.now())

  const [status, setStatus] = useState<Status>('idle')

  const [formDatas, setFormDatas] =
    useState<Record<FormFieldsName, Input>>(emptyFormObject)

  const [formErrors, setFormErrors] =
    useState<Record<FormFieldsName, InputError[]>>(emptyErrorObject)

  const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    const formIsSubmitByRobot = submitByRobot()

    const formIsValid = validateFields()
    console.log(formIsValid)

    if (formIsValid && !formIsSubmitByRobot) {
      setStatus('loading')

      let messageDatas = getStringFormDatas()
      let rep = await contactStore.postMessage({ messageDatas, lang: language })

      if (rep.isSuccessfull) {
        emptyForm()
        setStatus('success')
      }

      if (!rep.isSuccessfull) {
        setStatus('error')
      }

      setTimeout(() => setStatus('idle'), INFO_MESSAGE_DISPLAY_TIME)
    }
  }

  const validateFields = () => {
    let formIsValid = true

    for (const fieldName in formDatas) {
      const fieldInput = formDatas[fieldName as FormFieldsName]
      const errors = fieldInput.getValidationErrors()

      changeFormErrors(fieldName as FormFieldsName, errors)

      if (errors.length !== 0) {
        formIsValid = false
      }
    }
    return formIsValid
  }

  const changeFormDatas = (fieldName: FormFieldsName, newValue: string) => {
    setFormDatas((old) => {
      const newFormDatas = { ...old }
      newFormDatas[fieldName].value = newValue
      return newFormDatas
    })
  }

  const changeFormErrors = (
    fieldName: FormFieldsName,
    newErrors: InputError[]
  ) => {
    setFormErrors((old) => {
      const newFormErrors = { ...old }
      newFormErrors[fieldName] = newErrors
      return newFormErrors
    })
  }

  const emptyForm = () => {
    for (const fieldName in formDatas) {
      changeFormDatas(fieldName as FormFieldsName, '')
      changeFormErrors(fieldName as FormFieldsName, [])
    }
  }

  const getStringFormDatas = (): Record<FormFieldsName, string> => {
    let stringFormDatas: Record<string, string> = {}
    for (const fieldName in formDatas) {
      const inputValue = formDatas[fieldName as FormFieldsName]
      stringFormDatas[fieldName] = inputValue.toString()
    }
    return stringFormDatas
  }

  const submitByRobot = () => {
    const submitTime = Date.now()

    const timeIntervalSincePageLoading = submitTime - pageLoadTimeRef.current

    if (timeIntervalSincePageLoading < EXCLUDE_ROBOT_SPAM_TIME) return true // Less than 4s between page loading and form submit => spam robot
    if (formDatas.phone.value !== '') return true // Spam caught in honeypot

    return false
  }

  return (
    <>
      {language !== null && formText ? (
        <Contact
          formText={formText}
          formErrors={formErrors}
          formDatas={formDatas}
          status={status}
          language={language}
          onChangeFormDatas={changeFormDatas}
          onChangeFormErrors={changeFormErrors}
          onHandleSubmit={handleSubmit}
        />
      ) : (
        <>Loader if needed</>
      )}
    </>
  )
}

// TODO: Loarder necessaire?
