import Info from '../Info/Info'
import { Status } from '../../../../constant/types/contactForm'
import { FormDatas } from '../../../../constant/types/datas'
import { LanguageAvailable } from '../../../../constant/language/language'
import { MouseEvent } from 'react'
import InputField from '../../../Utils/InputField'
import Button from '../../../Utils/Button/Button'

interface Props {
  formText: FormDatas
  onHandleSubmit: (e: MouseEvent<HTMLButtonElement>) => void
  status: Status
  language: LanguageAvailable
}

function ContactForm({ formText, onHandleSubmit, status, language }: Props) {
  const btnClassName = () => {
    let className =
      'contact-form__submit fs-400 fc-neutral-800 fc-dark-neutral-250'

    if (status === 'loading') className += ' btn--loading'
    else if (status === 'success') className += ' btn--success'
    else if (status === 'error') className += ' btn--error'

    return className
  }

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
      />
      <InputField
        name="email"
        label={formText.text[language].email}
        type="email"
      />
      <InputField name="phone" label="phone" type="honeypot" />
      <InputField
        name="object"
        label={formText.text[language].subject}
        type="text"
      />
      <InputField
        name="message"
        label={formText.text[language].message}
        type="textarea"
      />

      <Button
        type="submit"
        level="secondary"
        onclick={onHandleSubmit}
        className={btnClassName()}
        disabled={status === 'loading'}
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

export default ContactForm
