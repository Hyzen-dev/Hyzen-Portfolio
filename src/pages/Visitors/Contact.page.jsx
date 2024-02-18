import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toastNotification, updateToastNotification } from '../../Router';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet';

export default function Contact(props) {
  const { setIsNavOpen } = props;
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    setIsNavOpen(false);
  }, [setIsNavOpen]);


  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    const nameRegex = /^[a-zA-Z]+$/;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const frPhoneRegex = /^(0|\+33)[1-9]([-. ]?[0-9]{2}){4}$/;
    const subjectRegex = /^[a-zA-Z0-9\s]+$/;

    setErrors([]);
    const errors = [];

    if (!nameRegex.test(data.lastName)) {
      errors.push('lastName');
    }

    if (!nameRegex.test(data.firstName)) {
      errors.push('firstName');
    }

    if (!emailRegex.test(data.email)) {
      errors.push('email');
    }

    if (data.phone && !frPhoneRegex.test(data.phone)) {
      errors.push('phone');
    }

    if (!subjectRegex.test(data.subject)) {
      errors.push('subject');
    }

    if (data.message.length < 10) {
      errors.push('message');
    }

    if (errors.length > 0) {
      setErrors(errors);
      return;
    }

    const toastId = toastNotification('loading', 'Veuillez patienter...');

    if (nameRegex.test(data.lastName) && nameRegex.test(data.firstName) && emailRegex.test(data.email) && (data.phone ? frPhoneRegex.test(data.phone) : true) && subjectRegex.test(data.subject) && data.message.length >= 10 && errors.length === 0) {
      // alert('Votre demande a bien été envoyée (en théorie, puisque le site est encore en développement)');
      try {

        const response = await axios.post('https://api.hyzen.fr:3031/api/contact', data);

        if (response.status === 201) {
          updateToastNotification(toastId, 'success', 'Votre demande a bien été envoyée.');

          return form.reset();
        } else {
          return updateToastNotification(toastId, 'error', 'Une erreur est survenue, veuillez réessayer plus tard.');
        }
      } catch (error) {
        return updateToastNotification(toastId, 'error', 'Une erreur est survenue, veuillez réessayer plus tard.');
      }
    } else {
      return updateToastNotification(toastId, 'error', 'Une erreur est survenue, veuillez vérifier les informations saisies.');
    }

  }

  return (
    <>
      <Helmet>
        <title>Hyzen | Contact</title>
        <meta name="description"
          content="Hyzen - Votre partenaire pour des sites web et applications mobiles de qualité. Nous créons des designs innovants et des expériences conviviales pour votre présence en ligne. Découvrez nos réalisations et contactez-nous pour vos projets numériques." />
        <meta name="keywords"
          content="Hyzen, conception de sites web, applications mobiles, développement web, design d'interface, projets numériques" />

        <meta property="og:title" content="Hyzen | Contact" />
        <meta property="og:description"
          content="Hyzen - Votre partenaire pour des sites web et applications mobiles de qualité. Nous créons des designs innovants et des expériences conviviales pour votre présence en ligne. Découvrez nos réalisations et contactez-nous pour vos projets numériques." />
        <meta property="og:url" content="https://hyzen.fr/" />
      </Helmet>
      <main className='page__content'>
        <div className="contact">
          <form onSubmit={(event) => handleSubmit(event)} className="form">
            <div className="form__row">
              <div className="form__group">
                <label className="form__label" htmlFor="lastName">Nom *</label>
                <input className={`form__input ${errors.includes('lastName') && 'form__input--error'}`} type="text" name="lastName" id="lastName" placeholder="Entrez votre nom..." />
                {errors.includes('lastName') && <p className="form__error">Le nom est invalide</p>}
              </div>
              <div className="form__group">
                <label className="form__label" htmlFor="firstName">Prénom *</label>
                <input className={`form__input ${errors.includes('firstName') && 'form__input--error'}`} type="text" name="firstName" id="firstName" placeholder="Entrez votre prénom..." />
                {errors.includes('firstName') && <p className="form__error">Le prénom est invalide</p>}
              </div>
            </div>
            <div className="form__row">
              <div className="form__group">
                <label className="form__label" htmlFor="email">Adresse e-mail *</label>
                <input className={`form__input ${errors.includes('email') && 'form__input--error'}`} type="email" name="email" id="email" placeholder="Entrez votre adresse e-mail..." />
                {errors.includes('email') && <p className="form__error">L'adresse e-mail est invalide</p>}
              </div>
              <div className="form__group">
                <label className="form__label" htmlFor="phone">Téléphone</label>
                <input className={`form__input ${errors.includes('phone') && 'form__input--error'}`} type="tel" name="phone" id="phone" placeholder="Entrez votre numéro de téléphone..." />
                {errors.includes('phone') && <p className="form__error">Le numéro de téléphone est invalide</p>}
              </div>
            </div>
            <div className="form__group">
              <label className="form__label" htmlFor="subject">Sujet *</label>
              <input className={`form__input ${errors.includes('subject') && 'form__input--error'}`} type="text" name="subject" id="subject" placeholder="Entrez le sujet de votre demande..." />
              {errors.includes('subject') && <p className="form__error">Le sujet est invalide</p>}
            </div>
            <div className="form__group">
              <label className="form__label" htmlFor="message">Message *</label>
              <textarea className={`form__input ${errors.includes('message') && 'form__input--error'}`} name="message" id="message" placeholder="Entrez le contenu de votre demande..."></textarea>
              {errors.includes('message') && <p className="form__error">Le message est invalide</p>}
            </div>
            <button type="submit" className="form__submit">Envoyer</button>
          </form>
        </div>
      </main>
    </>
  )
}
