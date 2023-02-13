import { useState, MouseEvent, useContext, useRef, useEffect } from 'react'
import Input from '../../../utils/form/Input'
import Button from '../../Utils/Button/Button'
import InputField from '../../Utils/Form/InputField'
import Info from './Info'
import { LanguageContext } from '../../Language/LanguageContextProvider'
import { InputError } from '../../../utils/form/Input'
import { ContactDatas } from '../../../constant/types/datas'
import useFetchFormDatas from '../../../hooks/fetch/useFetchFormDatas'
import contactStore from '../../../stores/contact'

interface Props {
  contactDatas: ContactDatas | undefined
}

const emptyFormObject = {
  name: new Input('text', 'required'),
  email: new Input('email', 'required'),
  object: new Input('text'),
  message: new Input('text', 'required'),
  phone: new Input('text'), // Honeypot
}

const emptyErrorObject = {
  name: [],
  email: [],
  object: [],
  message: [],
  phone: [],
}

export type FormFieldsName = keyof typeof emptyFormObject

function Contact({ contactDatas }: Props) {
  const formText = useFetchFormDatas()

  const { language } = useContext(LanguageContext)

  const pageLoadTimeRef = useRef(Date.now())

  const [loading, setLoading] = useState(false)

  const [formDatas, setFormDatas] =
    useState<Record<FormFieldsName, Input>>(emptyFormObject)

  const [formErrors, setFormErrors] =
    useState<Record<FormFieldsName, InputError[]>>(emptyErrorObject)

  const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    setLoading(true)
    const formIsSubmitByRobot = submitByRobot()

    const formIsValid = validateFields()

    if (formIsValid && !formIsSubmitByRobot) {
      let messageDatas = getStringFormDatas()

      let rep = await contactStore.postMessage({ messageDatas, lang: language })

      if (rep.isSuccessfull) {
        emptyForm()
        // TODO: afficher un message de validation
      }

      if (!rep.isSuccessfull) {
        console.error(rep.message)

        // TODO: afficher un message de Erreur
      }
    }
    setLoading(false)
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

    if (timeIntervalSincePageLoading < 4000) return true // Less than 4s between page loading and form submit => spam robot
    if (formDatas.phone.value !== '') return true // Spam caught in honeypot

    return false
  }

  return (
    <form className="contact-form">
      <div className="contact-form__infos">
        <Info imageRef={contactDatas?.placeIcon}>
          {language ? contactDatas?.place[language] : ''}
        </Info>
        <Info imageRef={contactDatas?.emailIcon}>{contactDatas?.email}</Info>
      </div>
      <InputField
        name="name"
        label={language ? formText?.text[language].name : undefined}
        type="text"
        inputErrors={formErrors.name}
        inputDatas={formDatas.name}
        onChangeFormDatas={changeFormDatas}
        onChangeErrors={changeFormErrors}
      />
      <InputField
        name="email"
        label={language ? formText?.text[language].email : undefined}
        type="email"
        inputErrors={formErrors.email}
        inputDatas={formDatas.email}
        onChangeFormDatas={changeFormDatas}
        onChangeErrors={changeFormErrors}
      />
      <InputField
        name="phone"
        label={undefined}
        type="honeypot"
        inputErrors={formErrors.phone}
        inputDatas={formDatas.phone}
        onChangeFormDatas={changeFormDatas}
        onChangeErrors={changeFormErrors}
      />
      <InputField
        name="object"
        label={language ? formText?.text[language].subject : undefined}
        type="text"
        inputErrors={formErrors.object}
        inputDatas={formDatas.object}
        onChangeFormDatas={changeFormDatas}
        onChangeErrors={changeFormErrors}
      />
      <InputField
        name="message"
        label={language ? formText?.text[language].message : undefined}
        type="textarea"
        inputErrors={formErrors.message}
        inputDatas={formDatas.message}
        onChangeFormDatas={changeFormDatas}
        onChangeErrors={changeFormErrors}
      />

      <Button
        type="button"
        level="secondary"
        onclick={handleSubmit}
        className="contact-form__submit fs-400 fc-neutral-800 fc-dark-neutral-250"
        loading={loading}
      >
        {language ? formText?.text[language].send : undefined}
      </Button>
    </form>
  )
}

export default Contact
