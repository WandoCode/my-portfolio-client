function Project() {
  return (
    <article className="project">
      <div className="project__img-container">
        <img
          src="https://placeholder.pics/svg/380"
          alt=""
          className="project__img"
        />
      </div>
      <div className="project__content">
        <h3 className="h3">Audiophile</h3>
        <p className="project__decription">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores
          corrupti laborum voluptas at quibusdam iste, esse excepturi.
        </p>
        <h4 className="h4">Compétences</h4>
        <ul className="project__skills-wrapper">
          <li className="skill">React</li>
          <li className="skill">React Context</li>
        </ul>
        <h4 className="h4">Fonctionnalités</h4>
        <ul className="project__features-wrapper">
          <li className="feature">Custom toast</li>
          <li className="feature">CMS Strapi etc.</li>
        </ul>
      </div>
    </article>
  )
}

export default Project
