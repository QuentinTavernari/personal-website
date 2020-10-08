// == Import npm
import React from 'react';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import Tada from 'react-reveal/Tada';

// == Import
import Header from '../Header';
import ConsoleEffect from '../CssEffects/ConsoleEffect';
import Footer from '../Footer';
import './styles.scss';

// == Composant
const Homepage = () => (
  <div className="app">
    <Header />
    <div className="homepage">
      <div className="homepage-introduction">
        <Tada><h2 className="homepage-title">Bienvenue !</h2></Tada>
        <Fade left><p className="homepage-content">Je m'appelle Quentin, j'ai 28 ans et je suis à la recherche d'un emploi en tant que développeur front-end.</p></Fade>
        <Zoom><p className="homepage-content">J'ai réalisé ce site pour mettre à disposition un aperçu de mon cv et de mes compétences, et pour y entreposer quelques tests persos.</p></Zoom>
        <Fade right><p className="homepage-content"> Si vous êtes intéressé(e) par mon profil, vous pouvez m'envoyer un mail via la rubrique "me contacter".</p></Fade>
      </div>
      <ConsoleEffect />
    </div>
    <Footer />
  </div>
);

// == Export
export default Homepage;
