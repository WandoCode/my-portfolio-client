import { LanguageAvailable } from '../../constant/language/language'
import { FormFieldsName } from '../../constant/types/contactForm'

const buildEmail = (
  lang: LanguageAvailable | null,
  messageDatas: Record<FormFieldsName, string>
) => {
  const messageHTML = messageDatas.message.split('\n').join('\n<br>\n')

  switch (lang) {
    case 'fr':
      return `<h1>Confirmation de réception</h1>
              <p>Bonjour ${messageDatas.name},</p>
              <p>J'ai bien reçu votre message et vous répondrez dés que possible.</p>
              <h2>Détails du message:</h2>
              <ul>
                <li><em>De</em>: ${messageDatas.name}</li>
                <li><em>Objet</em>: ${messageDatas.object}</li>
                <li><em>Email</em>: ${messageDatas.email}</li>
                <li><em>Message</em>: 
                <br>
                <div style="background-color: hsl(0, 0%, 90%); padding: 3rem;">${messageHTML}</div>
                 <br> 
                 </li>
              </ul>
              <p>Maxime Chirez, développeur frontend </p>`
    case 'es':
      return `<h1>Confirmacion de recepcion</h1>
              <p>Hola ${messageDatas.name},</p>
              <p>Le confirmo la reception de su mensaje, le contestaré cuanto antes.</p>
              <h2>Detalles del mensaje:</h2>
              <ul>
                <li><em>De</em>: ${messageDatas.name}</li>
                <li><em>Objeto</em>: ${messageDatas.object}</li>
                <li><em>Correo</em>: ${messageDatas.email}</li>
                <li><em>Mensaje</em>: 
                <br>
                <div style="background-color: hsl(0, 0%, 90%); padding: 3rem;">${messageHTML}</div>
                 <br> 
                 </li>
              </ul>
              <p>Maxime Chirez, frontend programdor (????) </p>`
    case 'en':
      return `<h1>Reception confirmation</h1>
              <p>Hello ${messageDatas.name},</p>
              <p>I received your message and I will answer you as soon as possible.</p>
              <h2>Message details:</h2>
              <ul>
                <li><em>From</em>: ${messageDatas.name}</li>
                <li><em>Object</em>: ${messageDatas.object}</li>
                <li><em>Email</em>: ${messageDatas.email}</li>
                <li><em>Message</em>: 
                <br>
                <div style="background-color: hsl(0, 0%, 90%); padding: 3rem;">${messageHTML}</div>
                 <br> 
                 </li>
              </ul>
              <p>Maxime Chirez, frontend developer</p>`
    // TODO: Vérifier la version EN, et surtout la version ES!!!!!
    default:
      return `<h1>Reception confirmation</h1>
              <p>Hello ${messageDatas.name},</p>
              <p>You email has been send and I will answer as soon as possible.</p>
              <h2>Message details:</h2>
              <ul>
                <li>From: ${messageDatas.name}</li>
                <li>Object: ${messageDatas.object}</li>
                <li>Email: ${messageDatas.email}</li>
                <li><em>Message</em>: 
                <br>
                <div style="background-color: hsl(0, 0%, 90%); padding: 3rem;">${messageHTML}</div>
                 <br> 
                 </li>
              </ul>
              <p>Maxime Chirez, frontend developer</p>`
  }
}

const buildObject = (lang: LanguageAvailable | null) => {
  switch (lang) {
    case 'fr':
      return 'Votre message a bien été envoyé!'

    case 'en':
      return 'Your message has been send successfully!'
    case 'es':
      return 'Su mensaje ha sido enviado con exito!'

    default:
      return 'Your message has been send successfully!'
  }
}
export { buildEmail, buildObject }
//TODO: ameliorer le mail envoyé
