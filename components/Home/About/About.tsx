import Image from 'next/image'
import aboutImg from '../../../public/assets/aboutImg.png'

function About() {
  return (
    <section className="about flow-bottom" id="about">
      <div className="container">
        <h2 className="h2 heading-section about__title fc-neutral-300">
          Qui suis-je?
        </h2>
        <div className="about__body">
          <div className="about__text fc-neutral-300">
            <p>
              Lorem ipsum dolor sit amet consectetur. Tincidunt non euismod
              tristique ut vitae fermentum enim. Massa nibh nec volutpat etiam
              consequat sit enim et tincidunt. Et mauris eu cras amet
              ullamcorper gravida ultrices amet. Purus vehicula lorem justo
              aliquam tellus praesent magna.
            </p>
            <p>
              Pulvinar viverra imperdiet nulla sit cras ultricies. Ut nunc nulla
              quis aliquam blandit cras urna nibh vitae. Urna eu mus ac
              dignissim nunc ornare elit nisl nibh. Leo ac posuere viverra
              fermentum iaculis congue vitae. Nisl vitae at donec pellentesque
              urna ridiculus diam sit nisl. Fermentum vitae netus purus congue
              neque facilisi sit. Facilisis donec vel in curabitur posuere et.
            </p>
          </div>
          <div className="about__img-container">
            <Image src={aboutImg} height={380} width={380} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
