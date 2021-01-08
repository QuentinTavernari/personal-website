// == Import npm
import React from 'react';
import Pulse from 'react-reveal/Pulse';
import Jump from 'react-reveal/Jump';
import arrow from '../../img/arrow.png';

// == Import
import './styles.scss';

// == Composant
const Introduction = () => (
  <div className="container-fluid" id="home">
    <div className="homepage">
      <div className="homepage-introduction">
        <Jump><h2 className="homepage-title">Bienvenue !</h2></Jump>
        <Pulse left><p className="homepage-content">Je m'appelle Quentin, j'ai 28 ans et je suis à la recherche d'un emploi en tant que key account manager en remote.</p></Pulse>
        <Pulse><p className="homepage-content">J'ai réalisé ce site pour mettre à disposition un aperçu de mon cv et de mes compétences.</p></Pulse>
        <Pulse right><p className="homepage-content"> Si vous êtes intéressé(e) par mon profil, vous pouvez m'envoyer un mail via la rubrique "me contacter".</p></Pulse>
      </div>
      <div className="wrap">
        <img alt="scroll arrow" src={arrow} id="arrow" className="animated bounce" />
      </div>
    </div>
  </div>
);

// == Export
export default Introduction;
