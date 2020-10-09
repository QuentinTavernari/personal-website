// == Import npm
import React from 'react';
import Pulse from 'react-reveal/Pulse';
import Jump from 'react-reveal/Jump';

// == Import
import './styles.scss';

// == Composant
const Introduction = () => (
  <div className="container-fluid" id="home">
    <div className="homepage">
      <div className="homepage-introduction">
        <Jump><h2 className="homepage-title">Bienvenue !</h2></Jump>
        <Pulse left><p className="homepage-content">Je m'appelle Quentin, j'ai 28 ans et je suis à la recherche d'un emploi en tant que développeur front-end.</p></Pulse>
        <Pulse><p className="homepage-content">J'ai réalisé ce site pour mettre à disposition un aperçu de mon cv et de mes compétences, et pour y entreposer quelques tests persos.</p></Pulse>
        <Pulse right><p className="homepage-content"> Si vous êtes intéressé(e) par mon profil, vous pouvez m'envoyer un mail via la rubrique "me contacter".</p></Pulse>
        <Jump><span>Bonne visite</span></Jump>
      </div>
    </div>
  </div>
);

// == Export
export default Introduction;
