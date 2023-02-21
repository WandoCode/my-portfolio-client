import { LanguageAvailable } from '../../constant/language/language'
import { FormFieldsName } from '../../constant/types/contactForm'

const buildEmail = (
  lang: LanguageAvailable | null,
  messageDatas: Record<FormFieldsName, string>
) => {
  const messageHTML = messageDatas.message.split('\n').join('\n<br>\n')

  switch (lang) {
    case 'fr':
      return `
              <p>Bonjour ${messageDatas.name},</p>
              <p>J'ai bien reçu votre message et vous répondrez dés que possible.</p>
              <p style="padding-top: 1em; font-size: 1.15em; font-weight:500;">Détails du message</p>
              <ul style="padding: 0;list-style: none;">
                <li><em>De</em>: ${messageDatas.name}</li>
                <li><em>Objet</em>: ${messageDatas.object}</li>
                <li><em>Email</em>: ${messageDatas.email}</li>
                <li><em>Message</em>: 
                <br>
                <p style="background-color: hsl(0, 0%, 95%); padding: 1em 1.5em; border-radius: 8px; margin-top: 0.75em;">${messageHTML}</p>
                 <br> 
                 </li>
              </ul>
              <p>Maxime Chirez, développeur frontend </p>`
    case 'es':
      return `
              <p>Hola ${messageDatas.name},</p>
              <p>Le confirmo la reception de su mensaje, le contestaré cuanto antes.</p>
              <p style="padding-top: 1em; font-size: 1.15em; font-weight:500;">Detalles del mensaje</p>
              <ul style="padding: 0;list-style: none;">
                <li><em>De</em>: ${messageDatas.name}</li>
                <li><em>Objeto</em>: ${messageDatas.object}</li>
                <li><em>Correo</em>: ${messageDatas.email}</li>
                <li><em>Mensaje</em>: 
                <br>
                <p style="background-color: hsl(0, 0%, 95%); padding: 1em 1.5em; border-radius: 8px; margin-top: 0.75em;">${messageHTML}</p>
                 <br> 
                 </li>
              </ul>
              <p>Maxime Chirez, frontend programdor (????) </p>`
    case 'en':
      return `
              <p>Hello ${messageDatas.name},</p>
              <p>I received your message and I will answer you as soon as possible.</p>
              <p style="padding-top: 1em; font-size: 1.15em; font-weight:500;">Message details</p>
              <ul style="padding: 0;list-style: none;">
                <li><em>From</em>: ${messageDatas.name}</li>
                <li><em>Object</em>: ${messageDatas.object}</li>
                <li><em>Email</em>: ${messageDatas.email}</li>
                <li><em>Message</em>: 
                <br>
                <p style="background-color: hsl(0, 0%, 95%); padding: 1em 1.5em; border-radius: 8px; margin-top: 0.75em;">${messageHTML}</p>
                 <br> 
                 </li>
              </ul>
              <p>Maxime Chirez, frontend developer</p>`
    // TODO: Vérifier la version EN, et surtout la version ES!!!!!
    default:
      return `
              <p>Hello ${messageDatas.name},</p>
              <p>I received your message and I will answer you as soon as possible.</p>
              <p style="padding-top: 1em; font-size: 1.15em; font-weight:500;">Message details</p>
              <ul style="padding: 0;list-style: none;">
                <li><em>From</em>: ${messageDatas.name}</li>
                <li><em>Object</em>: ${messageDatas.object}</li>
                <li><em>Email</em>: ${messageDatas.email}</li>
                <li><em>Message</em>: 
                <br>
                <p style="background-color: hsl(0, 0%, 95%); padding: 1em 1.5em; border-radius: 8px; margin-top: 0.75em;">${messageHTML}</p>
                <br> 
                </li>
              </ul>
              <p>Maxime Chirez, frontend developer</p>`
  }
}

const buildObject = (lang: LanguageAvailable | null) => {
  switch (lang) {
    case 'fr':
      return 'Confirmation de réception'

    case 'en':
      return 'Reception confirmation'
    case 'es':
      return 'Confirmacion de recepcion'

    default:
      return 'Reception confirmation'
  }
}
export { buildEmail, buildObject }
//TODO: ameliorer le mail envoyé
