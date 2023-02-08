import { useState, MouseEvent, useContext } from 'react'
import Input from '../../../utils/form/Input'
import Button from '../../Utils/Button/Button'
import InputField from './InputField'
import Info from './Info'
import localisationIcon from '../../../public/assets/localisationIcon.svg'
import emailIcon from '../../../public/assets/emailIcon.svg'
import mockedMainDatas from '../../../__mock__/data/mainDatas.json'
import { LanguageContext } from '../../Language/LanguageContextProvider'
import formText from '../../../constant/text/formText.json'

interface Props {
  contactDatas: typeof mockedMainDatas.contact
}

function Contact({ contactDatas }: Props) {
  const { language } = useContext(LanguageContext)

  const [formIsValid, setFormIsValid] = useState<boolean>(true)
  const [formDatas, setFormDatas] = useState<Record<string, Input>>({
    name: new Input('text', 'required'),
    email: new Input('email', 'required'),
    object: new Input('text'),
    message: new Input('text', 'required'),
  })

  const [formErrors, setFormErrors] = useState<Record<string, string[]>>({
    name: [],
    email: [],
    object: [],
    message: [],
  })

  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    validateFields()

    if (formIsValid) {
      // TODO: DO something (envoyer un email à mon adresse via le backend...)
      // TODO:Vider le form
      // TODO: afficher un message de validation
      return
    }
  }

  const validateFields = () => {
    setFormIsValid(true)

    for (const fieldName in formDatas) {
      const fieldInput = formDatas[fieldName]
      const errors = fieldInput.getValidationErrors()

      changeFormErrors(fieldName, errors)

      if (errors.length !== 0) {
        setFormIsValid(false)
      }
    }
  }

  const changeFormDatas = (fieldName: string, newValue: string) => {
    setFormDatas((old) => {
      const newFormDatas = { ...old }
      newFormDatas[fieldName].value = newValue
      return newFormDatas
    })
  }

  const changeFormErrors = (fieldName: string, newErrors: string[]) => {
    setFormErrors((old) => {
      const newFormErrors = { ...old }
      newFormErrors[fieldName] = newErrors
      return newFormErrors
    })
  }

  return (
    <form className="contact-form">
      <div className="contact-form__infos">
        <Info imageRef={localisationIcon}>
          {language ? contactDatas.place[language] : ''}
        </Info>
        <Info imageRef={emailIcon}>{contactDatas.email}</Info>
      </div>
      <InputField
        name="name"
        label={language ? formText[language].name : ''}
        type="text"
        inputErrors={formErrors.name}
        inputDatas={formDatas.name}
        onChangeFormDatas={changeFormDatas}
        onChangeErrors={changeFormErrors}
      />
      <InputField
        name="email"
        label={language ? formText[language].email : ''}
        type="email"
        inputErrors={formErrors.email}
        inputDatas={formDatas.email}
        onChangeFormDatas={changeFormDatas}
        onChangeErrors={changeFormErrors}
      />
      <InputField
        name="object"
        label={language ? formText[language].subject : ''}
        type="text"
        inputErrors={formErrors.object}
        inputDatas={formDatas.object}
        onChangeFormDatas={changeFormDatas}
        onChangeErrors={changeFormErrors}
      />
      <InputField
        name="message"
        label={language ? formText[language].message : ''}
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
        className="contact-form__submit fs-400 fc-neutral-800"
      >
        {language ? formText[language].send : ''}
      </Button>
    </form>
  )
}

export default Contact
//TODO: Add Recaptcha when backend is working (projet déjà crééer sur google cloud 'my-portfolio', changer le domaine associé à la clé API)
