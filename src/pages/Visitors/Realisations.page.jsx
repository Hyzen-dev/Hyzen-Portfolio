import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import ProjectCard from '../../components/Cards/ProjectCard.component';
import { projectsData } from '../../data/projects';
import Modal from '../../components/Modal.component';
import { Helmet } from 'react-helmet';

export default function Realisations(props) {
  const { setIsNavOpen } = props;
  const [currentProject, setCurrentProject] = useState(null);

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
        <title>Hyzen | Réalisations</title>
        <meta name="description"
          content="Hyzen - Votre partenaire pour des sites web et applications mobiles de qualité. Nous créons des designs innovants et des expériences conviviales pour votre présence en ligne. Découvrez nos réalisations et contactez-nous pour vos projets numériques." />
        <meta name="keywords"
          content="Hyzen, conception de sites web, applications mobiles, développement web, design d'interface, projets numériques" />
        <meta property="og:title" content="Hyzen | Réalisations" />
        <meta property="og:description"
          content="Hyzen - Votre partenaire pour des sites web et applications mobiles de qualité. Nous créons des designs innovants et des expériences conviviales pour votre présence en ligne. Découvrez nos réalisations et contactez-nous pour vos projets numériques." />
        <meta property="og:url" content="https://hyzen.fr/" />
      </Helmet>
      <div className="page__content">
        <Slider {...settings}>
          {
            projectsData.map((project, index) => (
              <ProjectCard key={index} title={project.title} projectImage={project.projectImage} projectImages={project.projectImages} setCurrentProject={setCurrentProject} />
            ))
          }
        </Slider>
        <Modal showModal={currentProject}>
          {currentProject &&
            <article className='project-modal'>
              <header className="project-modal__header">
                <img src={currentProject.projectImage} className="project-modal__logo" alt={`Logo de ${currentProject.title}`} />
                <h3 className="project-modal__title">{currentProject.title || "Titre indisponible"}</h3>
                <button onClick={() => setCurrentProject(null)} className="project-modal__close"><i className="fas fa-times"></i></button>
              </header>
              <Slider
                dots={true}
                infinite={true}
                speed={1000}
                slidesToShow={2}
                rows={1}
                autoplaySpeed={3000}
                pauseOnHover={true}
                autoplay={false}
                responsive={
                  [
                    {
                      breakpoint: 1023,
                      settings: {
                        slidesToShow: 2,
                        rows: 1,
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
                  ]       
                }
              >
                {
                  currentProject.projectImages.map((image, index) => (
                    <img key={index} className="project-modal__image" src={image} alt="Project" />
                  ))
                }
              </Slider>
            </article>
          }
        </Modal>
      </div>
    </>
  )
}
