import React from 'react'

export default function ServiceCard(props) {
  const { title, description, content, icon, setCurrentService } = props;
  
  return (
    <article className='service-card'>
      <header className="service-card__header">
        <i className={`service-card__icon fas ${icon}`}></i>
        <h3 className="service-card__title">{title}</h3>
      </header>

      <p className="service-card__description">{description}</p>
      <footer className="service-card__footer">
        <button onClick={() => setCurrentService({ title, description, content, icon })} className="service-card__show">En savoir d'avantage</button>
      </footer>
    </article>

  )
}
