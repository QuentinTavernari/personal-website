// == Import npm
import React from 'react';

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
        <h2>Bienvenue !</h2>
        <p>Je m'appelle Quentin, j'ai 28 ans et je suis à la recherche d'un emploi en tant que développeur front-end.</p>
        <p>J'ai réalisé ce site pour mettre à disposition un aperçu de mon cv et de mes compétences, et pour y entreposer quelques tests persos.</p>
        <p> Si vous êtes intéressé(e) par mon profil, vous pouvez m'envoyer un mail via la rubrique "me contacter".</p>
      </div>
      <ConsoleEffect />
    </div>
    <Footer />
  </div>
);

// == Export
export default Homepage;
