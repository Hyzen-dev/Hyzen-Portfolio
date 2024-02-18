import React from 'react'

export default function Footer() {
  return (
    <footer className='footer'>
      <div className="footer__socials">
        {/* LinkedIn */}
        <a className='footer__social' href='https://fr.linkedin.com/in/bastien-flanquart-1075b4200' aria-label='Lien vers le LinkedIn' target='_blank' rel='noreferrer'><i className="fab fa-linkedin"></i></a>

        {/* Instagram */}
        {/* <a className='footer__social' href='#'><i className="fab fa-instagram"></i></a> */}

        {/* Github */}
        <a className='footer__social' href='https://github.com/AwiZy63' aria-label='Lien vers le Github' target='_blank' rel='noreferrer'><i className="fab fa-github"></i></a>
      </div>
      <p className="footer__copyrights">Tous droits réservés &copy; Hyzen - {new Date().getFullYear()}</p>
    </footer>
  )
}
