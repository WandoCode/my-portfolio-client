import Contact from './Contact'
import useFetchFormDatas from '../../../hooks/fetch/useFetchFormDatas'
import { LanguageContext } from '../../Language/LanguageContextProvider'
import { MouseEvent, useContext, useRef, useState, useEffect } from 'react'
import { Status, FormFieldsName } from '../../../constant/types/contactForm'
import { InputError } from '../../../utils/form/Input'
import contactStore from '../../../stores/contact'
import { useDispatch, useSelector } from 'react-redux'
import { changeFormDatas, changeFormErrors } from '../../Form/form.actions'
import { FormRootState } from '../../../stores/formStore.redux'
import { formSchema } from '../../Form/form.schema'
import { ValidationError } from 'yup'

const EXCLUDE_ROBOT_SPAM_TIME = 4000
const INFO_MESSAGE_DISPLAY_TIME = 3000

export default () => {
  const dispatch = useDispatch()

  const formText = useFetchFormDatas()

  const { language } = useContext(LanguageContext)

  const formDatas = useSelector((state: FormRootState) => state.form.formDatas)
  const formErrors = useSelector(
    (state: FormRootState) => state.form.formErrors
  )

  const pageLoadTimeRef = useRef(Date.now())

  const [status, setStatus] = useState<Status>('idle')

  const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    const formIsSubmitByRobot = submitByRobot()

    const formIsValid = await validateForm()

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

  const validateForm = async () => {
    try {
      let formIsValid = await formSchema.validate(formDatas, {
        abortEarly: false,
      })
      return formIsValid // True
    } catch (err) {
      if (err instanceof ValidationError) {
        err.inner.forEach((error) => {
          const fieldName = error.path as FormFieldsName
          const fieldErrors = error.message as InputError

          dispatch(changeFormErrors(fieldName, fieldErrors))
        })
      }
      return false
    }
  }

  const emptyForm = () => {
    for (const fieldName in formDatas) {
      dispatch(changeFormDatas(fieldName as FormFieldsName, ''))
      dispatch(changeFormErrors(fieldName as FormFieldsName, undefined))
    }
  }

  // TODO: a effacer je pense, pas utile sans Input?
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
    if (formDatas.phone.value) return true // Spam caught in honeypot

    return false
  }

  const handleInput = async (newValue: string, fieldName: FormFieldsName) => {
    dispatch(changeFormDatas(fieldName, newValue))
    checkInputValidity(newValue, fieldName)
  }

  const checkInputValidity = async (
    newValue: string,
    fieldName: FormFieldsName
  ) => {
    const inputError = formErrors[fieldName]
    const newFormDatas = { ...formDatas }
    newFormDatas[fieldName] = newValue

    if (formErrors[fieldName]) {
      try {
        await formSchema.validateAt(fieldName, newFormDatas, {
          abortEarly: false,
        })

        if (inputError) dispatch(changeFormErrors(fieldName, undefined))
      } catch (err) {
        if (err instanceof ValidationError) {
          const fieldError = err.inner[0].path

          if (fieldError !== inputError)
            dispatch(changeFormErrors(fieldName, fieldError as InputError))
        }
      }
    }
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
          onHandleSubmit={handleSubmit}
          onChangeInput={handleInput}
        />
      ) : (
        <>Loader if needed</>
      )}
    </>
  )
}

// TODO: Loader necessaire?
