import Contact from './Contact'
import useFetchFormDatas from '../../../hooks/fetch/useFetchFormDatas'

import { MouseEvent, useContext, useRef } from 'react'
import { Status, FormFieldsName } from '../../../constant/types/contactForm'
import { InputError } from '../../../utils/form/Input'
import contactStore from '../../../stores/contact'
import { useDispatch, useSelector } from 'react-redux'
import {
  changeFormDatas,
  changeFormErrors,
  resetForm,
} from '../../Features/Form/form.actions'
import { formSchema } from '../../Features/Form/form.schema'
import { ValidationError } from 'yup'
import { changeStatus } from '../../Features/Form/form.actions'
import { RootState } from '../../Features/app.store'

const EXCLUDE_ROBOT_SPAM_TIME = 4000
const INFO_MESSAGE_DISPLAY_TIME = 3000

export default () => {
  const dispatch = useDispatch()
  const formText = useFetchFormDatas()
  const pageLoadTimeRef = useRef(Date.now())

  const language = useSelector((state: RootState) => state.language.language)
  const formDatas = useSelector((state: RootState) => state.form.formDatas)
  const status = useSelector((state: RootState) => state.form.status)
  const formErrors = useSelector((state: RootState) => state.form.formErrors)

  const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    const formIsSubmitByRobot = submitByRobot()

    const formIsValid = await validateForm()

    if (formIsValid && !formIsSubmitByRobot) {
      dispatch(changeStatus('loading'))

      let rep = await contactStore.postMessage({
        messageDatas: formDatas,
        lang: language,
      })

      if (rep.isSuccessfull) {
        dispatch(resetForm())
        dispatch(changeStatus('success'))
      }

      if (!rep.isSuccessfull) {
        dispatch(changeStatus('error'))
      }

      setTimeout(() => {
        dispatch(resetForm())
        dispatch(changeStatus('idle'))
      }, INFO_MESSAGE_DISPLAY_TIME)
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

  const submitByRobot = () => {
    const submitTime = Date.now()

    const timeIntervalSincePageLoading = submitTime - pageLoadTimeRef.current

    if (timeIntervalSincePageLoading < EXCLUDE_ROBOT_SPAM_TIME) return true // Less than 4s between page loading and form submit => spam robot
    if (formDatas.phone) return true // Spam caught in honeypot

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
          const fieldError = err.inner[0].message

          if (fieldError !== inputError)
            dispatch(changeFormErrors(fieldName, fieldError as InputError))
        }
      }
    }
  }

  return (
    <>
      {language !== null && formText && (
        <Contact
          formText={formText}
          formErrors={formErrors}
          formDatas={formDatas}
          status={status}
          language={language}
          onHandleSubmit={handleSubmit}
          onChangeInput={handleInput}
        />
      )}
    </>
  )
}
