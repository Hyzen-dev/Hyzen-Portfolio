import React, { useEffect, useState } from 'react'
import ServiceCard from '../../components/Cards/ServiceCard.component'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import parse from 'html-react-parser';
import servicesData from '../../data/services.json';
import Modal from '../../components/Modal.component';
import { Helmet } from 'react-helmet';

export default function Services(props) {
  const { setIsNavOpen } = props;

  const [currentService, setCurrentService] = useState(null);

  useEffect(() => {
    setIsNavOpen(false);
  }, [setIsNavOpen]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    rows: 2,

    // Change autoplay delay
    autoplaySpeed: 5000,
    // If user hover the slider, autoplay will stop
    pauseOnHover: true,

    autoplay: true,
    adaptiveWidth: true,
    // rows: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
          rows: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          rows: 1,
        }
      }
    ],
  };

  return (
    <>
      <Helmet>
        <title>Hyzen | Services</title>
        <meta name="description"
          content="Hyzen - Votre partenaire pour des sites web et applications mobiles de qualité. Nous créons des designs innovants et des expériences conviviales pour votre présence en ligne. Découvrez nos réalisations et contactez-nous pour vos projets numériques." />
        <meta name="keywords"
          content="Hyzen, conception de sites web, applications mobiles, développement web, design d'interface, projets numériques" />

        <meta property="og:title" content="Hyzen | Services" />
        <meta property="og:description"
          content="Hyzen - Votre partenaire pour des sites web et applications mobiles de qualité. Nous créons des designs innovants et des expériences conviviales pour votre présence en ligne. Découvrez nos réalisations et contactez-nous pour vos projets numériques." />
        <meta property="og:url" content="https://hyzen.fr/" />
      </Helmet>
      <div className="page__content">
        <Slider {...settings}>
          {
            servicesData.map((service, index) => (
              <ServiceCard key={index} title={service.title} description={service.description} icon={service.icon} content={service.content} setCurrentService={setCurrentService} />
            ))
          }
        </Slider>
        <Modal showModal={currentService}>
          {currentService &&
            <article className='service-modal'>
              <header className="service-modal__header">
                <i className={`service-modal__icon fas ${currentService.icon || "fa-question"}`}></i>
                <h3 className="service-modal__title">{currentService.title || "Titre indisponible"}</h3>
                <button onClick={() => { setCurrentService(null); }} className="service-modal__close"><i className="fas fa-times"></i></button>
              </header>
              {parse(currentService.content || "<p>Contenu indisponible</p>")}
            </article>
          }
        </Modal>
      </div>
    </>
  )
}
