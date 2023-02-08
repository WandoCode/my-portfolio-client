import FormContact from './FormContact'
import mockedMainDatas from '../../../__mock__/data/mainDatas.json'

interface Props {
  contactDatas: typeof mockedMainDatas.contact
}

function Contact({ contactDatas }: Props) {
  return (
    <section
      className="contact flow container fc-neutral-700 fw-semibold"
      id="contact"
    >
      <h2 className="h2 heading-section">Me contacter</h2>

      <FormContact contactDatas={contactDatas} />
    </section>
  )
}

export default Contact
