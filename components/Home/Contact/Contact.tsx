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
  onChangeFormDatas: (fieldName: FormFieldsName, newValue: string) => void
  onChangeFormErrors: (
    fieldName: FormFieldsName,
    newErrors: InputError[]
  ) => void
  onHandleSubmit: (e: MouseEvent<HTMLButtonElement>) => void
  status: Status
  language: LanguageAvailable
}

function Contact({
  formText,
  formErrors,
  formDatas,
  onChangeFormDatas,
  onChangeFormErrors,
  onHandleSubmit,
  status,
  language,
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
        name="name"
        label={formText.text[language].name}
        type="text"
        inputErrors={formErrors.name}
        inputDatas={formDatas.name}
        onChangeFormDatas={onChangeFormDatas}
        onChangeErrors={onChangeFormErrors}
      />
      <InputField
        name="email"
        label={formText.text[language].email}
        type="email"
        inputErrors={formErrors.email}
        inputDatas={formDatas.email}
        onChangeFormDatas={onChangeFormDatas}
        onChangeErrors={onChangeFormErrors}
      />
      <InputField
        name="phone"
        label="phone"
        type="honeypot"
        inputErrors={formErrors.phone}
        inputDatas={formDatas.phone}
        onChangeFormDatas={onChangeFormDatas}
        onChangeErrors={onChangeFormErrors}
      />
      <InputField
        name="object"
        label={formText.text[language].subject}
        type="text"
        inputErrors={formErrors.object}
        inputDatas={formDatas.object}
        onChangeFormDatas={onChangeFormDatas}
        onChangeErrors={onChangeFormErrors}
      />
      <InputField
        name="message"
        label={formText.text[language].message}
        type="textarea"
        inputErrors={formErrors.message}
        inputDatas={formDatas.message}
        onChangeFormDatas={onChangeFormDatas}
        onChangeErrors={onChangeFormErrors}
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
