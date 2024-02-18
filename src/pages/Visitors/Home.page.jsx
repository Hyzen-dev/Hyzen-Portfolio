import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet';

export default function Home(props) {
  const { setIsNavOpen } = props;

  useEffect(() => {
    setIsNavOpen(false);
  }, [setIsNavOpen]);

  return (
    <>
      <Helmet>
        <title>Hyzen | Accueil</title>
        <meta name="description"
          content="Hyzen - Votre partenaire pour des sites web et applications mobiles de qualité. Nous créons des designs innovants et des expériences conviviales pour votre présence en ligne. Découvrez nos réalisations et contactez-nous pour vos projets numériques." />
        <meta name="keywords"
          content="Hyzen, conception de sites web, applications mobiles, développement web, design d'interface, projets numériques" />

        <meta property="og:title" content="Hyzen | Accueil" />
        <meta property="og:description"
          content="Hyzen - Votre partenaire pour des sites web et applications mobiles de qualité. Nous créons des designs innovants et des expériences conviviales pour votre présence en ligne. Découvrez nos réalisations et contactez-nous pour vos projets numériques." />
        <meta property="og:url" content="https://hyzen.fr/" />
      </Helmet>
      <main className='page__content'>
        <div className="home">
          <h1 className='home__title'>Hyzen</h1>
          <h2 className="home__subtitle">Conception de sites web et d'applications mobiles</h2>
        </div>
      </main>
    </>
  )
}
