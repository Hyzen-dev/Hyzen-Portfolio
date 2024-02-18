import React from 'react'

export default function ProjectCard(props) {
  const { title, projectImage, projectImages, setCurrentProject } = props;
  return (
    <article className='project-card'>
      <header className="project-card__header">
        <h3 className="project-card__title">{title}</h3>
      </header>

      <img src={projectImage} className="project-card__logo" alt={`Logo de ${title}`} />
      <footer className="project-card__footer">
        <button onClick={() => setCurrentProject({ title, projectImage, projectImages })} className="project-card__show">Consulter les rendus</button>
      </footer>
    </article>
  )
}
