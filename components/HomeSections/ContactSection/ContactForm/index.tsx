import useFetchFormDatas from '../../../../hooks/fetch/useFetchFormDatas'
import ContactForm from './ContactForm'
import { MouseEvent, useRef } from 'react'
import {
  FormFieldsName,
  InputError,
} from '../../../../constant/types/contactForm'
import contactStore from '../../../../stores/contact'
import { useDispatch, useSelector } from 'react-redux'
import {
  changeFormErrors,
  resetForm,
} from '../../../../Features/Form/form.actions'
import { formSchema } from '../../../../Features/Form/form.schema'
import { ValidationError } from 'yup'
import { changeStatus } from '../../../../Features/Form/form.actions'
import { RootState } from '../../../../Features/app.store'

const EXCLUDE_ROBOT_SPAM_TIME = 4000
const INFO_MESSAGE_DISPLAY_TIME = 3000

export default () => {
  const dispatch = useDispatch()
  const formText = useFetchFormDatas()
  const pageLoadTimeRef = useRef(Date.now())

  const language = useSelector((state: RootState) => state.language.language)
  const formDatas = useSelector((state: RootState) => state.form.formDatas)
  const status = useSelector((state: RootState) => state.form.status)

  const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    const formIsSubmitByRobot = submitByRobot()

    const formIsValid = await validateForm()

    if (formIsValid && !formIsSubmitByRobot) {
      dispatch(changeStatus('loading'))

      let rep = await contactStore.postMessage({
        messageDatas: { ...formDatas },
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

  return (
    <>
      {language !== null && formText && (
        <ContactForm
          formText={formText}
          status={status}
          language={language}
          onHandleSubmit={handleSubmit}
        />
      )}
    </>
  )
}
