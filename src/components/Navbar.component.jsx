import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar(props) {
    const { setIsNavOpen, isNavOpen } = props;

    return (
        <nav className='navbar'>
            <button className='navbar__toggle' onClick={() => setIsNavOpen(!isNavOpen)}>
                <i className={`fas ${isNavOpen ? "fa-xmark" : "fa-bars"}`}></i>
            </button>
            <div className={`navbar__links ${isNavOpen && 'navbar__links__active'}`}>
                <NavLink className={'navbar__link'} to={'/'}>Accueil</NavLink>
                <NavLink className={'navbar__link'} to={'/services'}>Services</NavLink>
                <NavLink className={'navbar__link'} to={'/projects'}>Réalisations</NavLink>
                <NavLink className={'navbar__link'} to={'/contact'}>Contact</NavLink>
            </div>
        </nav>
    )
}
