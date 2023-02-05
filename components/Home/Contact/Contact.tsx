import { useState, ChangeEvent, MouseEvent, useEffect } from 'react'
import Input from '../../../utils/form/Input'
import Button from '../../Utils/Button/Button'

function Contact() {
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

  const handleInput = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    id: string
  ) => {
    const newFormDatas = { ...formDatas }
    newFormDatas[id].value = e.target.value
    setFormDatas(newFormDatas)
  }

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

      if (errors.length !== 0) {
        setFormIsValid(false)

        setFormErrors((old) => {
          const newFormErros = { ...old }
          newFormErros[fieldName] = errors
          return newFormErros
        })
      }
    }
  }

  return (
    <section className="contact flow container" id="contact">
      <h2 className="h2 heading-section">Me contacter</h2>
      <div className="contact__container">
        <div className="contact__infos"></div>
        <form className="contat__form">
          <div className="form__label-control">
            {formErrors.name.length > 0 && (
              <div className="form__input-error">
                {formErrors.name.join(' ')}
              </div>
            )}
            <label htmlFor="name">Nom complet*</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formDatas.name.value}
              onChange={(e) => handleInput(e, 'name')}
            />
          </div>
          <div className="form__label-control">
            {formErrors.email.length > 0 && (
              <div className="form__input-error">
                {formErrors.email.join(' ')}
              </div>
            )}
            <label htmlFor="email">Email*</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formDatas.email.value}
              onChange={(e) => handleInput(e, 'email')}
            />
          </div>
          <div className="form__label-control">
            {formErrors.object.length > 0 && (
              <div className="form__input-error">
                {formErrors.object.join(' ')}
              </div>
            )}
            <label htmlFor="object">Sujet</label>
            <input
              type="text"
              name="object"
              id="object"
              value={formDatas.object.value}
              onChange={(e) => handleInput(e, 'object')}
            />
          </div>
          <div className="form__label-control">
            {formErrors.message.length > 0 && (
              <div className="form__input-error">
                {formErrors.message.join(' ')}
              </div>
            )}
            <label htmlFor="message">Message*</label>
            <textarea
              name="message"
              id="message"
              value={formDatas.message.value}
              onChange={(e) => handleInput(e, 'message')}
            />
          </div>
          <Button
            type="button"
            level="secondary"
            onclick={handleSubmit}
            data-sitekey=""
          >
            Envoyer
          </Button>
        </form>
      </div>
    </section>
  )
}
//TODO: Add Recaptcha when backend is working (projet déjà crééer sur google cloud 'my-portfolio', changer le domaine associé à la clé API)

export default Contact
