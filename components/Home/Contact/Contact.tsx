import Input from '../../../utils/form/Input'
import Button from '../../Utils/Button/Button'
import InputField from '../../Utils/Form/InputField'
import Info from './Info'
import { InputError } from '../../../utils/form/Input'
import { FormFieldsName, Status } from '../../../constant/types/contactForm'
import { FormDatas } from '../../../constant/types/datas'
import { LanguageAvailable } from '../../../constant/language/language'
import { MouseEvent } from 'react'

interface Props {
  formText: FormDatas
  formErrors: Record<FormFieldsName, InputError[]>
  formDatas: Record<FormFieldsName, Input>
  onHandleSubmit: (e: MouseEvent<HTMLButtonElement>) => void
  status: Status
  language: LanguageAvailable
  onChangeInput: (val: string, fieldName: FormFieldsName) => void
}

function Contact({
  formText,
  formErrors,
  onHandleSubmit,
  status,
  language,
  onChangeInput,
}: Props) {
  return (
    <form className="contact-form">
      <div className="contact-form__infos">
        <Info imageRef={formText.infos.placeIcon}>
          {formText.infos.place[language]}
        </Info>
        <Info imageRef={formText.infos.emailIcon}>{formText.infos.email}</Info>
      </div>
      <InputField
        onChangeInput={onChangeInput}
        name="name"
        label={formText.text[language].name}
        type="text"
        inputErrors={formErrors.name}
      />
      <InputField
        onChangeInput={onChangeInput}
        name="email"
        label={formText.text[language].email}
        type="email"
        inputErrors={formErrors.email}
      />
      <InputField
        onChangeInput={onChangeInput}
        name="phone"
        label="phone"
        type="honeypot"
        inputErrors={formErrors.phone}
      />
      <InputField
        onChangeInput={onChangeInput}
        name="object"
        label={formText.text[language].subject}
        type="text"
        inputErrors={formErrors.object}
      />
      <InputField
        onChangeInput={onChangeInput}
        name="message"
        label={formText.text[language].message}
        type="textarea"
        inputErrors={formErrors.message}
      />

      <Button
        type="button"
        level="secondary"
        onclick={onHandleSubmit}
        className="contact-form__submit fs-400 fc-neutral-800 fc-dark-neutral-250"
        status={status}
      >
        {status === 'idle' && formText.text[language].send}
        {status === 'loading' && formText.text[language].sending}
        {status === 'error' && formText.text[language].error}
        {status === 'success' && formText.text[language].success}

        <div className="contact-form__status-infos">
          {status === 'error' && formText.text[language].errorLarge}
          {status === 'success' && formText.text[language].successLarge}
        </div>
      </Button>
    </form>
  )
}

export default Contact

// TODO: ajouter favicon
// TODO: utiliser  redux pour les input du formulaire et la gestion des erruers/ status
